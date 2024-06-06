//Weightless Ammo mod for SPT © 2024 by MNSTR is licensed under CC BY-NC-SA 4.0. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/

import { DependencyContainer } from "tsyringe";

import { ItemHelper } from "@spt-aki/helpers/ItemHelper";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";



class WeightlessAmmo implements IPostDBLoadMod {
    private container: DependencyContainer
    private config = require("../config/config.json")

    public postDBLoad(container: DependencyContainer): void {
        // get database from server
        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        const baseLoad = databaseServer.getTables().globals.config.BaseLoadTime;
        const baseUnload = databaseServer.getTables().globals.config.BaseUnloadTime;
        //Above two lines need to be checked if they are still correct location for BaseLoad & BaseUnload
        const logger = container.resolve<ILogger>("WinstonLogger");



        // Get all the in-memory json found in /assets/database
        const tables: IDatabaseTables = databaseServer.getTables();
        // AMMO ID number 5485a8684bdc2da71d8b4567
        this.container = container;
        const items = this.container.resolve<DatabaseServer>("DatabaseServer").getTables().templates.items;
        const parents = ["5485a8684bdc2da71d8b4567"];
        //Gets all items of type AMMO and sets them to be changed, not the best way to do this since it relies on parent _ids
        for (const i in items) {
            //Checks all items for the AMMO parent id and if true sends to changeBullets
            if (parents.includes(items[i]._parent)) this.changeBullets(items[i])
        }

        if ((this.config.mag_load_speed_as_percent < 0)) { //First check that user didn't make mag load times a negative number
            logger.error("Weightless Ammo: Mag load speed CANNOT be less than zero; check config");
        }

         else if (this.config.enable_mag_load_speed_change ) { //If mag loading changes is enabled, change it based on the config.
            const globals = this.container.resolve<DatabaseServer>("DatabaseServer").getTables().globals.config;
            globals.BaseUnloadTime = baseUnload * (this.config.mag_load_speed_as_percent / 100);
            globals.BaseLoadTime = baseLoad * (this.config.mag_load_speed_as_percent / 100);
        }
    }

    private changeBullets(item: any): void { //If config is set to TRUE and item has a weight value, change it
        if (item._props.Weight && this.config.enable_is_ammo_weightless) {
            item._props.Weight = 0;
        }


        //If config is set to TRUE and item has a stack max size, change it
        if (item._props.StackMaxSize && this.config.enable_stack_max_size_change) {
            item._props.StackMaxSize = this.config.stack_max_size;
        }

        //If config is set to TRUE and item has a stam burn amount, change it
        if (item._props.StaminaBurnPerDamage && this.config.enable_stamina_burn_change) {
            const defaultStamBurn = item._props.StaminaBurnPerDamage; //Get default stamina damage value before changing it
            item._props.StaminaBurnPerDamage = defaultStamBurn * (this.config.stamina_burn_amount_as_percent / 100); //Takes config file amount and divides by 100 for easier math; then multiplies that amount by the default stam burn value
        }
    }





}
module.exports = { mod: new WeightlessAmmo() }

//Weightless Ammo mod for SPT © 2024 by MNSTR is licensed under CC BY-NC-SA 4.0. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/





