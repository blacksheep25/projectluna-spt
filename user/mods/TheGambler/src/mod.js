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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConfigTypes_1 = require("C:/snapshot/project/obj/models/enums/ConfigTypes");
const Traders_1 = require("C:/snapshot/project/obj/models/enums/Traders");
// New trader classes and config
const baseJson = __importStar(require("../db/base.json"));
const traderHelpers_1 = require("./traderHelpers");
const itemCreator_1 = require("./itemCreator");
const keys_1 = require("./keys");
const itemCreateHelper_1 = require("./itemCreateHelper");
const fluentTraderAssortCreator_1 = require("./fluentTraderAssortCreator");
const jsonc_1 = require("C:/snapshot/project/node_modules/jsonc");
const path_1 = __importDefault(require("path"));
const Stims_1 = require("./Stims");
class SampleTrader {
    mod;
    logger;
    traderHelper;
    fluentAssortCreator;
    hashUtil;
    config;
    constructor() {
        this.mod = "TheGambler"; // Logging uses
    }
    /**
     * Some work needs to be done prior to SPT code being loaded, registering the profile image + setting trader update time inside the trader config json
     * @param container Dependency container
     */
    preAkiLoad(container) {
        // Get a logger
        this.logger = container.resolve("WinstonLogger");
        this.logger.debug(`[${this.mod}] preAki Loading... `);
        // Get SPT code/data we need later
        const preAkiModLoader = container.resolve("PreAkiModLoader");
        const imageRouter = container.resolve("ImageRouter");
        const hashUtil = container.resolve("HashUtil");
        const configServer = container.resolve("ConfigServer");
        const traderConfig = configServer.getConfig(ConfigTypes_1.ConfigTypes.TRADER);
        const ragfairConfig = configServer.getConfig(ConfigTypes_1.ConfigTypes.RAGFAIR);
        const vfs = container.resolve("VFS");
        // Create helper class and use it to register our traders image/icon + set its stock refresh time
        this.config = jsonc_1.jsonc.parse(vfs.readFile(path_1.default.resolve(__dirname, "../config/config.jsonc")));
        this.hashUtil = hashUtil;
        this.traderHelper = new traderHelpers_1.TraderHelper();
        this.fluentAssortCreator = new fluentTraderAssortCreator_1.FluentAssortConstructor(hashUtil, this.logger);
        this.traderHelper.registerProfileImage(baseJson, this.mod, preAkiModLoader, imageRouter, "thegambler.jpg");
        this.traderHelper.setTraderUpdateTime(traderConfig, baseJson, 3600, 4000);
        // Add trader to trader enum
        Traders_1.Traders[baseJson._id] = baseJson._id;
        // Add trader to flea market
        ragfairConfig.traders[baseJson._id] = true;
        // openRandomLootContainer override in InventoryController. Lets us use mod items.
        container.afterResolution("InventoryController", (_t, result) => {
            result.openRandomLootContainer = (pmcData, body, sessionID) => {
                return this.newOpenRandomLoot(container, pmcData, body, sessionID);
            };
        });
        this.logger.debug(`[${this.mod}] preAki Loaded`);
    }
    /**
     * Majority of trader-related work occurs after the aki database has been loaded but prior to SPT code being run
     * @param container Dependency container
     */
    postDBLoad(container) {
        this.logger.debug(`[${this.mod}] postDb Loading... `);
        // Resolve SPT classes we'll use
        const databaseServer = container.resolve("DatabaseServer");
        //const configServer: ConfigServer = container.resolve<ConfigServer>("ConfigServer");
        const jsonUtil = container.resolve("JsonUtil");
        // Creates and stores new gambling items in database
        const itemCreate = new itemCreateHelper_1.ItemCreateHelper();
        itemCreate.createItems(container);
        // Get a reference to the database tables
        const tables = databaseServer.getTables();
        // Add new trader to the trader dictionary in DatabaseServer - has no assorts (items) yet
        this.traderHelper.addTraderToDb(baseJson, tables, jsonUtil);
        // Add gambling containers to trader
        this.traderHelper.addSingleItemsToTrader(tables, baseJson._id, this.fluentAssortCreator, container);
        // Add trader to locale file, ensures trader text shows properly on screen
        // WARNING: adds the same text to ALL locales (e.g. chinese/french/english)
        this.traderHelper.addTraderToLocales(baseJson, tables, baseJson.name, "Gambler", baseJson.nickname, baseJson.location, "Welcome Traveler! May I indulge you in purchasing some mystery boxes?");
        this.logger.debug(`[${this.mod}] postDb Loaded`);
    }
    // openRandomLootContainer override function
    //
    newOpenRandomLoot(container, pmcData, body, sessionID) {
        // Needed reference methods
        const lootGenerator = container.resolve("LootGenerator");
        const itemHelper = container.resolve("ItemHelper");
        const inventoryHelper = container.resolve("InventoryHelper");
        const eventOutputHolder = container.resolve("EventOutputHolder");
        const randomUtil = container.resolve("RandomUtil");
        const openedItem = pmcData.Inventory.items.find(x => x._id === body.item); // Get opened item from inventory
        const containerDetails = itemHelper.getItem(openedItem._tpl);
        let foundInRaid = false;
        const newItemRequest = {
            itemWithModsToAdd: [],
            foundInRaid: true,
            useSortingTable: true
        };
        const newItemsRequest = {
            itemsWithModsToAdd: [],
            foundInRaid: true,
            useSortingTable: true
        };
        const isSealedWeaponBox = containerDetails[1]._name.includes("event_container_airdrop"); // Default tarkov tagged container
        const isGamblingContainer = containerDetails[1]._name.includes("gambling_container"); // Mod items are tagged with "gambling_container" identifier
        if (isSealedWeaponBox) {
            // Sealed Weapon container
            // Get summary of loot from config
            const containerSettings = inventoryHelper.getInventoryConfig().sealedAirdropContainer;
            // This id is bugged and we have to delete it or bad shit will happen. Looks like SPT base bug?
            delete (containerSettings.weaponRewardWeight['5e848cc2988a8701445df1e8']);
            newItemsRequest.itemsWithModsToAdd.push(...lootGenerator.getSealedWeaponCaseLoot(containerSettings));
            //this.logger.info("SEALED CONTAINER ITEMS...");
            //this.logger.info(newItemsRequest.itemsWithModsToAdd);
            foundInRaid = containerSettings.foundInRaid;
            newItemsRequest.foundInRaid = foundInRaid;
        }
        else if (isGamblingContainer) {
            // Gambling Mod Containers
            const currentContainer = containerDetails[1];
            let roll;
            let id;
            let money = 0;
            if (currentContainer._name.includes("wallet")) {
                roll = randomUtil.getFloat(0, 100);
                this.logger.info(`[${this.mod}] The container roll  is: ${roll}!`);
                const extremely_rare_odds = this.config.wallet_extremely_rare;
                const rare_odds = this.config.wallet_rare + extremely_rare_odds;
                const kinda_rare_odds = this.config.wallet_kinda_rare + rare_odds;
                const uncommon_odds = this.config.wallet_uncommon + kinda_rare_odds;
                const common_odds = this.config.wallet_common + uncommon_odds;
                if (roll <= extremely_rare_odds) {
                    money = 2000000;
                }
                else if (roll <= rare_odds) {
                    money = 1000000;
                }
                else if (roll <= kinda_rare_odds) {
                    money = 500000;
                }
                else if (roll <= uncommon_odds) {
                    money = 300000;
                }
                else if (roll <= common_odds) {
                    money = 100000;
                }
                else {
                    money = 0;
                    this.logger.info(`[${this.mod}] Case Opened... Received Nothing... Better luck next time :)`);
                }
                //this.logger.info(` Money =  ${money}!`);
                if (money > 0) {
                    //this.logger.info(`[${this.mod}] You have received ${money}!`);
                    id = "5449016a4bdc2d6f028b456f"; // Roubles
                    newItemRequest.itemWithModsToAdd.push(this.newItemFormat(id, money));
                    newItemRequest.foundInRaid = true;
                }
            }
            else if (currentContainer._name.includes("keycard")) {
                roll = randomUtil.getFloat(0, 100);
                this.logger.info(`[${this.mod}] The container roll  is: ${roll}!`);
                const keycard_red_odds = this.config.keycard_red;
                const keycard_green_odds = this.config.keycard_green + keycard_red_odds;
                const keycard_blue_odds = this.config.keycard_blue + keycard_green_odds;
                const keycard_violet_odds = this.config.keycard_violet + keycard_blue_odds;
                const keycard_black_odds = this.config.keycard_black + keycard_violet_odds;
                const keycard_yellow_odds = this.config.keycard_yellow + keycard_black_odds;
                const keycard_blue_marking_odds = this.config.keycard_blue_marking + keycard_yellow_odds;
                const keycard_21WS_odds = this.config.keycard_21WS + keycard_blue_marking_odds;
                const keycard_11SR_odds = this.config.keycard_11SR + keycard_21WS_odds;
                const keycard_access_odds = this.config.keycard_access + keycard_11SR_odds;
                //this.logger.info(`[${this.mod}] The Current Roll is: ${roll}!`);
                if (roll <= keycard_red_odds) {
                    id = "5c1d0efb86f7744baf2e7b7b"; // TerraGroup Labs keycard (Red)
                }
                else if (roll <= keycard_green_odds) {
                    id = "5c1d0dc586f7744baf2e7b79"; // TerraGroup Labs keycard (Green)
                }
                else if (roll <= keycard_blue_odds) {
                    id = "5c1d0c5f86f7744bb2683cf0"; // TerraGroup Labs keycard (Blue)
                }
                else if (roll <= keycard_violet_odds) {
                    id = "5c1e495a86f7743109743dfb"; // TerraGroup Labs keycard (Violet)
                }
                else if (roll <= keycard_black_odds) {
                    id = "5c1d0f4986f7744bb01837fa"; // TerraGroup Labs keycard (Black)
                }
                else if (roll <= keycard_yellow_odds) {
                    id = "5c1d0d6d86f7744bb2683e1f"; // TerraGroup Labs keycard (Yellow)
                }
                else if (roll <= keycard_blue_marking_odds) {
                    id = "5efde6b4f5448336730dbd61"; // Keycard with a blue marking
                }
                else if (roll <= keycard_21WS_odds) {
                    id = "5e42c83786f7742a021fdf3c"; // Object #21WS keycard
                }
                else if (roll <= keycard_11SR_odds) {
                    id = "5e42c81886f7742a01529f57"; // Object #11SR keycard
                }
                else if (roll <= keycard_access_odds) {
                    id = "5c94bbff86f7747ee735c08f"; // TerraGroup Labs access keycard
                }
                else {
                    id = "NaN";
                    this.logger.info(`[${this.mod}] Case Opened... Received Nothing... Better luck next time :)`);
                }
                if (id != "NaN") {
                    newItemRequest.itemWithModsToAdd.push(this.newItemFormat(id));
                    newItemRequest.foundInRaid = true;
                }
            }
            else if (currentContainer._name.includes("50/50")) {
                roll = randomUtil.getFloat(0, 100);
                if (roll <= 50) {
                    id = "57347d7224597744596b4e72"; // Can of beef stew (Small)
                    newItemRequest.itemWithModsToAdd.push(this.newItemFormat(id));
                    newItemRequest.foundInRaid = true;
                }
                else {
                    id = "5449016a4bdc2d6f028b456f"; // Roubles
                    money = 5000000; // 5,000,000 roubles
                    newItemRequest.itemWithModsToAdd.push(this.newItemFormat(id, money));
                    newItemRequest.foundInRaid = true;
                }
            }
            else if (currentContainer._name.includes("gambling_container_key")) {
                roll = randomUtil.getFloat(0, 100);
                this.logger.info(`[${this.mod}] The container roll  is: ${roll}!`);
                const keys = new keys_1.Keys(); // stores arrays of keys sorted by rarity
                const extremely_rare_odds = this.config.key_extremely_rare;
                const rare_odds = this.config.key_rare + extremely_rare_odds;
                const uncommon_odds = this.config.key_uncommon + rare_odds;
                const common_odds = this.config.key_common + uncommon_odds;
                if (roll <= extremely_rare_odds) {
                    const secondRoll = randomUtil.getInt(0, keys.extremelyRareKeys.length - 1);
                    id = keys.extremelyRareKeys[secondRoll];
                }
                else if (roll <= rare_odds) {
                    const secondRoll = randomUtil.getInt(0, keys.rareKeys.length - 1);
                    id = keys.rareKeys[secondRoll];
                }
                else if (roll <= uncommon_odds) {
                    const secondRoll = randomUtil.getInt(0, keys.uncommonKeys.length - 1);
                    id = keys.uncommonKeys[secondRoll];
                }
                else if (roll <= common_odds) { // Common Key
                    const secondRoll = randomUtil.getInt(0, keys.commonKeys.length - 1);
                    id = keys.commonKeys[secondRoll];
                }
                else { // Nothing
                    id = "NaN";
                    this.logger.info(`[${this.mod}] Case Opened... Received Nothing... Better luck next time :)`);
                }
                if (id != "NaN") {
                    newItemRequest.itemWithModsToAdd.push(this.newItemFormat(id));
                    newItemRequest.foundInRaid = true;
                }
            }
            else if (currentContainer._name.includes("gambling_container_stim")) {
                roll = randomUtil.getFloat(0, 100);
                this.logger.info(`[${this.mod}] The container roll  is: ${roll}!`);
                const stims = new Stims_1.Stims();
                const rare_odds = this.config.stim_rare;
                const uncommon_odds = this.config.key_uncommon + rare_odds;
                const common_odds = this.config.key_common + uncommon_odds;
                if (roll <= rare_odds) {
                    const secondRoll = randomUtil.getInt(0, stims.rareStims.length - 1);
                    id = stims.rareStims[secondRoll];
                }
                else if (roll <= uncommon_odds) {
                    const secondRoll = randomUtil.getInt(0, stims.uncommonStims.length - 1);
                    id = stims.uncommonStims[secondRoll];
                }
                else if (roll <= common_odds) { // Common Key
                    const secondRoll = randomUtil.getInt(0, stims.commonStims.length - 1);
                    id = stims.commonStims[secondRoll];
                }
                else { // Nothing
                    id = "NaN";
                    this.logger.info(`[${this.mod}] Case Opened... Received Nothing... Better luck next time :)`);
                }
                if (id != "NaN") {
                    newItemRequest.itemWithModsToAdd.push(this.newItemFormat(id));
                    newItemRequest.foundInRaid = true;
                }
            }
            else if (currentContainer._name.includes("gambling_container_weapon")) {
                // ItemCreator.ts stores all gun presets
                let item = new itemCreator_1.ItemCreator(container);
                let createWeapon = [];
                roll = randomUtil.getFloat(0, 100);
                this.logger.info(`[${this.mod}] The container roll  is: ${roll}!`);
                const rare_odds = this.config.gun_rare;
                const meme_odds = this.config.gun_meme + rare_odds;
                const uncommon_odds = this.config.gun_uncommon + meme_odds;
                const common_odds = this.config.gun_common + uncommon_odds;
                if (roll <= rare_odds) {
                    createWeapon = item.createGun('meta');
                }
                else if (roll <= meme_odds) {
                    createWeapon = item.createGun('meme');
                }
                else if (roll <= uncommon_odds) {
                    createWeapon = item.createGun('decent');
                }
                else if (roll <= common_odds) {
                    createWeapon = item.createGun('base');
                }
                else { // Nothing
                    this.logger.info(`[${this.mod}] Case Opened... Received Nothing... Better luck next time :)`);
                }
                if (createWeapon.length != 0) {
                    newItemRequest.itemWithModsToAdd.push(...createWeapon);
                    newItemRequest.foundInRaid = true;
                }
            }
            else if (currentContainer._name.includes("gambling_container_melee")) {
                roll = randomUtil.getFloat(0, 100);
                this.logger.info(`[${this.mod}] The container roll  is: ${roll}!`);
                const extremely_rare_odds = this.config.melee_extremely_rare;
                const rare_odds = this.config.melee_rare + extremely_rare_odds;
                const uncommon_odds = this.config.melee_uncommon + rare_odds;
                const common_odds = this.config.melee_common + uncommon_odds;
                if (roll <= extremely_rare_odds) {
                    const secondRoll = randomUtil.getInt(0, 2);
                    //this.logger.info(`[${this.mod}] The Second Roll is: ${secondRoll}!`);
                    if (secondRoll == 0) {
                        id = "63920105a83e15700a00f168"; // SOG Voodoo Hawk tactical tomahawk
                    }
                    else if (secondRoll == 1) {
                        id = "5bffe7930db834001b734a39"; // Crash Axe
                    }
                    else if (secondRoll == 2) {
                        id = "601948682627df266209af05"; // UVSR Taiga-1 survival machete
                    }
                }
                else if (roll <= rare_odds) {
                    const secondRoll = randomUtil.getInt(0, 1);
                    if (secondRoll == 0) {
                        id = "5c0126f40db834002a125382"; // Red Rebel ice pick
                    }
                    else if (secondRoll == 1) {
                        id = "5bffdd7e0db834001b734a1a"; // Miller Bros. Blades M-2 Tactical Sword
                    }
                }
                else if (roll <= uncommon_odds) {
                    const secondRoll = randomUtil.getInt(0, 3);
                    if (secondRoll == 0) {
                        id = "5fc64ea372b0dd78d51159dc"; // Cultist knife
                    }
                    else if (secondRoll == 1) {
                        id = "5bc9c1e2d4351e00367fbcf0"; // Antique axe
                    }
                    else if (secondRoll == 2) {
                        id = "5c010e350db83400232feec7"; // SP-8 Survival Machete
                    }
                    else if (secondRoll == 3) {
                        id = "5c012ffc0db834001d23f03f"; // Camper axe
                    }
                }
                else if (roll <= common_odds) {
                    const secondRoll = randomUtil.getInt(0, 6);
                    if (secondRoll == 0) {
                        id = "5bffdc370db834001d23eca8"; // 6Kh5 Bayonet
                    }
                    else if (secondRoll == 1) {
                        id = "57cd379a24597778e7682ecf"; // Kiba Arms Tactical Tomahawk
                    }
                    else if (secondRoll == 2) {
                        id = "6540d2162ae6d96b540afcaf"; // PR-Taran police baton
                    }
                    else if (secondRoll == 3) {
                        id = "54491bb74bdc2d09088b4567"; // ER FULCRUM BAYONET
                    }
                    else if (secondRoll == 4) {
                        id = "5c07df7f0db834001b73588a"; // Freeman crowbar
                    }
                    else if (secondRoll == 5) {
                        id = "57e26ea924597715ca604a09"; // Bars A-2607 Damascus knife
                    }
                    else if (secondRoll == 6) {
                        id = "57e26fc7245977162a14b800"; // Bars A-2607 95Kh18 knife
                    }
                }
                else { // Nothing. Default percentages make this 0% of happening
                    id = "NaN";
                    this.logger.info(`[${this.mod}] Case Opened... Received Nothing... Better luck next time :)`);
                }
                if (id != "NaN") {
                    newItemRequest.itemWithModsToAdd.push(this.newItemFormat(id));
                    newItemRequest.foundInRaid = true;
                }
            }
            else if (currentContainer._name.includes("gambling_container_armor")) {
                roll = randomUtil.getFloat(0, 100);
                this.logger.info(`[${this.mod}] The container roll  is: ${roll}!`);
                let item = new itemCreator_1.ItemCreator(container);
                let createArmor = [];
                const rare_odds = this.config.armor_rare;
                const uncommon_odds = this.config.armor_uncommon + rare_odds;
                const common_odds = this.config.armor_common + uncommon_odds;
                if (roll <= rare_odds) {
                    createArmor = item.createArmor('rare');
                }
                else if (roll <= uncommon_odds) {
                    createArmor = item.createArmor('uncommon');
                }
                else if (roll <= common_odds) {
                    createArmor = item.createArmor('common');
                }
                else { // Nothing
                    this.logger.info(`[${this.mod}] Case Opened... Received Nothing... Better luck next time :)`);
                }
                //this.logger.info(createArmor);
                if (createArmor.length != 0) {
                    newItemRequest.itemWithModsToAdd.push(...createArmor);
                    newItemRequest.foundInRaid = true;
                }
            }
            else if (currentContainer._name.includes("gambling_container_premium_armor")) {
                roll = randomUtil.getFloat(0, 100);
                this.logger.info(`[${this.mod}] The container roll  is: ${roll}!`);
                let item = new itemCreator_1.ItemCreator(container);
                let createArmor = [];
                const rare_odds = this.config.premium_armor_rare;
                if (roll <= rare_odds) {
                    createArmor = item.createArmor('rare');
                }
                else { // Nothing
                    this.logger.info(`[${this.mod}] Case Opened... Received Nothing... Better luck next time :)`);
                }
                if (createArmor.length != 0) {
                    newItemRequest.itemWithModsToAdd.push(...createArmor);
                    newItemRequest.foundInRaid = true;
                }
            }
            else if (currentContainer._name.includes("gambling_container_premium_weapon")) {
                roll = randomUtil.getFloat(0, 100);
                this.logger.info(`[${this.mod}] The container roll  is: ${roll}!`);
                let item = new itemCreator_1.ItemCreator(container);
                let createGun = [];
                const rare_odds = this.config.premium_gun_rare;
                if (roll <= rare_odds) {
                    createGun = item.createGun('meta');
                }
                else { // Nothing
                    this.logger.info(`[${this.mod}] Case Opened... Received Nothing... Better luck next time :)`);
                }
                //this.logger.info(createGun);
                if (createGun.length != 0) {
                    newItemRequest.itemWithModsToAdd.push(...createGun);
                    newItemRequest.foundInRaid = true;
                }
            }
        }
        else {
            // NOT SURE IF THIS WORKS... NEEDS MORE TESTING....
            //this.logger.info(`GET RANDOM LOOT CONTAINER LOOT`);
            // Other random containers
            // Get summary of loot from config
            const rewardContainerDetails = inventoryHelper.getRandomLootContainerRewardDetails(openedItem._tpl);
            newItemsRequest.itemsWithModsToAdd.push(...lootGenerator.getRandomLootContainerLoot(rewardContainerDetails));
            foundInRaid = rewardContainerDetails.foundInRaid;
            newItemsRequest.foundInRaid = foundInRaid;
        }
        const output = eventOutputHolder.getOutput(sessionID);
        inventoryHelper.removeItem(pmcData, body.item, sessionID, output); // Delete the opened random loot container
        if (newItemRequest.itemWithModsToAdd.length != 0) {
            inventoryHelper.addItemToStash(sessionID, newItemRequest, pmcData, output);
        }
        else if (newItemsRequest.itemsWithModsToAdd.length != 0) {
            inventoryHelper.addItemsToStash(sessionID, newItemsRequest, pmcData, output);
        }
        return output;
    }
    newItemFormat(tpl, count = undefined) {
        const item = {
            _id: this.hashUtil.generate(),
            _tpl: tpl,
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: count ? count : 1 }
        };
        return item;
    }
}
module.exports = { mod: new SampleTrader() };
//# sourceMappingURL=mod.js.map