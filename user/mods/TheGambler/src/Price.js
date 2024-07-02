"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Price = void 0;
const Ammo_1 = require("./containers/Ammo");
const MysteryContainer_1 = require("./MysteryContainer");
class Price {
    container;
    config;
    logger;
    randomUtil;
    MysteryContainer;
    constructor(container, config, logger) {
        this.container = container;
        this.config = config;
        this.logger = logger;
        this.MysteryContainer = new MysteryContainer_1.MysteryContainer(config, logger);
        this.randomUtil = this.container.resolve("RandomUtil");
    }
    // This is where all Mystery Ammo containers are price generated during postDBLoad
    generateMysteryAmmoPrices() {
        this.logger.info("[TheGambler] Generating Mystery Ammo Prices...");
        let ammo = new Ammo_1.Ammo();
        let mysteryAmmoPrices = {};
        for (let i = 0; i < ammo.ammoNames.length; i++) {
            const current = ammo.ammoNames[i];
            const count = ((this.config.odds[current + '_min'] + this.config.odds[current + '_max']) / 2);
            const odds = this.MysteryContainer.getOdds(current);
            const rarities = this.MysteryContainer.getRarities(current);
            let currentContainerPrice = this.config.price_stock[current + "_case_price"];
            let currentPrices = this.getMysteryItemPrices(current, 'ammo', rarities, this.MysteryContainer.items['ammo'].items[current], count);
            currentContainerPrice = this.runSimulation(current, currentContainerPrice, odds, currentPrices, -1, this.MysteryContainer.getProfitPercentage(current));
            mysteryAmmoPrices[current + "_case_price"] = currentContainerPrice;
        }
        this.logger.info("[TheGambler] Finished Generating Mystery Ammo Prices!");
        return mysteryAmmoPrices;
    }
    generateMysteryContainerPrices() {
        this.logger.info("[TheGambler] Generating Mystery Container Prices...");
        let mysteryAmmoPrices = {};
        const mysteryContainerNames = this.MysteryContainer.simulation;
        for (let i = 0; i < mysteryContainerNames.length; i++) {
            const current = this.MysteryContainer.getName(mysteryContainerNames[i]);
            const name = mysteryContainerNames[i];
            const rarities = this.MysteryContainer.getRarities(name);
            const odds = this.MysteryContainer.getOdds(name);
            let currentPrices = this.getMysteryItemPrices(current, current, rarities, this.MysteryContainer.items[this.MysteryContainer.getName(name)]);
            let currentContainerPrice = this.config.price_stock[current + "_case_price"];
            currentContainerPrice = this.runSimulation(name, currentContainerPrice, odds, currentPrices, -1, this.MysteryContainer.getProfitPercentage(name));
            mysteryAmmoPrices[name + "_case_price"] = currentContainerPrice;
        }
        this.logger.info("[TheGambler] Finished Generating Mystery Container Prices!");
        return mysteryAmmoPrices;
    }
    // Generates the average income for a Mystery Container sorted by rarity
    getMysteryItemPrices(name, containerType, rarities, item, amount = 1) {
        const itemHelper = this.container.resolve("ItemHelper");
        let prices = [];
        let sum = 0;
        for (let i = 0; i < rarities.length; i++) {
            let count = 0;
            for (let j = 0; j < item.items[name + rarities[i]].length; j++) {
                let currentPrice;
                const override = this.MysteryContainer.getOverride(containerType, [item.items[name + rarities[i]][j]]);
                if (override != undefined && this.config['mystery_container_override_enable'] == true) {
                    currentPrice = override * amount;
                }
                else {
                    if (Number.isInteger(item.items[name + rarities[i]][j])) { // Number
                        currentPrice = item.items[name + rarities[i]][j];
                    }
                    else { // String
                        const fleaPrice = itemHelper.getDynamicItemPrice(item.items[name + rarities[i]][j]);
                        // Thinking: We always want to use flea price as this is most accurate, but if their is no flea price we must fallback to handbook
                        if (fleaPrice == 0) {
                            currentPrice = itemHelper.getItemMaxPrice(item.items[name + rarities[i]][j]) * amount;
                        }
                        else {
                            currentPrice = fleaPrice * amount;
                        }
                    }
                }
                sum = sum + currentPrice;
                count++;
            }
            sum = sum / count;
            prices.push(sum);
            sum = 0;
        }
        this.MysteryContainer.setRarityAverageProfit(name, prices);
        return prices;
    }
    // Runs a simulation of a Mystery Container that generates the most optimal price for a desired profit percentage
    runSimulation(name, containerPrice, odds, prices, basePercentage, desiredPercentage) {
        let currentContainerPrice = containerPrice;
        let currentPercentage = basePercentage;
        const iterations = 50000; // 50,000 Mystery Containers simulated
        let checker = [];
        while (currentPercentage != desiredPercentage) {
            let spent = 0;
            let sum = 0;
            let profit = 0;
            for (let j = 0; j < iterations; j++) {
                const roll = this.randomUtil.getFloat(0, 100);
                for (let k = 0; k < odds.length; k++) {
                    if (roll <= odds[k]) {
                        sum += prices[k]; // odds and prices have to be index by rarity order (rarest,... ->, common) or else KABOOM
                        break; // This caused me soo much pain :(
                    }
                }
                profit = sum - spent;
                spent = iterations * currentContainerPrice;
                currentPercentage = Math.floor((sum * 100) / spent);
            }
            if (checker.includes(currentContainerPrice)) {
                break; // The final profit percentage may be a little off doing this... Look into in the future...
            }
            else {
                checker.push(currentContainerPrice);
                if (currentPercentage < desiredPercentage) {
                    currentContainerPrice -= 50;
                }
                else if (currentPercentage > desiredPercentage) {
                    currentContainerPrice += 50;
                }
            }
        }
        return currentContainerPrice;
    }
}
exports.Price = Price;
//# sourceMappingURL=Price.js.map