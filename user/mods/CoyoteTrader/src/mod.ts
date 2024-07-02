import { DependencyContainer } from "tsyringe";

// SPT types
import { IPreAkiLoadMod } from "@spt-aki/models/external/IPreAkiLoadMod";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { PreAkiModLoader } from "@spt-aki/loaders/PreAkiModLoader";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { ImageRouter } from "@spt-aki/routers/ImageRouter";
import { ConfigServer } from "@spt-aki/servers/ConfigServer";
import { ConfigTypes } from "@spt-aki/models/enums/ConfigTypes";
import { ITraderConfig } from "@spt-aki/models/spt/config/ITraderConfig";
import { IRagfairConfig } from "@spt-aki/models/spt/config/IRagfairConfig";
import { JsonUtil } from "@spt-aki/utils/JsonUtil";

// New trader settings
import * as baseJson from "../db/base.json";
import { TraderHelper } from "./traderHelpers";
import { FluentAssortConstructor as FluentAssortCreator } from "./fluentTraderAssortCreator";
import { Money } from "@spt-aki/models/enums/Money";
import { Traders } from "@spt-aki/models/enums/Traders";
import { HashUtil } from "@spt-aki/utils/HashUtil";
import { LogTextColor } from "@spt-aki/models/spt/logging/LogTextColor";

class Coyote implements IPreAkiLoadMod, IPostDBLoadMod
{
    private mod: string
    private logger: ILogger
    private traderHelper: TraderHelper
    private fluentAssortCreator: FluentAssortCreator

    constructor() {
        this.mod = "CoyoteTrader"; // Set name of mod so we can log it to console later
    }

    /**
     * Some work needs to be done prior to SPT code being loaded, registering the profile image + setting trader update time inside the trader config json
     * @param container Dependency container
     */
    public preAkiLoad(container: DependencyContainer): void
    {
        // Get a logger
        this.logger = container.resolve<ILogger>("WinstonLogger");
        this.logger.debug(`[${this.mod}] preAki Loading... `);

        // Get SPT code/data we need later
        const preAkiModLoader: PreAkiModLoader = container.resolve<PreAkiModLoader>("PreAkiModLoader");
        const imageRouter: ImageRouter = container.resolve<ImageRouter>("ImageRouter");
        const hashUtil: HashUtil = container.resolve<HashUtil>("HashUtil");
        const configServer = container.resolve<ConfigServer>("ConfigServer");
        const traderConfig: ITraderConfig = configServer.getConfig<ITraderConfig>(ConfigTypes.TRADER);
        const ragfairConfig = configServer.getConfig<IRagfairConfig>(ConfigTypes.RAGFAIR);

        // Create helper class and use it to register our traders image/icon + set its stock refresh time
        this.traderHelper = new TraderHelper();
        this.fluentAssortCreator = new FluentAssortCreator(hashUtil, this.logger);
        this.traderHelper.registerProfileImage(baseJson, this.mod, preAkiModLoader, imageRouter, "coyote.jpg");
        this.traderHelper.setTraderUpdateTime(traderConfig, baseJson, 3600, 4000);

        // Add trader to trader enum
        Traders[baseJson._id] = baseJson._id;

        // Add trader to flea market
        ragfairConfig.traders[baseJson._id] = true;

        this.logger.debug(`[${this.mod}] preAki Loaded`);
    }
    
