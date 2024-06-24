"use strict";
/* eslint-disable @typescript-eslint/naming-convention */
Object.defineProperty(exports, "__esModule", { value: true });
const LogTextColor_1 = require("C:/snapshot/project/obj/models/spt/logging/LogTextColor");
// WTT imports
const WTTInstanceManager_1 = require("./WTTInstanceManager");
const CustomItemService_1 = require("./CustomItemService");
class penguinsdoomtoys {
    Instance = new WTTInstanceManager_1.WTTInstanceManager();
    version;
    modName = "penguinsdoomtoys";
    CustomItemService = new CustomItemService_1.CustomItemService();
    debug = false;
    // Anything that needs done on preAKILoad, place here.
    preAkiLoad(container) {
        // Initialize the instance manager DO NOTHING ELSE BEFORE THIS
        this.Instance.preAkiLoad(container, this.modName);
        this.Instance.debug = this.debug;
        // EVERYTHING AFTER HERE MUST USE THE INSTANCE
        this.CustomItemService.preAkiLoad(this.Instance);
    }
    // Anything that needs done on postDBLoad, place here.
    postDBLoad(container) {
        // Initialize the instance manager DO NOTHING ELSE BEFORE THIS
        this.Instance.postDBLoad(container);
        // EVERYTHING AFTER HERE MUST USE THE INSTANCE
        this.CustomItemService.postDBLoad();
        this.Instance.logger.log(`[${this.modName}] Database: Loading complete.`, LogTextColor_1.LogTextColor.GREEN);
    }
}
module.exports = { mod: new penguinsdoomtoys() };
//# sourceMappingURL=mod.js.map