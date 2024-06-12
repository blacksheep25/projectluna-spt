"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function CompileCoreData(profile_id) {
    console.log(`[RAID-REVIEW] Starting - Compiling core data into '.json' format.`);
    const target_files = ["core"];
    const files = [];
    for (let i = 0; i < target_files.length; i++) {
        const target_file = target_files[i];
        const file_data = fs_1.default.readFileSync(`${__dirname}/../../../data/${profile_id}/core/${target_file}.csv`, "utf-8");
        console.log(`[RAID-REVIEW] Found file '${target_file}.csv' adding data to be processed.`);
        files.push({
            datapoint: target_file,
            data: file_data,
        });
    }
    let core_data = {
        raids: []
    };
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const [keys_str, ...data_str] = file.data.split("\n");
        const keys = keys_str.split(",");
        const rows = data_str
            .filter((row) => row !== "")
            .map((row) => row.split(","));
        if (file.datapoint === "core") {
            let raids = [];
            for (let j = 0; j < rows.length; j++) {
                const row = rows[j];
                let newRaid = {};
                for (let k = 0; k < keys.length; k++) {
                    const key = keys[k].trim();
                    newRaid[key] = row[k].trim();
                }
                newRaid.timeInRaid = Number(newRaid.timeInRaid);
                if (newRaid.timeInRaid > 0) {
                    raids.push(newRaid);
                }
            }
            core_data.raids = raids.reverse();
        }
    }
    console.log(`[RAID-REVIEW] Finished - Compiling core data into '.json' format.`);
    fs_1.default.writeFileSync(`${__dirname}/../../../data/${profile_id}/core/core.json`, JSON.stringify(core_data, null, 2), "utf-8");
    console.log(`[RAID-REVIEW] Saved file  'core.json' to folder '<mod_folder>/data/${profile_id}/core/core.json'.`);
}
exports.default = CompileCoreData;
//# sourceMappingURL=CompileCoreData.js.map