    /**
     * Majority of trader-related work occurs after the aki database has been loaded but prior to SPT code being run
     * @param container Dependency container
     */
    public postDBLoad(container: DependencyContainer): void
    {
        this.logger.debug(`[${this.mod}] postDb Loading... `);

        // Resolve SPT classes we'll use
        const databaseServer: DatabaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        const configServer: ConfigServer = container.resolve<ConfigServer>("ConfigServer");
        const jsonUtil: JsonUtil = container.resolve<JsonUtil>("JsonUtil");

        // Get a reference to the database tables
        const tables = databaseServer.getTables();

        // Add new trader to the trader dictionary in DatabaseServer - has no assorts (items) yet
        this.traderHelper.addTraderToDb(baseJson, tables, jsonUtil);
        
        // Add milk
        //const MILK_ID = "575146b724597720a27126d5"; // Can find item ids in `database\templates\items.json` or with https://db.sp-tarkov.com/search
        //this.fluentAssortCreator.createSingleAssortItem(MILK_ID)
                                    //.addStackCount(200)
                                    //.addBuyRestriction(10)
                                    //.addMoneyCost(Money.ROUBLES, 2000)
                                    //.addLoyaltyLevel(1)
                                    //.export(tables.traders[baseJson._id]);

        // Add 3x bitcoin + salewa for milk barter
        //const BITCOIN_ID = "59faff1d86f7746c51718c9c"
        //const SALEWA_ID = "544fb45d4bdc2dee738b4568";
        //this.fluentAssortCreator.createSingleAssortItem(MILK_ID)
                                    //.addStackCount(100)
                                    //.addBarterCost(BITCOIN_ID, 3)
                                    //.addBarterCost(SALEWA_ID, 1)
                                    //.addLoyaltyLevel(1)
                                    //.export(tables.traders[baseJson._id]);


        // Add glock as money purchase
        this.fluentAssortCreator.createComplexAssortItem(this.traderHelper.createGlock())
                                    .addUnlimitedStackCount()
                                    .addMoneyCost(Money.DOLLARS, 250)
                                    .addBuyRestriction(3)
                                    .addLoyaltyLevel(2)
                                    .export(tables.traders[baseJson._id]);

        // Add mp133 preset as mayo barter
        //this.fluentAssortCreator.createComplexAssortItem(tables.globals.ItemPresets["584148f2245977598f1ad387"]._items)
                                    //.addStackCount(200)
                                    //.addBarterCost("5bc9b156d4351e00367fbce9", 1)
                                    //.addBuyRestriction(3)
                                    //.addLoyaltyLevel(1)
                                    //.export(tables.traders[baseJson._id]);

        const c_GSIGFLARE_ID = "6217726288ed9f0845317459"; // adds green signal flare
        this.fluentAssortCreator.createSingleAssortItem(c_GSIGFLARE_ID)
                                    .addStackCount(100)
                                    .addBuyRestriction(10)
                                    .addMoneyCost(Money.DOLLARS, 100)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);                            

