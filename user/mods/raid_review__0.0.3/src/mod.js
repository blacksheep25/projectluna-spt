"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSessiondata = exports.setProfileId = exports.setSessionId = exports.profile_id = exports.session_id = void 0;
const ws_1 = require("C:/snapshot/project/node_modules/ws");
const Express_1 = __importDefault(require("./Web/Server/Express"));
const utils_1 = require("./Utils/utils");
const DataSaver_1 = require("./Controllers/Collection/DataSaver");
const sqlite_1 = require("./Controllers/Database/sqlite");
const CompileRaidPositionalData_1 = __importDefault(require("./Controllers/Collection/CompileRaidPositionalData"));
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
    post_process;
    saveServer;
    mailSendService;
    database;
    constructor() {
        this.wss = null;
        this.raid_id = "";
        this.database = null;
        this.post_process = true;
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
        this.saveServer = container.resolve("SaveServer");
        this.mailSendService = container.resolve("MailSendService");
        console.log(`[RAID-REVIEW] SPT-AKI Server Connected`);
        this.wss = new ws_1.WebSocketServer({
            port: 7828,
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
                                this.post_process = false;
                                console.log(`[RAID-REVIEW] Disabling Post Processing`);
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
                                (0, CompileRaidPositionalData_1.default)(this.raid_id);
                                this.raid_id = "";
                                console.log(`[RAID-REVIEW] Clearing Raid Id`);
                                this.post_process = true;
                                console.log(`[RAID-REVIEW] Enabling Post Processing`);
                                break;
                            case "PLAYER":
                                const player_sql = `INSERT INTO player (raidId, profileId, level, team, name, "group", spawnTime) VALUES (?, ?, ?, ?, ?, ?, ?)`;
                                this.database
                                    .run(player_sql, [
                                    this.raid_id,
                                    payload_object.profileId,
                                    payload_object.level,
                                    payload_object.team,
                                    payload_object.name,
                                    payload_object.group,
                                    payload_object.spawnTime,
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
                                filename = `${this.raid_id}_positions`;
                                (0, DataSaver_1.WriteLineToFile)('positions', '', '', filename, keys, values);
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