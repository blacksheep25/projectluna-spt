import { DependencyContainer } from "tsyringe";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { JsonUtil } from "@spt-aki/utils/JsonUtil";
import { Heads } from "../src/Heads";


class WH implements IPostDBLoadMod
{
    public postDBLoad(container: DependencyContainer): void {
        const db = container.resolve<DatabaseServer>("DatabaseServer");
        const jsonUtil = container.resolve<JsonUtil>("JsonUtil");
        const head = new Heads(db, jsonUtil);
        head.usec_head_4_combatpaint_1();
        head.soap_combatpaint();
        head.statham_head();
        head.snow_head();
        head.usec_head_eric_paint_1();
        head.usec_head_eric_injured();
    }
}

module.exports = { mod: new WH() }