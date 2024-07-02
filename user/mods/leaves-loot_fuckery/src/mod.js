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
const jsonc_1 = require("C:/snapshot/project/node_modules/jsonc");
const path = __importStar(require("node:path"));
const LogTextColor_1 = require("C:/snapshot/project/obj/models/spt/logging/LogTextColor");
class LootFuckery {
    logger;
    jsonUtil;
    timeUtil;
    vfs;
    outputFolder;
    //For the actual run hook.
    actualRun = false;
    actualRunData;
    db;
    locationControl;
    //Config
    config;
    lootConfig;
    postDBLoad(container) {
        // Get stuff from the server container.
        this.logger = container.resolve("WinstonLogger");
        this.jsonUtil = container.resolve("JsonUtil");
        this.timeUtil = container.resolve("TimeUtil");
        // Get database from server.
        this.db = container.resolve("DatabaseServer");
        // get output directory for generated files
        // "Leaves-LootFuckery" is the directory name of the mod
        const preAkiModLoader = container.resolve("PreAkiModLoader");
        this.outputFolder = `${preAkiModLoader.getModPath("leaves-loot_fuckery")}output/`;
        this.locationControl = container.resolve("LocationController");
    }
    preAkiLoad(container) {
        const logger = container.resolve("WinstonLogger");
        const onLoadModService = container.resolve("OnLoadModService");
        this.vfs = container.resolve("VFS");
        const configFile = path.resolve(__dirname, "../config/config.jsonc");
        this.config = jsonc_1.jsonc.parse(this.vfs.readFile(configFile));
        const lootFile = path.resolve(__dirname, "../config/loot.jsonc");
        this.lootConfig = jsonc_1.jsonc.parse(this.vfs.readFile(lootFile));
        // run mod logic _after_ all mods have resolved
        onLoadModService.registerOnLoad(
        //No idea what this all means. I blame chomp.
        "LootFuckery-mod", // route key
        () => this.OnLoad(logger), () => "LootFuckery" // new route name
        );
        if (this.config.dataDumpRealRuns) {
            container.afterResolution("LocationController", (_t, result) => {
                // We want to replace the original method logic with something different
                result.get = (sessionId, request) => {
                    return this.overrideGet(sessionId, request);
                };
                // The modifier Always makes sure this replacement method is ALWAYS replaced
            }, { frequency: "Always" });
        }
    }
    overrideGet(sessionId, request, calledByMod = false) {
        //Original code 
        this.logger.debug(`Generating data for: ${request.locationId}, variant: ${request.variantId}`);
        const name = request.locationId.toLowerCase().replace(" ", "");
        this.actualRunData = this.locationControl.generate(name);
        if (!calledByMod) {
            this.actualRun = true;
            //Do stuff
            this.generateMap(`${name}_actual_run`);
            this.actualRun = false;
        }
        return this.actualRunData;
    }
    //leaves edition lmao. Hackiest shit on the planet. 
    // dict: ["string"]: { "total": number, "max": number }
    sortDataByValue(dict) {
        /* conversion from dict to jagged arrays with invariance
           dict: ["string"]: { "total": number, "max": number }
           arr:  [ ["string", { "total": number, "max": number }], ... ]
        */
        const items = [];
        for (const key in dict) {
            const item = dict[key];
            items.push([key, item]);
        }
        // Sort the array based on the second element
        items.sort((first, second) => {
            return second[1].total - first[1].total;
        });
        //The sort and arrayify leaves the data stored in an array of arrays. Each sub-array is 2 elements long, the first element is the ID string. 
        //the second element is an object with two data points. total, and max
        const fixed = {};
        for (const item of items) {
            // item[0] is ID
            //      item[1].max
            //      item[1].total 
            const data = { total: item[1].total, max: item[1].max };
            fixed[item[0]] = data;
        }
        return fixed;
    }
    writeResult(prefix, data, extension = ".json") {
        // get formatted text to save
        const text = (this.config.convertToCompact)
            ? this.jsonToText(data)
            : this.jsonUtil.serialize(data, true);
        // get file name
        const date = this.timeUtil.getDate();
        const time = this.timeUtil.getTime();
        const fileName = `${this.outputFolder + prefix}_${date}_${time}${extension}`;
        // save file
        this.vfs.writeFile(fileName, text);
        this.logger.info(`Written results to: ${fileName}`);
    }
    OnLoad(logger) {
        this.printColor("[LootFuckery] LootFuckery Starting:");
        if (!this.db) {
            this.logger.error("db not initialized. ??");
            return;
        }
        if (this.config.editProbabilities) {
            this.editProbabilities();
        }
        if (this.config.dataDump) {
            if (this.config.runAllMaps) {
                const locationNames = this.getLocationNames();
                for (const locationName of locationNames) {
                    this.generateMap(locationName);
                }
            }
            else {
                this.generateMap(this.config.mapToGenerate);
            }
        }
    }
    generateLoot(map) {
        const accountID = "DOESN'T MATTER IN 3.8.3";
        const request = {
            crc: 0,
            locationId: map,
            variantId: 1
        };
        //return this.locationControl.get( accountID, request );
        return this.overrideGet(accountID, request, true);
    }
    getProbability(item, map) {
        const itemTable = this.db.getTables().templates.items;
        const globalCategories = this.lootConfig.globalCategories;
        const globalItems = this.lootConfig.globalItems.items;
        const mapCategories = this.lootConfig.mapSpecific[map].categories;
        const mapItems = this.lootConfig.mapSpecific[map].items;
        const parent = itemTable[item]._parent;
        //Check if it has a map specific item entry.
        if (mapItems[item]) {
            return mapItems[item].multi;
        }
        //Check if we have a global item entry.
        if (globalItems[item]) {
            return globalItems[item].multi;
        }
        //Check if we have a map specific category entry
        if (mapCategories[parent]) {
            return mapCategories[parent].multi;
        }
        //Check if we have a global category
        if (globalCategories[parent]) {
            return globalCategories[parent].multi;
        }
        //oh fuck
        this.printColor(`[LootFuckery] Found item without matching parent: ${item} - Parent: ${itemTable[parent]._name} -ID: ${parent}`, LogTextColor_1.LogTextColor.RED);
        return 0;
    }
    adjustPoint(point, map) {
        const itemTable = this.db.getTables().templates.items;
        const items = point.template.Items;
        let relativeID = 0;
        let runningMulti = 0;
        const globalCategories = this.lootConfig.globalCategories;
        for (const item in point.template.Items) {
            //If an entry has a parent, it's not the top node in the entry. So we skip it.
            if (items[item].parentId) {
                continue;
            }
            const multi = this.getProbability(items[item]._tpl, map);
            runningMulti += multi;
            const probability = Math.ceil(point.itemDistribution[relativeID].relativeProbability * 100 * multi);
            point.itemDistribution[relativeID].relativeProbability = probability;
            relativeID++;
        }
        //Get the total average multiplier. maxxed at 0.99, because at 1 it will get forced spawned and not count for max loot spawns. Go figure.
        const avgMulti = runningMulti / relativeID;
        point.probability *= avgMulti;
        if (point.probability >= 1) {
            point.probability = 0.99;
        }
    }
    categorize(lootTable) {
        const categoryTable = {};
        const tables = this.db.getTables();
        const locale = tables.locales.global[this.config.localization];
        const items = tables.templates.items;
        if (!locale) {
            this.printColor(`[LootFuckery]: Localization: \"${this.config.localization}\" does not exist! Exiting!`, LogTextColor_1.LogTextColor.RED);
            return;
        }
        for (const item in lootTable) {
            if (items[item]._parent) {
                if (!categoryTable[items[item]._parent]) {
                    categoryTable[items[item]._parent] = [];
                }
                let temp = {};
                if (this.config.convertToName) {
                    const name = this.config.localizeNames
                        ? locale[`${item} Name`]
                        : items[item]._name;
                    temp[name] = lootTable[item];
                }
                else {
                    temp[item] = lootTable[item];
                }
                categoryTable[items[item]._parent].push(temp);
            }
        }
        return categoryTable;
    }
    generateRuns(mapToGenerate) {
        const lootTable = {};
        let currentRun = {};
        for (let i = 0; i < this.config.timesToGenerate; i++) {
            currentRun = {};
            const generatedLoot = this.actualRun ?
                this.actualRunData :
                this.generateLoot(mapToGenerate);
            this.printColor(`[LootFuckery] \tCurrent Generation Count: ${i + 1}`, LogTextColor_1.LogTextColor.MAGENTA);
            for (const point of generatedLoot.Loot) {
                if (point.IsContainer) {
                    continue;
                }
                const templateID = point.Items[0]._tpl;
                if (!currentRun[templateID]) {
                    currentRun[templateID] = 0;
                }
                currentRun[templateID]++;
            }
            this.AddTableValues(lootTable, currentRun);
            if (this.actualRun) {
                return lootTable;
            }
        }
        return lootTable;
    }
    // a: ["string"]: { "total": number, "max": number }
    // b: ["string"]: number
    // note: we're modifying a directly (pass by reference)
    AddTableValues(a, b) {
        const keys = Object.keys(b);
        for (const key of keys) {
            if (!a[key]) {
                // key doesn't exist, so let's make a new entry that uses B's values
                a[key] = {
                    total: b[key],
                    max: b[key]
                };
            }
            else {
                // add b to total
                a[key].total += b[key];
                // set max to b if max is smaller than b
                if (a[key].max < b[key]) {
                    a[key].max = b[key];
                }
            }
        }
    }
    generateMap(mapToGenerate) {
        if (this.actualRun) {
            this.printColor("[LootFuckery] Dumping Run", LogTextColor_1.LogTextColor.YELLOW);
        }
        else {
            this.printColor("[LootFuckery] Generating Run(s)", LogTextColor_1.LogTextColor.YELLOW);
        }
        const tables = this.db.getTables();
        const items = tables.templates.items;
        let lootTable = this.generateRuns(mapToGenerate);
        //Sort the output
        lootTable = this.sortDataByValue(lootTable);
        if (this.config.categorize) {
            lootTable = this.categorize(lootTable);
        }
        if (this.config.convertToName) {
            const prettyTable = {};
            for (const item in lootTable) {
                const name = items[item]._name;
                prettyTable[name] = lootTable[item];
            }
            lootTable = prettyTable;
        }
        this.writeResult(`loot_${mapToGenerate}_-`, lootTable);
    }
    editProbabilities() {
        const tables = this.db.getTables();
        const locationNames = this.getLocationNames();
        this.printColor("[LootFuckery] Editing Loot Probabilities\n-----------------------", LogTextColor_1.LogTextColor.CYAN);
        for (const locationName of locationNames) {
            this.printColor(`[LootFuckery] Adjusting: ${locationName}`, LogTextColor_1.LogTextColor.YELLOW);
            const location = tables.locations[locationName];
            location.looseLoot.spawnpointCount.mean *= this.lootConfig.mapSpecific[locationName].totalLootMultiplier;
            const spawnPoints = location.looseLoot.spawnpoints;
            for (const point of spawnPoints) {
                this.adjustPoint(point, locationName);
            }
        }
    }
    getLocationNames() {
        const locationNames = [];
        const locations = this.db.getTables().locations;
        for (const locationName in locations) {
            const location = locations[locationName];
            if (location.looseLoot !== undefined) {
                locationNames.push(location.base.Id.toLowerCase());
            }
        }
        return locationNames;
    }
    getItemFormatted(id, value) {
        const total = value.total;
        const avg = value.total / this.config.timesToGenerate;
        const max = value.max;
        if (this.actualRun) {
            return `\"${id}\": Total:${total}`;
        }
        return `\"${id}\": Avg:${avg} | Max:${max}`;
    }
    jsonToText(json) {
        const space = ' ';
        const nl = '\n';
        const tab1 = space + space + space + space;
        const tab2 = tab1 + tab1;
        let text = "";
        for (const ID in json) {
            if (this.config.categorize) {
                // ID: category
                // json[ID]: an array of { itemID: value }
                text += `${tab1}[${ID}]${nl}`;
                for (const entry of json[ID]) {
                    const itemID = Object.keys(entry)[0];
                    const entryText = this.getItemFormatted(itemID, entry[itemID]);
                    text += tab2 + entryText + nl;
                }
            }
            else {
                // ID: itemid
                // json[ID]: value
                text += this.getItemFormatted(ID, json[ID]) + nl;
            }
        }
        return text;
    }
    debugJsonOutput(jsonObject, label = "") {
        //if ( this.config.debug )
        //{
        if (label.length > 0) {
            this.logger.logWithColor(`[${label}]`, LogTextColor_1.LogTextColor.GREEN);
        }
        this.logger.logWithColor(JSON.stringify(jsonObject, null, 4), LogTextColor_1.LogTextColor.MAGENTA);
        //}
    }
    printColor(message, color = LogTextColor_1.LogTextColor.GREEN) {
        this.logger.logWithColor(message, color);
    }
}
module.exports = { mod: new LootFuckery() };
//# sourceMappingURL=mod.js.map