"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoOneLeftBehind = void 0;
;
async function NoOneLeftBehind(db, raidId, players) {
    console.log(`[RAID-REVIEW] Validating that all players/bots are accounted for.`);
    // Filter out the ones already there
    let playersMissingFromRaid = 0;
    let playersInserted = 0;
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        const checkQuery = `SELECT 1 FROM player WHERE raidId = ? OR profileId = ? LIMIT 1`;
        const playerExists = await db.get(checkQuery, [raidId, player.profileId]);
        if (playerExists === undefined) {
            playersMissingFromRaid++;
            const player_sql = `INSERT INTO player (raidId, profileId, level, team, name, "group", spawnTime, mod_SAIN_brain, type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
            db.run(player_sql, [
                raidId,
                player.profileId,
                player.level,
                player.team,
                player.name,
                player.group,
                player.spawnTime,
                player.mod_SAIN_brain,
                player.type
            ])
                .catch((e) => console.error(e));
            playersInserted++;
        }
    }
    console.log(`[RAID-REVIEW] There was a total of '${playersMissingFromRaid}' and '${playersInserted}' escorted back to the database.`);
    console.log(`[RAID-REVIEW] Validated that all players/bots are accounted for.`);
    return;
}
exports.NoOneLeftBehind = NoOneLeftBehind;
//# sourceMappingURL=NoOneLeftBehind.js.map