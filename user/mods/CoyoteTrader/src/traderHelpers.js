"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraderHelper = void 0;
class TraderHelper {
    /**
    * Add profile picture to our trader
    * @param baseJson json file for trader (db/base.json)
    * @param preAkiModLoader mod loader class - used to get the mods file path
    * @param imageRouter image router class - used to register the trader image path so we see their image on trader page
    * @param traderImageName Filename of the trader icon to use
    */
    registerProfileImage(baseJson, modName, preAkiModLoader, imageRouter, traderImageName) {
        // Reference the mod "res" folder
        const imageFilepath = `./${preAkiModLoader.getModPath(modName)}res`;
        // Register a route to point to the profile picture - remember to remove the .jpg from it
        imageRouter.addRoute(baseJson.avatar.replace(".jpg", ""), `${imageFilepath}/${traderImageName}`);
    }
    /**
     * Add record to trader config to set the refresh time of trader in seconds (default is 60 minutes)
     * @param traderConfig trader config to add our trader to
     * @param baseJson json file for trader (db/base.json)
     * @param refreshTimeSecondsMin How many seconds between trader stock refresh min time
     * @param refreshTimeSecondsMax How many seconds between trader stock refresh max time
     */
    setTraderUpdateTime(traderConfig, baseJson, refreshTimeSecondsMin, refreshTimeSecondsMax) {
        // Add refresh time in seconds to config
        const traderRefreshRecord = {
            traderId: baseJson._id,
            seconds: {
                min: refreshTimeSecondsMin,
                max: refreshTimeSecondsMax
            }
        };
        traderConfig.updateTime.push(traderRefreshRecord);
    }
    /**
     * Add our new trader to the database
     * @param traderDetailsToAdd trader details
     * @param tables database
     * @param jsonUtil json utility class
     */
    // rome-ignore lint/suspicious/noExplicitAny: traderDetailsToAdd comes from base.json, so no type
    addTraderToDb(traderDetailsToAdd, tables, jsonUtil) {
        // Add trader to trader table, key is the traders id
        tables.traders[traderDetailsToAdd._id] = {
            assort: this.createAssortTable(), // assorts are the 'offers' trader sells, can be a single item (e.g. carton of milk) or multiple items as a collection (e.g. a gun)
            base: jsonUtil.deserialize(jsonUtil.serialize(traderDetailsToAdd)), // Deserialise/serialise creates a copy of the json and allows us to cast it as an ITraderBase
            questassort: {
                started: {},
                success: {},
                fail: {}
            } // questassort is empty as trader has no assorts unlocked by quests
        };
    }
    /**
     * Create basic data for trader + add empty assorts table for trader
     * @param tables SPT db
     * @param jsonUtil SPT JSON utility class
     * @returns ITraderAssort
     */
    createAssortTable() {
        // Create a blank assort object, ready to have items added
        const assortTable = {
            nextResupply: 0,
            items: [],
            barter_scheme: {},
            loyal_level_items: {}
        };
        return assortTable;
    }
    /**
    * Create a weapon from scratch, ready to be added to trader
    * @returns Item[]
    */
    createGlock() {
        // Create an array ready to hold weapon + all mods
        const Cglock = [];
        // Add the base first
        Cglock.push({
            _id: "CglockBase", // Ids dont matter, as long as they are unique (can use hashUtil.generate() if you dont want to type every id by hand)
            _tpl: "5a7ae0c351dfba0017554310" // This is the weapons tpl, found on: https://db.sp-tarkov.com/search
        });
        // Add barrel
        Cglock.push({
            _id: "Cglockbarrel",
            _tpl: "5a6b60158dc32e000a31138b",
            parentId: "CglockBase", // This is a sub item, you need to define its parent its attached to / inserted into
            slotId: "mod_barrel" // Required for mods, you need to define what 'role' they have
        });
        // Add reciever
        Cglock.push({
            _id: "CglockReciever",
            _tpl: "5a9685b1a2750c0032157104",
            parentId: "CglockBase",
            slotId: "mod_reciever"
        });
        // Add compensator
        Cglock.push({
            _id: "CglockCompensator",
            _tpl: "5a7b32a2e899ef00135e345a",
            parentId: "CglockReciever", // The parent of this mod is the reciever NOT weapon, be careful to get the correct parent
            slotId: "mod_muzzle"
        });
        // Add Pistol grip
        Cglock.push({
            _id: "CglockPistolGrip",
            _tpl: "5a7b4960e899ef197b331a2d",
            parentId: "CglockBase",
            slotId: "mod_pistol_grip"
        });
        // Add front sight
        Cglock.push({
            _id: "CglockRearSight",
            _tpl: "5a6f5d528dc32e00094b97d9",
            parentId: "CglockReciever",
            slotId: "mod_sight_rear"
        });
        // Add rear sight
        Cglock.push({
            _id: "CglockFrontSight",
            _tpl: "5a6f58f68dc32e000a311390",
            parentId: "CglockReciever",
            slotId: "mod_sight_front"
        });
        // Add magazine
        Cglock.push({
            _id: "CglockMagazine",
            _tpl: "630769c4962d0247b029dc60",
            parentId: "CglockBase",
            slotId: "mod_magazine"
        });
        return Cglock;
    }
    //THIS IS WHERE I WOULD PUT SOME FUCKING WEAPONS IN THE TRADER IF I WASNT RETARDED >:(
    //WHY DOESNT THIS FUCKING WORK
    //Big thanks to the SPT discord mod dev channel for telling me "just go look at someone elses" <333 /s
    // public createADAR(): Item[]
    // {
    //     // Create an array ready to hold weapon + all mods
    //     const cADAR: Item[] = [];
    //     // Add the base first
    //     cADAR.push({ // Add the base weapon first
    //         _id: "cADARBase", // Ids dont matter, as long as they are unique (can use hashUtil.generate() if you dont want to type every id by hand)
    //         _tpl: "5c07c60e0db834002330051f" // This is the weapons tpl, found on: https://db.sp-tarkov.com/search
    //     });
    //     cADAR.push({
    //         _id: "cADARUpper",
    //         _tpl:"5c0e2f26d174af02a9625114",
    //         parentId: "cADARBase",
    //         slotId: "mod_reciever"
    //     });
    //     cADAR.push({
    //         _id: "cADARBarrel",
    //         _tpl: "63d3ce0446bd475bcb50f55f",
    //         parentId: "cADARUpper",
    //         slotId: "mod_barrel" 
    //     });
    //     cADAR.push({
    //         _id: "cADARMuzzle",
    //         _tpl:"5d02676dd7ad1a049e54f6dc",
    //         parentId: "cADARBarrel", 
    //         slotId: "mod_muzzle"
    //     });
    //     cADAR.push({
    //         _id: "cADARPistolgrip",
    //         _tpl:"55802f5d4bdc2dac148b458f",
    //         parentId: "cADARBase",
    //         slotId: "mod_pistol_grip"
    //     });
    //     cADAR.push({
    //         _id: "cADARReddot",
    //         _tpl: "570fd721d2720bc5458b4596",
    //         parentId: "cADARUpper",
    //         slotId: "mod_scope"
    //     });
    //     cADAR.push({
    //         _id: "cADARStock",
    //         _tpl: "5c0faeddd174af02a962601f",
    //         parentId: "cADARBase",
    //         slotId: "mod_stock"
    //     });
    //     cADAR.push({
    //         _id: "cADARMag",
    //         _tpl: "55d4887d4bdc2d962f8b4570",
    //         parentId: "cADARBase",
    //         slotId: "mod_magazine"
    //     });
    //     cADAR.push({
    //         _id: "cADARStock2",
    //         _tpl: "5c793fde2e221601da358614",
    //         parentId: "cADARStock",
    //         slotId: "mod_stock"
    //     });
    //     cADAR.push({
    //         _id: "cADARGasBlock",
    //         _tpl: "63d3ce281fe77d0f2801859e",
    //         parentId: "cADARBarrel",
    //         slotId: "mod_gas_block"
    //     });
    //     cADAR.push({
    //         _id: "cADARCharge",
    //         _tpl: "5d44334ba4b9362b346d1948",
    //         parentId: "cADARBase",
    //         slotId: "mod_charge"
    //     });
    //     cADAR.push({
    //         _id: "cADARHandguard",
    //         _tpl: "5ae30db85acfc408fb139a05",
    //         parentId: "cADARUpper",
    //         slotId: "mod_handguard"
    //     });
    //     cADAR.push({
    //         _id: "cADARHandguard2",
    //         _tpl: "637f57a68d137b27f70c4968",
    //         parentId: "cADARHandguard",
    //         slotId: "mod_handguard"
    //     });
    //     return cADAR;
    // }
    // public createMP5k(): Item[]
    // {
    //     // Create an array ready to hold weapon + all mods
    //     const cMP5k: Item[] = [];
    //     // Add the base first
    //     cMP5k.push({ // Add the base weapon first
    //         _id: "cMP5kBase", // Ids dont matter, as long as they are unique (can use hashUtil.generate() if you dont want to type every id by hand)
    //         _tpl: "5d2f0d8048f0356c925bc3b0" // This is the weapons tpl, found on: https://db.sp-tarkov.com/search
    //     });
    //     cMP5k.push({
    //         _id: "cMP5kUpper",
    //         _tpl:"5d2f261548f03576f500e7b7",
    //         parentId: "cMP5kBase",
    //         slotId: "mod_reciever"
    //     });
    //     cMP5k.push({
    //         _id: "cMP5kMount",
    //         _tpl:"5926dad986f7741f82604363",
    //         parentId: "cMP5kUpper", 
    //         slotId: "mod_mount"
    //     });
    //     cMP5k.push({
    //         _id: "cMP5kCock",
    //         _tpl:"5d2f2d5748f03572ec0c0139",
    //         parentId: "cMP5kBase",
    //         slotId: "mod_charge"
    //     });
    //     cMP5k.push({
    //         _id: "cMP5kReddot",
    //         _tpl: "584984812459776a704a82a6",
    //         parentId: "cMP5kMount",
    //         slotId: "mod_scope"
    //     });
    //     cMP5k.push({
    //         _id: "cMP5kSightRear",
    //         _tpl: "5926d2be86f774134d668e4e",
    //         parentId: "cMP5kBase",
    //         slotId: "mod_sight_rear"
    //     });
    //     cMP5k.push({
    //         _id: "cMP5kMag",
    //         _tpl: "5926c3b286f774640d189b6b",
    //         parentId: "cMP5kBase",
    //         slotId: "mod_magazine"
    //     });
    //     cMP5k.push({
    //         _id: "cMP5kStock",
    //         _tpl: "5d2f25bc48f03502573e5d85",
    //         parentId: "cMP5kUpper",
    //         slotId: "mod_stock"
    //     });
    //     cMP5k.push({
    //         _id: "cMP5kHandguard",
    //         _tpl: "5d2f259b48f0355a844acd74",
    //         parentId: "cMP5kUpper",
    //         slotId: "mod_handguard"
    //     });
    //     return cMP5k;
    // }
    /**
    * Add traders name/location/description to the locale table
    * @param baseJson json file for trader (db/base.json)
    * @param tables database tables
    * @param fullName Complete name of trader
    * @param firstName First name of trader
    * @param nickName Nickname of trader
    * @param location Location of trader (e.g. "Here in the cat shop")
    * @param description Description of trader
    */
    addTraderToLocales(baseJson, tables, fullName, firstName, nickName, location, description) {
        // For each language, add locale for the new trader
        const locales = Object.values(tables.locales.global);
        for (const locale of locales) {
            locale[`${baseJson._id} FullName`] = fullName;
            locale[`${baseJson._id} FirstName`] = firstName;
            locale[`${baseJson._id} Nickname`] = nickName;
            locale[`${baseJson._id} Location`] = location;
            locale[`${baseJson._id} Description`] = description;
        }
    }
}
exports.TraderHelper = TraderHelper;
//# sourceMappingURL=traderHelpers.js.map