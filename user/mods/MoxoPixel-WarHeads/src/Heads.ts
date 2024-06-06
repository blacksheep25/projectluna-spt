
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { JsonUtil } from "@spt-aki/utils/JsonUtil";

export class Heads {

    private db:DatabaseServer;
    private jsonUtil:JsonUtil;

    constructor(db:DatabaseServer, jsonUtil:JsonUtil) 
    {
        this.db = db;
        this.jsonUtil = jsonUtil;
    }

    public usec_head_4_combatpaint_1():void 
    {
        const itemClone = "5fdb4139e4ed5b5ea251e4ed";
        const itemNew = "WH_usec_head_4_combatpaint_1";
        const itemName = "Combat Paint";
        const list = this.db.getTables().templates.customization;
        const local = this.db.getTables().locales.global;

        const head = this.jsonUtil.clone(list[itemClone]);

        head._id = itemNew;
        head._name = itemName;
        head._props.Name = itemName;
        head._props.ShortName = itemName;
        head._props.Description = itemName;
        head._props.Prefab.path = "usec_head_4_combatpaint.bundle";
        head._props.Side = ["Usec","Bear"];

        list[itemNew] = head;
        this.db.getTables().templates.character.push(itemNew);

        for (const lang in local)
        {
            local[lang]["WH_usec_head_4_combatpaint_1 Name"] = "Combat Paint"
        }
    }
    public soap_combatpaint():void 
    {
        const itemClone = "5fdb4139e4ed5b5ea251e4ed";
        const itemNew = "WH_soap_combatpaint";
        const itemName = "Soap";
        const list = this.db.getTables().templates.customization;
        const local = this.db.getTables().locales.global;

        const head = this.jsonUtil.clone(list[itemClone]);

        head._id = itemNew;
        head._name = itemName;
        head._props.Name = itemName;
        head._props.ShortName = itemName;
        head._props.Description = itemName;
        head._props.Prefab.path = "combat_head_1.bundle";
        head._props.Side = ["Usec","Bear"];

        list[itemNew] = head;
        this.db.getTables().templates.character.push(itemNew);

        for (const lang in local)
        {
            local[lang]["WH_soap_combatpaint Name"] = "Soap"
        }
    }
    public statham_head():void 
    {
        const itemClone = "5fdb4139e4ed5b5ea251e4ed";
        const itemNew = "WH_statham_head";
        const itemName = "Statham";
        const list = this.db.getTables().templates.customization;
        const local = this.db.getTables().locales.global;

        const head = this.jsonUtil.clone(list[itemClone]);

        head._id = itemNew;
        head._name = itemName;
        head._props.Name = itemName;
        head._props.ShortName = itemName;
        head._props.Description = itemName;
        head._props.Prefab.path = "head_3.bundle";
        head._props.Side = ["Usec","Bear"];

        list[itemNew] = head;
        this.db.getTables().templates.character.push(itemNew);

        for (const lang in local)
        {
            local[lang]["WH_statham_head Name"] = "Statham"
        }
    }
    public snow_head():void 
    {
        const itemClone = "5fdb4139e4ed5b5ea251e4ed";
        const itemNew = "WH_snow_head";
        const itemName = "Snow";
        const list = this.db.getTables().templates.customization;
        const local = this.db.getTables().locales.global;

        const head = this.jsonUtil.clone(list[itemClone]);

        head._id = itemNew;
        head._name = itemName;
        head._props.Name = itemName;
        head._props.ShortName = itemName;
        head._props.Description = itemName;
        head._props.Prefab.path = "head_4.bundle";
        head._props.Side = ["Usec","Bear"];

        list[itemNew] = head;
        this.db.getTables().templates.character.push(itemNew);

        for (const lang in local)
        {
            local[lang]["WH_snow_head Name"] = "Snow"
        }
    }
    public usec_head_eric_paint_1():void 
    {
        const itemClone = "5fdb4139e4ed5b5ea251e4ed";
        const itemNew = "WH_usec_head_eric_paint_1";
        const itemName = "Combat Paint 2";
        const list = this.db.getTables().templates.customization;
        const local = this.db.getTables().locales.global;

        const head = this.jsonUtil.clone(list[itemClone]);

        head._id = itemNew;
        head._name = itemName;
        head._props.Name = itemName;
        head._props.ShortName = itemName;
        head._props.Description = itemName;
        head._props.Prefab.path = "usec_head_eric_paint_1.bundle";
        head._props.Side = ["Usec","Bear"];

        list[itemNew] = head;
        this.db.getTables().templates.character.push(itemNew);

        for (const lang in local)
        {
            local[lang]["WH_usec_head_eric_paint_1 Name"] = "Combat Paint 2"
        }
    },
    public usec_head_eric_injured():void 
    {
        const itemClone = "5fdb4139e4ed5b5ea251e4ed";
        const itemNew = "WH_usec_head_eric_injured";
        const itemName = "Injured Idiot";
        const list = this.db.getTables().templates.customization;
        const local = this.db.getTables().locales.global;

        const head = this.jsonUtil.clone(list[itemClone]);

        head._id = itemNew;
        head._name = itemName;
        head._props.Name = itemName;
        head._props.ShortName = itemName;
        head._props.Description = itemName;
        head._props.Prefab.path = "usec_head_eric_injured.bundle";
        head._props.Side = ["Usec","Bear"];

        list[itemNew] = head;
        this.db.getTables().templates.character.push(itemNew);

        for (const lang in local)
        {
            local[lang]["WH_usec_head_eric_injured Name"] = "Injured Idiot"
        }
    }
}