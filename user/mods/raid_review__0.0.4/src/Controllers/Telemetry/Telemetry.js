"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTelemetryEnabled = void 0;
async function isTelemetryEnabled(db) {
    try {
        const sqlSettingsQuery = `SELECT * FROM setting WHERE key = 'telemetry_enabled'`;
        const data = await db.all(sqlSettingsQuery).catch((e) => console.error(e));
        let result = data[0];
        if (result.value === '1') {
            return true;
        }
        return false;
    }
    catch (e) {
        console.log(`[RAID-REVIEW] There was an issue checking if Telemetry is enabled.`);
        return false;
    }
}
exports.isTelemetryEnabled = isTelemetryEnabled;
//# sourceMappingURL=Telemetry.js.map