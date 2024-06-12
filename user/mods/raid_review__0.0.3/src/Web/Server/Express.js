"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 7829;
const mod_1 = require("../../mod");
const DataSaver_1 = require("../../Controllers/Collection/DataSaver");
const CompileRaidPositionalData_1 = __importDefault(require("../../Controllers/Collection/CompileRaidPositionalData"));
const utils_1 = require("../../Utils/utils");
function StartWebServer(saveServer, db) {
    app.use((0, cors_1.default)());
    const publicFolder = path_1.default.join(__dirname, '/public/');
    app.use(express_1.default.static(publicFolder));
    app.get('/', (req, res) => {
        return res.sendFile(path_1.default.join(__dirname, '/public/index.html'));
    });
    app.get('/api/profile/active', (req, res) => {
        let { session_id, profile_id } = (0, mod_1.getSessiondata)();
        if (!session_id && !profile_id)
            return res.json({ profileId: null, sessionId: session_id });
        return res.json({ profileId: profile_id, sessionId: session_id });
    });
    app.get('/api/profile/all', (req, res) => {
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
    app.get('/api/profile/:profileId', (req, res) => {
        const profiles = saveServer.getProfiles();
        return res.json(profiles[req.params.profileId]);
    });
    app.get('/api/profile/:profileId/raids/all', async (req, res) => {
        let { profileId } = req.params;
        const sqlRaidQuery = `SELECT * FROM raid WHERE profileId = ? AND timeInRaid > 10 ORDER BY id DESC`;
        const sqlRaidValues = [profileId];
        const data = await db.all(sqlRaidQuery, sqlRaidValues).catch((e) => console.error(e));
        res.json(data);
    });
    app.get('/api/profile/:profileId/raids/:raidId', async (req, res) => {
        let { profileId, raidId } = req.params;
        // Need to fix this; N+1 Problem
        const sqlRaidQuery = `SELECT * FROM raid WHERE profileId = ? AND timeInRaid > 10 AND raidId = ?`;
        const sqlRaidValues = [profileId, raidId];
        const raid = await db.get(sqlRaidQuery, sqlRaidValues).catch((e) => console.error(e));
        const keys = ["kills", "looting", "player"];
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const sqlKeyQuery = `SELECT * FROM ${key} WHERE raidId = ?`;
            const sqlKeyValues = [raidId];
            raid[key] = await db.all(sqlKeyQuery, sqlKeyValues).catch((e) => console.error(e));
        }
        // Positions check
        raid.positionsTracked = (0, DataSaver_1.FileExists)('positions', '', '', `${raidId}_positions.json`);
        // Quick Fix
        raid.players = raid.player;
        delete raid.player;
        res.json(raid);
    });
    app.get('/api/profile/:profileId/raids/:raidId/positions', async (req, res) => {
        let { raidId } = req.params;
        const positionalDataRaw = (0, DataSaver_1.ReadFile)('positions', '', '', `${raidId}_positions.json`);
        if (positionalDataRaw) {
            const positionalData = JSON.parse(positionalDataRaw);
            for (let i = 0; i < positionalData.length; i++) {
                let playerPositions = positionalData[i];
                positionalData[i] = (0, utils_1.generateInterpolatedFramesBezier)(playerPositions, 5, 24);
            }
            return res.json(positionalData);
        }
        return [];
    });
    app.get('/api/profile/:profileId/raids/:raidId/positions/compile', async (req, res) => {
        let { raidId } = req.params;
        (0, CompileRaidPositionalData_1.default)(raidId);
        res.json({ message: "OK" });
    });
    app.get('*', (req, res) => {
        return res.sendFile(path_1.default.join(__dirname, '/public/index.html'));
    });
    app.listen(port, () => {
        return console.log(`[RAID-REVIEW] Web Server is running at 'http://127.0.0.1:${port}'`);
    });
}
exports.default = StartWebServer;
//# sourceMappingURL=Express.js.map