"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const lodash_1 = __importDefault(require("lodash"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_basic_auth_1 = __importDefault(require("express-basic-auth"));
const config_json_1 = __importDefault(require("../../../config.json"));
const DataSaver_1 = require("../../Controllers/FileSystem/DataSaver");
const CompileRaidPositionalData_1 = __importDefault(require("../../Controllers/PositionalData/CompileRaidPositionalData"));
const utils_1 = require("../../Utils/utils");
const GetRaidData_1 = require("../../Controllers/Collection/GetRaidData");
const RaidStatistics_1 = require("../../Controllers/Telemetry/RaidStatistics");
const app = (0, express_1.default)();
const port = config_json_1.default.web_client_port || 7829;
function isUserAdmin(req, res, next) {
    if (config_json_1.default.basic_auth && req.auth) {
        console.log(`[RAID-REVIEW] Confirming if '${req.auth.user}' is an admin`);
        const isAdmin = config_json_1.default.admin[req.auth.user];
        if (isAdmin) {
            console.log(`[RAID-REVIEW] '${req.auth.user}' is an admin.`);
            return next();
        }
        res.status(401).json({ status: 'ERROR', message: 'You are not authorised.' });
    }
    return next();
}
function StartWebServer(saveServer, db) {
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use((0, cookie_parser_1.default)());
    // Basic Auth has been implemented for people who host Fika remotely.
    // It's not the greatest level of protection, but I cannot be arsed to implement oAuth for sucha niche use case.
    if (config_json_1.default.basic_auth) {
        app.use((0, express_basic_auth_1.default)({
            users: config_json_1.default.users,
            challenge: true
        }));
        // Cookie Setter, currently used for the following:
        // - is_auth_configured : used to determine if 'is_admin' should even be considered to toggle visbility.
        // - is_admin : used to show/hide buttons that should only be visible to admins if 'Basic Auth' is enabled.
        app.use((req, res, next) => {
            // is_auth_configured
            if (config_json_1.default.basic_auth) {
                var is_auth_configured = req.cookies.is_auth_configured;
                if (is_auth_configured === undefined) {
                    res.cookie('is_auth_configured', 'true', { maxAge: 900000 });
                }
            }
            else {
                var is_auth_configured = req.cookies.is_auth_configured;
                if (is_auth_configured === undefined) {
                    res.cookie('is_auth_configured', 'false', { maxAge: 900000 });
                }
            }
            // is_admin
            if (config_json_1.default.basic_auth && req.cookies && config_json_1.default.admin[req.auth.user]) {
                var is_admin_cookie = req.cookies.is_admin_cookie;
                if (is_admin_cookie === undefined) {
                    res.cookie('is_admin_cookie', 'true', { maxAge: 900000 });
                }
            }
            return next();
        });
    }
    const publicFolder = path_1.default.join(__dirname, "/public/");
    app.use(express_1.default.static(publicFolder));
    app.get("/", (req, res) => {
        return res.sendFile(path_1.default.join(__dirname, "/public/index.html"));
    });
    app.get("/api/server/settings", isUserAdmin, async (req, res) => {
        try {
            const sqlSettingsQuery = `SELECT * FROM setting ORDER BY id ASC`;
            const data = await db.all(sqlSettingsQuery).catch((e) => console.error(e));
            const settings = lodash_1.default.groupBy(data, 'key');
            res.json(settings);
        }
        catch (error) {
            res.json(null);
        }
    });
    app.put("/api/server/settings", isUserAdmin, async (req, res) => {
        try {
            const settingsToUpdate = req.body();
            // Could improve this into a single query...
            for (let i = 0; i < settingsToUpdate.length; i++) {
                const setting = settingsToUpdate[i];
                const sqlSettingsQuery = `UPDATE setting * SET value = ? WHERE key = ?`;
                const sqlSettingsValues = [setting.key, setting.value];
                await db.all(sqlSettingsQuery, sqlSettingsValues).catch((e) => console.error(e));
            }
            // I'm not too worried about performance, I just need it to work right now...
            const sqlSettingsQuery = `SELECT * FROM setting ORDER BY id ASC`;
            const data = await db.all(sqlSettingsQuery).catch((e) => console.error(e));
            const settings = lodash_1.default.groupBy(data, 'key');
            res.json(settings);
        }
        catch (error) {
            res.json(null);
        }
    });
    app.get("/api/server/deleteAllData", isUserAdmin, async (req, res) => {
        try {
            // Burn it all
            const keys = ["raid", "kills", "looting", "player"];
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                const sqlKeyQuery = `DELETE FROM ${key}`;
                await db.all(sqlKeyQuery).catch((e) => console.error(e));
                (0, fs_1.rmSync)(`${__dirname}/../../../data/positions`, { force: true, recursive: true });
                (0, fs_1.mkdirSync)(`${__dirname}/../../../data/positions`);
            }
            res.json(true);
        }
        catch (error) {
            res.json(true);
        }
    });
    app.get("/api/profile/all", (req, res) => {
        let profiles = saveServer.getProfiles();
        for (const profile_k in profiles) {
            let profile = profiles[profile_k];
            if (typeof profile?.characters?.pmc?.Info?.Side !== "string") {
                console.log(`[RAID-REVIEW] It appears that profile id '${profile_k}' is using an old data structure not compatible with RAID-REVIEW.`);
                delete profiles[profile_k];
            }
        }
        return res.json(profiles);
    });
    app.get("/api/profile/:profileId", (req, res) => {
        const profiles = saveServer.getProfiles();
        return res.json(profiles[req.params.profileId]);
    });
    app.get("/api/profile/:profileId/raids/all", async (req, res) => {
        let { profileId } = req.params;
        const sqlRaidQuery = `SELECT * FROM raid WHERE profileId = '${profileId}' AND timeInRaid > 10 ORDER BY id DESC`;
        const data = await db
            .all(sqlRaidQuery)
            .catch((e) => console.error(e));
        res.json(data);
    });
    app.post("/api/profile/:profileId/raids/deleteAllData", isUserAdmin, async (req, res) => {
        const deletedRaids = [];
        try {
            let { raidIds } = req.body;
            for (let i = 0; i < raidIds.length; i++) {
                const raidId = raidIds[i];
                const keys = ["raid", "kills", "looting", "player"];
                for (let i = 0; i < keys.length; i++) {
                    const key = keys[i];
                    const sqlKeyQuery = `DELETE FROM ${key} WHERE raidId = ?`;
                    const sqlKeyValues = [raidId];
                    await db
                        .all(sqlKeyQuery, sqlKeyValues)
                        .catch((e) => console.error(e));
                }
                (0, DataSaver_1.DeleteFile)("positions", "", "", `${raidId}_positions`);
                (0, DataSaver_1.DeleteFile)("positions", "", "", `${raidId}_V2_positions.json`);
                deletedRaids.push(raidId);
            }
            res.json(deletedRaids);
        }
        catch (error) {
            console.log(error);
            res.json(deletedRaids);
        }
    });
    app.post("/api/profile/:profileId/raids/deleteTempFiles", isUserAdmin, async (req, res) => {
        const deletedTempFiles = [];
        try {
            let { raidIds } = req.body;
            for (let i = 0; i < raidIds.length; i++) {
                const raidId = raidIds[i];
                console.log(`[RAID-REVIEW] Deleting temp files for Raid Id: '${raidId}'.`);
                (0, DataSaver_1.DeleteFile)("positions", "", "", `${raidId}_positions`);
                deletedTempFiles.push(raidId);
            }
            res.json(deletedTempFiles);
        }
        catch (error) {
            console.log(error);
            res.json(deletedTempFiles);
        }
    });
    app.get("/api/profile/:profileId/raids/:raidId", async (req, res) => {
        try {
            let { profileId, raidId } = req.params;
            const raid = await (0, GetRaidData_1.getRaidData)(db, profileId, raidId);
            if (raid.positionsTracked === "RAW") {
                let positional_data = (0, CompileRaidPositionalData_1.default)(raidId);
                let telemetryEnabled = config_json_1.default.telemetry;
                if (telemetryEnabled) {
                    console.log(`[RAID-REVIEW] Telemetry is enabled.`);
                    await (0, RaidStatistics_1.sendStatistics)(db, profileId, raidId, positional_data);
                }
                else {
                    console.log(`[RAID-REVIEW] Telemetry is disabled.`);
                }
                raid.positionsTracked = "COMPILED";
            }
            return res.json(raid);
        }
        catch (error) {
            console.log(error);
            return res.json(null);
        }
    });
    app.get("/api/profile/:profileId/raids/:raidId/tempFiles", async (req, res) => {
        let { raidId } = req.params;
        const tempFiles = (0, DataSaver_1.ReadFile)("positions", "", "", `${raidId}_positions`);
        if (tempFiles) {
            return res.json(true);
        }
        return res.json(false);
    });
    app.get("/api/profile/:profileId/raids/:raidId/positions", async (req, res) => {
        let { raidId } = req.params;
        const positionalDataRaw = (0, DataSaver_1.ReadFile)("positions", "", "", `${raidId}_V2_positions.json`);
        if (positionalDataRaw) {
            let positionalData = JSON.parse(positionalDataRaw);
            positionalData = (0, utils_1.generateInterpolatedFramesBezier)(positionalData, 5, 24);
            return res.json(positionalData);
        }
        return [];
    });
    app.get("/api/profile/:profileId/raids/:raidId/positions/compile", async (req, res) => {
        let { raidId } = req.params;
        (0, CompileRaidPositionalData_1.default)(raidId);
        res.json({ message: "OK" });
    });
    app.get("*", (req, res) => {
        return res.sendFile(path_1.default.join(__dirname, "/public/index.html"));
    });
    app.listen(port, () => {
        return console.log(`[RAID-REVIEW] Web Server is running at 'http://127.0.0.1:${port}'.`);
    });
}
exports.default = StartWebServer;
//# sourceMappingURL=Express.js.map