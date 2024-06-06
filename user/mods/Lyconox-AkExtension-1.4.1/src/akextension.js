"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class AKEx {
    container;
    flag_find_SpAK = false;
    preAkiLoad(container) {
        this.container = container;
        function search(keyword, currentPath) {
            const parentPath = path.resolve(currentPath, '..', '..');
            const files = fs.readdirSync(parentPath);
            for (const file of files) {
                const filePath = path.join(parentPath, file);
                if (fs.lstatSync(filePath).isDirectory() && file.includes(keyword)) {
                    return true;
                }
            }
            return false;
        }
        const keyword = 'akSplitterMod';
        const startingPath = __dirname;
        const found = search(keyword, startingPath);
        this.flag_find_SpAK = found;
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
        const itemHelper = container.resolve("ItemHelper");
        const db = importerUtil.loadRecursive(`${modLoader.getModPath("Lyconox-AkExtension-1.4.1")}db/`);
        let akWeaponFamillyIds = //akweapon familly who use standard sized gastubes
         [
            "5ac66d2e5acfc43b321d4b53", //ak-103
            "5bf3e0490db83400196199af", //aks-74
            "5ac66d725acfc43b321d4b60", //ak-104
            "5644bd2b4bdc2d3b4c8b4572", //ak-74n
            "5ac66cb05acfc40198510a10", //ak-101
            "5bf3e03b0db834001d2c4a9c", //ak-74
            "5ac66d9b5acfc4001633997a", //ak-105
            "5ac4cd105acfc40016339859", //ak-74M
            "5ac66d015acfc400180ae6e4", //ak-102
            "5ab8e9fcd8ce870019439434", //aks-74N
            "59d6088586f774275f37482f", //AKM
            "5a0ec13bfcdbcb00165aa685", //AKMN
            "59ff346386f77477562ff5e2", //AKMS
            "5abcbc27d8ce8700182eceeb", //AKMSN
            "59e6152586f77473dc057aa1", //vepr-136
            "59e6687d86f77411d949b251", //vpo-209
        ];
        if (this.flag_find_SpAK) {
            akWeaponFamillyIds = //akweapon familly who use standard sized gastubes
                [
                    "5ac66d2e5acfc43b321d4b53", //ak-103
                    //"5bf3e0490db83400196199af", //aks-74
                    "5ac66d725acfc43b321d4b60", //ak-104
                    "5644bd2b4bdc2d3b4c8b4572", //ak-74n
                    "5ac66cb05acfc40198510a10", //ak-101
                    //"5bf3e03b0db834001d2c4a9c", //ak-74
                    "5ac66d9b5acfc4001633997a", //ak-105
                    "5ac4cd105acfc40016339859", //ak-74M
                    "5ac66d015acfc400180ae6e4", //ak-102
                    "5ab8e9fcd8ce870019439434", //aks-74N
                    //"59d6088586f774275f37482f", //AKM
                    "5a0ec13bfcdbcb00165aa685", //AKMN
                    //"59ff346386f77477562ff5e2", //AKMS
                    "5abcbc27d8ce8700182eceeb", //AKMSN
                    "59e6152586f77473dc057aa1", //vepr-136
                    "59e6687d86f77411d949b251", //vpo-209
                ];
        }
        const tula10krailid = "5c064c400db834001d234F68";
        const tula10krail = jsonUtil.clone(items["5c064c400db834001d23f468"]);
        tula10krail._id = tula10krailid;
        tula10krail._props.ConflictingItems = items["5d2c770c48f0354b4a07c100"]._props.ConflictingItems;
        const addcft = ["618a75c9a3884f56c957ca1b", //"1P78 DT"
            "6113d6c3290d254f5e6b27db", //"PK-AA"
            "618a5d5852ecee1505530b2a", //"\"Obzor\""
            "638db77630c4240f9e06f8b6", //"Bit DT"
            "63d114019e35b334d82302f7", //"SAG AK"dt
            "6389f1dfc879ce63f72fc43e", //"OV GP"HG
            "5f6331e097199b7db2128dc2", //"X47"
            "6544d4187c5457729210d277" //"EKP-1S-03"
        ];
        for (const num in addcft)
            tula10krail._props.ConflictingItems.push(addcft[num]);
        tula10krail._props.Ergonomics = -1;
        tula10krail._props.Prefab.path = "AK_Mod_0/mount_ak_tactica_tula_10000.bundle";
        const addupper = [
            "5649af094bdc2df8348b4586", //AK-74 dust cover
            "59d6507c86f7741b846413a2", //AKM dust cover
            "59e6449086f7746c9f75e822", //Molot Arms AKM-type dust cover
            "5ac50da15acfc4001718d287" //AK-74M dust cover (6P34 0-1)
        ];
        for (const i in addupper)
            items[addupper[i]]._props.Slots[0]._props.filters[0].Filter.push(tula10krailid);
        items[tula10krailid] = tula10krail;
        const twsdlberylid = "5d2c33Cc48f0355d95672c25";
        const twsdlberyl = jsonUtil.clone(items["5d2c772c48f0355d95672c25"]);
        twsdlberyl._id = twsdlberylid;
        twsdlberyl._props.Ergonomics = 9;
        const addcft1 = ["5e217ba4c1434648c13568cd",
            "628a6678ccaab13006640e49",
            "5b0e794b5acfc47a877359b2",
            "5d2c770c48f0354b4a07c100",
            "5d2c76ed48f03532f2136169",
            "5d2c772c48f0355d95672c25",
            "6087e2a5232e5a31c233d552", //aa47
            tula10krailid,
            "618a75c9a3884f56c957ca1b",
            "6113d6c3290d254f5e6b27db",
            "618a5d5852ecee1505530b2a",
            "638db77630c4240f9e06f8b6",
            "63d114019e35b334d82302f7",
            "619b69037b9de8162902673e",
            "6389f1dfc879ce63f72fc43e", //ov gp
            "5f6331e097199b7db2128dc2", //x47
            "5839a7742459773cf9693481", //74ub dust cover
            "57dc334d245977597164366f", //74u dust cover
            "5a957c3fa2750c00137fa5f7", //AKS-74U CAA XRSU47SU tactical handguard
            "6544d4187c5457729210d277" //ekp-1s-03
        ];
        for (const i in addcft1)
            twsdlberyl._props.ConflictingItems.push(addcft1[i]);
        twsdlberyl._props.RaidModdable = true;
        twsdlberyl._props.Prefab.path = "AK_Mod_0/texas_dog_leg_beryl_style_rail.bundle";
        twsdlberyl._props.Weight = 0.04;
        let addak = [
            "59d6088586f774275f37482f", //akm
            "5a0ec13bfcdbcb00165aa685", //akmn
            "5bf3e03b0db834001d2c4a9c", //ak74
            "5644bd2b4bdc2d3b4c8b4572", //ak74n
            "628a60ae6b1d481ff772e9c8" //rd-704
        ];
        if (this.flag_find_SpAK) {
            addak = [
                "5a0ec13bfcdbcb00165aa685", //akmn
                "5644bd2b4bdc2d3b4c8b4572", //ak74n
                "628a60ae6b1d481ff772e9c8" //rd-704
            ];
        }
        for (const i in addak)
            for (const addslot in items[addak[i]]._props.Slots)
                if (items[addak[i]]._props.Slots[addslot]._name == "mod_sight_rear")
                    items[addak[i]]._props.Slots[addslot]._props.filters[0].Filter.push(twsdlberylid);
        items[twsdlberylid] = twsdlberyl;
        const popcgen4id = "5d2c770c48f03543Da07c100";
        const popcgen4 = jsonUtil.clone(items["5d2c770c48f0354b4a07c100"]);
        popcgen4._id = popcgen4id;
        for (const i in addcft1)
            popcgen4._props.ConflictingItems.push(addcft1[i]);
        popcgen4._props.ConflictingItems.push(twsdlberylid);
        popcgen4._props.ConflictingItems.push("5649af884bdc2d1b2b8b4589");
        popcgen4._props.ConflictingItems.push("655cb6b5d680a544f30607fa");
        popcgen4._props.Ergonomics = 7;
        popcgen4._props.BlocksFolding = true;
        for (const i in addcft1)
            popcgen4._props.ConflictingItems.push(addcft1[i]);
        popcgen4._props.RaidModdable = true;
        popcgen4._props.Prefab.path = "AK_Mod_0/popc_gen4_std.bundle";
        popcgen4._props.Weight = 0.09;
        items[popcgen4id] = popcgen4;
        const popcakmadtid = "5649b2314bd2Fd79388b4576";
        const popcakmadt = jsonUtil.clone(items["5649b2314bdc2d79388b4576"]);
        popcakmadt._id = popcakmadtid;
        popcakmadt._props.ConflictingItems.push("619b69037b9de8162902673e");
        popcakmadt._props.Prefab.path = "AK_Mod_0/popc_akm_ar_adapter.bundle";
        popcakmadt._props.Slots = [
            {
                "_id": "5649db764bdc2d363b8b4583",
                "_mergeSlotWithChildren": false,
                "_name": "mod_stock",
                "_parent": "5649b2314bdc2d79388b4576",
                "_props": {
                    "filters": [
                        {
                            "Filter": [
                                "57ade1442459771557167e15",
                                "5a33ca0fc4a282000d72292f",
                                "5c0faeddd174af02a962601f",
                                "5649be884bdc2d79388b4577",
                                "5d120a10d7ad1a4e1026ba85",
                                "5b0800175acfc400153aebd4",
                                "5bb20e58d4351e00320205d7",
                                "5947e98b86f774778f1448bc",
                                "5947eab886f77475961d96c5",
                                "5ef1ba28c64c5d0dfc0571a5",
                                "602e3f1254072b51b239f713",
                                "5c793fb92e221644f31bfb64",
                                "5c793fc42e221600114ca25d",
                                "591aef7986f774139d495f03",
                                "591af10186f774139d495f0e",
                                "627254cc9c563e6e442c398f",
                                "638de3603a1a4031d8260b8c"
                            ],
                            "Shift": 0
                        }
                    ]
                },
                "_proto": "55d30c4c4bdc2db4468b457e",
                "_required": false
            },
            {
                "_id": "59ff346386f77477562ff5e8",
                "_mergeSlotWithChildren": false,
                "_name": "mod_mount_000",
                "_parent": "5649b2314bdc2d79388b4576",
                "_props": {
                    "filters": [
                        {
                            "Filter": [
                                popcgen4id
                            ],
                            "Shift": 0
                        }
                    ]
                },
                "_proto": "55d30c4c4bdc2db4468b457e",
                "_required": false
            }
        ];
        items[popcakmadtid] = popcakmadt;
        for (const i in addak)
            for (const slot in items[addak[i]]._props.Slots)
                if (items[addak[i]]._props.Slots[slot]._name == "mod_stock" || items[addak[i]]._props.Slots[slot]._name == "mod_stock_000")
                    items[addak[i]]._props.Slots[slot]._props.filters[0].Filter.push(popcakmadtid);
        const popcak100adtid = "566Cb2314bdc2d79388b4576";
        const popcak100adt = jsonUtil.clone(items["5649b2314bdc2d79388b4576"]);
        popcak100adt._id = popcak100adtid;
        popcak100adt._props.ConflictingItems.push("619b69037b9de8162902673e");
        popcak100adt._props.Prefab.path = "AK_Mod_0/popc_ak100_ar_adapter.bundle";
        popcak100adt._props.Slots = [
            {
                "_id": "5649db764bdc2d363b8b4583",
                "_mergeSlotWithChildren": false,
                "_name": "mod_stock",
                "_parent": "5649b2314bdc2d79388b4576",
                "_props": {
                    "filters": [
                        {
                            "Filter": [
                                "57ade1442459771557167e15",
                                "5a33ca0fc4a282000d72292f",
                                "5c0faeddd174af02a962601f",
                                "5649be884bdc2d79388b4577",
                                "5d120a10d7ad1a4e1026ba85",
                                "5b0800175acfc400153aebd4",
                                "5bb20e58d4351e00320205d7",
                                "5947e98b86f774778f1448bc",
                                "5947eab886f77475961d96c5",
                                "5ef1ba28c64c5d0dfc0571a5",
                                "602e3f1254072b51b239f713",
                                "5c793fb92e221644f31bfb64",
                                "5c793fc42e221600114ca25d",
                                "591aef7986f774139d495f03",
                                "591af10186f774139d495f0e",
                                "627254cc9c563e6e442c398f",
                                "638de3603a1a4031d8260b8c"
                            ],
                            "Shift": 0
                        }
                    ]
                },
                "_proto": "55d30c4c4bdc2db4468b457e",
                "_required": false
            },
            {
                "_id": "59ff346386f77477562ff5e8",
                "_mergeSlotWithChildren": false,
                "_name": "mod_mount_000",
                "_parent": "5649b2314bdc2d79388b4576",
                "_props": {
                    "filters": [
                        {
                            "Filter": [
                                popcgen4id
                            ],
                            "Shift": 0
                        }
                    ]
                },
                "_proto": "55d30c4c4bdc2db4468b457e",
                "_required": false
            }
        ];
        items[popcak100adtid] = popcak100adt;
        let addak100 = [
            "5ac4cd105acfc40016339859", //74m
            "5ac66cb05acfc40198510a10", //101
            "5ac66d015acfc400180ae6e4", //102
            "5ac66d2e5acfc43b321d4b53", //103
            "5ac66d725acfc43b321d4b60", //104
            "5ac66d9b5acfc4001633997a", //105
            "5bf3e0490db83400196199af", //aks74
            "5ab8e9fcd8ce870019439434", //aks74n
            "57dc2fa62459775949412633", //74u
            "583990e32459771419544dd2", //74un
            "5839a40f24597726f856b511" //74ub
        ];
        if (this.flag_find_SpAK) {
            addak100 = [
                "5ac4cd105acfc40016339859", //74m
                "5ac66cb05acfc40198510a10", //101
                "5ac66d015acfc400180ae6e4", //102
                "5ac66d2e5acfc43b321d4b53", //103
                "5ac66d725acfc43b321d4b60", //104
                "5ac66d9b5acfc4001633997a", //105
                "5ab8e9fcd8ce870019439434", //aks74n
                "583990e32459771419544dd2", //74un
                "5839a40f24597726f856b511" //74ub
            ];
        }
        for (const i in addak100)
            for (const slot in items[addak100[i]]._props.Slots)
                if (items[addak100[i]]._props.Slots[slot]._name == "mod_stock" || items[addak100[i]]._props.Slots[slot]._name == "mod_stock_000")
                    items[addak100[i]]._props.Slots[slot]._props.filters[0].Filter.push(popcak100adtid);

        const receiversagmk3id = "628b9be6cff66b70c662b14c", receiversagmk3 = jsonUtil.clone(items["628b9be6cff66b70c002b14c"]);
        receiversagmk3._id = receiversagmk3id;
        receiversagmk3._props.Prefab.path = "AK_Mod_0/reciever_ak_sag_mk3_std.bundle";
        receiversagmk3._props.Slots[1]._props.filters[0].Filter = ["5649a2464bdc2d91118b45a8"];
        items[receiversagmk3id] = receiversagmk3;
        const mountsagmk3id = "628a83c29179c324ed2695AB", mountsagmk3 = jsonUtil.clone(items["628a83c29179c324ed269508"]);
        mountsagmk3._id = mountsagmk3id;
        mountsagmk3._props.ConflictingItems = [
            "5649d9a14bdc2d79388b4580",
            "5649af094bdc2df8348b4586",
            "5ac50da15acfc4001718d287",
            "5d2c76ed48f03532f2136169",
            "5d2c770c48f0354b4a07c100",
            "59d6507c86f7741b846413a2",
            "59e6449086f7746c9f75e822",
            "628a665a86cbd9750d2ff5e5",
            "5d2c772c48f0355d95672c25",
            "5947db3f86f77447880cf76f",
            "6113d6c3290d254f5e6b27db",
            "57486e672459770abd687134",
            "618a5d5852ecee1505530b2a",
            "5c82342f2e221644f31c060e",
            "576fd4ec2459777f0b518431",
            "5c82343a2e221644f31c0611",
            "5cf638cbd7f00c06595bc936",
            "5a7c74b3e899ef0014332c29",
            "591ee00d86f774592f7b841e",
            "5d0a29ead7ad1a0026013f27",
            "618a75c9a3884f56c957ca1b",
            "57acb6222459771ec34b5cb0",
            "5c61a40d2e2216001403158d",
            "5c90c3622e221601da359851",
            "63d114019e35b334d82302f7",
            "638db77630c4240f9e06f8b6",
            "5649af884bdc2d1b2b8b4589",
            "6544d4187c5457729210d277", //ekp-1s-03
            twsdlberylid,
            popcgen4id
        ];
        mountsagmk3._props.CoolFactor = 1.06;
        mountsagmk3._props.Accuracy = 2;
        mountsagmk3._props.Ergonomics = 16;
        mountsagmk3._props.HeatFactor = 1.08;
        mountsagmk3._props.Prefab.path = "AK_Mod_0/handguard_704_sag_mk3_chassis.bundle";
        mountsagmk3._props.Slots =
            [
                {
                    "_id": "628a83c29179c324ed269509",
                    "_mergeSlotWithChildren": false,
                    "_name": "mod_tactical_000",
                    "_parent": mountsagmk3id,
                    "_props": {
                        "filters": [
                            {
                                "Filter": [
                                    "57fd23e32459772d0805bcf1",
                                    "544909bb4bdc2d6f028b4577",
                                    "5d10b49bd7ad1a1a560708b0",
                                    "5c06595c0db834001a66af6c",
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
                },
                {
                    "_id": "628a83c29179c324ed26950a",
                    "_mergeSlotWithChildren": false,
                    "_name": "mod_mount_000",
                    "_parent": mountsagmk3id,
                    "_props": {
                        "filters": [
                            {
                                "Filter": [
                                    "5b7be47f5acfc400170e2dd2",
                                    "6269220d70b6c02e665f2635"
                                ],
                                "Shift": 0
                            }
                        ]
                    },
                    "_proto": "55d30c4c4bdc2db4468b457e",
                    "_required": false
                },
                {
                    "_id": "628a83c29179c324ed26950b",
                    "_mergeSlotWithChildren": false,
                    "_name": "mod_mount_001",
                    "_parent": mountsagmk3id,
                    "_props": {
                        "filters": [
                            {
                                "Filter": [
                                    "5b7be47f5acfc400170e2dd2",
                                    "6269220d70b6c02e665f2635"
                                ],
                                "Shift": 0
                            }
                        ]
                    },
                    "_proto": "55d30c4c4bdc2db4468b457e",
                    "_required": false
                },
                {
                    "_id": "628a83c29179c324ed26950d",
                    "_mergeSlotWithChildren": false,
                    "_name": "mod_foregrip",
                    "_parent": mountsagmk3id,
                    "_props": {
                        "filters": [
                            {
                                "Filter": [
                                    "57cffb66245977632f391a99",
                                    "57cffcd624597763133760c5",
                                    "57cffcdd24597763f5110006",
                                    "57cffce524597763b31685d8",
                                    "5b7be4895acfc400170e2dd5"
                                ],
                                "Shift": 0
                            }
                        ]
                    },
                    "_proto": "55d30c4c4bdc2db4468b457e",
                    "_required": false
                },
                {
                    "_id": "628b91a869015a4e1711ed93",
                    "_mergeSlotWithChildren": false,
                    "_name": "mod_scope",
                    "_parent": mountsagmk3id,
                    "_props": {
                        "filters": [
                            {
                                "Filter": [
                                    "544a3f024bdc2d1d388b4568",
                                    "591c4efa86f7741030027726",
                                    "570fd79bd2720bc7458b4583",
                                    "570fd6c2d2720bc6458b457f",
                                    "558022b54bdc2dac148b458d",
                                    "58491f3324597764bc48fa02",
                                    "584924ec24597768f12ae244",
                                    "5b30b0dc5acfc400153b7124",
                                    "60a23797a37c940de7062d02",
                                    "5d2da1e948f035477b1ce2ba",
                                    "5c0505e00db834001b735073",
                                    "609a63b6e2ff132951242d09",
                                    "584984812459776a704a82a6",
                                    "59f9d81586f7744c7506ee62",
                                    "570fd721d2720bc5458b4596",
                                    "57ae0171245977343c27bfcf",
                                    "609bab8b455afd752b2e6138",
                                    "58d39d3d86f77445bb794ae7",
                                    "616554fe50224f204c1da2aa",
                                    "5c7d55f52e221644f31bff6a",
                                    "616584766ef05c2ce828ef57",
                                    "615d8d878004cc50514c3233",
                                    "577d128124597739d65d0e56",
                                    "58d2664f86f7747fec5834f6",
                                    "61714b2467085e45ef140b2c",
                                    "5b31163c5acfc400153b71cb",
                                    "5a33b652c4a28232996e407c",
                                    "5a33b2c9c4a282000c5a9511",
                                    "6477772ea8a38bb2050ed4db",
                                    "64785e7c19d732620e045e15",
                                    "6165ac8c290d254f5e6b2f6c",
                                    "5c064c400db834001d23f468",
                                    "5b3b6dc75acfc47a8773fb1e",
                                    "63fc449f5bd61c6cf3784a88",
                                    "626bb8532c923541184624b4",
                                    "5a1ead28fcdbcb001912fa9f",
                                    "59db7eed86f77461f8380365",
                                    "5a33b2c9c4a282000c5a9511",
                                    "5c1cdd302e221602b3137250",
                                    "5b3b6dc75acfc47a8773fb1e"
                                ],
                                "Shift": 0
                            }
                        ]
                    },
                    "_proto": "55d30c4c4bdc2db4468b457e",
                    "_required": false
                },
                {
                    "_id": "628b9227a733087d0d7fe839",
                    "_mergeSlotWithChildren": false,
                    "_name": "mod_reciever",
                    "_parent": mountsagmk3id,
                    "_props": {
                        "filters": [
                            {
                                "Filter": [
                                    receiversagmk3id
                                ],
                                "Shift": 0
                            }
                        ]
                    },
                    "_proto": "55d30c4c4bdc2db4468b457e",
                    "_required": false
                }
            ];
        mountsagmk3._props.Recoil = -4;
        mountsagmk3._props.Weight = 0.417;
        mountsagmk3._props.Width = 2;
        items[mountsagmk3id] = mountsagmk3;
        items["628a60ae6b1d481ff772e9c8"]._props.Slots[0]._props.filters[0].Filter.push(mountsagmk3id);
        const mountaksagmk3id = "628a83c29179c324ed26955A", mountaksagmk3 = jsonUtil.clone(mountsagmk3);
        mountaksagmk3._id = mountaksagmk3id;
        mountaksagmk3._props.Prefab.path = "AK_Mod_0/handguard_ak_sag_mk3_chassis.bundle";
        items[mountaksagmk3id] = mountaksagmk3;
        const handguardsagmk2o1stdid = "628a83c29179c324ed64955A", handguardsagmk2o1std = jsonUtil.clone(mountaksagmk3);
        handguardsagmk2o1std._id = handguardsagmk2o1stdid;
        handguardsagmk2o1std._props.ConflictingItems = [
            "5649d9a14bdc2d79388b4580",
            "5d2c76ed48f03532f2136169",
            "5d2c770c48f0354b4a07c100",
            "5d2c772c48f0355d95672c25",
            "5947db3f86f77447880cf76f",
            "6113d6c3290d254f5e6b27db",
            "57486e672459770abd687134",
            "618a5d5852ecee1505530b2a",
            "5c82342f2e221644f31c060e",
            "576fd4ec2459777f0b518431",
            "5c82343a2e221644f31c0611",
            "5cf638cbd7f00c06595bc936",
            "5a7c74b3e899ef0014332c29",
            "591ee00d86f774592f7b841e",
            "5d0a29ead7ad1a0026013f27",
            "618a75c9a3884f56c957ca1b",
            "57acb6222459771ec34b5cb0",
            "5c61a40d2e2216001403158d",
            "5c90c3622e221601da359851",
            "63d114019e35b334d82302f7",
            "638db77630c4240f9e06f8b6",
            "5649af884bdc2d1b2b8b4589",
            "6544d4187c5457729210d277", 
            tula10krailid,
            twsdlberylid,
            popcgen4id
        ];
        handguardsagmk2o1std._props.CoolFactor = 1.02;
        handguardsagmk2o1std._props.Accuracy = 1;
        handguardsagmk2o1std._props.Ergonomics = 15;
        handguardsagmk2o1std._props.HeatFactor = 1.02;
        handguardsagmk2o1std._props.Prefab.path = "AK_Mod_0/handguard_ak_sag_mk2_1.bundle";
        handguardsagmk2o1std._props.Slots =
            [
                {
                    "_id": "628a83c29179c324ed269509",
                    "_mergeSlotWithChildren": false,
                    "_name": "mod_tactical_000",
                    "_parent": handguardsagmk2o1stdid,
                    "_props": {
                        "filters": [
                            {
                                "Filter": [
                                    "57fd23e32459772d0805bcf1",
                                    "544909bb4bdc2d6f028b4577",
                                    "5d10b49bd7ad1a1a560708b0",
                                    "5c06595c0db834001a66af6c",
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
                },
                {
                    "_id": "628a83c29179c324ed26950a",
                    "_mergeSlotWithChildren": false,
                    "_name": "mod_mount_000",
                    "_parent": handguardsagmk2o1stdid,
                    "_props": {
                        "filters": [
                            {
                                "Filter": [
                                    "5b7be47f5acfc400170e2dd2",
                                    "6269220d70b6c02e665f2635"
                                ],
                                "Shift": 0
                            }
                        ]
                    },
                    "_proto": "55d30c4c4bdc2db4468b457e",
                    "_required": false
                },
                {
                    "_id": "628a83c29179c324ed26950b",
                    "_mergeSlotWithChildren": false,
                    "_name": "mod_mount_001",
                    "_parent": handguardsagmk2o1stdid,
                    "_props": {
                        "filters": [
                            {
                                "Filter": [
                                    "5b7be47f5acfc400170e2dd2",
                                    "6269220d70b6c02e665f2635"
                                ],
                                "Shift": 0
                            }
                        ]
                    },
                    "_proto": "55d30c4c4bdc2db4468b457e",
                    "_required": false
                },
                {
                    "_id": "628a83c29179c324ed26950d",
                    "_mergeSlotWithChildren": false,
                    "_name": "mod_foregrip",
                    "_parent": handguardsagmk2o1stdid,
                    "_props": {
                        "filters": [
                            {
                                "Filter": [
                                    "57cffb66245977632f391a99",
                                    "57cffcd624597763133760c5",
                                    "57cffcdd24597763f5110006",
                                    "57cffce524597763b31685d8",
                                    "5b7be4895acfc400170e2dd5"
                                ],
                                "Shift": 0
                            }
                        ]
                    },
                    "_proto": "55d30c4c4bdc2db4468b457e",
                    "_required": false
                },
                {
                    "_id": "628b91a869015a4e1711ed93",
                    "_mergeSlotWithChildren": false,
                    "_name": "mod_scope",
                    "_parent": handguardsagmk2o1stdid,
                    "_props": {
                        "filters": [
                            {
                                "Filter": [
                                    "544a3f024bdc2d1d388b4568",
                                    "591c4efa86f7741030027726",
                                    "570fd79bd2720bc7458b4583",
                                    "570fd6c2d2720bc6458b457f",
                                    "558022b54bdc2dac148b458d",
                                    "58491f3324597764bc48fa02",
                                    "584924ec24597768f12ae244",
                                    "5b30b0dc5acfc400153b7124",
                                    "60a23797a37c940de7062d02",
                                    "5d2da1e948f035477b1ce2ba",
                                    "5c0505e00db834001b735073",
                                    "609a63b6e2ff132951242d09",
                                    "584984812459776a704a82a6",
                                    "59f9d81586f7744c7506ee62",
                                    "570fd721d2720bc5458b4596",
                                    "57ae0171245977343c27bfcf",
                                    "609bab8b455afd752b2e6138",
                                    "58d39d3d86f77445bb794ae7",
                                    "616554fe50224f204c1da2aa",
                                    "5c7d55f52e221644f31bff6a",
                                    "616584766ef05c2ce828ef57",
                                    "615d8d878004cc50514c3233",
                                    "577d128124597739d65d0e56",
                                    "58d2664f86f7747fec5834f6",
                                    "61714b2467085e45ef140b2c",
                                    "5b31163c5acfc400153b71cb",
                                    "5a33b652c4a28232996e407c",
                                    "5a33b2c9c4a282000c5a9511",
                                    "6477772ea8a38bb2050ed4db",
                                    "64785e7c19d732620e045e15",
                                    "6165ac8c290d254f5e6b2f6c",
                                    "5c064c400db834001d23f468",
                                    "5b3b6dc75acfc47a8773fb1e",
                                    "63fc449f5bd61c6cf3784a88",
                                    "626bb8532c923541184624b4",
                                    "5a1ead28fcdbcb001912fa9f",
                                    "59db7eed86f77461f8380365",
                                    "5a33b2c9c4a282000c5a9511",
                                    "5c1cdd302e221602b3137250",
                                    "5b3b6dc75acfc47a8773fb1e"
                                ],
                                "Shift": 0
                            }
                        ]
                    },
                    "_proto": "55d30c4c4bdc2db4468b457e",
                    "_required": false
                }
            ];
        handguardsagmk2o1std._props.Recoil = -6;
        handguardsagmk2o1std._props.Weight = 0.468;
        items[handguardsagmk2o1stdid] = handguardsagmk2o1std;
        //sag mk2  
        const handguardsagmk2o1slimid = "628a83c29179c324ed64943D", handguardsagmk2o1slim = jsonUtil.clone(handguardsagmk2o1std);
        handguardsagmk2o1slim._id = handguardsagmk2o1slimid;
        handguardsagmk2o1slim._props.Prefab.path = "AK_Mod_0/handguard_ak_sag_mk2.bundle";
        handguardsagmk2o1slim._props.Weight = 0.32;
        handguardsagmk2o1slim._props.Ergonomics = 17;
        handguardsagmk2o1slim._props.Accuracy = 0;
        handguardsagmk2o1slim._props.Recoil = -2;
        items[handguardsagmk2o1slimid] = handguardsagmk2o1slim;
        if (this.flag_find_SpAK === false) {
            if (itemHelper.isValidItem("5a01ad4786f77450561fda02")) {
                items["5a01ad4786f77450561fda02"]._props.Slots[0]._props.filters[0].Filter.push(mountaksagmk3id);
                items["5a01ad4786f77450561fda02"]._props.Slots[0]._props.filters[0].Filter.push(handguardsagmk2o1stdid);
                items["5a01ad4786f77450561fda02"]._props.Slots[0]._props.filters[0].Filter.push(handguardsagmk2o1slimid);
            }
            // }
        }
        else {
            akWeaponFamillyIds.forEach(ak => {
                if (ak !== "583990e32459771419544dd2") //ignore AKS-74UN
                 {
                    //find mod_handguard slot in ak
                    const mod_handguard_slot = items[ak]._props.Slots.find(slot => slot._name === "mod_handguard");
                    if (mod_handguard_slot) {
                        //add mountaksagmk3id, handguardsagmk2o1stdid, handguardsagmk2o1slimid to mod_handguard slot
                        mod_handguard_slot._props.filters[0].Filter.push(mountaksagmk3id);
                        mod_handguard_slot._props.filters[0].Filter.push(handguardsagmk2o1stdid);
                        mod_handguard_slot._props.filters[0].Filter.push(handguardsagmk2o1slimid);
                    }
                    else {
                        console.log("Item ", items[ak]._name, " has no handguard slot");
                        items[ak]._props.Slots.push({
                            "_name": "mod_handguard",
                            "_id": "mod_handguard_id_" + ak,
                            "_parent": ak,
                            "_props": {
                                "filters": [
                                    {
                                        "Shift": 0,
                                        "Filter": [
                                            mountaksagmk3id,
                                            handguardsagmk2o1stdid,
                                            handguardsagmk2o1slimid
                                        ]
                                    }
                                ]
                            },
                            "_required": true,
                            "_mergeSlotWithChildren": false,
                            "_proto": "55d30c4c4bdc2db4468b457e"
                        });
                    }
                }
            });
        }
        const sigthinstockid = "5fbcc437d724d907e20BCd5c";
        const sigthinstock = jsonUtil.clone(items["5fbcc437d724d907e2077d5c"]);
        sigthinstock._id = sigthinstockid;
        sigthinstock._props.Recoil -= 4;
        sigthinstock._props.Prefab.path = "AK_Mod_0/stock_ak_sig_thin_foldable.bundle";
        for (const i in addak100)
            for (const addslot in items[addak100[i]]._props.Slots)
                if (items[addak100[i]]._props.Slots[addslot]._name == "mod_stock")
                    items[addak100[i]]._props.Slots[addslot]._props.filters[0].Filter.push(sigthinstockid);
        items[sigthinstockid] = sigthinstock;
        const handguardb11id = "57ffa9f424597772857Ee844", handguardb11 = jsonUtil.clone(items["57ffa9f4245977728561e844"]);
        handguardb11._id = handguardb11id;
        handguardb11._props.CoolFactor = 1;
        handguardb11._props.Ergonomics += 1;
        handguardb11._props.HeatFactor = 1;
        handguardb11._props.Prefab.path = "AK_Mod_0/handguard_aks74u_zenit_b11_blk.bundle";
        handguardb11._props.Weight = 0.11;
        items[handguardb11id] = handguardb11;
        items["59d36a0086f7747e673f3946"]._props.Slots[0]._props.filters[0].Filter.push(handguardb11id);
        addidtot(twsdlberylid, "58330581ace78e27b8b10cee", 3, 8000, "5449016a4bdc2d6f028b456f", 1, "5b5f764186f77447ec5d7714", 15000, false);
        addidtot(tula10krailid, "5a7c2eca46aef81a7ca2145d", 5, 12997, "5449016a4bdc2d6f028b456f", 1, "5b5f755f86f77447ec5d770e", 18000, false);
        addidtot(popcgen4id, "5a7c2eca46aef81a7ca2145d", 3, 19000, "5449016a4bdc2d6f028b456f", 3, "5b5f764186f77447ec5d7714", 27900, false);
        addidtot(popcakmadtid, "58330581ace78e27b8b10cee", 4, 18222, "5449016a4bdc2d6f028b456f", 2, "5b5f757486f774093e6cb507", 20000, false);
        addidtot(popcak100adtid, "5a7c2eca46aef81a7ca2145d", 4, 19300, "5449016a4bdc2d6f028b456f", 2, "5b5f757486f774093e6cb507", 21000, false);
        addidtot(sigthinstockid, "58330581ace78e27b8b10cee", 5, 6000, "5449016a4bdc2d6f028b456f", 1, "5b5f757486f774093e6cb507", 8650, false);
        addidtot(handguardb11id, "5935c25fb3acc3127c3d8cd9", 3, 35, "5696686a4bdc2da3298b456a", 1, "5b5f75e486f77447ec5d7712", 4000, false);
        addidtot(mountsagmk3id, "58330581ace78e27b8b10cee", 4, 29800, "5449016a4bdc2d6f028b456f", 2, "5b5f75e486f77447ec5d7712", 33600, false);
        addidtot(mountaksagmk3id, "5a7c2eca46aef81a7ca2145d", 5, 25000, "5449016a4bdc2d6f028b456f", 2, "5b5f75e486f77447ec5d7712", 31200, false);
        addidtot(receiversagmk3id, "5a7c2eca46aef81a7ca2145d", 5, 6000, "5449016a4bdc2d6f028b456f", 3, "5b5f764186f77447ec5d7714", 9200, false);
        addidtot(handguardsagmk2o1slimid, "5935c25fb3acc3127c3d8cd9", 3, 181, "5696686a4bdc2da3298b456a", 1, "5b5f75e486f77447ec5d7712", 25600, false);
        addidtot(handguardsagmk2o1stdid, "5a7c2eca46aef81a7ca2145d", 4, 15300, "5449016a4bdc2d6f028b456f", 2, "5b5f764186f77447ec5d7714", 29200, false);
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
    postAkiLoad(container) {
        const items = container.resolve("DatabaseServer").getTables().templates.items;
        if (this.flag_find_SpAK) {
            const akWeaponFamillyIds = //akweapon familly who use standard sized gastubes
             [
                "5ac66d2e5acfc43b321d4b53", //ak-103
                //"5bf3e0490db83400196199af", //aks-74
                "5ac66d725acfc43b321d4b60", //ak-104
                "5644bd2b4bdc2d3b4c8b4572", //ak-74n
                "5ac66cb05acfc40198510a10", //ak-101
                //"5bf3e03b0db834001d2c4a9c", //ak-74
                "5ac66d9b5acfc4001633997a", //ak-105
                "5ac4cd105acfc40016339859", //ak-74M
                "5ac66d015acfc400180ae6e4", //ak-102
                "5ab8e9fcd8ce870019439434", //aks-74N
                //"59d6088586f774275f37482f", //AKM
                "5a0ec13bfcdbcb00165aa685", //AKMN
                //"59ff346386f77477562ff5e2", //AKMS
                "5abcbc27d8ce8700182eceeb", //AKMSN
                "59e6152586f77473dc057aa1", //vepr-136
                "59e6687d86f77411d949b251", //vpo-209
            ];
        }
    }
}
module.exports = { mod: new AKEx() };