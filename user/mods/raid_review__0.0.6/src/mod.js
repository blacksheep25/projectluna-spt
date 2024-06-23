"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSessiondata = exports.setProfileId = exports.setSessionId = exports.profile_id = exports.session_id = void 0;
const ws_1 = require("C:/snapshot/project/node_modules/ws");
const node_cron_1 = __importDefault(require("node-cron"));
const config_json_1 = __importDefault(require("../config.json"));
const Express_1 = __importDefault(require("./Web/Server/Express"));
const sqlite_1 = require("./Database/sqlite");
const utils_1 = require("./Utils/utils");
const constant_1 = require("./Utils/constant");
const DataSaver_1 = require("./Controllers/FileSystem/DataSaver");
const PositionsMigration_1 = require("./Controllers/PositionalData/PositionsMigration");
const CheckForMissingMainPlayer_1 = require("./Controllers/DataIntegrity/CheckForMissingMainPlayer");
const NoOneLeftBehind_1 = require("./Controllers/DataIntegrity/NoOneLeftBehind");
const TheGarbageCollector_1 = require("./Controllers/DataIntegrity/TheGarbageCollector");
const RaidStatistics_1 = require("./Controllers/Telemetry/RaidStatistics");
const CompileRaidPositionalData_1 = __importDefault(require("./Controllers/PositionalData/CompileRaidPositionalData"));
exports.session_id = null;
exports.profile_id = null;
function setSessionId(sessionId) {
    exports.session_id = sessionId;
    return;
}
exports.setSessionId = setSessionId;
function setProfileId(profileId) {
    exports.profile_id = profileId;
    return;
}
exports.setProfileId = setProfileId;
function getSessiondata() {
    return { session_id: exports.session_id, profile_id: exports.profile_id };
}
exports.getSessiondata = getSessiondata;
class Mod {
    wss;
    logger;
    raid_id;
    raids_to_process;
    notificationLimiter;
    post_process;
    saveServer;
    mailSendService;
    database;
    constructor() {
        this.wss = null;
        this.raid_id = "";
        this.raids_to_process = [];
        this.database = null;
        this.post_process = true;
        this.notificationLimiter = constant_1.NOTIFICATION_LIMITER_DEFAULT;
    }
    preAkiLoad(container) {
        const staticRouterModService = container.resolve("StaticRouterModService");
        staticRouterModService.registerStaticRouter("EnablePostProcess", [
            {
                url: "/client/hideout/areas",
                action: (url, info, sessionId, output) => {
                    if (!this.raid_id && !this.post_process) {
                        console.log(`[RAID-REVIEW] Enabling Post Processing`);
                        this.post_process = true;
                    }
                    return output;
                },
            }
        ], "aki");
        staticRouterModService.registerStaticRouter("GetPlayerInfo", [
            {
                url: "/client/game/start",
                action: (url, info, sessionId, output) => {
                    setSessionId(sessionId);
                    const profileHelper = container.resolve("ProfileHelper");
                    const profile = profileHelper.getFullProfile(sessionId);
                    setProfileId(profile.info.id);
                    console.log(`[RAID-REVIEW] PROFILE_ID: ${profile.info.id}`);
                    console.log(`[RAID-REVIEW] PROFILE_NICKNAME: ${profile.info.username}`);
                    return output;
                },
            }
        ], "aki");
    }
    async postAkiLoad(container) {
        this.database = await (0, sqlite_1.database)();
        console.log(`[RAID-REVIEW] Database Connected`);
        // Data Position Migration
        // @ekky @ 2024-06-18: Added this for the move from v0.0.3 to v0.0.4
        await (0, PositionsMigration_1.MigratePositionsStructure)(this.database);
        // Missing Player Fix
        // @ekky @ 2024-06-19: Added this to help fix this 'Issue # 25'
        const profileHelper = container.resolve("ProfileHelper");
        const profiles = profileHelper.getProfiles();
        await (0, CheckForMissingMainPlayer_1.CheckForMissingMainPlayer)(this.database, profiles);
        // Storage Saving Helpers
        await (0, TheGarbageCollector_1.GarbageCollectOldRaids)(this.database);
        await (0, TheGarbageCollector_1.GarbageCollectUnfinishedRaids)(this.database);
        if (config_json_1.default.autoDeleteCronJob) {
            node_cron_1.default.schedule('0 */1 * * *', async () => {
                await (0, TheGarbageCollector_1.GarbageCollectOldRaids)(this.database);
                await (0, TheGarbageCollector_1.GarbageCollectUnfinishedRaids)(this.database);
            });
        }
        // Automatic Processor
        const post_raid_processing = node_cron_1.default.schedule('*/1 * * * *', async () => {
            if (this.raids_to_process.length > 0) {
                for (let i = 0; i < this.raids_to_process.length; i++) {
                    const raidIdToProcess = this.raids_to_process[i];
                    let positional_data = (0, CompileRaidPositionalData_1.default)(raidIdToProcess);
                    let telemetryEnabled = config_json_1.default.telemetry;
                    if (telemetryEnabled) {
                        console.log(`[RAID-REVIEW] Telemetry is enabled.`);
                        await (0, RaidStatistics_1.sendStatistics)(this.database, exports.profile_id, raidIdToProcess, positional_data);
                    }
                    else {
                        console.log(`[RAID-REVIEW] Telemetry is disabled.`);
                    }
                    this.raids_to_process = [];
                }
            }
        }, { scheduled: false });
        post_raid_processing.start();
        this.saveServer = container.resolve("SaveServer");
        console.log(`[RAID-REVIEW] SPT Server Connected.`);
        this.wss = new ws_1.WebSocketServer({
            port: config_json_1.default.web_socket_port || 7828,
            perMessageDeflate: {
                zlibDeflateOptions: {
                    chunkSize: 1024,
                    memLevel: 7,
                    level: 3,
                },
                zlibInflateOptions: {
                    chunkSize: 10 * 1024,
                },
                clientNoContextTakeover: true,
                serverNoContextTakeover: true,
                serverMaxWindowBits: 10,
                concurrencyLimit: 10,
                threshold: 1024,
            },
        });
        this.wss.on("connection", async (ws) => {
            ws.on("error", async (error) => {
                console.log(`[RAID-REVIEW] Websocket Error.`);
                console.log(`[RAID-REVIEW:ERROR]`, error);
            });
            ws.on("message", async (str) => {
                try {
                    if (str.includes('WS_CONNECTED')) {
                        console.log(`[RAID-REVIEW] Web Socket Client Connected`);
                        return;
                    }
                    let data = JSON.parse(str);
                    let filename = '';
                    if (data && data.Action && data.Payload) {
                        const payload_object = JSON.parse(data.Payload);
                        if (this.raid_id) {
                            payload_object.raid_id = this.raid_id;
                        }
                        if (!payload_object.profileId) {
                            payload_object.profileId = exports.profile_id;
                        }
                        const { keys, values } = (0, utils_1.ExtractKeysAndValues)(payload_object);
                        switch (data.Action) {
                            case "START":
                                post_raid_processing.stop();
                                console.log(`[RAID-REVIEW] Disabled Post Processing`);
                                this.raid_id = payload_object.id;
                                console.log(`[RAID-REVIEW] RAID IS SET: ${this.raid_id}`);
                                const start_raid_sql = `INSERT INTO raid (raidId, profileId, location, time, timeInRaid, exitName, exitStatus, detectedMods) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
                                this.database.run(start_raid_sql, [
                                    this.raid_id,
                                    exports.profile_id || payload_object.profileId,
                                    payload_object.location,
                                    payload_object.time,
                                    payload_object.timeInRaid,
                                    payload_object.exitName || '',
                                    payload_object.exitStatus || -1,
                                    payload_object.detectedMods || '',
                                ]);
                                console.log(`[RAID-REVIEW] Recieved 'Recording Start' trigger.`);
                                this.notificationLimiter.raid_start = true;
                                ws.send("RECORDING_START");
                                break;
                            case "END":
                                this.raid_id = payload_object.id;
                                console.log(`[RAID-REVIEW] RAID IS SET: ${this.raid_id}`);
                                const end_raid_sql = `INSERT INTO raid (raidId, profileId, location, time, timeInRaid, exitName, exitStatus, detectedMods) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
                                this.database
                                    .run(end_raid_sql, [
                                    this.raid_id,
                                    exports.profile_id || payload_object.profileId,
                                    payload_object.location,
                                    payload_object.time,
                                    payload_object.timeInRaid,
                                    payload_object.exitName || '',
                                    payload_object.exitStatus || -1,
                                    payload_object.detectedMods || '',
                                ])
                                    .catch((e) => console.error(e));
                                this.raids_to_process.push(this.raid_id);
                                this.raid_id = "";
                                console.log(`[RAID-REVIEW] Clearing Raid Id`);
                                post_raid_processing.start();
                                console.log(`[RAID-REVIEW] Enabled Post Processing`);
                                break;
                            case "PLAYER_CHECK":
                                await (0, NoOneLeftBehind_1.NoOneLeftBehind)(this.database, this.raid_id, payload_object);
                                break;
                            case "PLAYER":
                                const playerExists_sql = `SELECT * FROM player WHERE raidId = ? AND profileId = ?`;
                                const playerExists = await this.database
                                    .all(playerExists_sql, [
                                    this.raid_id,
                                    payload_object.profileId
                                ])
                                    .catch((e) => console.error(e));
                                // Stops duplicates, it's hacky, but it's working...
                                if (playerExists && playerExists.length) {
                                    return;
                                }
                                const player_sql = `INSERT INTO player (raidId, profileId, level, team, name, "group", spawnTime, mod_SAIN_brain, type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
                                this.database
                                    .run(player_sql, [
                                    this.raid_id,
                                    payload_object.profileId,
                                    payload_object.level,
                                    payload_object.team,
                                    payload_object.name,
                                    payload_object.group,
                                    payload_object.spawnTime,
                                    payload_object.mod_SAIN_brain,
                                    payload_object.type
                                ])
                                    .catch((e) => console.error(e));
                                break;
                            case "KILL":
                                const kill_sql = `INSERT INTO kills (raidId, time, profileId, killedId, weapon, distance, bodyPart, positionKiller, positionKilled) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
                                this.database
                                    .run(kill_sql, [
                                    this.raid_id,
                                    payload_object.time,
                                    payload_object.profileId,
                                    payload_object.killedId,
                                    payload_object.weapon,
                                    payload_object.distance,
                                    payload_object.bodyPart,
                                    payload_object.positionKiller,
                                    payload_object.positionKilled
                                ])
                                    .catch((e) => console.error(e));
                                break;
                            case "POSITION":
                                if (this.raid_id) {
                                    filename = `${this.raid_id}_positions`;
                                    (0, DataSaver_1.WriteLineToFile)('positions', '', '', filename, keys, values);
                                }
                                break;
                            case "LOOT":
                                const loot_sql = `INSERT INTO looting (raidId, profileId, time, qty, itemId, itemName, added) VALUES (?, ?, ?, ?, ?, ?, ?)`;
                                this.database
                                    .run(loot_sql, [
                                    this.raid_id,
                                    payload_object.profileId,
                                    payload_object.time,
                                    payload_object.qty,
                                    payload_object.itemId,
                                    payload_object.itemName,
                                    payload_object.added,
                                ])
                                    .catch((e) => console.error(e));
                                break;
                            default:
                                break;
                        }
                    }
                }
                catch (error) {
                    console.log(`[RAID-REVIEW] Message recieved was not valid JSON Object, something broke.`);
                    console.log(`[RAID-REVIEW:ERROR]`, error);
                    console.log(`[RAID-REVIEW:DUMP]`, str);
                }
            });
        });
        console.log(`[RAID-REVIEW] Websocket Server Listening on 'ws://127.0.0.1:7828'.`);
        (0, Express_1.default)(this.saveServer, this.database);
    }
}
module.exports = { mod: new Mod() };
//# sourceMappingURL=mod.js.map