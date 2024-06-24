/* eslint-disable @typescript-eslint/naming-convention */

import * as fs from "fs";
import * as path from "path";

import { DependencyContainer } from "tsyringe";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { IPreAkiLoadMod } from "@spt-aki/models/external/IPreAkiLoadMod";
import { LogTextColor } from "@spt-aki/models/spt/logging/LogTextColor";

// WTT imports
import { WTTInstanceManager } from "./WTTInstanceManager";

import { CustomItemService } from "./CustomItemService";

class penguinsdoomtoys 
    implements IPreAkiLoadMod, IPostDBLoadMod {
    private Instance: WTTInstanceManager = new WTTInstanceManager();
    private version: string;
    private modName = "penguinsdoomtoys";

    private CustomItemService: CustomItemService = new CustomItemService();
    debug = false;

    // Anything that needs done on preAKILoad, place here.
    public preAkiLoad(container: DependencyContainer): void {
        // Initialize the instance manager DO NOTHING ELSE BEFORE THIS
        this.Instance.preAkiLoad(container, this.modName);
        this.Instance.debug = this.debug;
        // EVERYTHING AFTER HERE MUST USE THE INSTANCE

        this.CustomItemService.preAkiLoad(this.Instance);

    }

    // Anything that needs done on postDBLoad, place here.
    postDBLoad(container: DependencyContainer): void {
        // Initialize the instance manager DO NOTHING ELSE BEFORE THIS
        this.Instance.postDBLoad(container);
        // EVERYTHING AFTER HERE MUST USE THE INSTANCE

        this.CustomItemService.postDBLoad();
        this.Instance.logger.log(
            `[${this.modName}] Database: Loading complete.`,
            LogTextColor.GREEN
        );
    }




}

module.exports = { mod: new penguinsdoomtoys() };
