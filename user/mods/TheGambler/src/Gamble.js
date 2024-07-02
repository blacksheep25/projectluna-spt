"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gamble = void 0;
const itemCreator_1 = require("./itemCreator");
const keys_1 = require("./containers/keys");
const Stims_1 = require("./containers/Stims");
const Backpacks_1 = require("./containers/Backpacks");
const Rigs_1 = require("./containers/Rigs");
const Headsets_1 = require("./containers/Headsets");
const Ammo_1 = require("./containers/Ammo");
const Melees_1 = require("./containers/Melees");
const MysteryContainer_1 = require("./MysteryContainer");
const Foods_1 = require("./containers/Foods");
class Gamble {
    newItemsRequest;
    name;
    count;
    mysteryContainer;
    container;
    hashUtil;
    logger;
    randomUtil;
    config;
    constructor(container, config, logger, name) {
        this.name = name.replace('gambling_', '');
        this.logger = logger;
        this.container = container;
        this.config = config;
        this.count = 0;
        this.randomUtil = container.resolve("RandomUtil");
        this.hashUtil = container.resolve("HashUtil");
        this.mysteryContainer = new MysteryContainer_1.MysteryContainer(config, logger);
        this.newItemsRequest = {
            itemsWithModsToAdd: [],
            foundInRaid: true,
            useSortingTable: true
        };
    }
    newGamble() {
        switch (this.name) {
            case 'wallet':
                this.openWallet();
                break;
            case 'keycard':
                this.openKeycard();
                break;
            case 'key':
                this.openKey();
                break;
            case 'stim':
                this.openStim();
                break;
            case 'food':
                this.openFood();
                break;
            case 'bitcoin':
                this.openBitcoin();
                break;
            case 'gpcoin':
                this.openGPCoin();
                break;
            case '50/50':
                this.openFiftyFifty();
                break;
            case 'melee':
                this.openMelee();
                break;
            case 'weapon':
                this.openWeapon();
                break;
            case 'premium_weapon':
                this.openPremiumWeapon();
                break;
            case 'helmet':
                this.openHelmet();
                break;
            case 'headset':
                this.openHeadset();
                break;
            case 'backpack':
                this.openBackpack();
                break;
            case 'rig':
                this.openRig();
                break;
            case 'armor':
                this.openArmor();
                break;
            case 'premium_armor':
                this.openPremiumArmor();
                break;
            case '7.62x25':
            case '9x18':
            case '9x19':
            case '9x21':
            case '.357':
            case '.45':
            case '4.6x30':
            case '5.7x28':
            case '5.45x39':
            case '5.56x45':
            case '.300':
            case '7.62x39':
            case '7.62x51':
            case '7.62x54':
            case '.338':
            case '9x39':
            case '.366':
            case '12.7x55':
            case '12/70':
            case '20/70':
            case '23x75':
                this.openAmmo();
                break;
            default:
                this.logger.error(`[TheGambler] This Mystery Container Doesn't exist! Contact Author!`);
        }
        return this.newItemsRequest;
    }
    openWallet() {
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler][Wallet] The container roll is: ${roll}!`);
        const odds = this.mysteryContainer.getOdds('wallet');
        //console.log('The Odds!')
        //console.log(odds)
        let money = -1;
        for (let i = 0; i < odds.length; i++) {
            if (roll <= odds[i]) {
                money = this.mysteryContainer.getReward('wallet', i);
                break;
            }
        }
        if (money > 0) {
            const id = "5449016a4bdc2d6f028b456f"; // Roubles
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id, money)];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        }
        else {
            this.logger.info(`[TheGambler][wallet] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }
    openKeycard() {
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler][Keycard] The container roll is: ${roll}!`);
        const odds = this.mysteryContainer.getOdds('keycard');
        let id = "NaN";
        for (let i = 0; i < odds.length; i++) {
            if (roll <= odds[i]) {
                id = this.mysteryContainer.getReward('keycard', i);
                break;
            }
        }
        if (this.config.debug) {
            this.logger.info("[TheGambler] Keycard Mystery Box Information...");
            this.logger.info("[TheGambler] Keycard id = " + id);
        }
        if (id != "NaN") {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        }
        else {
            this.logger.info(`[TheGambler][keycard] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }
    openFiftyFifty() {
        let id;
        let money;
        const roll = this.randomUtil.getFloat(0, 100);
        if (roll <= 50) {
            id = "57347d7224597744596b4e72"; // Can of beef stew (Small)
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        }
        else {
            id = "5449016a4bdc2d6f028b456f"; // Roubles
            money = 5000000; // 5,000,000 roubles
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id, money)];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        }
    }
    openBitcoin() {
        let id;
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler][Keycard] The container roll is: ${roll}!`);
        if (roll <= this.config.odds['bitcoin_success']) {
            this.logger.info(`[TheGambler][Bitcoin] Case Opened... Received Nothing... Better luck next time :)`);
        }
        else {
            id = "59faff1d86f7746c51718c9c"; // Bitcoin
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id, 1)];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id, 1)];
            this.count++;
        }
    }
    openGPCoin() {
        let id;
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler][Keycard] The container roll is: ${roll}!`);
        if (roll <= this.config.odds['gpcoin_success']) {
            this.logger.info(`[TheGambler][GPcoin] Case Opened... Received Nothing... Better luck next time :)`);
        }
        else {
            id = "5d235b4d86f7742e017bc88a"; // Bitcoin
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id, 1)];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id, 1)];
            this.count++;
        }
    }
    openKey() {
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler][Key] The container roll is: ${roll}!`);
        const keys = new keys_1.Keys(); // stores arrays of keys sorted by rarity
        const odds = this.mysteryContainer.getOdds('key');
        const rarities = this.mysteryContainer.getRarities('key');
        let id = "NaN";
        for (let i = 0; i < odds.length; i++) {
            if (roll <= odds[i]) {
                const secondRoll = this.randomUtil.getInt(0, keys.items['key' + rarities[i]].length - 1);
                id = keys.items['key' + rarities[i]][secondRoll];
                break;
            }
        }
        if (this.config.debug) {
            this.logger.info("[TheGambler] Key Mystery Box Information...");
            this.logger.info("[TheGambler] Key id = " + id);
        }
        if (id != "NaN") {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        }
        else {
            this.logger.info(`[TheGambler] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }
    openStim() {
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler][Stim] The container roll is: ${roll}!`);
        const stims = new Stims_1.Stims();
        const odds = this.mysteryContainer.getOdds('stim');
        const rarities = this.mysteryContainer.getRarities('stim');
        let id = "NaN";
        for (let i = 0; i < odds.length; i++) {
            if (roll <= odds[i]) {
                const secondRoll = this.randomUtil.getInt(0, stims.items['stim' + rarities[i]].length - 1);
                id = stims.items['stim' + rarities[i]][secondRoll];
                break;
            }
        }
        if (this.config.debug) {
            this.logger.info("[TheGambler] Stimulant Mystery Box Information...");
            this.logger.info("[TheGambler] Stimulant id = " + id);
        }
        if (id != "NaN") {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        }
        else {
            this.logger.info(`[TheGambler][Stim] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }
    openFood() {
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler][Food] The container roll is: ${roll}!`);
        const foods = new Foods_1.Foods();
        const odds = this.mysteryContainer.getOdds('food');
        const rarities = this.mysteryContainer.getRarities('food');
        let id = "NaN";
        for (let i = 0; i < odds.length; i++) {
            if (roll <= odds[i]) {
                const secondRoll = this.randomUtil.getInt(0, foods.items['food' + rarities[i]].length - 1);
                id = foods.items['food' + rarities[i]][secondRoll];
                break;
            }
        }
        if (this.config.debug) {
            this.logger.info("[TheGambler] Mystery Food Information...");
            this.logger.info("[TheGambler] Food id = " + id);
        }
        if (id != "NaN") {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        }
        else {
            this.logger.info(`[TheGambler][Stim] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }
    openWeapon() {
        // ItemCreator.ts stores all gun presets
        let item = new itemCreator_1.ItemCreator(this.container);
        let createWeapon = [];
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler][Weapon] The container roll is: ${roll}!`);
        const odds = this.mysteryContainer.getOdds('gun');
        //console.log("OpenWeapon");
        //console.log(odds);
        for (let i = 0; i < odds.length; i++) {
            if (roll <= odds[i]) {
                createWeapon = item.createGun(this.mysteryContainer.getReward('gun', i));
                break;
            }
        }
        if (this.config.debug) {
            this.logger.info("[TheGambler] Weapon Mystery Box Information...");
            this.logger.info(createWeapon);
        }
        if (createWeapon.length != 0) {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [...createWeapon];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        }
        else {
            this.logger.info(`[TheGambler][Weapon] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }
    openPremiumWeapon() {
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler][Premium_Weapon] The container roll is: ${roll}!`);
        let item = new itemCreator_1.ItemCreator(this.container);
        let createGun = [];
        const odds = this.mysteryContainer.getOdds('premium_gun');
        for (let i = 0; i < odds.length; i++) {
            if (roll <= odds[i]) {
                createGun = item.createGun(this.mysteryContainer.getReward('premium_gun', i));
                break;
            }
        }
        if (this.config.debug) {
            this.logger.info("[TheGambler] Premium Weapon Mystery Box Information...");
            this.logger.info(createGun);
        }
        if (createGun.length != 0) {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [...createGun];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        }
        else { // Nothing
            this.logger.info(`[TheGambler][Premium_Weapon] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }
    openHelmet() {
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler][Helmet] The container roll is: ${roll}!`);
        let item = new itemCreator_1.ItemCreator(this.container);
        let createHelmet = [];
        const odds = this.mysteryContainer.getOdds('helmet');
        for (let i = 0; i < odds.length; i++) {
            if (roll <= odds[i]) {
                createHelmet = item.createHelmet(this.mysteryContainer.getReward('helmet', i));
                break;
            }
        }
        if (this.config.debug) {
            this.logger.info("[TheGambler] Helmet Mystery Box Information...");
            this.logger.info(createHelmet);
        }
        if (createHelmet.length != 0) {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [...createHelmet];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        }
        else { // Nothing
            this.logger.info(`[TheGambler][Helmet] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }
    openHeadset() {
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler][Headset] The container roll is: ${roll}!`);
        const headsets = new Headsets_1.Headsets();
        const rarities = this.mysteryContainer.getRarities('headset');
        const odds = this.mysteryContainer.getOdds('headset');
        let id = "NaN";
        for (let i = 0; i < odds.length; i++) {
            if (roll <= odds[i]) {
                const secondRoll = this.randomUtil.getInt(0, headsets.items['headset' + rarities[i]].length - 1);
                id = headsets.items['headset' + rarities[i]][secondRoll];
                break;
            }
        }
        if (this.config.debug) {
            this.logger.info("[TheGambler] Mystery Headset Information...");
            this.logger.info("[TheGambler] Headset id = " + id);
        }
        if (id != "NaN") {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        }
        else {
            this.logger.info(`[TheGambler][Headset] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }
    openBackpack() {
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler][Backpack] The container roll is: ${roll}!`);
        const backpacks = new Backpacks_1.Backpacks();
        const rarities = this.mysteryContainer.getRarities('backpack');
        const odds = this.mysteryContainer.getOdds('backpack');
        let id = "NaN";
        for (let i = 0; i < odds.length; i++) {
            if (roll <= odds[i]) {
                const secondRoll = this.randomUtil.getInt(0, backpacks.items['backpack' + rarities[i]].length - 1);
                id = backpacks.items['backpack' + rarities[i]][secondRoll];
                break;
            }
        }
        if (this.config.debug) {
            this.logger.info("[TheGambler] Backpack Mystery Box Information...");
            this.logger.info("[TheGambler] Backpack id = " + id);
        }
        if (id != "NaN") {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        }
        else {
            this.logger.info(`[TheGambler][Backpack] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }
    openRig() {
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler][Rig] The container roll is: ${roll}!`);
        const rigs = new Rigs_1.Rigs();
        const rarities = this.mysteryContainer.getRarities('rig');
        const odds = this.mysteryContainer.getOdds('rig');
        let id = "NaN";
        for (let i = 0; i < odds.length; i++) {
            if (roll <= odds[i]) {
                const secondRoll = this.randomUtil.getInt(0, rigs.items['rig' + rarities[i]].length - 1);
                id = rigs.items['rig' + rarities[i]][secondRoll];
                break;
            }
        }
        if (this.config.debug) {
            this.logger.info("[TheGambler] Backpack Mystery Box Information...");
            this.logger.info("[TheGambler] Backpack id = " + id);
        }
        if (id != "NaN") {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        }
        else {
            this.logger.info(`[TheGambler][Rig] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }
    openArmor() {
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler][Armor] The container roll is: ${roll}!`);
        let item = new itemCreator_1.ItemCreator(this.container);
        let createArmor = [];
        const odds = this.mysteryContainer.getOdds('armor');
        for (let i = 0; i < odds.length; i++) {
            if (roll <= odds[i]) {
                createArmor = item.createArmor(this.mysteryContainer.getReward('armor', i));
                break;
            }
        }
        if (createArmor.length != 0) {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [...createArmor];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        }
        else {
            this.logger.info(`[TheGambler][Armor] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }
    openPremiumArmor() {
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler][Premium_Armor] The container roll is: ${roll}!`);
        let item = new itemCreator_1.ItemCreator(this.container);
        let createArmor = [];
        const odds = this.mysteryContainer.getOdds('premium_armor');
        for (let i = 0; i < odds.length; i++) {
            if (roll <= odds[i]) {
                createArmor = item.createArmor(this.mysteryContainer.getReward('premium_armor', i));
                break;
            }
        }
        if (this.config.debug) {
            this.logger.info("[TheGambler] Premium Armor Mystery Box Information...");
            this.logger.info(createArmor);
        }
        if (createArmor.length != 0) {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [...createArmor];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        }
        else {
            this.logger.info(`[TheGambler][Premium_Armor] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }
    openMelee() {
        const melees = new Melees_1.Melees();
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler][Melee] The container roll is: ${roll}!`);
        const rarities = this.mysteryContainer.getRarities('melee');
        const odds = this.mysteryContainer.getOdds('melee');
        let id = "NaN";
        for (let i = 0; i < odds.length; i++) {
            if (roll <= odds[i]) {
                const secondRoll = this.randomUtil.getInt(0, melees.items['melee' + rarities[i]].length - 1);
                id = melees.items['melee' + rarities[i]][secondRoll];
                break;
            }
        }
        if (this.config.debug) {
            this.logger.info("[TheGambler] Melee Mystery Box Information...");
            this.logger.info("[TheGambler] Melee id = " + id);
        }
        if (id != "NaN") {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        }
        else {
            this.logger.info(`[TheGambler][Melee] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }
    openAmmo() {
        const ammo = new Ammo_1.Ammo();
        const name = this.name;
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler][Ammo] The container roll is: ${roll}!`);
        let id = "NaN";
        const rarities = this.mysteryContainer.getRarities(name);
        const odds = this.mysteryContainer.getOdds(name);
        for (let i = 0; i < odds.length; i++) {
            if (roll <= odds[i]) {
                const secondRoll = this.randomUtil.getInt(0, ammo.items[name].items[name + rarities[i]].length - 1);
                id = ammo.items[name].items[name + rarities[i]][secondRoll];
                break;
            }
        }
        if (this.config.debug) {
            this.logger.info("[TheGambler] Ammo Mystery Box Information...");
            this.logger.info("[TheGambler] Ammo id = " + id);
        }
        if (id != "NaN") {
            let ammoRoll;
            ammoRoll = this.randomUtil.getFloat(this.config.odds[name + '_min'], this.config.odds[name + '_max']);
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id, ammoRoll)];
            this.newItemsRequest.foundInRaid = false;
            this.count++;
        }
        else {
            this.logger.info(`[TheGambler][Ammo] Case Opened... Received Nothing... Better luck next time :)`);
        }
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
exports.Gamble = Gamble;
//# sourceMappingURL=Gamble.js.map