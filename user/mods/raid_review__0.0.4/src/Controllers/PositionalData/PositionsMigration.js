"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigratePositionsStructure = void 0;
const fs_1 = __importDefault(require("fs"));
const FileReader_1 = require("../FileSystem/FileReader");
const CompileRaidPositionalData_1 = __importDefault(require("./CompileRaidPositionalData"));
/**
 * Implemented this function as I changed the data structure from a
 * 2d Array positional_data[][] to an Object/Dictonary { [key:string] : positional_data[] }
 * needed to do this to stop issues from occuring with
 * @returns {void}
 */
async function MigratePositionsStructure(db) {
    const sqlSettingsQuery = `SELECT * FROM setting WHERE key = 'v1_to_v2_migration__completed'`;
    const data = await db.all(sqlSettingsQuery).catch((e) => console.error(e));
    if (data === null) {
        console.log(`[RAID-REVIEW] Migration failed: v1 to v2 positional data structure, missing settings entry.`);
        return;
    }
    const [v1_to_v2_migration__completed] = data;
    if (v1_to_v2_migration__completed.key === 'v1_to_v2_migration__completed' && v1_to_v2_migration__completed.value === '0') {
        console.log(`[RAID-REVIEW] Starting positional data structure migration from 'V1' to 'V2'.`);
        /** Directory: /user/mods/<mod>/positions */
        const files = (0, FileReader_1.ReadFolderContents)('positions', '', '', true);
        console.log(`[RAID-REVIEW]     Found a total of '${files.length}' to process.`);
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            // v1 files are structured: <raid-id>_positions.json
            // v2 files are structured: <raid-id>_v2_positions.json
            const isV1 = file.match(/([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}_positions.json)/gi);
            if (isV1) {
                fs_1.default.rmSync(file);
                continue;
            }
            // '<raid-id>_positions.json' to '<raid-id>'
            let splitPath = file.split('/');
            const raidId = splitPath[splitPath.length - 1].split('_')[0]; // system filepath -> filename -> raid_id
            const isGuid = raidId.match(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/gi);
            if (isGuid) {
                (0, CompileRaidPositionalData_1.default)(raidId);
                continue;
            }
        }
        // Update the database to mark the migration as having been completed
        const sqlSettingsQuery = `UPDATE setting SET value = ? WHERE key = ?`;
        const sqlSettingsValues = ['1', 'v1_to_v2_migration__completed'];
        await db.all(sqlSettingsQuery, sqlSettingsValues).catch((e) => console.error(e));
    }
}
exports.MigratePositionsStructure = MigratePositionsStructure;
//# sourceMappingURL=PositionsMigration.js.map