        const c_WIRES_ID = "5c06779c86f77426e00dd782"; // adds wires
        this.fluentAssortCreator.createSingleAssortItem(c_WIRES_ID)
                                    .addStackCount(20)
                                    .addBuyRestriction(10)
                                    .addMoneyCost(Money.DOLLARS, 125)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);                            
         
        const c_THERM_ID = "60391a8b3364dc22b04d0ce5"; // adds thermite can
        this.fluentAssortCreator.createSingleAssortItem(c_THERM_ID)
                                    .addStackCount(10)
                                    .addBuyRestriction(2)
                                    .addMoneyCost(Money.DOLLARS, 280)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);                            
                                                        
        const c_TNT_ID = "60391b0fb847c71012789415"; // adds tnt brick
        this.fluentAssortCreator.createSingleAssortItem(c_TNT_ID)
                                    .addStackCount(10)
                                    .addBuyRestriction(3)
                                    .addMoneyCost(Money.DOLLARS, 200)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);                            

        const c_LEATHER_ID = "544fb5454bdc2df8738b456a"; // adds leatherman
        this.fluentAssortCreator.createSingleAssortItem(c_LEATHER_ID)
                                    .addStackCount(10)
                                    .addBuyRestriction(1)
                                    .addMoneyCost(Money.DOLLARS, 190)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);                            
                                                                             
        const c_ELITE_ID = "5af04b6486f774195a3ebb49"; // adds elite pliers
        this.fluentAssortCreator.createSingleAssortItem(c_ELITE_ID)
                                    .addStackCount(10)
                                    .addBuyRestriction(2)
                                    .addMoneyCost(Money.DOLLARS, 250)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);                            
                                                                              
        const c_ROUND_ID = "5d1b31ce86f7742523398394"; // adds round pliers
        this.fluentAssortCreator.createSingleAssortItem(c_ROUND_ID)
                                    .addStackCount(10)
                                    .addBuyRestriction(2)
                                    .addMoneyCost(Money.DOLLARS, 160)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);                            
                                                                             
        const c_PLIERS_ID = "590c2b4386f77425357b6123"; // adds pliers
        this.fluentAssortCreator.createSingleAssortItem(c_PLIERS_ID)
                                    .addStackCount(10)
                                    .addBuyRestriction(2)
                                    .addMoneyCost(Money.DOLLARS, 135)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);                            
                                                                             
        const c_KITE_ID = "590c5a7286f7747884343aea"; // adds gunpoweder kite
        this.fluentAssortCreator.createSingleAssortItem(c_KITE_ID)
                                    .addStackCount(20)
                                    .addBuyRestriction(3)
                                    .addMoneyCost(Money.DOLLARS, 215)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);                            
                                                                             
        const c_BLEACH_ID = "59e3556c86f7741776641ac2"; // adds bleach
        this.fluentAssortCreator.createSingleAssortItem(c_BLEACH_ID)
                                    .addStackCount(30)
                                    .addBuyRestriction(2)
                                    .addMoneyCost(Money.DOLLARS, 90)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);  

        const c_MARKER_ID = "5991b51486f77447b112d44f"; // adds marker
        this.fluentAssortCreator.createSingleAssortItem(c_MARKER_ID)
                                    .addUnlimitedStackCount()
                                    .addBuyRestriction(10)
                                    .addMoneyCost(Money.DOLLARS, 130)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);                             
                                    
        
        const c_SMOKEBAL_ID = "5fd8d28367cb5e077335170f"; // adds smoke balaclava
        this.fluentAssortCreator.createSingleAssortItem(c_SMOKEBAL_ID)
                                    .addStackCount(30)
                                    .addBuyRestriction(4)
                                    .addMoneyCost(Money.DOLLARS, 240)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);

        const c_HIPSTER_ID = "5aa2b9aee5b5b00015693121"; // adds hipster glasses
        this.fluentAssortCreator.createSingleAssortItem(c_HIPSTER_ID)
                                    .addStackCount(30)
                                    .addBuyRestriction(4)
                                    .addMoneyCost(Money.DOLLARS, 240)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);

        const c_AVIATOR_ID = "5d6d2ef3a4b93618084f58bd"; // adds aviator glasses
        this.fluentAssortCreator.createSingleAssortItem(c_AVIATOR_ID)
                                    .addStackCount(30)
                                    .addBuyRestriction(4)
                                    .addMoneyCost(Money.DOLLARS, 110)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);

        
        //God Im so fucking stupid what am I even doing.
        // this.fluentAssortCreator.createComplexAssortItem(this.traderHelper.createADAR())
        //                             .addStackCount(10)
        //                             .addMoneyCost(Money.DOLLARS, 985)
        //                             .addBuyRestriction(2)
        //                             .addLoyaltyLevel(1)
        //                             .export(tables.traders[baseJson._id]);

        // this.fluentAssortCreator.createComplexAssortItem(this.traderHelper.createMP5k())
        //                             .addStackCount(20)
        //                             .addMoneyCost(Money.DOLLARS, 460)
        //                             .addBuyRestriction(3)
        //                             .addLoyaltyLevel(1)
        //                             .export(tables.traders[baseJson._id]);

        
        //LLevel2
        const c_FUZE_ID = "5e2af51086f7746d3f3c3402"; // adds fuze
        this.fluentAssortCreator.createSingleAssortItem(c_FUZE_ID)
                                    .addStackCount(30)
                                    .addBuyRestriction(4)
                                    .addMoneyCost(Money.DOLLARS, 205)
                                    .addLoyaltyLevel(2)
                                    .export(tables.traders[baseJson._id]);

        const c_HAWK_ID = "5d6fc87386f77449db3db94e"; // adds gunpowder hawk
        this.fluentAssortCreator.createSingleAssortItem(c_HAWK_ID)
                                    .addStackCount(25)
                                    .addBuyRestriction(3)
                                    .addMoneyCost(Money.DOLLARS, 180)
                                    .addLoyaltyLevel(2)
                                    .export(tables.traders[baseJson._id]);

        const c_EAGLE_ID = "5d6fc78386f77449d825f9dc"; // adds gunpowder eagle
        this.fluentAssortCreator.createSingleAssortItem(c_EAGLE_ID)
                                    .addStackCount(25)
                                    .addBuyRestriction(3)
                                    .addMoneyCost(Money.DOLLARS, 430)
                                    .addLoyaltyLevel(2)
                                    .export(tables.traders[baseJson._id]);

        const c_EFUEL_ID = "5d1b371186f774253763a656"; // adds epeditionary fuel
        this.fluentAssortCreator.createSingleAssortItem(c_EFUEL_ID)
                                    .addStackCount(10)
                                    .addBuyRestriction(2)
                                    .addMoneyCost(Money.DOLLARS, 1010)
                                    .addLoyaltyLevel(2)
                                    .export(tables.traders[baseJson._id]);

        const c_KLEAN_ID = "5bc9b355d4351e6d1509862a"; // adds klean lube
        this.fluentAssortCreator.createSingleAssortItem(c_KLEAN_ID)
                                    .addStackCount(20)
                                    .addBuyRestriction(2)
                                    .addMoneyCost(Money.DOLLARS, 185)
                                    .addLoyaltyLevel(2)
                                    .export(tables.traders[baseJson._id]);

        const c_M67_ID = "58d3db5386f77426186285a0"; // adds m67 grenade
        this.fluentAssortCreator.createSingleAssortItem(c_M67_ID)
                                    .addStackCount(50)
                                    .addBuyRestriction(4)
                                    .addMoneyCost(Money.DOLLARS, 200)
                                    .addLoyaltyLevel(2)
                                    .export(tables.traders[baseJson._id]);

        const c_RGD5_ID = "5448be9a4bdc2dfd2f8b456a"; // adds RGD5 grenade
        this.fluentAssortCreator.createSingleAssortItem(c_RGD5_ID)
                                    .addStackCount(50)
                                    .addBuyRestriction(5)
                                    .addMoneyCost(Money.DOLLARS, 150)
                                    .addLoyaltyLevel(2)
                                    .export(tables.traders[baseJson._id]);

        const c_NADECASE_ID = "5e2af55f86f7746d4159f07c"; // adds grenade case
        this.fluentAssortCreator.createSingleAssortItem(c_NADECASE_ID)
                                    .addStackCount(5)
                                    .addBuyRestriction(1)
                                    .addMoneyCost(Money.DOLLARS, 2100)
                                    .addLoyaltyLevel(2)
                                    .export(tables.traders[baseJson._id]);

        const c_MUSTACHE_ID = "5bd073a586f7747e6f135799"; // adds mustache
        this.fluentAssortCreator.createSingleAssortItem(c_MUSTACHE_ID)
                                    .addStackCount(10)
                                    .addBuyRestriction(2)
                                    .addMoneyCost(Money.DOLLARS, 140)
                                    .addLoyaltyLevel(2)
                                    .export(tables.traders[baseJson._id]);

        const c_HOLODILNICK_ID = "5c093db286f7740a1b2617e3"; // adds holodilnick thermal bag
        this.fluentAssortCreator.createSingleAssortItem(c_HOLODILNICK_ID)
                                    .addStackCount(5)
                                    .addBuyRestriction(1)
                                    .addMoneyCost(Money.DOLLARS, 2220)
                                    .addLoyaltyLevel(2)
                                    .export(tables.traders[baseJson._id]);

        const c_TRIZIP_ID = "545cdae64bdc2d39198b4568"; // adds Trizip
        this.fluentAssortCreator.createSingleAssortItem(c_TRIZIP_ID)
                                    .addStackCount(5)
                                    .addBuyRestriction(1)
                                    .addMoneyCost(Money.DOLLARS, 450)
                                    .addLoyaltyLevel(2)
                                    .export(tables.traders[baseJson._id]);

        const c_BETA2_ID = "5b44c6ae86f7742d1627baea"; // adds Beta2
        this.fluentAssortCreator.createSingleAssortItem(c_BETA2_ID)
                                    .addStackCount(5)
                                    .addBuyRestriction(1)
                                    .addMoneyCost(Money.DOLLARS, 450)
                                    .addLoyaltyLevel(2)
                                    .export(tables.traders[baseJson._id]);

        const c_MRE_ID = "590c5f0d86f77413997acfab"; // adds MRE
        this.fluentAssortCreator.createSingleAssortItem(c_MRE_ID)
                                    .addStackCount(30)
                                    .addBuyRestriction(5)
                                    .addMoneyCost(Money.DOLLARS, 130)
                                    .addLoyaltyLevel(2)
                                    .export(tables.traders[baseJson._id]);

        const c_EWR_ID = "60098b1705871270cd5352a1"; // adds Water ration
        this.fluentAssortCreator.createSingleAssortItem(c_EWR_ID)
                                    .addStackCount(30)
                                    .addBuyRestriction(5)
                                    .addMoneyCost(Money.DOLLARS, 130)
                                    .addLoyaltyLevel(2)
                                    .export(tables.traders[baseJson._id]);


        //LLevel3
        const c_THICCCASE_ID = "5c0a840b86f7742ffa4f2482"; // adds THICC Case
        this.fluentAssortCreator.createSingleAssortItem(c_THICCCASE_ID)
                                    .addStackCount(2)
                                    .addBuyRestriction(1)
                                    .addMoneyCost(Money.DOLLARS, 96000)
                                    .addLoyaltyLevel(3)
                                    .export(tables.traders[baseJson._id]);

        const c_MONEYCASE_ID = "59fb016586f7746d0d4b423a"; // adds MONEY Case
        this.fluentAssortCreator.createSingleAssortItem(c_MONEYCASE_ID)
                                    .addStackCount(4)
                                    .addBuyRestriction(2)
                                    .addMoneyCost(Money.DOLLARS, 2700)
                                    .addLoyaltyLevel(3)
                                    .export(tables.traders[baseJson._id]);

        const c_JUNKBOX_ID = "5b7c710788a4506dec015957"; // adds junkbox
        this.fluentAssortCreator.createSingleAssortItem(c_JUNKBOX_ID)
                                    .addStackCount(10)
                                    .addBuyRestriction(2)
                                    .addMoneyCost(Money.DOLLARS, 7000)
                                    .addLoyaltyLevel(3)
                                    .export(tables.traders[baseJson._id]);

        const c_M406_ID = "5ede4739e0350d05467f73e8"; // adds M406 GL grenade
        this.fluentAssortCreator.createSingleAssortItem(c_M406_ID)
                                    .addStackCount(24)
                                    .addBuyRestriction(12)
                                    .addMoneyCost(Money.DOLLARS, 240)
                                    .addLoyaltyLevel(3)
                                    .export(tables.traders[baseJson._id]);

        const c_GAC1_ID = "656fae5f7c2d57afe200c0d7"; // adds GAC 3s15m lvl5 plate
        this.fluentAssortCreator.createSingleAssortItem(c_GAC1_ID)
                                    .addStackCount(8)
                                    .addBuyRestriction(2)
                                    .addMoneyCost(Money.DOLLARS, 365)
                                    .addLoyaltyLevel(3)
                                    .export(tables.traders[baseJson._id]);

        const c_GRANIT1_ID = "65573fa5655447403702a816"; // adds Granit Br4 lvl 5 plate
        this.fluentAssortCreator.createSingleAssortItem(c_GRANIT1_ID)
                                    .addStackCount(8)
                                    .addBuyRestriction(2)
                                    .addMoneyCost(Money.DOLLARS, 365)
                                    .addLoyaltyLevel(3)
                                    .export(tables.traders[baseJson._id]);

        const c_TROOPER35_ID = "639346cc1c8f182ad90c8972"; // adds Trooper 35 Backpack
        this.fluentAssortCreator.createSingleAssortItem(c_TROOPER35_ID)
                                    .addStackCount(5)
                                    .addBuyRestriction(1)
                                    .addMoneyCost(Money.DOLLARS, 410)
                                    .addLoyaltyLevel(3)
                                    .export(tables.traders[baseJson._id]);

        //LLevel4
        const c_WEPCASE_ID = "59fb023c86f7746d0d4b423c"; // adds Weapon Case
        this.fluentAssortCreator.createSingleAssortItem(c_WEPCASE_ID)
                                    .addStackCount(5)
                                    .addBuyRestriction(1)
                                    .addMoneyCost(Money.DOLLARS, 24000)
                                    .addLoyaltyLevel(4)
                                    .export(tables.traders[baseJson._id]);

        const c_KEYCARDHOLDER_ID = "619cbf9e0a7c3a1a2731940a"; // adds Keycard Holder
        this.fluentAssortCreator.createSingleAssortItem(c_KEYCARDHOLDER_ID)
                                    .addStackCount(5)
                                    .addBuyRestriction(1)
                                    .addMoneyCost(Money.DOLLARS, 1650)
                                    .addLoyaltyLevel(4)
                                    .export(tables.traders[baseJson._id]);

        const c_KEYTOOL_ID = "59fafd4b86f7745ca07e1232"; // adds Key tool
        this.fluentAssortCreator.createSingleAssortItem(c_KEYTOOL_ID)
                                    .addStackCount(10)
                                    .addBuyRestriction(2)
                                    .addMoneyCost(Money.DOLLARS, 3300)
                                    .addLoyaltyLevel(4)
                                    .export(tables.traders[baseJson._id]);

        const c_338MAGNUMAP_ID = "5fc382a9d724d907e2077dab"; // adds 338 Magnum AP 
        this.fluentAssortCreator.createSingleAssortItem(c_338MAGNUMAP_ID)
                                    .addStackCount(120)
                                    .addBuyRestriction(30)
                                    .addMoneyCost(Money.DOLLARS, 15)
                                    .addLoyaltyLevel(4)
                                    .export(tables.traders[baseJson._id]);

        const c_GAC2_ID = "656faf0ca0dce000a2020f77"; // adds GAC 4sss2 lvl 6 plate
        this.fluentAssortCreator.createSingleAssortItem(c_GAC2_ID)
                                    .addStackCount(8)
                                    .addBuyRestriction(2)
                                    .addMoneyCost(Money.DOLLARS, 450)
                                    .addLoyaltyLevel(4)
                                    .export(tables.traders[baseJson._id]);

        const c_GRANIT2_ID = "64afc71497cf3a403c01ff38"; // adds Granit Br5 lvl 6 plate
        this.fluentAssortCreator.createSingleAssortItem(c_GRANIT2_ID)
                                    .addStackCount(8)
                                    .addBuyRestriction(2)
                                    .addMoneyCost(Money.DOLLARS, 450)
                                    .addLoyaltyLevel(4)
                                    .export(tables.traders[baseJson._id]);

        const c_68HYBRID_ID = "6529243824cbe3c74a05e5c1"; // adds 6.8 Hybrid
        this.fluentAssortCreator.createSingleAssortItem(c_68HYBRID_ID)
                                    .addStackCount(160)
                                    .addBuyRestriction(80)
                                    .addMoneyCost(Money.DOLLARS, 7)
                                    .addLoyaltyLevel(4)
                                    .export(tables.traders[baseJson._id]);

        const c_300AP_ID = "5fd20ff893a8961fc660a954"; // adds .300 Blackout AP
        this.fluentAssortCreator.createSingleAssortItem(c_300AP_ID)
                                    .addStackCount(160)
                                    .addBuyRestriction(80)
                                    .addMoneyCost(Money.DOLLARS, 6)
                                    .addLoyaltyLevel(4)
                                    .export(tables.traders[baseJson._id]);
                                                                   
        // Add trader to locale file, ensures trader text shows properly on screen
        // WARNING: adds the same text to ALL locales (e.g. chinese/french/english)
        this.traderHelper.addTraderToLocales(baseJson, tables, baseJson.name, "Coyote", baseJson.nickname, baseJson.location, "After a string of high profile robberies, Coyote fled to Tarkov to escape the law. Now he operates as a taskmaster, leveraging his criminal expertise to coordinate daring missions and high-stakes operations for those brave enough to work with him.");
        
        this.logger.debug(`[${this.mod}] postDb Loaded`);
        this.logger.log("********Coyote has entered the zone!********",LogTextColor.GREEN)
    }
}

module.exports = { mod: new Coyote() }