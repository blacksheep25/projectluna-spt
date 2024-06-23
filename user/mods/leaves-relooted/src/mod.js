"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConfigTypes_1 = require("C:/snapshot/project/obj/models/enums/ConfigTypes");
const LogTextColor_1 = require("C:/snapshot/project/obj/models/spt/logging/LogTextColor");
const jsonc_1 = require("C:/snapshot/project/node_modules/jsonc");
const path = __importStar(require("path"));
class ReLooted {
    logger;
    db;
    cfgServer;
    locConfig;
    lootConfig;
    //Config
    config;
    vfs;
    shorelineKeycardsJson = require("../assets/shorelineKeycards.json");
    streetsbloodykey = require("../assets/streetsbloodykey.json");
    postDBLoad(container) {
        this.vfs = container.resolve("VFS");
        const configFile = path.resolve(__dirname, "../config/config.jsonc");
        this.config = jsonc_1.jsonc.parse(this.vfs.readFile(configFile));
        // Get stuff from the server container.
        this.logger = container.resolve("WinstonLogger");
        // Get database from server.
        this.db = container.resolve("DatabaseServer");
        this.cfgServer = container.resolve("ConfigServer");
        this.locConfig = this.cfgServer.getConfig(ConfigTypes_1.ConfigTypes.LOCATION);
        this.lootConfig = this.cfgServer.getConfig(ConfigTypes_1.ConfigTypes.LOOT);
        const mapNames = [
            "bigmap",
            "factory4_day",
            "factory4_night",
            "interchange",
            "laboratory",
            "lighthouse",
            "rezervbase",
            "woods"
        ];
        let locations = this.db.getTables().locations;
        this.printColor("[ReLooted] Starting! Greetings from Leaves!", LogTextColor_1.LogTextColor.GREEN);
        this.printColor("[ReLooted] FYI: This mod should be loaded as early as possible to maximize compatibility.", LogTextColor_1.LogTextColor.CYAN);
        if (this.config.unfuckGivingTreeKeycardSpawns) {
            this.printColor("[ReLooted]\t Fixing Giving Tree Keyspawn chances", LogTextColor_1.LogTextColor.YELLOW);
            for (let point of this.lootConfig.looseLoot["bigmap"]) {
                if (point.template.Id == "Loot 19 (9)3856272" || point.template.Id == "Loot 19 (8)3860542") {
                    point.probability = this.config.givingTreeKeySpawnChance;
                }
            }
        }
        for (let map of mapNames) {
            this.printColor("[ReLooted]\t loading data for: " + map, LogTextColor_1.LogTextColor.YELLOW);
            const newData = require("../assets/" + map);
            this.printColor("[ReLooted]\t Injecting new data for " + map, LogTextColor_1.LogTextColor.YELLOW);
            locations[map].looseLoot.spawnpoints = newData.spawnpoints;
            if (this.config.changeSpawnPointCount) {
                locations[map].looseLoot.spawnpointCount = newData.spawnpointCount;
            }
        }
        if (this.config.shorelineKeycards) {
            this.lootConfig.looseLoot["shoreline"] = this.shorelineKeycardsJson.shoreline;
            this.printColor("[ReLooted]\t Injecting keycard spawns to shoreline", LogTextColor_1.LogTextColor.YELLOW);
        }
        if (this.config.setLootMultipliersToOne) {
            this.printColor("[ReLooted]\t Setting looseLootMultiplier for all locations to 1.", LogTextColor_1.LogTextColor.YELLOW);
            this.printColor("[ReLooted]\t Keep in mind that mods like SVM might override this. ", LogTextColor_1.LogTextColor.YELLOW);
            for (let multi in this.locConfig.looseLootMultiplier) {
                this.locConfig.looseLootMultiplier[multi] = 1;
            }
        }
        if (this.config.streetsbloodykey) {
            this.printColor("[ReLooted]\t Injecting new bloody key loot", LogTextColor_1.LogTextColor.YELLOW);
            for (const point of this.streetsbloodykey) {
                point.probability *= this.config.streetsbloodykeyProbabilityMultiplier;
                locations["tarkovstreets"].looseLoot.spawnpoints.push(point);
            }
        }
    }
    debugJsonOutput(jsonObject, label = "") {
        if (label.length > 0) {
            this.logger.logWithColor("[" + label + "]", LogTextColor_1.LogTextColor.GREEN);
        }
        this.logger.logWithColor(JSON.stringify(jsonObject, null, 4), LogTextColor_1.LogTextColor.MAGENTA);
    }
    printColor(message, color = LogTextColor_1.LogTextColor.GREEN) {
        this.logger.logWithColor(message, color);
    }
}
module.exports = { mod: new ReLooted() };
//# sourceMappingURL=mod.js.map