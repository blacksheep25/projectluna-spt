"use strict";
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/brace-style */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
* If you are reading this, I hope you are enjoying Scorpion
*
*
* I have worked on this mod for several months and have tried my best to make it as easy to read and clean as possible
* I may not always do things in the best way, but I do try!
* If you have any questions please reach out to me in the SPT Discord - do not DM me
*
*/
const tsyringe_1 = require("C:/snapshot/project/node_modules/tsyringe");
const ConfigTypes_1 = require("C:/snapshot/project/obj/models/enums/ConfigTypes");
const jsonc_1 = require("C:/snapshot/project/node_modules/jsonc");
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
// Custom Imports
const traderHelpers_1 = require("./traderHelpers");
const fluentTraderAssortCreator_1 = require("./fluentTraderAssortCreator");
const Traders_1 = require("C:/snapshot/project/obj/models/enums/Traders");
const baseJson = require("../db/base.json");
const questJson = require("../db/questassort.json");
const assortJson = require("../db/assort.json");
const productionJson = require("../db/production.json");
const weaponCompatibility = require("../config/ModdedWeaponCompatibility.json");
let realismDetected;
const loadMessage = {
    0: "Scorpion has brought his crew into Tarkov",
    1: "One of us..one of us..one of us",
    2: "Welcome to the team, you're one of us meow ♡",
    3: "Call Kenny Loggins because you're in the danger zone",
    4: "Can I offer you a nice egg in this trying time?",
    5: "Good news everyone! We have over 100 quests!",
    6: "Never half-ass two things. Whole-ass one thing.",
    7: "Thanks for signing up for Cat Facts! You will now receive fun daily facts about CATS!",
    8: "Thanks for signing up for Dog Facts! You will now receive fun daily facts about DOGS!",
    9: "A big ball of wibbly wobbly, timey wimey stuff",
    10: "(╯°□°)╯︵ ┻━┻ ",
    11: "┬─┬ノ( º _ ºノ)",
    12: "Treat others how you want to be treated",
    13: "No act of kindness, no matter how small, is ever wasted",
    14: "Reticulating Splines...",
    15: "Unfolding Foldy Chairs...",
    16: "Pressurizing Fruit Punch Barrel Hydraulics...",
    17: "Fabricating Imaginary Infrastructure...",
    18: "We apologize again for the fault in the subtitles. Those responsible for sacking the people who have just been sacked, have been sacked.",
    19: "Are you suggesting coconuts migrate?",
    20: "We are now the knights who say ekki-ekki-ekki-pitang-zoom-boing!",
    21: "Knight jumps queen! Bishop jumps queen! Pawns jump queen!",
    22: "Hello. My name is Inigo Montoya. You killed my father. Prepare to die.",
    23: "I spent the last few years building up an immunity to iocane powder.",
    24: "Rodents Of Unusual Size? I don't think they exist.",
    25: "Always try to be nice, but never fail to be kind",
    26: "Never be cruel, never be cowardly",
    27: "Who do I need to ban? (◣_◢)",
    28: "This loading message is sponsored by Raid: Shadow Legends"
};
class Scorpion {
    mod;
    logger;
    traderHelper;
    fluentAssortCreator;
    static vfs = tsyringe_1.container.resolve("VFS");
    static config = jsonc_1.jsonc.parse(Scorpion.vfs.readFile(node_path_1.default.resolve(__dirname, "../config/config.jsonc")));
    // Set the name of mod for logging purposes
    constructor() {
        this.mod = "acidphantasm-scorpion";
    }
    /*
     * Some work needs to be done prior to SPT code being loaded
     *
     * TLDR:
     * Resolve SPT Types
     * Set trader refresh, config, image, flea settings
     * Register Dynamic Router for Randomization Config
     *
     */
    preAkiLoad(container) {
        // Get a logger
        this.logger = container.resolve("WinstonLogger");
        // Get SPT code/data we need later
        const dynamicRouterModService = container.resolve("DynamicRouterModService");
        const preAkiModLoader = container.resolve("PreAkiModLoader");
        const databaseServer = container.resolve("DatabaseServer");
        const imageRouter = container.resolve("ImageRouter");
        const configServer = container.resolve("ConfigServer");
        const hashUtil = container.resolve("HashUtil");
        const traderConfig = configServer.getConfig(ConfigTypes_1.ConfigTypes.TRADER);
        const ragfairConfig = configServer.getConfig(ConfigTypes_1.ConfigTypes.RAGFAIR);
        // Set config values to local variables for validation & use
        let minRefresh = Scorpion.config.traderRefreshMin;
        let maxRefresh = Scorpion.config.traderRefreshMax;
        const addToFlea = Scorpion.config.addTraderToFlea;
        if (minRefresh >= maxRefresh || maxRefresh <= 2) {
            minRefresh = 1800;
            maxRefresh = 3600;
            this.logger.error(`[${this.mod}] [Config Issue] Refresh timers have been reset to default.`);
        }
        // Create helper class and use it to register our traders image/icon + set its stock refresh time
        this.traderHelper = new traderHelpers_1.TraderHelper();
        this.fluentAssortCreator = new fluentTraderAssortCreator_1.FluentAssortConstructor(hashUtil, this.logger);
        this.traderHelper.registerProfileImage(baseJson, this.mod, preAkiModLoader, imageRouter, "scorpion.jpg");
        this.traderHelper.setTraderUpdateTime(traderConfig, baseJson, minRefresh, maxRefresh);
        // Add trader to trader enum
        Traders_1.Traders[baseJson._id] = baseJson._id;
        // Add trader to flea market
        if (addToFlea) {
            ragfairConfig.traders[baseJson._id] = true;
        }
        else {
            ragfairConfig.traders[baseJson._id] = false;
        }
        dynamicRouterModService.registerDynamicRouter("ScorpionRefreshStock", [
            {
                url: "/client/items/prices/Scorpion",
                action: (url, info, sessionId, output) => {
                    const trader = databaseServer.getTables().traders.Scorpion;
                    const assortItems = trader.assort.items;
                    if (!realismDetected) {
                        if (Scorpion.config.randomizeBuyRestriction) {
                            if (Scorpion.config.debugLogging) {
                                this.logger.info(`[${this.mod}] Refreshing Scorpion Stock with Randomized Buy Restrictions.`);
                            }
                            this.randomizeBuyRestriction(assortItems);
                        }
                        if (Scorpion.config.randomizeStockAvailable) {
                            if (Scorpion.config.debugLogging) {
                                this.logger.info(`[${this.mod}] Refreshing Scorpion Stock with Randomized Stock Availability.`);
                            }
                            this.randomizeStockAvailable(assortItems);
                        }
                    }
                    return output;
                }
            }
        ], "aki");
    }
    /*
     * Some work needs to be done after loading SPT code
     *
     * TLDR:
     * Resolve SPT Types
     * Add Modded Weapons to Quests
     * Mod Detection to enable/disable Assort Configuration options
     * Apply Assort Configurations
     * Add trader to dictionary, locales, and assort
     *
     */
    postDBLoad(container) {
        const start = performance.now();
        // Resolve SPT classes we'll use
        const databaseServer = container.resolve("DatabaseServer");
        const jsonUtil = container.resolve("JsonUtil");
        const logger = container.resolve("WinstonLogger");
        //Set local variables for assortJson
        const assortPriceTable = assortJson.barter_scheme;
        const assortItemTable = assortJson.items;
        const assortLoyaltyTable = assortJson.loyal_level_items;
        //Run Modded Weapon Compatibility
        this.moddedWeaponCompatibility();
        //Check Mod Compatibility
        this.modDetection();
        //Push Production Schemes
        this.pushProductionUnlocks();
        //Update Assort
        if (Scorpion.config.priceMultiplier !== 1) {
            this.setPriceMultiplier(assortPriceTable);
        }
        if (Scorpion.config.randomizeBuyRestriction) {
            this.randomizeBuyRestriction(assortItemTable);
        }
        if (Scorpion.config.randomizeStockAvailable) {
            this.randomizeStockAvailable(assortItemTable);
        }
        if (Scorpion.config.unlimitedStock) {
            this.setUnlimitedStock(assortItemTable);
        }
        if (Scorpion.config.unlimitedBuyRestriction) {
            this.setUnlimitedBuyRestriction(assortItemTable);
        }
        if (Scorpion.config.removeLoyaltyRestriction) {
            this.disableLoyaltyRestrictions(assortLoyaltyTable);
        }
        // Set local variable for assort to pass to traderHelper regardless of priceMultiplier config
        const newAssort = assortJson;
        // Get a reference to the database tables
        const tables = databaseServer.getTables();
        // Add new trader to the trader dictionary in DatabaseServer       
        // Add quest assort
        // Add trader to locale file, ensures trader text shows properly on screen
        this.traderHelper.addTraderToDb(baseJson, tables, jsonUtil, newAssort);
        tables.traders[baseJson._id].questassort = questJson;
        this.traderHelper.addTraderToLocales(baseJson, tables, baseJson.name, "Scorpion", baseJson.nickname, baseJson.location, "I'm sellin', what are you buyin'?");
        this.logger.debug(`[${this.mod}] loaded... `);
        const timeTaken = performance.now() - start;
        if (Scorpion.config.debugLogging) {
            logger.log(`[${this.mod}] Trader load took ${timeTaken.toFixed(3)}ms.`, "cyan");
        }
        logger.log(`[${this.mod}] ${this.getRandomLoadMessage()}`, "cyan");
    }
    /*
     *
     * All functions are below this comment
     *
     * Most of these functions should be self explanatory
     *
     */
    setRealismDetection(i) {
        realismDetected = i;
        if (realismDetected && Scorpion.config.randomizeBuyRestriction || realismDetected && Scorpion.config.randomizeStockAvailable) {
            this.logger.log(`[${this.mod}] SPT-Realism detected, disabling randomizeBuyRestriction and/or randomizeStockAvailable:`, "cyan");
        }
    }
    setPriceMultiplier(assortPriceTable) {
        let priceMultiplier = Scorpion.config.priceMultiplier;
        if (priceMultiplier <= 0) {
            priceMultiplier = 1;
            this.logger.error(`[${this.mod}] priceMultiplier cannot be set to zero.`);
        }
        for (const itemID in assortPriceTable) {
            for (const item of assortPriceTable[itemID]) {
                if (item[0].count <= 15) {
                    if (Scorpion.config.debugLogging) {
                        this.logger.log(`[${this.mod}] itemID: [${itemID}] No price change, it's a barter trade.`, "cyan");
                    }
                    continue;
                }
                const count = item[0].count;
                const newPrice = Math.round(count * priceMultiplier);
                item[0].count = newPrice;
                if (Scorpion.config.debugLogging) {
                    this.logger.log(`[${this.mod}] itemID: [${itemID}] Price Changed to: [${newPrice}]`, "cyan");
                }
            }
        }
    }
    randomizeBuyRestriction(assortItemTable) {
        const randomUtil = tsyringe_1.container.resolve("RandomUtil");
        if (!realismDetected) // If realism is not detected, continue, else do nothing
         {
            for (const item in assortItemTable) {
                if (assortItemTable[item].parentId !== "hideout") {
                    continue; // Skip setting count, it's a weapon attachment or armour plate
                }
                const itemID = assortItemTable[item]._id;
                const oldRestriction = assortItemTable[item].upd.BuyRestrictionMax;
                const newRestriction = Math.round(randomUtil.randInt((oldRestriction * 0.5), oldRestriction));
                assortItemTable[item].upd.BuyRestrictionMax = newRestriction;
                if (Scorpion.config.debugLogging) {
                    this.logger.log(`[${this.mod}] Item: [${itemID}] Buy Restriction Changed to: [${newRestriction}]`, "cyan");
                }
            }
        }
    }
    randomizeStockAvailable(assortItemTable) {
        const randomUtil = tsyringe_1.container.resolve("RandomUtil");
        if (!realismDetected) // If realism is not detected, continue, else do nothing
         {
            for (const item in assortItemTable) {
                if (assortItemTable[item].parentId !== "hideout") {
                    continue; // Skip setting count, it's a weapon attachment or armour plate
                }
                const outOfStockRoll = randomUtil.getChance100(Scorpion.config.outOfStockChance);
                if (outOfStockRoll) {
                    const itemID = assortItemTable[item]._id;
                    assortItemTable[item].upd.StackObjectsCount = 0;
                    if (Scorpion.config.debugLogging) {
                        this.logger.log(`[${this.mod}] Item: [${itemID}] Marked out of stock`, "cyan");
                    }
                }
                else {
                    const itemID = assortItemTable[item]._id;
                    const originalStock = assortItemTable[item].upd.StackObjectsCount;
                    const newStock = randomUtil.randInt(2, (originalStock * 0.5));
                    assortItemTable[item].upd.StackObjectsCount = newStock;
                    if (Scorpion.config.debugLogging) {
                        this.logger.log(`[${this.mod}] Item: [${itemID}] Stock Count changed to: [${newStock}]`, "cyan");
                    }
                }
            }
        }
    }
    setUnlimitedStock(assortItemTable) {
        for (const item in assortItemTable) {
            if (assortItemTable[item].parentId !== "hideout") {
                continue; // Skip setting count, it's a weapon attachment or armour plate
            }
            assortItemTable[item].upd.StackObjectsCount = 9999999;
            assortItemTable[item].upd.UnlimitedCount = true;
        }
        if (Scorpion.config.debugLogging) {
            this.logger.log(`[${this.mod}] Item stock counts are now unlimited`, "cyan");
        }
    }
    setUnlimitedBuyRestriction(assortItemTable) {
        for (const item in assortItemTable) {
            if (assortItemTable[item].parentId !== "hideout") {
                continue; // Skip setting count, it's a weapon attachment or armour plate
            }
            delete assortItemTable[item].upd.BuyRestrictionMax;
            delete assortItemTable[item].upd.BuyRestrictionCurrent;
        }
        if (Scorpion.config.debugLogging) {
            this.logger.log(`[${this.mod}] Item buy restrictions are now unlimited`, "cyan");
        }
    }
    disableLoyaltyRestrictions(assortLoyaltyTable) {
        for (const item in assortLoyaltyTable) {
            delete assortLoyaltyTable[item];
        }
        if (Scorpion.config.debugLogging) {
            this.logger.log(`[${this.mod}] All Loyalty Level requirements are removed`, "cyan");
        }
    }
    modDetection() {
        const preAkiModLoader = tsyringe_1.container.resolve("PreAkiModLoader");
        const vcqlCheck = preAkiModLoader.getImportedModsNames().includes("Virtual's Custom Quest Loader");
        const realismCheck = preAkiModLoader.getImportedModsNames().includes("SPT-Realism");
        const vcqlDllPath = node_path_1.default.resolve(__dirname, "../../../../BepInEx/plugins/VCQLQuestZones.dll");
        const heliCrashSamSWAT = node_path_1.default.resolve(__dirname, "../../../../BepInEx/plugins/SamSWAT.HeliCrash/SamSWAT.HeliCrash.dll");
        const heliCrashTyrian = node_path_1.default.resolve(__dirname, "../../../../BepInEx/plugins/SamSWAT.HeliCrash.TyrianReboot/SamSWAT.HeliCrash.TyrianReboot.dll");
        const heliCrashArys = node_path_1.default.resolve(__dirname, "../../../../BepInEx/plugins/SamSWAT.HeliCrash.ArysReloaded/SamSWAT.HeliCrash.ArysReloaded.dll");
        // VCQL Zones DLL is missing
        if (!node_fs_1.default.existsSync(vcqlDllPath)) {
            this.logger.error(`[${this.mod}] VCQL Zones DLL missing. Custom Trader quests may not work properly.`);
        }
        // Outdated HeliCrash is installed
        if (node_fs_1.default.existsSync(heliCrashSamSWAT) || node_fs_1.default.existsSync(heliCrashTyrian)) {
            this.logger.error(`[${this.mod}] Outdated HeliCrash Mod Detected. You will experience issues with Custom Trader quest zones.`);
        }
        // Arys HeliCrash is installed
        if (node_fs_1.default.existsSync(heliCrashArys)) {
            this.logger.warning(`[${this.mod}] HeliCrash Mod Detected. You may experience issues with Custom Trader quest zones.`);
        }
        // VCQL package.json is missing
        if (!vcqlCheck) {
            this.logger.error(`[${this.mod}] VCQL not detected. Install VCQL and re-install ${this.mod}.`);
        }
        // This is completely unneccessary and I'll fix it, eventually - probably
        if (Scorpion.config.randomizeBuyRestriction || Scorpion.config.randomizeStockAvailable) {
            this.setRealismDetection(realismCheck);
        }
        else {
            this.setRealismDetection(realismCheck);
        }
    }
    moddedWeaponCompatibility() {
        const databaseServer = tsyringe_1.container.resolve("DatabaseServer");
        const questTable = databaseServer.getTables().templates.quests;
        const quests = Object.values(questTable);
        let questType;
        let weaponType;
        let wasAdded;
        if (weaponCompatibility.AssaultRifles.length >= 1) {
            weaponType = weaponCompatibility.AssaultRifles;
            questType = quests.filter(x => x._id.includes("Scorpion_10_1_"));
            wasAdded = true;
            this.moddedWeaponPushToArray(questType, weaponType);
        }
        if (weaponCompatibility.SubmachineGuns.length >= 1) {
            weaponType = weaponCompatibility.SubmachineGuns;
            questType = quests.filter(x => x._id.includes("Scorpion_10_2_"));
            wasAdded = true;
            this.moddedWeaponPushToArray(questType, weaponType);
        }
        if (weaponCompatibility.Snipers.length >= 1) {
            weaponType = weaponCompatibility.Snipers;
            questType = quests.filter(x => x._id.includes("Scorpion_10_3_"));
            wasAdded = true;
            this.moddedWeaponPushToArray(questType, weaponType);
        }
        if (weaponCompatibility.Marksman.length >= 1) {
            weaponType = weaponCompatibility.Marksman;
            questType = quests.filter(x => x._id.includes("Scorpion_10_4_"));
            wasAdded = true;
            this.moddedWeaponPushToArray(questType, weaponType);
        }
        if (weaponCompatibility.Shotguns.length >= 1) {
            weaponType = weaponCompatibility.Shotguns;
            questType = quests.filter(x => x._id.includes("Scorpion_10_5_"));
            wasAdded = true;
            this.moddedWeaponPushToArray(questType, weaponType);
        }
        if (weaponCompatibility.Pistols.length >= 1) {
            weaponType = weaponCompatibility.Pistols;
            questType = quests.filter(x => x._id.includes("Scorpion_10_6_"));
            wasAdded = true;
            this.moddedWeaponPushToArray(questType, weaponType);
        }
        if (weaponCompatibility.LargeMachineGuns.length >= 1) {
            weaponType = weaponCompatibility.LargeMachineGuns;
            questType = quests.filter(x => x._id.includes("Scorpion_10_7_"));
            wasAdded = true;
            this.moddedWeaponPushToArray(questType, weaponType);
        }
        if (weaponCompatibility.Carbines.length >= 1) {
            weaponType = weaponCompatibility.Carbines;
            questType = quests.filter(x => x._id.includes("Scorpion_10_8_"));
            wasAdded = true;
            this.moddedWeaponPushToArray(questType, weaponType);
        }
        if (weaponCompatibility.Melee.length >= 1) {
            weaponType = weaponCompatibility.Melee;
            questType = quests.filter(x => x._id.includes("Scorpion_10_9_"));
            wasAdded = true;
            this.moddedWeaponPushToArray(questType, weaponType);
        }
        if (weaponCompatibility.Explosives.length >= 1) {
            weaponType = weaponCompatibility.Explosives;
            questType = quests.filter(x => x._id.includes("Scorpion_10_10_"));
            wasAdded = true;
            this.moddedWeaponPushToArray(questType, weaponType);
        }
        if (wasAdded) {
            this.logger.log(`[${this.mod}] Custom Weapons added to proficiency quests. Enjoy!`, "cyan");
        }
    }
    moddedWeaponPushToArray(questType, weaponType) {
        for (const quest in questType) {
            for (const condition in questType[quest].conditions.AvailableForFinish) {
                for (const item in questType[quest].conditions.AvailableForFinish[condition].counter.conditions) {
                    for (const id of weaponType) {
                        questType[quest].conditions.AvailableForFinish[condition].counter.conditions[item].weapon.push(id);
                    }
                }
            }
            if (Scorpion.config.debugLogging) {
                this.logger.log(`[${this.mod}] ${questType[quest].QuestName} --- Added ${weaponType}`, "cyan");
            }
        }
    }
    pushProductionUnlocks() {
        const databaseServer = tsyringe_1.container.resolve("DatabaseServer");
        const productionTable = databaseServer.getTables().hideout.production;
        for (const item of productionJson) {
            productionTable.push(item);
        }
    }
    getRandomLoadMessage() {
        const value = loadMessage[Math.floor(Math.random() * Object.keys(loadMessage).length)];
        return value;
    }
}
module.exports = { mod: new Scorpion() };
//# sourceMappingURL=mod.js.map