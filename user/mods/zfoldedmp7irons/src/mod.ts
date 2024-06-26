/* eslint-disable @typescript-eslint/naming-convention */

import * as fs from "fs";
import * as path from "path";
import { ConfigTypes } from "@spt-aki/models/enums/ConfigTypes";
import { DependencyContainer } from "tsyringe";
import { ILostOnDeathConfig } from "@spt-aki/models/spt/config/ILostOnDeathConfig";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { IPreAkiLoadMod } from "@spt-aki/models/external/IPreAkiLoadMod";
import { LogTextColor } from "@spt-aki/models/spt/logging/LogTextColor";
import * as config from "../config/config.json";

// WTT imports
import { WTTInstanceManager } from "./WTTInstanceManager";

// Boss imports
import { PackNStrapItemService } from "./PackNStrapItemService";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
import { CustomHeadService } from "./CustomHeadService";

class PackNStrap
implements IPreAkiLoadMod, IPostDBLoadMod
{
    private Instance: WTTInstanceManager = new WTTInstanceManager();
    private version: string;
    private modName = "Folded MP7 Irons";

                        
    private PackNStrapItemService: PackNStrapItemService = new PackNStrapItemService();

    debug = false;

    public preAkiLoad(container: DependencyContainer): void 
    {
        this.Instance.preAkiLoad(container, this.modName);
        this.Instance.debug = this.debug;

        this.PackNStrapItemService.preAkiLoad(this.Instance);
    }

    postDBLoad(container: DependencyContainer): void 
    {
                // get database from server
                const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");


        

                // Get all the in-memory json found in /assets/database
                const tables: IDatabaseTables = databaseServer.getTables();

        this.Instance.postDBLoad(container);
        this.PackNStrapItemService.postDBLoad();
        this.Instance.logger.log(
            `[${this.modName}] Database: Loading complete.`,
            LogTextColor.GREEN
        );
        if (config.loseArmbandOnDeath)
        {
            const dblostondeathConfig = this.Instance.configServer.getConfig<ILostOnDeathConfig>(ConfigTypes.LOST_ON_DEATH)
            dblostondeathConfig.equipment.ArmBand = true;
        }

        //Adding your ammo to the filters of the weapon mods above it,

    }
}

module.exports = { mod: new PackNStrap() };
