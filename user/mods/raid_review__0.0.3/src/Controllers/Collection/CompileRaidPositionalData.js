"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const lodash_1 = __importDefault(require("lodash"));
function CompileRaidPositionalData(raid_guid) {
    console.log(`[RAID-REVIEW] Starting - Compiling positional data for '${raid_guid}' into '.json' format.`);
    const file_suffixes = ['positions'];
    const files = [];
    for (let i = 0; i < file_suffixes.length; i++) {
        const file_suffix = file_suffixes[i];
        const fileExists = fs_1.default.existsSync(`${__dirname}/../../../data/positions/${raid_guid}_positions`);
        if (fileExists) {
            const file_data = fs_1.default.readFileSync(`${__dirname}/../../../data/positions/${raid_guid}_positions`, 'utf-8');
            files.push({
                datapoint: file_suffix,
                data: file_data
            });
        }
        ;
    }
    let positional_data = [];
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const [keys_str, ...data_str] = file.data.split('\n');
        const keys = keys_str.replace('\n', '').split(',');
        const rows = data_str.filter((row) => row !== '').map(row => row.split(','));
        if (file.datapoint === 'positions') {
            let allPositions = [];
            for (let j = 0; j < rows.length; j++) {
                const row = rows[j];
                let position = {};
                for (let k = 0; k < keys.length; k++) {
                    const key = keys[k];
                    position[key] = row[k];
                    if (['time', 'x', 'y', 'z', 'dir'].includes(key)) {
                        position[key] = Number(row[k]);
                    }
                }
                allPositions.push(position);
            }
            let groupedByPlayerId = lodash_1.default.chain(allPositions).orderBy('time', 'asc').groupBy('profileId').value();
            Object.keys(groupedByPlayerId).forEach(key => {
                positional_data.push(groupedByPlayerId[key]);
            });
        }
    }
    console.log(`[RAID-REVIEW] Finished - Compiling positional data for '${raid_guid}' into '.json' format.`);
    fs_1.default.writeFileSync(`${__dirname}/../../../data/positions/${raid_guid}_positions.json`, JSON.stringify(positional_data), 'utf-8');
    console.log(`[RAID-REVIEW] Saved file  '${raid_guid}_data.json' to folder '<mod_folder>/data/positions'.`);
}
;
exports.default = CompileRaidPositionalData;
//# sourceMappingURL=CompileRaidPositionalData.js.map