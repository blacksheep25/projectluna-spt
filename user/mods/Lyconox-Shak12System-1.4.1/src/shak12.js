"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let db;
class ShAK12ex {
    container;
    postAkiLoad(container) {
        this.container = container;
    }
    postDBLoad(container) {
        const jsonUtil = container.resolve("JsonUtil");
        const databaseServer = container.resolve("DatabaseServer");
        const tables = databaseServer.getTables();
        const locales = Object.values(tables.locales.global);
        const items = tables.templates.items;
        const handbook = tables.templates.handbook;
        const importerUtil = container.resolve("ImporterUtil");
        const modLoader = container.resolve("PreAkiModLoader");
        db = importerUtil.loadRecursive(`${modLoader.getModPath("Lyconox-Shak12System-1.4.1")}db/`);
        const shak12slclid = "lyconoxslcshak12lid", mc558bid = "lyconoxbrlmc558id", mc558hgid = "lyconoxbrlmc558hgid", ash12sgtid = "lyconoxsgtash12fid", ps12sabotid = "ACadf6eeae921500134b2799", shak12slcl = jsonUtil.clone(items["5caf187cae92157c28402e43"]), mc558b = jsonUtil.clone(items["5caf17c9ae92150b30006be1"]), mc558hg = jsonUtil.clone(items["5cdaa99dd7f00c002412d0b2"]), ash12sgt = jsonUtil.clone(items["5caf1691ae92152ac412efb9"]), ps12sabot = jsonUtil.clone(items["5cadf6eeae921500134b2799"]);
        shak12slcl._id = shak12slclid;
        mc558b._id = mc558bid;
        mc558hg._id = mc558hgid;
        ash12sgt._id = ash12sgtid;
        ps12sabot._id = ps12sabotid;
        shak12slcl._props.Ergonomics = -25;
        shak12slcl._props.Width = 3;
        shak12slcl._props.CenterOfImpact = 0.01;
        shak12slcl._props.CoolFactor = 1.08;
        shak12slcl._props.Prefab.path = "shak12/silencer_ash12_long.bundle";
        shak12slcl._props.Weight = 2;
        shak12slcl._props.Recoil = -45;
        shak12slcl._props.ExtraSizeLeft = 2;
        shak12slcl._props.Loudness = -37;
        shak12slcl._props.Velocity = 8;
        shak12slcl._props.CanSellOnRagfair = false;
        shak12slcl._props.HeatFactor = 1.08;
        mc558b._props.Accuracy = 5;
        mc558b._props.Ergonomics = -2;
        mc558b._props.ExtraSizeLeft = 1;
        mc558b._props.HeatFactor = 1;
        mc558b._props.Prefab.path = "shak12/barrel_mc558_1.bundle";
        mc558b._props.RagFairCommissionModifier = 1.34;
        mc558b._props.Recoil = -32;
        mc558b._props.Velocity = 1.2;
        mc558b._props.Weight = 0.23;
        mc558b._props.Width = 2;
        mc558hg._props.Slots = [];
        mc558hg._props.Prefab.path = "shak12/handguard_mc558_2.bundle";
        mc558hg._props.Weight = 0.03;
        mc558hg._props.HeatFactor = 0.95;
        mc558hg._props.CoolFactor = 1.04;
        ash12sgt._props.Accuracy = 3;
        ash12sgt._props.Weight = 0.18;
        ash12sgt._props.Prefab.path = "shak12/sight_ash12_full.bundle";
        ash12sgt._props.Recoil = -2;
        ash12sgt._props.Width = 2;
        ash12sgt._props.Ergonomics = -3;
        ash12sgt._props.ConflictingItems =
            [
                "5bb20e49d4351e3bac1212de",
                "5ba26b17d4351e00367f9bdd",
                "5dfa3d7ac41b2312ea33362a",
                "5c1780312e221602b66cc189",
                "5fb6564947ce63734e3fa1da",
                "5bc09a18d4351e003562b68e",
                "5c18b9192e2216398b5a8104",
                "5fc0fa957283c4046c58147e",
                "5894a81786f77427140b8347",
                "55d4af3a4bdc2d972f8b456f",
                "5894a73486f77426d259076c",
                "5ba26b01d4351e0085325a51",
                "5bc09a30d4351e00367fb7c8",
                "5c17804b2e2216152006c02f",
                "5c18b90d2e2216152142466b",
                "5caf16a2ae92152ac412efbc",
                "5dfa3d950dee1b22f862eae0",
                "5fb6567747ce63734e3fa1dc",
                "5fc0fa362770a0045c59c677"
            ];
        ash12sgt._props.Slots =
            [
                {
                    "_id": "5caf1691ae92152ac412efbb",
                    "_mergeSlotWithChildren": false,
                    "_name": "mod_scope",
                    "_parent": shak12slclid,
                    "_props": {
                        "filters": [
                            {
                                "Filter": [
                                    "57ac965c24597706be5f975c",
                                    "57aca93d2459771f2c7e26db",
                                    "544a3a774bdc2d3a388b4567",
                                    "5d2dc3e548f035404a1a4798",
                                    "57adff4f24597737f373b6e6",
                                    "5c0517910db83400232ffee5",
                                    "591c4efa86f7741030027726",
                                    "570fd79bd2720bc7458b4583",
                                    "570fd6c2d2720bc6458b457f",
                                    "558022b54bdc2dac148b458d",
                                    "5c07dd120db834001c39092d",
                                    "5c0a2cec0db834001b7ce47d",
                                    "58491f3324597764bc48fa02",
                                    "584924ec24597768f12ae244",
                                    "5b30b0dc5acfc400153b7124",
                                    "6165ac8c290d254f5e6b2f6c",
                                    "60a23797a37c940de7062d02",
                                    "5d2da1e948f035477b1ce2ba",
                                    "5c0505e00db834001b735073",
                                    "609a63b6e2ff132951242d09",
                                    "584984812459776a704a82a6",
                                    "59f9d81586f7744c7506ee62",
                                    "570fd721d2720bc5458b4596",
                                    "5dfe6104585a0c3e995c7b82",
                                    "5d1b5e94d7ad1a2b865a96b0",
                                    "609bab8b455afd752b2e6138",
                                    "58d39d3d86f77445bb794ae7",
                                    "616554fe50224f204c1da2aa",
                                    "5c7d55f52e221644f31bff6a",
                                    "616584766ef05c2ce828ef57",
                                    "5b3b6dc75acfc47a8773fb1e",
                                    "615d8d878004cc50514c3233",
                                    "5b2389515acfc4771e1be0c0",
                                    "577d128124597739d65d0e56",
                                    "618b9643526131765025ab35",
                                    "618bab21526131765025ab3f",
                                    "5c86592b2e2216000e69e77c",
                                    "5a37ca54c4a282000d72296a",
                                    "58d2664f86f7747fec5834f6",
                                    "57c69dd424597774c03b7bbc",
                                    "5b3b99265acfc4704b4a1afb",
                                    "5aa66a9be5b5b0214e506e89",
                                    "5aa66c72e5b5b00016327c93",
                                    "5c1cdd302e221602b3137250",
                                    "61714b2467085e45ef140b2c",
                                    "6171407e50224f204c1da3c5",
                                    "61713cc4d8e3106d9806c109",
                                    "5b31163c5acfc400153b71cb",
                                    "5a33b652c4a28232996e407c",
                                    "5a33b2c9c4a282000c5a9511",
                                    "59db7eed86f77461f8380365",
                                    "5a1ead28fcdbcb001912fa9f",
                                    "626bb8532c923541184624b4",
                                    "62811f461d5df4475f46a332",
                                    "63fc449f5bd61c6cf3784a88",
                                    "6477772ea8a38bb2050ed4db",
                                    "6478641c19d732620e045e17",
                                    "64785e7c19d732620e045e15"
                                ],
                                "Shift": 0
                            }
                        ]
                    },
                    "_proto": "55d30c4c4bdc2db4468b457e",
                    "_required": false
                },
                {
                    "_id": "5cc087c1ae92150010399ab0",
                    "_mergeSlotWithChildren": false,
                    "_name": "mod_tactical_000",
                    "_parent": shak12slclid,
                    "_props": {
                        "filters": [
                            {
                                "Filter": [
                                    "57fd23e32459772d0805bcf1",
                                    "544909bb4bdc2d6f028b4577",
                                    "5c06595c0db834001a66af6c",
                                    "5a7b483fe899ef0016170d15",
                                    "61605d88ffa6e502ac5e7eeb",
                                    "5c5952732e2216398b5abda2",
                                    "644a3df63b0b6f03e101e065",
                                    "5649a2464bdc2d91118b45a8"
                                ],
                                "Shift": 0
                            }
                        ]
                    },
                    "_proto": "55d30c4c4bdc2db4468b457e",
                    "_required": false
                }
            ];
        ps12sabot._props.ArmorDamage += 4;
        ps12sabot._props.BallisticCoeficient = 0.24;
        ps12sabot._props.BulletDiameterMilimeters = 8.58;
        ps12sabot._props.BulletMassGram = 15;
        ps12sabot._props.Damage -= 5;
        ps12sabot._props.DurabilityBurnModificator = 1.94;
        ps12sabot._props.FragmentationChance = .1;
        ps12sabot._props.HeatFactor = 2.61;
        ps12sabot._props.InitialSpeed *= 2.96;
        ps12sabot._props.PenetrationPower += 3;
        ps12sabot._props.Prefab.path = "shak12/patron_12,7x55_ps12_sabot.bundle";
        ps12sabot._props.RicochetChance = .7;
        ps12sabot._props.SpeedRetardation = 1.8e-5;
        ps12sabot._props.Weight = 0.05;
        ps12sabot._props.casingMass = 22;
        items[shak12slclid] = shak12slcl;
        items[mc558bid] = mc558b;
        items[mc558hgid] = mc558hg;
        items[ash12sgtid] = ash12sgt;
        items[ps12sabotid] = ps12sabot;
        mc558b._props.Slots =
            [
                {
                    "_id": "5cdaa99dd7f00c002412d0b4",
                    "_mergeSlotWithChildren": false,
                    "_name": "mod_handguard",
                    "_parent": mc558bid,
                    "_props": {
                        "filters": [
                            {
                                "Filter": [
                                    mc558hgid
                                ],
                                "Shift": 0
                            }
                        ]
                    },
                    "_proto": "55d30c4c4bdc2db4468b457e",
                    "_required": false
                }
            ];
        addidtoslots(shak12slclid, "5cadfbf7ae92152ac412eeef", "mod_muzzle");
        addidtoslots(mc558bid, "5cadfbf7ae92152ac412eeef", "mod_muzzle");
        addidtoslots(ash12sgtid, "5cadfbf7ae92152ac412eeef", "mod_scope");
        addidtochambers(ps12sabotid, "5cadfbf7ae92152ac412eeef");
        addidtocatridges(ps12sabotid, "5caf1041ae92157c28402e3f");
        addidtocatridges(ps12sabotid, "5caf1109ae9215753c44119f");
        addidtocatridges(ps12sabotid, "633ec6ee025b096d320a3b15");
        for (const i in items["633ec6ee025b096d320a3b15"]._props.Slots)
            items["633ec6ee025b096d320a3b15"]._props.Slots[i]._props.filters[0].Filter.push(ps12sabotid);
        addidtot(shak12slclid, "5a7c2eca46aef81a7ca2145d", 4, 44520, "5449016a4bdc2d6f028b456f", 3, "5b5f731a86f774093e6cb4f9", 65321, false);
        addidtot(mc558bid, "5a7c2eca46aef81a7ca2145d", 4, 9949, "5449016a4bdc2d6f028b456f", 2, "5b5f731a86f774093e6cb4f9", 19200, false);
        addidtot(mc558hgid, "5a7c2eca46aef81a7ca2145d", 4, 3578, "5449016a4bdc2d6f028b456f", 2, "5b5f755f86f77447ec5d770e", 9580, false);
        addidtot(ash12sgtid, "5a7c2eca46aef81a7ca2145d", 4, 5962, "5449016a4bdc2d6f028b456f", 1, "5b5f755f86f77447ec5d770e", 16200, false);
        addidtot(ps12sabotid, "58330581ace78e27b8b10cee", 60, 560, "5449016a4bdc2d6f028b456f", 2, "5b47574386f77428ca22b33b", 900, false);
        for (const locale of locales)
            for (const [idIndex, idName] of Object.entries(db.locales.global.en.itemids))
                for (const [des, value] of Object.entries(idName))
                    locale[`${idIndex} ${des}`] = value;
        for (const localeID in db.locales.global) {
            if (localeID != "en")
                for (const [idIndex, idName] of Object.entries(db.locales.global[localeID].itemids))
                    for (const [des, value] of Object.entries(idName))
                        tables.locales.global[localeID][`${idIndex} ${des}`] = value;
        }
        function addidtoslots(newId, injectId, slotName) {
            for (const slot of items[injectId]._props.Slots)
                if (slot._name == slotName)
                    slot._props.filters[0].Filter.push(newId);
        }
        function addidtochambers(newId, weaponId) {
            items[weaponId]._props.Chambers[0]._props.filters[0].Filter.push(newId);
        }
        function addidtocatridges(newId, weaponId) {
            items[weaponId]._props.Cartridges[0]._props.filters[0].Filter.push(newId);
        }
        function addidtot(itemID, traderID, countNum, price, currency, loyal, type, hbprice, unlock) {
            handbook.Items.push({
                "Id": itemID,
                "ParentId": type,
                "Price": hbprice
            });
            items[itemID]._props.CanSellOnRagfair = unlock;
            if (traderID != "0") {
                tables.traders[traderID].assort.items.push({
                    "_id": itemID,
                    "_tpl": itemID,
                    "parentId": "hideout",
                    "slotId": "hideout",
                    "upd": {
                        "UnlimitedCount": false,
                        "StackObjectsCount": countNum,
                        "BuyRestrictionMax": countNum,
                        "BuyRestrictionCurrent": 0
                    }
                });
                tables.traders[traderID].assort.barter_scheme[itemID] = [
                    [{
                            "count": price,
                            "_tpl": currency
                        }]
                ];
                tables.traders[traderID].assort.loyal_level_items[itemID] = loyal;
            }
        }
    }
}
module.exports = { mod: new ShAK12ex() };
