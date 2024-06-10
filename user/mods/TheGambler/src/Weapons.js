"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapons = void 0;
class Weapons {
    weaponMetaBuilds = [
        {
            Id: "665bd6ec01001a930c8bb9b3",
            Name: "m4a1",
            Root: "a68f0f1a702fec99a80b4c19",
            Items: [
                {
                    _id: "a68f0f1a702fec99a80b4c19",
                    _tpl: "5447a9cd4bdc2dbd208b4567",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "196d9df79375fb280ec97c1e",
                    _tpl: "5d025cc1d7ad1a53845279ef",
                    parentId: "a68f0f1a702fec99a80b4c19",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "3964793a57c933b29dba9545",
                    _tpl: "544a37c44bdc2d25388b4567",
                    parentId: "a68f0f1a702fec99a80b4c19",
                    slotId: "mod_magazine",
                },
                {
                    _id: "926f5a9e09ec4f925634016f",
                    _tpl: "55d355e64bdc2d962f8b4569",
                    parentId: "a68f0f1a702fec99a80b4c19",
                    slotId: "mod_reciever",
                },
                {
                    _id: "0dc3933cbd8758f12738014d",
                    _tpl: "5c793fb92e221644f31bfb64",
                    parentId: "a68f0f1a702fec99a80b4c19",
                    slotId: "mod_stock",
                },
                {
                    _id: "d544a77fbba281267e099311",
                    _tpl: "55d44fd14bdc2d962f8b456e",
                    parentId: "a68f0f1a702fec99a80b4c19",
                    slotId: "mod_charge",
                },
                {
                    _id: "e26ea405e7ec1af64dd3505d",
                    _tpl: "58491f3324597764bc48fa02",
                    parentId: "926f5a9e09ec4f925634016f",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "3686b8f7cd191e473e293186",
                    _tpl: "5d440b93a4b9364276578d4b",
                    parentId: "926f5a9e09ec4f925634016f",
                    slotId: "mod_barrel",
                },
                {
                    _id: "6d8ae389ffefbc9033f2e314",
                    _tpl: "5c78f2492e221600114c9f04",
                    parentId: "926f5a9e09ec4f925634016f",
                    slotId: "mod_handguard",
                },
                {
                    _id: "ec084adc07292dd0e76ae82f",
                    _tpl: "58d2947e86f77447aa070d53",
                    parentId: "0dc3933cbd8758f12738014d",
                    slotId: "mod_stock_002",
                },
                {
                    _id: "8371ef2187356f173be91703",
                    _tpl: "609269c3b0e443224b421cc1",
                    parentId: "3686b8f7cd191e473e293186",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "7ea4a2798b056b5889255d26",
                    _tpl: "5d00ec68d7ad1a04a067e5be",
                    parentId: "3686b8f7cd191e473e293186",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "bca1ab045a653846255ee8a2",
                    _tpl: "5b7be4895acfc400170e2dd5",
                    parentId: "6d8ae389ffefbc9033f2e314",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "e18a60ee7f90716eca90a012",
                    _tpl: "5a7b483fe899ef0016170d15",
                    parentId: "6d8ae389ffefbc9033f2e314",
                    slotId: "mod_tactical_002",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "0a857a05276157dbebb7dff4",
                    _tpl: "60926df0132d4d12c81fd9df",
                    parentId: "8371ef2187356f173be91703",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "e2518f27f81e26722d34acd0",
                    _tpl: "5c1cd46f2e22164bef5cfedb",
                    parentId: "bca1ab045a653846255ee8a2",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "99b5fda2e2748ac455b7ddd6",
                    _tpl: "58d2912286f7744e27117493",
                    parentId: "ec084adc07292dd0e76ae82f",
                    slotId: "mod_stock",
                },
            ],
        },
        {
            Id: "665bd74201001a930cbd56dd",
            Name: "rsass",
            Root: "efb5fe13094470199995f05b",
            Items: [
                {
                    _id: "efb5fe13094470199995f05b",
                    _tpl: "5a367e5dc4a282000e49738f",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "eb430de2c6fdd4f6634bf445",
                    _tpl: "5a339805c4a2826c6e06d73d",
                    parentId: "efb5fe13094470199995f05b",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "752d3547852c3752eff4687c",
                    _tpl: "5a3501acc4a282000d72293a",
                    parentId: "efb5fe13094470199995f05b",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "e9f3c26f503f3b9f04464db5",
                    _tpl: "5a33ca0fc4a282000d72292f",
                    parentId: "efb5fe13094470199995f05b",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "b11ba0bfb31506c2714f9580",
                    _tpl: "5a329052c4a28200741e22d3",
                    parentId: "efb5fe13094470199995f05b",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "1f6b00508f72270ec454973c",
                    _tpl: "5a34fae7c4a2826c6e06d760",
                    parentId: "efb5fe13094470199995f05b",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "d1cec7a50e64c44420b17ce1",
                    _tpl: "57c69dd424597774c03b7bbc",
                    parentId: "efb5fe13094470199995f05b",
                    slotId: "mod_scope",
                },
                {
                    _id: "37ec3a80093d705cba03a0fe",
                    _tpl: "5a33cae9c4a28232980eb086",
                    parentId: "e9f3c26f503f3b9f04464db5",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "96ec0dfadc342856308c078b",
                    _tpl: "5c0102b20db834001d23eebc",
                    parentId: "b11ba0bfb31506c2714f9580",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "87b23cf77c80c5dc7a4730ca",
                    _tpl: "5c0102aa0db834001b734ba1",
                    parentId: "b11ba0bfb31506c2714f9580",
                    slotId: "mod_mount_004",
                },
                {
                    _id: "a5221a360a9acbbeb71d8db2",
                    _tpl: "5a34fd2bc4a282329a73b4c5",
                    parentId: "1f6b00508f72270ec454973c",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "46bb9dee27fb4cc1f495299d",
                    _tpl: "5a34fbadc4a28200741e230a",
                    parentId: "1f6b00508f72270ec454973c",
                    slotId: "mod_gas_block",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "0581db8a261829cfaeab0483",
                    _tpl: "5b3b99475acfc432ff4dcbee",
                    parentId: "d1cec7a50e64c44420b17ce1",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "5ad852d1e3b24613a2d6732a",
                    _tpl: "5b057b4f5acfc4771e1bd3e9",
                    parentId: "96ec0dfadc342856308c078b",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "82633beca44bb02a663b9e74",
                    _tpl: "56def37dd2720bec348b456a",
                    parentId: "87b23cf77c80c5dc7a4730ca",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "603049c2ebcea7d076a90493",
                    _tpl: "5a34fe59c4a282000b1521a2",
                    parentId: "a5221a360a9acbbeb71d8db2",
                    slotId: "mod_muzzle",
                },
            ],
        },
        {
            Id: "665bd79a01001a930c42fb53",
            Name: "74ub",
            Root: "53a1ce8b581cf71f81fe1c77",
            Items: [
                {
                    _id: "53a1ce8b581cf71f81fe1c77",
                    _tpl: "5839a40f24597726f856b511",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 95,
                            Durability: 95,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "8491e4b76522933b6d34afef",
                    _tpl: "5649ae4a4bdc2d1b2b8b4588",
                    parentId: "53a1ce8b581cf71f81fe1c77",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "c71156e10b70c7f498173b2f",
                    _tpl: "59ecc28286f7746d7a68aa8c",
                    parentId: "53a1ce8b581cf71f81fe1c77",
                    slotId: "mod_stock",
                },
                {
                    _id: "6ce323e4a017751ee6077712",
                    _tpl: "5bed625c0db834001c062946",
                    parentId: "53a1ce8b581cf71f81fe1c77",
                    slotId: "mod_magazine",
                },
                {
                    _id: "936054ac7a1bbccdcd4abe2a",
                    _tpl: "615d8f5dd92c473c770212ef",
                    parentId: "53a1ce8b581cf71f81fe1c77",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "e6febacf72029de4639f0bd8",
                    _tpl: "5839a7742459773cf9693481",
                    parentId: "53a1ce8b581cf71f81fe1c77",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "d4d061e71eb5bf7339e4e98c",
                    _tpl: "59d36a0086f7747e673f3946",
                    parentId: "53a1ce8b581cf71f81fe1c77",
                    slotId: "mod_gas_block",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "3d103ad324550848a1d66e78",
                    _tpl: "5b222d405acfc400153af4fe",
                    parentId: "c71156e10b70c7f498173b2f",
                    slotId: "mod_stock",
                },
                {
                    _id: "e6a02c23e3e9157fc95a8726",
                    _tpl: "615d8f8567085e45ef1409ca",
                    parentId: "936054ac7a1bbccdcd4abe2a",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "fc3f5b4568f4897437bd0e15",
                    _tpl: "5a957c3fa2750c00137fa5f7",
                    parentId: "d4d061e71eb5bf7339e4e98c",
                    slotId: "mod_handguard",
                },
                {
                    _id: "43e819a70b651bfae7f14438",
                    _tpl: "5c1cd46f2e22164bef5cfedb",
                    parentId: "fc3f5b4568f4897437bd0e15",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "b1970cdef7142691467bfe27",
                    _tpl: "58491f3324597764bc48fa02",
                    parentId: "fc3f5b4568f4897437bd0e15",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "3794e6f8b2877e8218fb6883",
                    _tpl: "6272370ee4013c5d7e31f418",
                    parentId: "fc3f5b4568f4897437bd0e15",
                    slotId: "mod_tactical_000",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "665bd7cc01001a930c50c969",
            Name: "rpd",
            Root: "e8d7b0b714d8e28f6fab4138",
            Items: [
                {
                    _id: "e8d7b0b714d8e28f6fab4138",
                    _tpl: "6513ef33e06849f06c0957ca",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "fullauto",
                        },
                    },
                },
                {
                    _id: "c8cf6146cce54f64dfd4ee53",
                    _tpl: "6513f0a194c72326990a3868",
                    parentId: "e8d7b0b714d8e28f6fab4138",
                    slotId: "mod_magazine",
                },
                {
                    _id: "87b04fbc5edfa3f2a6028ab0",
                    _tpl: "6513f1798cb24472490ee331",
                    parentId: "e8d7b0b714d8e28f6fab4138",
                    slotId: "mod_stock",
                },
                {
                    _id: "c34a59765555d59bba8fb90c",
                    _tpl: "6513eff1e06849f06c0957d4",
                    parentId: "e8d7b0b714d8e28f6fab4138",
                    slotId: "mod_barrel",
                },
                {
                    _id: "d4088883e221401ef66bf742",
                    _tpl: "6513f05a94c72326990a3866",
                    parentId: "e8d7b0b714d8e28f6fab4138",
                    slotId: "mod_handguard",
                },
                {
                    _id: "2155a714e2adcec692a8dd6d",
                    _tpl: "6513f153e63f29908d0ffaba",
                    parentId: "e8d7b0b714d8e28f6fab4138",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "5be7df8c8bce9cff71b54838",
                    _tpl: "6513f13a8cb24472490ee32f",
                    parentId: "87b04fbc5edfa3f2a6028ab0",
                    slotId: "mod_pistolgrip",
                },
                {
                    _id: "4a5054f742b3e5bd52ee5e2d",
                    _tpl: "6513f037e06849f06c0957d7",
                    parentId: "c34a59765555d59bba8fb90c",
                    slotId: "mod_bipod",
                },
                {
                    _id: "f046e281b3379dabc1adf85d",
                    _tpl: "6513f0f5e63f29908d0ffab8",
                    parentId: "c34a59765555d59bba8fb90c",
                    slotId: "mod_muzzle",
                },
            ],
        },
        {
            Id: "665bd87a01001a930caee33b",
            Name: "sa58",
            Root: "7913515fa0c75c9b810fbed3",
            Items: [
                {
                    _id: "7913515fa0c75c9b810fbed3",
                    _tpl: "5b0bbe4e5acfc40dc528a72d",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "2689358ed9ce60019fa60a54",
                    _tpl: "5b099b965acfc400186331e6",
                    parentId: "7913515fa0c75c9b810fbed3",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "0108eeb23f00dd5cf236cefa",
                    _tpl: "5b7bef9c5acfc43d102852ec",
                    parentId: "7913515fa0c75c9b810fbed3",
                    slotId: "mod_magazine",
                },
                {
                    _id: "2c4328e89a69ac7460b4b729",
                    _tpl: "5b7be1ca5acfc400170e2d2f",
                    parentId: "7913515fa0c75c9b810fbed3",
                    slotId: "mod_handguard",
                },
                {
                    _id: "904b4e267c8bdb3103bb75f0",
                    _tpl: "5b7be1265acfc400161d0798",
                    parentId: "7913515fa0c75c9b810fbed3",
                    slotId: "mod_barrel",
                },
                {
                    _id: "a038267566b025ee49e4996c",
                    _tpl: "5b0bc22d5acfc47a8607f085",
                    parentId: "7913515fa0c75c9b810fbed3",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "aeeebe7022568322e7483b51",
                    _tpl: "5b099bb25acfc400186331e8",
                    parentId: "7913515fa0c75c9b810fbed3",
                    slotId: "mod_reciever",
                },
                {
                    _id: "84b58313adbacb615975cb3c",
                    _tpl: "5b099bf25acfc4001637e683",
                    parentId: "7913515fa0c75c9b810fbed3",
                    slotId: "mod_stock",
                },
                {
                    _id: "cca3fb04ce7c158de9c8b445",
                    _tpl: "5c1bc5af2e221602b412949b",
                    parentId: "2c4328e89a69ac7460b4b729",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "df111d7364dd4601dd8f5886",
                    _tpl: "6272370ee4013c5d7e31f418",
                    parentId: "2c4328e89a69ac7460b4b729",
                    slotId: "mod_tactical_001",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "6ea97c49b930c5b54d9bd8fb",
                    _tpl: "6130c43c67085e45ef1405a1",
                    parentId: "904b4e267c8bdb3103bb75f0",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "055948440eb6fcff85b1a9f3",
                    _tpl: "5d2dc3e548f035404a1a4798",
                    parentId: "aeeebe7022568322e7483b51",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "d146b9e881376071bcaaaa98",
                    _tpl: "5c793fb92e221644f31bfb64",
                    parentId: "84b58313adbacb615975cb3c",
                    slotId: "mod_stock_000",
                },
                {
                    _id: "e577ec033beeedc73d49b95f",
                    _tpl: "5dfa3d2b0dee1b22f862eade",
                    parentId: "6ea97c49b930c5b54d9bd8fb",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "27ab9bef28823b383c224024",
                    _tpl: "58d2947e86f77447aa070d53",
                    parentId: "d146b9e881376071bcaaaa98",
                    slotId: "mod_stock_002",
                },
                {
                    _id: "505bee2f4d71ea10fcb8c2a5",
                    _tpl: "58d2912286f7744e27117493",
                    parentId: "27ab9bef28823b383c224024",
                    slotId: "mod_stock",
                },
            ],
        },
        {
            Id: "665bd8d101001a930cb3c642",
            Name: "ak545",
            Root: "2fd261e09884efad6ddf59b2",
            Items: [
                {
                    _id: "2fd261e09884efad6ddf59b2",
                    _tpl: "628b9c37a733087d0d7fe84b",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "ec4d2493187ebcd6ac2c927a",
                    _tpl: "628b8d83717774443b15e248",
                    parentId: "2fd261e09884efad6ddf59b2",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "45915ef07830a1bae6fe3935",
                    _tpl: "5f633f791b231926f2329f13",
                    parentId: "2fd261e09884efad6ddf59b2",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "060afc80c023f9119e7097ed",
                    _tpl: "6087e663132d4d12c81fd96b",
                    parentId: "2fd261e09884efad6ddf59b2",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "29cee2520c4b54a45bde20eb",
                    _tpl: "628b9a40717774443b15e9f2",
                    parentId: "2fd261e09884efad6ddf59b2",
                    slotId: "mod_stock_000",
                },
                {
                    _id: "ef1c425cf5e968a155b4c682",
                    _tpl: "55d482194bdc2d1d4e8b456b",
                    parentId: "2fd261e09884efad6ddf59b2",
                    slotId: "mod_magazine",
                },
                {
                    _id: "4421aa70566ac6a0e009b558",
                    _tpl: "6130ca3fd92c473c77020dbd",
                    parentId: "2fd261e09884efad6ddf59b2",
                    slotId: "mod_charge",
                },
                {
                    _id: "9e71242aa2d48b30e5745c5e",
                    _tpl: "628b916469015a4e1711ed8d",
                    parentId: "ec4d2493187ebcd6ac2c927a",
                    slotId: "mod_handguard",
                },
                {
                    _id: "06c1e9501def30ca9e895fa0",
                    _tpl: "56eabf3bd2720b75698b4569",
                    parentId: "29cee2520c4b54a45bde20eb",
                    slotId: "mod_stock",
                },
                {
                    _id: "8d74a4089a04ac5796f78888",
                    _tpl: "5b7be4895acfc400170e2dd5",
                    parentId: "9e71242aa2d48b30e5745c5e",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "9a0409c5af5aa17813e1e285",
                    _tpl: "628b9be6cff66b70c002b14c",
                    parentId: "9e71242aa2d48b30e5745c5e",
                    slotId: "mod_reciever",
                },
                {
                    _id: "f5c2deba9878e7db27dfc55f",
                    _tpl: "5c1cd46f2e22164bef5cfedb",
                    parentId: "8d74a4089a04ac5796f78888",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "715d52b4cb7d1b3c1d3cea39",
                    _tpl: "628b9471078f94059a4b9bfb",
                    parentId: "9a0409c5af5aa17813e1e285",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "9b5ef4e6abd52e0b2634af7e",
                    _tpl: "59f9d81586f7744c7506ee62",
                    parentId: "9a0409c5af5aa17813e1e285",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "3c3ff3bfd37094e620b9ad81",
                    _tpl: "58d2912286f7744e27117493",
                    parentId: "06c1e9501def30ca9e895fa0",
                    slotId: "mod_stock",
                },
            ],
        },
        {
            Id: "665bd92401001a930c1c6761",
            Name: "dvl",
            Root: "d87895f31e834d142f655d30",
            Items: [
                {
                    _id: "d87895f31e834d142f655d30",
                    _tpl: "588892092459774ac91d4b11",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "bbf18945ab34da6f4bd72bb5",
                    _tpl: "5888988e24597752fe43a6fa",
                    parentId: "d87895f31e834d142f655d30",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "a7d5706d69677323ec630ed4",
                    _tpl: "57c69dd424597774c03b7bbc",
                    parentId: "d87895f31e834d142f655d30",
                    slotId: "mod_scope",
                },
                {
                    _id: "505161d9045ee8137051819b",
                    _tpl: "5888945a2459774bf43ba385",
                    parentId: "d87895f31e834d142f655d30",
                    slotId: "mod_barrel",
                },
                {
                    _id: "b5ce586154cfd3608fb31829",
                    _tpl: "6113cc78d3a39d50044c065a",
                    parentId: "d87895f31e834d142f655d30",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "af4a419305786bc371575397",
                    _tpl: "58889d0c2459775bc215d981",
                    parentId: "d87895f31e834d142f655d30",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "513c014859850d30a0e606af",
                    _tpl: "5b3b99475acfc432ff4dcbee",
                    parentId: "a7d5706d69677323ec630ed4",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "83977dbceb6c167484c89367",
                    _tpl: "58889c7324597754281f9439",
                    parentId: "505161d9045ee8137051819b",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "6141da442182465cc1d0dc03",
                    _tpl: "5888961624597754281f93f3",
                    parentId: "505161d9045ee8137051819b",
                    slotId: "mod_bipod",
                },
            ],
        },
        {
            Id: "665bd9ae01001a930c0fd016",
            Name: "stm",
            Root: "f62bd995ac9b7bf3c95ed322",
            Items: [
                {
                    _id: "f62bd995ac9b7bf3c95ed322",
                    _tpl: "60339954d62c9b14ed777c06",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "78bae2d560d06dcec76b0440",
                    _tpl: "59db3a1d86f77429e05b4e92",
                    parentId: "f62bd995ac9b7bf3c95ed322",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "2717a67aa32467a889e41c44",
                    _tpl: "5a718f958dc32e00094b97e7",
                    parentId: "f62bd995ac9b7bf3c95ed322",
                    slotId: "mod_magazine",
                },
                {
                    _id: "2a9482e90e519b226894b63c",
                    _tpl: "602e63fb6335467b0c5ac94d",
                    parentId: "f62bd995ac9b7bf3c95ed322",
                    slotId: "mod_reciever",
                },
                {
                    _id: "9a5311e392b8c7c93a7acd4c",
                    _tpl: "5c793fb92e221644f31bfb64",
                    parentId: "f62bd995ac9b7bf3c95ed322",
                    slotId: "mod_stock_001",
                },
                {
                    _id: "7e2174b4f7360832bde800e0",
                    _tpl: "6033749e88382f4fab3fd2c5",
                    parentId: "f62bd995ac9b7bf3c95ed322",
                    slotId: "mod_charge",
                },
                {
                    _id: "812958565e1832b72bc5bf30",
                    _tpl: "602f85fd9b513876d4338d9c",
                    parentId: "f62bd995ac9b7bf3c95ed322",
                    slotId: "mod_tactical_000",
                },
                {
                    _id: "aacff81cbf2eccf49613de6d",
                    _tpl: "558022b54bdc2dac148b458d",
                    parentId: "2a9482e90e519b226894b63c",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "272f8cfe0de8b90aa95a9ee4",
                    _tpl: "603372f153a60014f970616d",
                    parentId: "2a9482e90e519b226894b63c",
                    slotId: "mod_barrel",
                },
                {
                    _id: "b2d6ee4868543846871f4db9",
                    _tpl: "6034e3cb0ddce744014cb870",
                    parentId: "2a9482e90e519b226894b63c",
                    slotId: "mod_handguard",
                },
                {
                    _id: "211242b4099da558b4b7850b",
                    _tpl: "56eabf3bd2720b75698b4569",
                    parentId: "9a5311e392b8c7c93a7acd4c",
                    slotId: "mod_stock_002",
                },
                {
                    _id: "59067af653eda3654013465b",
                    _tpl: "5c6165902e22160010261b28",
                    parentId: "272f8cfe0de8b90aa95a9ee4",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "f3f036a03311e0e2ebfb5ed6",
                    _tpl: "5b7be47f5acfc400170e2dd2",
                    parentId: "b2d6ee4868543846871f4db9",
                    slotId: "mod_mount_001",
                },
                {
                    _id: "dff048b72c467e3e8179b660",
                    _tpl: "5b7be4895acfc400170e2dd5",
                    parentId: "b2d6ee4868543846871f4db9",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "79ff5d38b621572a0de3ac57",
                    _tpl: "6272370ee4013c5d7e31f418",
                    parentId: "f3f036a03311e0e2ebfb5ed6",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "cccf5bfe819be7cb0ce08190",
                    _tpl: "5b057b4f5acfc4771e1bd3e9",
                    parentId: "dff048b72c467e3e8179b660",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "ded231e73cf94dcc922727b7",
                    _tpl: "58d2912286f7744e27117493",
                    parentId: "211242b4099da558b4b7850b",
                    slotId: "mod_stock",
                },
            ],
        },
        {
            Id: "665bda1701001a930cdab8e4",
            Name: "mcx",
            Root: "963f4684d347c2124844cd2c",
            Items: [
                {
                    _id: "963f4684d347c2124844cd2c",
                    _tpl: "5fbcc1d9016cce60e8341ab3",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "3d1ec410d07d5029587cce49",
                    _tpl: "59db3a1d86f77429e05b4e92",
                    parentId: "963f4684d347c2124844cd2c",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "804539b79dc3b61093b039f2",
                    _tpl: "544a37c44bdc2d25388b4567",
                    parentId: "963f4684d347c2124844cd2c",
                    slotId: "mod_magazine",
                },
                {
                    _id: "72628ca9936ab12561629558",
                    _tpl: "5fbcc3e4d6fa9c00c571bb58",
                    parentId: "963f4684d347c2124844cd2c",
                    slotId: "mod_reciever",
                },
                {
                    _id: "1c6b2bf1baf8ea7ba570ff0f",
                    _tpl: "6529348224cbe3c74a05e5c4",
                    parentId: "963f4684d347c2124844cd2c",
                    slotId: "mod_stock",
                },
                {
                    _id: "e44052fbfc1406142d2d07dd",
                    _tpl: "5fbcc640016cce60e8341acc",
                    parentId: "963f4684d347c2124844cd2c",
                    slotId: "mod_charge",
                },
                {
                    _id: "a2a4a45bd84cf15ccbc4ee3a",
                    _tpl: "59f9d81586f7744c7506ee62",
                    parentId: "72628ca9936ab12561629558",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "f746bc6f79f99efce2264795",
                    _tpl: "5fbbfacda56d053a3543f799",
                    parentId: "72628ca9936ab12561629558",
                    slotId: "mod_barrel",
                },
                {
                    _id: "7c49a8c57be118541b66ac3e",
                    _tpl: "5fbc226eca32ed67276c155d",
                    parentId: "72628ca9936ab12561629558",
                    slotId: "mod_handguard",
                },
                {
                    _id: "53d726e68f5ad9632e9ccc87",
                    _tpl: "5fc0fa957283c4046c58147e",
                    parentId: "72628ca9936ab12561629558",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "5fe0b4d62d16528bded68595",
                    _tpl: "6529366450dc782999054ba0",
                    parentId: "1c6b2bf1baf8ea7ba570ff0f",
                    slotId: "mod_stock",
                },
                {
                    _id: "fe9777d6aada172b6fac6ca6",
                    _tpl: "5fbc22ccf24b94483f726483",
                    parentId: "f746bc6f79f99efce2264795",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "6138e93bf214c47eb3143937",
                    _tpl: "5fbc210bf24b94483f726481",
                    parentId: "f746bc6f79f99efce2264795",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "d0c94785212d96562a5fdbd1",
                    _tpl: "59e0bdb186f774156f04ce82",
                    parentId: "7c49a8c57be118541b66ac3e",
                    slotId: "mod_mount_001",
                },
                {
                    _id: "127cdd92a7483d32d8b6bc8d",
                    _tpl: "5fc0fa362770a0045c59c677",
                    parentId: "7c49a8c57be118541b66ac3e",
                    slotId: "mod_sight_front",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "46be62695eaba1a5ab46bddb",
                    _tpl: "59e0bed186f774156f04ce84",
                    parentId: "7c49a8c57be118541b66ac3e",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "91b6a4896376fa5ea62db7e6",
                    _tpl: "5fbe760793164a5b6278efc8",
                    parentId: "fe9777d6aada172b6fac6ca6",
                    slotId: "mod_muzzle_001",
                },
                {
                    _id: "7076de511de7ebc401d6c615",
                    _tpl: "5a7b483fe899ef0016170d15",
                    parentId: "d0c94785212d96562a5fdbd1",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "924b4701348cf7d9dd969f34",
                    _tpl: "59fc48e086f77463b1118392",
                    parentId: "46be62695eaba1a5ab46bddb",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "f1d1c2f57336de682e854121",
                    _tpl: "58d2947e86f77447aa070d53",
                    parentId: "5fe0b4d62d16528bded68595",
                    slotId: "mod_stock_000",
                },
                {
                    _id: "162e451642303e10229402da",
                    _tpl: "58d2912286f7744e27117493",
                    parentId: "f1d1c2f57336de682e854121",
                    slotId: "mod_stock",
                },
            ],
        },
        {
            Id: "665bda7c01001a930c266864",
            Name: "sv98",
            Root: "55e46a1107ed1ba09596cbda",
            Items: [
                {
                    _id: "55e46a1107ed1ba09596cbda",
                    _tpl: "55801eed4bdc2d89578b4588",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "b9f38acd079c415d07aa5107",
                    _tpl: "559ba5b34bdc2d1f1a8b4582",
                    parentId: "55e46a1107ed1ba09596cbda",
                    slotId: "mod_magazine",
                },
                {
                    _id: "f4fde3a3cc21a00fdb022bde",
                    _tpl: "57c69dd424597774c03b7bbc",
                    parentId: "55e46a1107ed1ba09596cbda",
                    slotId: "mod_scope",
                },
                {
                    _id: "4ac88345f99e1aa230771f3c",
                    _tpl: "56083e1b4bdc2dc8488b4572",
                    parentId: "55e46a1107ed1ba09596cbda",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "58ccd34244190f465314e5d2",
                    _tpl: "5c4eec9b2e2216398b5aaba2",
                    parentId: "55e46a1107ed1ba09596cbda",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "e74dc8519e72f48f13c13708",
                    _tpl: "623b2e9d11c3296b440d1638",
                    parentId: "55e46a1107ed1ba09596cbda",
                    slotId: "mod_stock",
                    upd: {
                        Foldable: {
                            Folded: false,
                        },
                    },
                },
                {
                    _id: "ed5f006fe4a12572d3aede80",
                    _tpl: "5b3b99475acfc432ff4dcbee",
                    parentId: "f4fde3a3cc21a00fdb022bde",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "6f5d8d1318e5ddc7b5ac36bf",
                    _tpl: "5c4eecc32e221602b412b440",
                    parentId: "58ccd34244190f465314e5d2",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "7806a210bd6850032b9d6be1",
                    _tpl: "623c3c1f37b4b31470357737",
                    parentId: "e74dc8519e72f48f13c13708",
                    slotId: "mod_handguard",
                },
                {
                    _id: "3f057eb3c7d0651da6dc3b83",
                    _tpl: "5649ae4a4bdc2d1b2b8b4588",
                    parentId: "e74dc8519e72f48f13c13708",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "7141f3bc23f49f2a242e3950",
                    _tpl: "624c29ce09cd027dff2f8cd7",
                    parentId: "e74dc8519e72f48f13c13708",
                    slotId: "mod_stock_000",
                },
                {
                    _id: "cfe154b9fa34ad71a880cf42",
                    _tpl: "623c2f4242aee3103f1c44b7",
                    parentId: "7806a210bd6850032b9d6be1",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "6e1e8aef057203ae0bdef701",
                    _tpl: "623c2f652febb22c2777d8d7",
                    parentId: "7806a210bd6850032b9d6be1",
                    slotId: "mod_mount_001",
                },
                {
                    _id: "18b5188d21c12b08d5cfdb32",
                    _tpl: "623c2f652febb22c2777d8d7",
                    parentId: "7806a210bd6850032b9d6be1",
                    slotId: "mod_mount_002",
                },
                {
                    _id: "1a3ae0059019d2039dfce4a0",
                    _tpl: "61605d88ffa6e502ac5e7eeb",
                    parentId: "6e1e8aef057203ae0bdef701",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "665bdacf01001a930c0871fe",
            Name: "mp5",
            Root: "0630e2d1e2627a41d601c5b9",
            Items: [
                {
                    _id: "0630e2d1e2627a41d601c5b9",
                    _tpl: "5926bb2186f7744b1c6c6e60",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "208753a44b955f42101cf0e7",
                    _tpl: "5a351711c4a282000b1521a4",
                    parentId: "0630e2d1e2627a41d601c5b9",
                    slotId: "mod_magazine",
                },
                {
                    _id: "05e6393d97663d9ff49c50af",
                    _tpl: "5926f2e086f7745aae644231",
                    parentId: "0630e2d1e2627a41d601c5b9",
                    slotId: "mod_reciever",
                },
                {
                    _id: "4a7f0c053b46a44d9e63788d",
                    _tpl: "5926c32286f774616e42de99",
                    parentId: "0630e2d1e2627a41d601c5b9",
                    slotId: "mod_charge",
                },
                {
                    _id: "6e7a1fce5f77fe2602c0882b",
                    _tpl: "5926f34786f77469195bfe92",
                    parentId: "05e6393d97663d9ff49c50af",
                    slotId: "mod_handguard",
                },
                {
                    _id: "c2b688dbf0f337c52af9f425",
                    _tpl: "5926d3c686f77410de68ebc8",
                    parentId: "05e6393d97663d9ff49c50af",
                    slotId: "mod_stock",
                },
                {
                    _id: "3b891678ca3f2f24fb8d23a4",
                    _tpl: "5926d33d86f77410de68ebc0",
                    parentId: "05e6393d97663d9ff49c50af",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "dcfbe7a7fcfa3800b748fc5e",
                    _tpl: "5926dad986f7741f82604363",
                    parentId: "05e6393d97663d9ff49c50af",
                    slotId: "mod_mount",
                },
                {
                    _id: "80ab17cc54edb1f7882bd00f",
                    _tpl: "59c63b4486f7747afb151c1c",
                    parentId: "3b891678ca3f2f24fb8d23a4",
                    slotId: "mod_mount",
                },
                {
                    _id: "28420f3b9bae867acb417a5e",
                    _tpl: "60a23797a37c940de7062d02",
                    parentId: "dcfbe7a7fcfa3800b748fc5e",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "0fda7d776ce486eafee8cb6a",
                    _tpl: "56def37dd2720bec348b456a",
                    parentId: "80ab17cc54edb1f7882bd00f",
                    slotId: "mod_tactical_001",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "665bdb3d01001a930cd0c471",
            Name: "rpk",
            Root: "3c2fb47748d4e8de51635ab1",
            Items: [
                {
                    _id: "3c2fb47748d4e8de51635ab1",
                    _tpl: "5beed0f50db834001c062b12",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "f24ce1ea449e8645fd780914",
                    _tpl: "5beec8ea0db834001a6f9dbf",
                    parentId: "3c2fb47748d4e8de51635ab1",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "42007d6bfefabc7b5ced73bf",
                    _tpl: "5beec91a0db834001961942d",
                    parentId: "3c2fb47748d4e8de51635ab1",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "fa059adc2149c50a83b05816",
                    _tpl: "5bed625c0db834001c062946",
                    parentId: "3c2fb47748d4e8de51635ab1",
                    slotId: "mod_magazine",
                },
                {
                    _id: "56ecb1a77162d282526831c0",
                    _tpl: "649ec87d8007560a9001ab36",
                    parentId: "3c2fb47748d4e8de51635ab1",
                    slotId: "mod_stock_001",
                },
                {
                    _id: "0ec20a57a69f0951479e03bd",
                    _tpl: "5beec3e30db8340019619424",
                    parentId: "3c2fb47748d4e8de51635ab1",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "7045a85ebbe33c368137b972",
                    _tpl: "5beec2820db834001b095426",
                    parentId: "3c2fb47748d4e8de51635ab1",
                    slotId: "mod_barrel",
                },
                {
                    _id: "4c77e472dc6bb1a51209b3e0",
                    _tpl: "544a3a774bdc2d3a388b4567",
                    parentId: "42007d6bfefabc7b5ced73bf",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "b2dddf04cb63e3778d112630",
                    _tpl: "5beec9450db83400970084fd",
                    parentId: "42007d6bfefabc7b5ced73bf",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "4b3d549e0989a247eabb5aca",
                    _tpl: "5d4406a8a4b9361e4f6eb8b7",
                    parentId: "56ecb1a77162d282526831c0",
                    slotId: "mod_stock",
                },
                {
                    _id: "834fa4c07b7c1bc5482b7f7e",
                    _tpl: "5beecbb80db834001d2c465e",
                    parentId: "0ec20a57a69f0951479e03bd",
                    slotId: "mod_mount_000",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "ed8c4ad7d0aecfcfb73a6196",
                    _tpl: "5beecbb80db834001d2c465e",
                    parentId: "0ec20a57a69f0951479e03bd",
                    slotId: "mod_mount_001",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "e375fe4f7a4f39132b5baf3c",
                    _tpl: "5c1bc5af2e221602b412949b",
                    parentId: "0ec20a57a69f0951479e03bd",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "bda177b2cf88614dc343ccf3",
                    _tpl: "5649ab884bdc2ded0b8b457f",
                    parentId: "7045a85ebbe33c368137b972",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "39ba7a6491c83d19de025531",
                    _tpl: "58d268fc86f774111273f8c2",
                    parentId: "4c77e472dc6bb1a51209b3e0",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "55044b4da46f3025eccc205e",
                    _tpl: "5bf3f59f0db834001a6fa060",
                    parentId: "b2dddf04cb63e3778d112630",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "026a8652a2fd475628ce289c",
                    _tpl: "6272370ee4013c5d7e31f418",
                    parentId: "834fa4c07b7c1bc5482b7f7e",
                    slotId: "mod_tactical_000",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "665bdbbe01001a930c1fcf4b",
            Name: "ak12",
            Root: "05c9f4a508b28a6a00cce29c",
            Items: [
                {
                    _id: "05c9f4a508b28a6a00cce29c",
                    _tpl: "6499849fc93611967b034949",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "5ed97e829e9e42dfccf97496",
                    _tpl: "649ec107961514b22506b10c",
                    parentId: "05c9f4a508b28a6a00cce29c",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "ff12dfa23fca2e326c95254f",
                    _tpl: "64c196ad26a15b84aa07132f",
                    parentId: "05c9f4a508b28a6a00cce29c",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "9473b8ddff403682563d8bf9",
                    _tpl: "5649ae4a4bdc2d1b2b8b4588",
                    parentId: "05c9f4a508b28a6a00cce29c",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "effa0d77997f4c4d8aec0249",
                    _tpl: "649ec2f3961514b22506b111",
                    parentId: "05c9f4a508b28a6a00cce29c",
                    slotId: "mod_reciever",
                },
                {
                    _id: "372b9dc1e7eb3f92aa10bc19",
                    _tpl: "649ec87d8007560a9001ab36",
                    parentId: "05c9f4a508b28a6a00cce29c",
                    slotId: "mod_stock_001",
                },
                {
                    _id: "f342b6fd8ee1a0b68f9e9b3c",
                    _tpl: "55d482194bdc2d1d4e8b456b",
                    parentId: "05c9f4a508b28a6a00cce29c",
                    slotId: "mod_magazine",
                },
                {
                    _id: "8264228d53a91441b90a416f",
                    _tpl: "6130ca3fd92c473c77020dbd",
                    parentId: "05c9f4a508b28a6a00cce29c",
                    slotId: "mod_charge",
                },
                {
                    _id: "d61825ce9c2f17e2630dca49",
                    _tpl: "649ec127c93611967b034957",
                    parentId: "05c9f4a508b28a6a00cce29c",
                    slotId: "mod_handguard",
                },
                {
                    _id: "79788abacbe9456e35f3ef56",
                    _tpl: "57adff4f24597737f373b6e6",
                    parentId: "effa0d77997f4c4d8aec0249",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "79d406ac7760e875184114d1",
                    _tpl: "56eabf3bd2720b75698b4569",
                    parentId: "372b9dc1e7eb3f92aa10bc19",
                    slotId: "mod_stock",
                },
                {
                    _id: "72116e2299b517cda155a559",
                    _tpl: "5beecbb80db834001d2c465e",
                    parentId: "d61825ce9c2f17e2630dca49",
                    slotId: "mod_mount_001",
                },
                {
                    _id: "4a45b8f4842db3844a3bb957",
                    _tpl: "5649a2464bdc2d91118b45a8",
                    parentId: "d61825ce9c2f17e2630dca49",
                    slotId: "mod_tactical",
                },
                {
                    _id: "f0ee96cb4c144b4fbfede6ce",
                    _tpl: "5b057b4f5acfc4771e1bd3e9",
                    parentId: "d61825ce9c2f17e2630dca49",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "3d5029a34955b5fb4ce56978",
                    _tpl: "58d2912286f7744e27117493",
                    parentId: "79d406ac7760e875184114d1",
                    slotId: "mod_stock",
                },
                {
                    _id: "22a95f299607ac7824c875c1",
                    _tpl: "5a800961159bd4315e3a1657",
                    parentId: "72116e2299b517cda155a559",
                    slotId: "mod_tactical_000",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "caecbc8923cfd21fb9d00a1e",
                    _tpl: "58d2664f86f7747fec5834f6",
                    parentId: "4a45b8f4842db3844a3bb957",
                    slotId: "mod_scope",
                },
                {
                    _id: "8fcbcf62891c941ae1e7afbc",
                    _tpl: "58d268fc86f774111273f8c2",
                    parentId: "caecbc8923cfd21fb9d00a1e",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "665bdc5d01001a930cdb93c8",
            Name: "scarh",
            Root: "b5e469d0902ff964a585ac5a",
            Items: [
                {
                    _id: "b5e469d0902ff964a585ac5a",
                    _tpl: "6183afd850224f204c1da514",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "adcd34d9d4f04006816a88eb",
                    _tpl: "59db3acc86f7742a2c4ab912",
                    parentId: "b5e469d0902ff964a585ac5a",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "ade51468a998bec7bab67836",
                    _tpl: "618168dc8004cc50514c34fc",
                    parentId: "b5e469d0902ff964a585ac5a",
                    slotId: "mod_magazine",
                },
                {
                    _id: "67684ecd309699c201aa143a",
                    _tpl: "6165adcdd3a39d50044c120f",
                    parentId: "b5e469d0902ff964a585ac5a",
                    slotId: "mod_reciever",
                },
                {
                    _id: "3f6a01b7fc154ff098f30ad8",
                    _tpl: "61816734d8e3106d9806c1f3",
                    parentId: "b5e469d0902ff964a585ac5a",
                    slotId: "mod_stock",
                },
                {
                    _id: "657c7873bef29e798e9e7892",
                    _tpl: "6181688c6c780c1e710c9b04",
                    parentId: "b5e469d0902ff964a585ac5a",
                    slotId: "mod_charge",
                },
                {
                    _id: "8b734116ecb512ce57694f44",
                    _tpl: "5d2dc3e548f035404a1a4798",
                    parentId: "67684ecd309699c201aa143a",
                    slotId: "mod_scope",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "764ce32b6c98b8511797f313",
                    _tpl: "6183b084a112697a4b3a6e6c",
                    parentId: "67684ecd309699c201aa143a",
                    slotId: "mod_barrel",
                },
                {
                    _id: "40154f2cd9f02f74e50d2bf2",
                    _tpl: "61817865d3a39d50044c13a4",
                    parentId: "67684ecd309699c201aa143a",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "3a7c8c4723491c2d70fbcdd2",
                    _tpl: "61816df1d3a39d50044c139e",
                    parentId: "67684ecd309699c201aa143a",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "cfc65ff10a6f5914b608f597",
                    _tpl: "61816dfa6ef05c2ce828f1ad",
                    parentId: "67684ecd309699c201aa143a",
                    slotId: "mod_mount_001",
                },
                {
                    _id: "fc4e4bf4b791d515ce5fcf1c",
                    _tpl: "618167528004cc50514c34f9",
                    parentId: "3f6a01b7fc154ff098f30ad8",
                    slotId: "mod_stock_001",
                },
                {
                    _id: "474f1e66d771103285898598",
                    _tpl: "618167441cb55961fa0fdc71",
                    parentId: "3f6a01b7fc154ff098f30ad8",
                    slotId: "mod_stock_002",
                },
                {
                    _id: "87a9ae4df22f338f19e7b917",
                    _tpl: "6130c43c67085e45ef1405a1",
                    parentId: "764ce32b6c98b8511797f313",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "7ee07230d6a951b5459694e8",
                    _tpl: "61816fcad92c473c770215cc",
                    parentId: "764ce32b6c98b8511797f313",
                    slotId: "mod_sight_front",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "f20a0e53c3f9ea0c8ddc5e2c",
                    _tpl: "5c1bc5612e221602b5429350",
                    parentId: "3a7c8c4723491c2d70fbcdd2",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "4f61ff41f8f79d7892791462",
                    _tpl: "61965d9058ef8c428c287e0d",
                    parentId: "3a7c8c4723491c2d70fbcdd2",
                    slotId: "mod_mount",
                },
                {
                    _id: "10e497360c04271fac6ce479",
                    _tpl: "5d2369418abbc306c62e0c80",
                    parentId: "cfc65ff10a6f5914b608f597",
                    slotId: "mod_tactical_001",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "f625a30399afb10763061fe1",
                    _tpl: "5dfa3d2b0dee1b22f862eade",
                    parentId: "87a9ae4df22f338f19e7b917",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "4f2a2f7434efe84493e0ac65",
                    _tpl: "618167616ef05c2ce828f1a8",
                    parentId: "fc4e4bf4b791d515ce5fcf1c",
                    slotId: "mod_stock",
                },
            ],
        },
        {
            Id: "665bdcdb01001a930c394750",
            Name: "m1a",
            Root: "186dd65943e778957147fb9a",
            Items: [
                {
                    _id: "186dd65943e778957147fb9a",
                    _tpl: "5aafa857e5b5b00018480968",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "7be6dfebdd0d9595eb1bacca",
                    _tpl: "5addccf45acfc400185c2989",
                    parentId: "186dd65943e778957147fb9a",
                    slotId: "mod_magazine",
                },
                {
                    _id: "0eb1b482dfc1c8e2980c0a09",
                    _tpl: "5addc7005acfc4001669f275",
                    parentId: "186dd65943e778957147fb9a",
                    slotId: "mod_stock",
                },
                {
                    _id: "1626d95e8164f638c4f453bb",
                    _tpl: "5aaf9d53e5b5b00015042a52",
                    parentId: "186dd65943e778957147fb9a",
                    slotId: "mod_barrel",
                },
                {
                    _id: "b6f35e52abc3c15ecf9ce87e",
                    _tpl: "5abcbb20d8ce87001773e258",
                    parentId: "186dd65943e778957147fb9a",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "90b8945a519fa6ce0c0d74b2",
                    _tpl: "5addbfe15acfc4001a5fc58b",
                    parentId: "186dd65943e778957147fb9a",
                    slotId: "mod_mount",
                },
                {
                    _id: "357ec9f572df2bc1daa94774",
                    _tpl: "5addc7ac5acfc400194dbd90",
                    parentId: "0eb1b482dfc1c8e2980c0a09",
                    slotId: "mod_stock",
                },
                {
                    _id: "a5d308c41ef8bd903202e65f",
                    _tpl: "5a7b483fe899ef0016170d15",
                    parentId: "0eb1b482dfc1c8e2980c0a09",
                    slotId: "mod_tactical_003",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "4e54d0f1aa60206e4b2e93f6",
                    _tpl: "5aafa1c2e5b5b00015042a56",
                    parentId: "1626d95e8164f638c4f453bb",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "9ee24e6aa3157f1ee6f57046",
                    _tpl: "626bb8532c923541184624b4",
                    parentId: "90b8945a519fa6ce0c0d74b2",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "2f6b4fce38ed9a7d1ebc579a",
                    _tpl: "5addc7db5acfc4001669f279",
                    parentId: "357ec9f572df2bc1daa94774",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "b889387705752cb3fd2166fb",
                    _tpl: "5aafa49ae5b5b00015042a58",
                    parentId: "4e54d0f1aa60206e4b2e93f6",
                    slotId: "mod_sight_front",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "665bdd4f01001a930caed5ea",
            Name: "rd704",
            Root: "4e208323194745ad42ace38e",
            Items: [
                {
                    _id: "4e208323194745ad42ace38e",
                    _tpl: "628a60ae6b1d481ff772e9c8",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "7995fab4b7ef5e23341090a9",
                    _tpl: "628a83c29179c324ed269508",
                    parentId: "4e208323194745ad42ace38e",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "f4fd595df348043064c4a760",
                    _tpl: "6130c43c67085e45ef1405a1",
                    parentId: "4e208323194745ad42ace38e",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "c1577dd11c120c43089674ad",
                    _tpl: "5649ae4a4bdc2d1b2b8b4588",
                    parentId: "4e208323194745ad42ace38e",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "fc9eab3038d2445174de951d",
                    _tpl: "5d2c770c48f0354b4a07c100",
                    parentId: "4e208323194745ad42ace38e",
                    slotId: "mod_reciever",
                },
                {
                    _id: "b39f89767ba8c96bcdd6498c",
                    _tpl: "628a7b23b0f75035732dd565",
                    parentId: "4e208323194745ad42ace38e",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "c7f345802400d88f380c0d4a",
                    _tpl: "628a6678ccaab13006640e49",
                    parentId: "4e208323194745ad42ace38e",
                    slotId: "mod_stock_000",
                },
                {
                    _id: "f2310df134be98595d64229c",
                    _tpl: "5c6175362e221600133e3b94",
                    parentId: "4e208323194745ad42ace38e",
                    slotId: "mod_magazine",
                },
                {
                    _id: "ff47da82540ec32440d5f02a",
                    _tpl: "6130ca3fd92c473c77020dbd",
                    parentId: "4e208323194745ad42ace38e",
                    slotId: "mod_charge",
                },
                {
                    _id: "710e4a24f5b758710d8912bf",
                    _tpl: "5b7be4895acfc400170e2dd5",
                    parentId: "7995fab4b7ef5e23341090a9",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "b99d14a744972038d630124c",
                    _tpl: "5dfa3d2b0dee1b22f862eade",
                    parentId: "f4fd595df348043064c4a760",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "9565d90e837b77d097da9749",
                    _tpl: "58491f3324597764bc48fa02",
                    parentId: "fc9eab3038d2445174de951d",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "76b38342a66cb154e484e8fd",
                    _tpl: "5649be884bdc2d79388b4577",
                    parentId: "c7f345802400d88f380c0d4a",
                    slotId: "mod_stock",
                },
                {
                    _id: "aa2b4cf973be9755a97edde1",
                    _tpl: "5c1cd46f2e22164bef5cfedb",
                    parentId: "710e4a24f5b758710d8912bf",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "f5b9a3dd022947c9c780b2a8",
                    _tpl: "56eabf3bd2720b75698b4569",
                    parentId: "76b38342a66cb154e484e8fd",
                    slotId: "mod_stock_000",
                },
                {
                    _id: "10d0fa59a235f42f3ba14bcc",
                    _tpl: "58d2912286f7744e27117493",
                    parentId: "f5b9a3dd022947c9c780b2a8",
                    slotId: "mod_stock",
                },
            ],
        },
        {
            Id: "665bddb901001a930cc446d5",
            Name: "mp7",
            Root: "b2b4dcbe303b1eb6102db720",
            Items: [
                {
                    _id: "b2b4dcbe303b1eb6102db720",
                    _tpl: "5bd70322209c4d00d7167b8f",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "714fa8ca8bb9b9c05cb30005",
                    _tpl: "5ba26586d4351e44f824b340",
                    parentId: "b2b4dcbe303b1eb6102db720",
                    slotId: "mod_magazine",
                },
                {
                    _id: "9fe9075be7820d7316dfb2a5",
                    _tpl: "5ba26acdd4351e003562908e",
                    parentId: "b2b4dcbe303b1eb6102db720",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "1d5fdc9b0d40f7986c65f045",
                    _tpl: "58d2664f86f7747fec5834f6",
                    parentId: "b2b4dcbe303b1eb6102db720",
                    slotId: "mod_scope",
                },
                {
                    _id: "fae0a71bb48936f058de089a",
                    _tpl: "56def37dd2720bec348b456a",
                    parentId: "b2b4dcbe303b1eb6102db720",
                    slotId: "mod_tactical_001",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "a89f98117946fd5ee363834b",
                    _tpl: "5bcf0213d4351e0085327c17",
                    parentId: "b2b4dcbe303b1eb6102db720",
                    slotId: "mod_stock",
                },
                {
                    _id: "328355c5c4997196dbed8f8b",
                    _tpl: "5b057b4f5acfc4771e1bd3e9",
                    parentId: "b2b4dcbe303b1eb6102db720",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "e6be991b8ff73ee6c044069f",
                    _tpl: "5ba26ae8d4351e00367f9bdb",
                    parentId: "9fe9075be7820d7316dfb2a5",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "1a2517f030571b8dc66d97ff",
                    _tpl: "58d268fc86f774111273f8c2",
                    parentId: "1d5fdc9b0d40f7986c65f045",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "665bde5e01001a930ce88c91",
            Name: "sr25",
            Root: "9c41ee4e29c103e98eb26676",
            Items: [
                {
                    _id: "9c41ee4e29c103e98eb26676",
                    _tpl: "5df8ce05b11454561e39243b",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "dbed7c0805630ecee720976b",
                    _tpl: "59db3a1d86f77429e05b4e92",
                    parentId: "9c41ee4e29c103e98eb26676",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "5a850764ff6199c8571765ec",
                    _tpl: "5a3501acc4a282000d72293a",
                    parentId: "9c41ee4e29c103e98eb26676",
                    slotId: "mod_magazine",
                },
                {
                    _id: "6e5fd2c93c918eb92de1bf9a",
                    _tpl: "5c793fb92e221644f31bfb64",
                    parentId: "9c41ee4e29c103e98eb26676",
                    slotId: "mod_stock",
                },
                {
                    _id: "b201305af04a144bd53a4681",
                    _tpl: "5df8e4080b92095fd441e594",
                    parentId: "9c41ee4e29c103e98eb26676",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "263b45960e88f8ed515beb9a",
                    _tpl: "5df8e053bb49d91fb446d6a6",
                    parentId: "9c41ee4e29c103e98eb26676",
                    slotId: "mod_charge",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "4919f0cb1414cffb1895c240",
                    _tpl: "58d2947e86f77447aa070d53",
                    parentId: "6e5fd2c93c918eb92de1bf9a",
                    slotId: "mod_stock_002",
                },
                {
                    _id: "23fce0876d8819fa31fe4bec",
                    _tpl: "5b3b99265acfc4704b4a1afb",
                    parentId: "b201305af04a144bd53a4681",
                    slotId: "mod_scope",
                },
                {
                    _id: "93c8fba213756974e77d29b7",
                    _tpl: "5dfa397fb11454561e39246c",
                    parentId: "b201305af04a144bd53a4681",
                    slotId: "mod_barrel",
                },
                {
                    _id: "b3dcfde1fa615c5d6fc2777c",
                    _tpl: "6065881d1246154cad35d637",
                    parentId: "b201305af04a144bd53a4681",
                    slotId: "mod_handguard",
                },
                {
                    _id: "aad866f03fa2f8836c11fcc2",
                    _tpl: "5dfa3d7ac41b2312ea33362a",
                    parentId: "b201305af04a144bd53a4681",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "dcec8f3a2d57bcf3e7576930",
                    _tpl: "58d2912286f7744e27117493",
                    parentId: "4919f0cb1414cffb1895c240",
                    slotId: "mod_stock",
                },
                {
                    _id: "e6e40e5173284812d188ae6a",
                    _tpl: "618ba27d9008e4636a67f61d",
                    parentId: "23fce0876d8819fa31fe4bec",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "cb61bb7c4bbea6a4671e4ae5",
                    _tpl: "6130c43c67085e45ef1405a1",
                    parentId: "93c8fba213756974e77d29b7",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "7979acd975060c8d291168e9",
                    _tpl: "6065dc8a132d4d12c81fd8e3",
                    parentId: "93c8fba213756974e77d29b7",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "0fe9db6c8f5f7595fd94957f",
                    _tpl: "5b7be4895acfc400170e2dd5",
                    parentId: "b3dcfde1fa615c5d6fc2777c",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "91438c7642751a0f8e8e977f",
                    _tpl: "5649a2464bdc2d91118b45a8",
                    parentId: "b3dcfde1fa615c5d6fc2777c",
                    slotId: "mod_scope",
                },
                {
                    _id: "eeaf993c77baf42b6c273dc9",
                    _tpl: "5dfa3d2b0dee1b22f862eade",
                    parentId: "cb61bb7c4bbea6a4671e4ae5",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "4359a255ac393bce0531484e",
                    _tpl: "5c1bc5612e221602b5429350",
                    parentId: "0fe9db6c8f5f7595fd94957f",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "a5292d54fb03eab6b01bc2e5",
                    _tpl: "58d2664f86f7747fec5834f6",
                    parentId: "91438c7642751a0f8e8e977f",
                    slotId: "mod_scope",
                },
                {
                    _id: "d5753e896283d5cef942abdc",
                    _tpl: "58d268fc86f774111273f8c2",
                    parentId: "a5292d54fb03eab6b01bc2e5",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "665bdf1901001a930ca92073",
            Name: "svds",
            Root: "83232fea89892271fa154f33",
            Items: [
                {
                    _id: "83232fea89892271fa154f33",
                    _tpl: "5c46fbd72e2216398b5a8c9c",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "a797dc7d7ae251bd6a25d4ee",
                    _tpl: "6516b129609aaf354b34b3a8",
                    parentId: "83232fea89892271fa154f33",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "a6dc76ea7294b0efa9d05ba8",
                    _tpl: "5c471c442e221602b542a6f8",
                    parentId: "83232fea89892271fa154f33",
                    slotId: "mod_magazine",
                },
                {
                    _id: "135591f71d07d7160a3a416b",
                    _tpl: "6197b229af1f5202c57a9bea",
                    parentId: "83232fea89892271fa154f33",
                    slotId: "mod_stock",
                },
                {
                    _id: "7fbcbb5ff9e0b0fdf6005864",
                    _tpl: "5c471cb32e221602b177afaa",
                    parentId: "83232fea89892271fa154f33",
                    slotId: "mod_barrel",
                },
                {
                    _id: "4ecaa23815a1bb1b8a05a683",
                    _tpl: "63d114019e35b334d82302f7",
                    parentId: "83232fea89892271fa154f33",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "a486b49d47bb2bf85d0482a1",
                    _tpl: "5c471c2d2e22164bef5d077f",
                    parentId: "83232fea89892271fa154f33",
                    slotId: "mod_mount_001",
                },
                {
                    _id: "f88a2e4d4d5137ac08bcfd5e",
                    _tpl: "5c471bd12e221602b4129c3a",
                    parentId: "83232fea89892271fa154f33",
                    slotId: "mod_reciever",
                },
                {
                    _id: "2344325b0f3a92bdbafd92fb",
                    _tpl: "5649ae4a4bdc2d1b2b8b4588",
                    parentId: "a797dc7d7ae251bd6a25d4ee",
                    slotId: "mod_pistolgrip",
                },
                {
                    _id: "9c414455143c3028357ae0b7",
                    _tpl: "5c793fb92e221644f31bfb64",
                    parentId: "135591f71d07d7160a3a416b",
                    slotId: "mod_stock",
                },
                {
                    _id: "27fa24020771944f2f469ea6",
                    _tpl: "5c471bfc2e221602b21d4e17",
                    parentId: "7fbcbb5ff9e0b0fdf6005864",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "9f26b2505b0ae14d2bfe5fec",
                    _tpl: "5c471c842e221615214259b5",
                    parentId: "7fbcbb5ff9e0b0fdf6005864",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "4103b4656b534001c257563a",
                    _tpl: "57c69dd424597774c03b7bbc",
                    parentId: "4ecaa23815a1bb1b8a05a683",
                    slotId: "mod_scope",
                },
                {
                    _id: "053b75133e093ccd47b03d43",
                    _tpl: "5e56991336989c75ab4f03f6",
                    parentId: "a486b49d47bb2bf85d0482a1",
                    slotId: "mod_handguard",
                },
                {
                    _id: "38318f7d5574b2e008fe3e20",
                    _tpl: "5c471b7e2e2216152006e46c",
                    parentId: "a486b49d47bb2bf85d0482a1",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "1774b31d53f1cef4c6ceb7d1",
                    _tpl: "5fc2369685fd526b824a5713",
                    parentId: "9c414455143c3028357ae0b7",
                    slotId: "mod_stock_004",
                },
                {
                    _id: "fcb1337316d4651a52e9ac3c",
                    _tpl: "5c471ba12e221602b3137d76",
                    parentId: "27fa24020771944f2f469ea6",
                    slotId: "mod_sight_front",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "29ae78b573457b7601f9cf7f",
                    _tpl: "5e01e9e273d8eb11426f5bc3",
                    parentId: "27fa24020771944f2f469ea6",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "5d8527b4687d6ecd7c777c15",
                    _tpl: "5e01ea19e9dc277128008c0b",
                    parentId: "29ae78b573457b7601f9cf7f",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "dc80d9d2209d4b60af5be158",
                    _tpl: "5b3b99475acfc432ff4dcbee",
                    parentId: "4103b4656b534001c257563a",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "98909ba584b2bda5b951fdf4",
                    _tpl: "5b7be47f5acfc400170e2dd2",
                    parentId: "053b75133e093ccd47b03d43",
                    slotId: "mod_mount_002",
                },
                {
                    _id: "d0500e9f51c6af2e2852eef9",
                    _tpl: "5b7be4895acfc400170e2dd5",
                    parentId: "053b75133e093ccd47b03d43",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "ca5d77a8bc3605ed314ddef1",
                    _tpl: "56def37dd2720bec348b456a",
                    parentId: "98909ba584b2bda5b951fdf4",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "334a3aa3bf4a1e7777551f24",
                    _tpl: "5c1cd46f2e22164bef5cfedb",
                    parentId: "d0500e9f51c6af2e2852eef9",
                    slotId: "mod_foregrip",
                },
            ],
        },
        {
            Id: "665bdf4501001a930cdd2139",
            Name: "spear",
            Root: "32d4349613a5a4e00eb11297",
            Items: [
                {
                    _id: "32d4349613a5a4e00eb11297",
                    _tpl: "65290f395ae2ae97b80fdf2d",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "438fcbab1cd491e2c2f3a63e",
                    _tpl: "652911675ae2ae97b80fdf3c",
                    parentId: "32d4349613a5a4e00eb11297",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "1300e40662fec9560131aed2",
                    _tpl: "65293c38fc460e50a509cb25",
                    parentId: "32d4349613a5a4e00eb11297",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "3ac128064c369c380cb717cd",
                    _tpl: "6529119424cbe3c74a05e5bb",
                    parentId: "32d4349613a5a4e00eb11297",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "cf4630099c7819da1d79ad72",
                    _tpl: "6529348224cbe3c74a05e5c4",
                    parentId: "32d4349613a5a4e00eb11297",
                    slotId: "mod_stock_000",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "f53138f3fafbce7e3c665457",
                    _tpl: "6529109524cbe3c74a05e5b7",
                    parentId: "32d4349613a5a4e00eb11297",
                    slotId: "mod_charge",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "d6c867878f2dba7ee948bc31",
                    _tpl: "6567e751a715f85433025998",
                    parentId: "3ac128064c369c380cb717cd",
                    slotId: "mod_scope",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "e7b1e983cd80fc4ec5779ee9",
                    _tpl: "652910565ae2ae97b80fdf35",
                    parentId: "3ac128064c369c380cb717cd",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "374dfee72a8c8be2dd8337ce",
                    _tpl: "652910ef50dc782999054b97",
                    parentId: "3ac128064c369c380cb717cd",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "7afa1395b04991a6f15bbec6",
                    _tpl: "6529366450dc782999054ba0",
                    parentId: "cf4630099c7819da1d79ad72",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "4166940b3834adff184f8fcd",
                    _tpl: "6567e7681265c8a131069b0f",
                    parentId: "d6c867878f2dba7ee948bc31",
                    slotId: "mod_scope",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "028647f73b2e5667fcce4c56",
                    _tpl: "6529113b5ae2ae97b80fdf39",
                    parentId: "e7b1e983cd80fc4ec5779ee9",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "31646f48d7ed87a9e8d90beb",
                    _tpl: "652910bc24cbe3c74a05e5b9",
                    parentId: "e7b1e983cd80fc4ec5779ee9",
                    slotId: "mod_gas_block",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "46bd56661828f0838b18e2d1",
                    _tpl: "652911e650dc782999054b9d",
                    parentId: "028647f73b2e5667fcce4c56",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "65f03f6db74a390fc8fecfe6",
                    _tpl: "6529370c405a5f51dd023db8",
                    parentId: "7afa1395b04991a6f15bbec6",
                    slotId: "mod_stock_000",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "665bdf9b01001a930cef2395",
            Name: "akm",
            Root: "ed8ff911ab1dc3dedf19aed5",
            Items: [
                {
                    _id: "ed8ff911ab1dc3dedf19aed5",
                    _tpl: "59d6088586f774275f37482f",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "97dd7fa98ad7afd7c37602f5",
                    _tpl: "5cf656f2d7f00c06585fb6eb",
                    parentId: "ed8ff911ab1dc3dedf19aed5",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "be2d626518c4f22eb324506b",
                    _tpl: "5f633f68f5750b524b45f112",
                    parentId: "ed8ff911ab1dc3dedf19aed5",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "f8b98275959dbe9494b74588",
                    _tpl: "5649ae4a4bdc2d1b2b8b4588",
                    parentId: "ed8ff911ab1dc3dedf19aed5",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "20e2a6930d5db59ed0ddfa0b",
                    _tpl: "5d2c770c48f0354b4a07c100",
                    parentId: "ed8ff911ab1dc3dedf19aed5",
                    slotId: "mod_reciever",
                },
                {
                    _id: "512790cf89724abee7218a84",
                    _tpl: "59d650cf86f7741b846413a4",
                    parentId: "ed8ff911ab1dc3dedf19aed5",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "b2ab652e0f1e9738c1100f94",
                    _tpl: "5b0e794b5acfc47a877359b2",
                    parentId: "ed8ff911ab1dc3dedf19aed5",
                    slotId: "mod_stock",
                },
                {
                    _id: "4fc0259fe545030f37b036a5",
                    _tpl: "5c6175362e221600133e3b94",
                    parentId: "ed8ff911ab1dc3dedf19aed5",
                    slotId: "mod_magazine",
                },
                {
                    _id: "29abd8281d6a7674fd775f21",
                    _tpl: "6130ca3fd92c473c77020dbd",
                    parentId: "ed8ff911ab1dc3dedf19aed5",
                    slotId: "mod_charge",
                },
                {
                    _id: "638c985ea7bce021566272e9",
                    _tpl: "59e0bdb186f774156f04ce82",
                    parentId: "97dd7fa98ad7afd7c37602f5",
                    slotId: "mod_mount_002",
                },
                {
                    _id: "4f001ae24196f1b7f9170f22",
                    _tpl: "5a9d6d13a2750c00164f6b03",
                    parentId: "97dd7fa98ad7afd7c37602f5",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "754e71b505c9ce8837503b60",
                    _tpl: "58491f3324597764bc48fa02",
                    parentId: "20e2a6930d5db59ed0ddfa0b",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "d5eca4fa7946f8351911099c",
                    _tpl: "6272370ee4013c5d7e31f418",
                    parentId: "638c985ea7bce021566272e9",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "7645639152f0e4621894e494",
                    _tpl: "5c1bc5af2e221602b412949b",
                    parentId: "4f001ae24196f1b7f9170f22",
                    slotId: "mod_foregrip",
                },
            ],
        },
        {
            Id: "665be00d01001a930c38e46f",
            Name: "mk47",
            Root: "101459507f9acd2030cec2b9",
            Items: [
                {
                    _id: "101459507f9acd2030cec2b9",
                    _tpl: "606587252535c57a13424cfd",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "c852b473808043911d23ec8f",
                    _tpl: "59db3a1d86f77429e05b4e92",
                    parentId: "101459507f9acd2030cec2b9",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "9069ba4a714cb1689316a859",
                    _tpl: "59d6272486f77466146386ff",
                    parentId: "101459507f9acd2030cec2b9",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "38f1a8b194b4155d30fcecd5",
                    _tpl: "606587a88900dc2d9a55b659",
                    parentId: "101459507f9acd2030cec2b9",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "09db623b4c494b763bd1974c",
                    _tpl: "5c793fc42e221600114ca25d",
                    parentId: "101459507f9acd2030cec2b9",
                    slotId: "mod_stock_001",
                },
                {
                    _id: "74a32d2f83955b748dc38cde",
                    _tpl: "606587bd6d0bd7580617bacc",
                    parentId: "101459507f9acd2030cec2b9",
                    slotId: "mod_charge",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "a0f76dce69f9d632cead572b",
                    _tpl: "59f9d81586f7744c7506ee62",
                    parentId: "38f1a8b194b4155d30fcecd5",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "9a7c6c95ae0b5b90d1eb9791",
                    _tpl: "6065878ac9cf8012264142fd",
                    parentId: "38f1a8b194b4155d30fcecd5",
                    slotId: "mod_barrel",
                },
                {
                    _id: "2e0280c330c567c2458475c2",
                    _tpl: "6065881d1246154cad35d637",
                    parentId: "38f1a8b194b4155d30fcecd5",
                    slotId: "mod_handguard",
                },
                {
                    _id: "9c30b5176412474cc8967ff9",
                    _tpl: "5bc09a18d4351e003562b68e",
                    parentId: "38f1a8b194b4155d30fcecd5",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "74caf1c533f7dc8e5c0a1513",
                    _tpl: "56eabf3bd2720b75698b4569",
                    parentId: "09db623b4c494b763bd1974c",
                    slotId: "mod_stock_002",
                },
                {
                    _id: "92f666e88d0f8addf0a36c2c",
                    _tpl: "5cdd7693d7f00c0010373aa5",
                    parentId: "9a7c6c95ae0b5b90d1eb9791",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "b0904fae3b042846b7a68752",
                    _tpl: "6065dc8a132d4d12c81fd8e3",
                    parentId: "9a7c6c95ae0b5b90d1eb9791",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "aea77a998b4f39c6ab0a4665",
                    _tpl: "6269220d70b6c02e665f2635",
                    parentId: "2e0280c330c567c2458475c2",
                    slotId: "mod_mount_002",
                },
                {
                    _id: "01a07c3fe9303b036e304a6c",
                    _tpl: "5b7be4895acfc400170e2dd5",
                    parentId: "2e0280c330c567c2458475c2",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "996ccf5a4221e23852046c01",
                    _tpl: "56def37dd2720bec348b456a",
                    parentId: "aea77a998b4f39c6ab0a4665",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "e30700780c7cd9d5f13728d2",
                    _tpl: "5c1bc5612e221602b5429350",
                    parentId: "01a07c3fe9303b036e304a6c",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "6c5007a53c82c8ddf445a67f",
                    _tpl: "58d2912286f7744e27117493",
                    parentId: "74caf1c533f7dc8e5c0a1513",
                    slotId: "mod_stock",
                },
            ],
        },
        {
            Id: "665be04a01001a930c34da4b",
            Name: "glock18c",
            Root: "db6af03e8de3330e03ed1620",
            Items: [
                {
                    _id: "db6af03e8de3330e03ed1620",
                    _tpl: "5b1fa9b25acfc40018633c01",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "f7672605ad165e5a404e7ec1",
                    _tpl: "5b1fa9ea5acfc40018633c0a",
                    parentId: "db6af03e8de3330e03ed1620",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "d331e24d852fabf3259c6993",
                    _tpl: "5a7b4960e899ef197b331a2d",
                    parentId: "db6af03e8de3330e03ed1620",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "813dfa178245c084dd0802c4",
                    _tpl: "5b1faa0f5acfc40dc528aeb5",
                    parentId: "db6af03e8de3330e03ed1620",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "0f4c318f4058d34678627919",
                    _tpl: "5a718f958dc32e00094b97e7",
                    parentId: "db6af03e8de3330e03ed1620",
                    slotId: "mod_magazine",
                },
                {
                    _id: "214f6355e2fcafaf936d7699",
                    _tpl: "5a7b483fe899ef0016170d15",
                    parentId: "db6af03e8de3330e03ed1620",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "86f4a960b29b7cf9df496334",
                    _tpl: "5a7ad55551dfba0015068f42",
                    parentId: "db6af03e8de3330e03ed1620",
                    slotId: "mod_mount",
                },
                {
                    _id: "8c2d11f69d3970c6c27c2ebf",
                    _tpl: "5d1c702ad7ad1a632267f429",
                    parentId: "db6af03e8de3330e03ed1620",
                    slotId: "mod_stock",
                },
                {
                    _id: "a8ab5da256cdf4886daf9807",
                    _tpl: "5a6f5d528dc32e00094b97d9",
                    parentId: "813dfa178245c084dd0802c4",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "40f7f4d494e48d6323d80a52",
                    _tpl: "5a6f58f68dc32e000a311390",
                    parentId: "813dfa178245c084dd0802c4",
                    slotId: "mod_sight_front",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "3385e27934fcca49af294a67",
                    _tpl: "58d2664f86f7747fec5834f6",
                    parentId: "86f4a960b29b7cf9df496334",
                    slotId: "mod_scope",
                },
                {
                    _id: "68c19fa85997b6963d774611",
                    _tpl: "58d268fc86f774111273f8c2",
                    parentId: "3385e27934fcca49af294a67",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "665be0e601001a930c819838",
            Name: "saiga12",
            Root: "16689ca4419f071d09d8ecfc",
            Items: [
                {
                    _id: "16689ca4419f071d09d8ecfc",
                    _tpl: "576165642459773c7a400233",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "3991b9675b3b02d523ebdbe4",
                    _tpl: "5f63418ef5750b524b45f116",
                    parentId: "16689ca4419f071d09d8ecfc",
                    slotId: "mod_handguard",
                },
                {
                    _id: "d5b297f8db3fb25b1384ad6c",
                    _tpl: "58272d7f2459774f6311ddfd",
                    parentId: "16689ca4419f071d09d8ecfc",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "b3bef1cd9ed06c09121185db",
                    _tpl: "5e2192a498a36665e8337386",
                    parentId: "16689ca4419f071d09d8ecfc",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "8ce4be3f8606fa80b8b53e82",
                    _tpl: "57616c112459773cce774d66",
                    parentId: "16689ca4419f071d09d8ecfc",
                    slotId: "mod_reciever",
                },
                {
                    _id: "14f15f1f2096defd15ba9f76",
                    _tpl: "57a9b9ce2459770ee926038d",
                    parentId: "16689ca4419f071d09d8ecfc",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "0512137ebe8d808dd0922e96",
                    _tpl: "5beec8b20db834001961942a",
                    parentId: "16689ca4419f071d09d8ecfc",
                    slotId: "mod_stock",
                },
                {
                    _id: "3f13ac52b7457bb85b19f947",
                    _tpl: "5cf8f3b0d7f00c00217872ef",
                    parentId: "16689ca4419f071d09d8ecfc",
                    slotId: "mod_magazine",
                },
                {
                    _id: "609f7031f8de8be85667d16d",
                    _tpl: "6130ca3fd92c473c77020dbd",
                    parentId: "16689ca4419f071d09d8ecfc",
                    slotId: "mod_charge",
                },
                {
                    _id: "2a8a429c8f1e2fa29bb8870e",
                    _tpl: "58491f3324597764bc48fa02",
                    parentId: "3991b9675b3b02d523ebdbe4",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "d86ecb8cac9d5039fb1202be",
                    _tpl: "5b057b4f5acfc4771e1bd3e9",
                    parentId: "3991b9675b3b02d523ebdbe4",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "2a5d78a754b03c0e067a937a",
                    _tpl: "6272370ee4013c5d7e31f418",
                    parentId: "3991b9675b3b02d523ebdbe4",
                    slotId: "mod_tactical_002",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "6988555014446c2014396c4b",
                    _tpl: "58d2947e86f77447aa070d53",
                    parentId: "0512137ebe8d808dd0922e96",
                    slotId: "mod_stock",
                },
                {
                    _id: "35a9c43e73b416f3bc0433e5",
                    _tpl: "58d2912286f7744e27117493",
                    parentId: "6988555014446c2014396c4b",
                    slotId: "mod_stock",
                },
            ],
        },
        {
            Id: "665be1f401001a930c56e2ac",
            Name: "val",
            Root: "aafd59dcd83bdc7013a66782",
            Items: [
                {
                    _id: "aafd59dcd83bdc7013a66782",
                    _tpl: "57c44b372459772d2b39b8ce",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "7caaa010c522ee7ab560f93b",
                    _tpl: "57c44dd02459772d2e0ae249",
                    parentId: "aafd59dcd83bdc7013a66782",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "978d4c37c0f89dc7454ff536",
                    _tpl: "57c44f4f2459772d2c627113",
                    parentId: "aafd59dcd83bdc7013a66782",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "f88fe90b160c5d0ad1e165c4",
                    _tpl: "5a9e81fba2750c00164f6b11",
                    parentId: "aafd59dcd83bdc7013a66782",
                    slotId: "mod_magazine",
                },
                {
                    _id: "564dccd1f2053873953769dd",
                    _tpl: "5a69a2ed8dc32e000d46d1f1",
                    parentId: "aafd59dcd83bdc7013a66782",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "500f7273448f26cc23a0597c",
                    _tpl: "5dff8db859400025ea5150d4",
                    parentId: "aafd59dcd83bdc7013a66782",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "1ac3e8617e63d6b3eeb611be",
                    _tpl: "57c44e7b2459772d28133248",
                    parentId: "7caaa010c522ee7ab560f93b",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "eb474f518d82a553b65f6c2d",
                    _tpl: "5a9fc7e6a2750c0032157184",
                    parentId: "7caaa010c522ee7ab560f93b",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "7f7f11a4818b2e87e6e5bb60",
                    _tpl: "58d2947e86f77447aa070d53",
                    parentId: "564dccd1f2053873953769dd",
                    slotId: "mod_stock_000",
                },
                {
                    _id: "d9619260c0f823ef6a395ede",
                    _tpl: "584924ec24597768f12ae244",
                    parentId: "500f7273448f26cc23a0597c",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "132e299607da2dd10baab2b5",
                    _tpl: "5a7b483fe899ef0016170d15",
                    parentId: "eb474f518d82a553b65f6c2d",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "bca41865388e6b1cfa04ff97",
                    _tpl: "58d2912286f7744e27117493",
                    parentId: "7f7f11a4818b2e87e6e5bb60",
                    slotId: "mod_stock",
                },
            ],
        },
        {
            Id: "66605a3001001a930c6e8f2e",
            Name: "ak74n",
            Root: "c534e46a756b3b3500505591",
            Items: [
                {
                    _id: "c534e46a756b3b3500505591",
                    _tpl: "5644bd2b4bdc2d3b4c8b4572",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "f828272895be6bc268b5748c",
                    _tpl: "59c6633186f7740cf0493bb9",
                    parentId: "c534e46a756b3b3500505591",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "96ceaf90d8fa7bd9812d083a",
                    _tpl: "615d8f5dd92c473c770212ef",
                    parentId: "c534e46a756b3b3500505591",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "c2ae523cce8bda6c4af866fc",
                    _tpl: "5649ae4a4bdc2d1b2b8b4588",
                    parentId: "c534e46a756b3b3500505591",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "92f14c31953b92ec22deff70",
                    _tpl: "5d2c770c48f0354b4a07c100",
                    parentId: "c534e46a756b3b3500505591",
                    slotId: "mod_reciever",
                },
                {
                    _id: "21b11d58913bcf8256adc859",
                    _tpl: "5649b0544bdc2d1b2b8b458a",
                    parentId: "c534e46a756b3b3500505591",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "eb5960a3f05f6d7df1282cd2",
                    _tpl: "5b0e794b5acfc47a877359b2",
                    parentId: "c534e46a756b3b3500505591",
                    slotId: "mod_stock",
                },
                {
                    _id: "10e669e5877e5cc81c54edac",
                    _tpl: "55d482194bdc2d1d4e8b456b",
                    parentId: "c534e46a756b3b3500505591",
                    slotId: "mod_magazine",
                },
                {
                    _id: "b01819d197e2133b1b8b0ffa",
                    _tpl: "5cf4e3f3d7f00c06595bc7f0",
                    parentId: "f828272895be6bc268b5748c",
                    slotId: "mod_handguard",
                },
                {
                    _id: "017b22c3f6d2ed6a1b161270",
                    _tpl: "615d8f8567085e45ef1409ca",
                    parentId: "96ceaf90d8fa7bd9812d083a",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "b156a070b0aa83053b20da8e",
                    _tpl: "584924ec24597768f12ae244",
                    parentId: "92f14c31953b92ec22deff70",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "154fafd67e1975b58eae0a4b",
                    _tpl: "5c1cd46f2e22164bef5cfedb",
                    parentId: "b01819d197e2133b1b8b0ffa",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "01b1a51a2190e0f6f320e643",
                    _tpl: "56def37dd2720bec348b456a",
                    parentId: "b01819d197e2133b1b8b0ffa",
                    slotId: "mod_tactical_003",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "66605aa001001a930c13edd2",
            Name: "mutant",
            Root: "a3454fb2aabeeb4ea60d9f6c",
            Items: [
                {
                    _id: "a3454fb2aabeeb4ea60d9f6c",
                    _tpl: "606587252535c57a13424cfd",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "3796b886e7111cd6545ca523",
                    _tpl: "5d025cc1d7ad1a53845279ef",
                    parentId: "a3454fb2aabeeb4ea60d9f6c",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "128fe06814b7e1f597536528",
                    _tpl: "59fafc5086f7740dbe19f6c3",
                    parentId: "a3454fb2aabeeb4ea60d9f6c",
                    slotId: "mod_magazine",
                },
                {
                    _id: "d86b483af90d807e9bb13c90",
                    _tpl: "606587a88900dc2d9a55b659",
                    parentId: "a3454fb2aabeeb4ea60d9f6c",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "87e020bded46d7348ed284cb",
                    _tpl: "5c793fb92e221644f31bfb64",
                    parentId: "a3454fb2aabeeb4ea60d9f6c",
                    slotId: "mod_stock_001",
                },
                {
                    _id: "922615de64b738905075c798",
                    _tpl: "606587bd6d0bd7580617bacc",
                    parentId: "a3454fb2aabeeb4ea60d9f6c",
                    slotId: "mod_charge",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "df97542492d98fef72f85e37",
                    _tpl: "57c69dd424597774c03b7bbc",
                    parentId: "d86b483af90d807e9bb13c90",
                    slotId: "mod_scope",
                },
                {
                    _id: "9ee7a903ff286517e31b40bd",
                    _tpl: "60658776f2cb2e02a42ace2b",
                    parentId: "d86b483af90d807e9bb13c90",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "53df76564f61626c910d32dd",
                    _tpl: "6065880c132d4d12c81fd8da",
                    parentId: "d86b483af90d807e9bb13c90",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "37257f0dd9027cd324af6ec4",
                    _tpl: "58d2947e86f77447aa070d53",
                    parentId: "87e020bded46d7348ed284cb",
                    slotId: "mod_stock_002",
                },
                {
                    _id: "0cb21f981ed70e00a2533176",
                    _tpl: "5b3b99475acfc432ff4dcbee",
                    parentId: "df97542492d98fef72f85e37",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "f113a8e74c159143ae85cdf3",
                    _tpl: "6130c43c67085e45ef1405a1",
                    parentId: "9ee7a903ff286517e31b40bd",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "982449d9979bddba6d2e00c5",
                    _tpl: "6065dc8a132d4d12c81fd8e3",
                    parentId: "9ee7a903ff286517e31b40bd",
                    slotId: "mod_gas_block",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "f5edcae962088f555bcee0f5",
                    _tpl: "5b7be4895acfc400170e2dd5",
                    parentId: "53df76564f61626c910d32dd",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "fc71177286ad385daed0a951",
                    _tpl: "5dfa3d2b0dee1b22f862eade",
                    parentId: "f113a8e74c159143ae85cdf3",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "60afb1129e901f3baf5394c7",
                    _tpl: "5b057b4f5acfc4771e1bd3e9",
                    parentId: "f5edcae962088f555bcee0f5",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "0b30540e2e89fdf8943d170c",
                    _tpl: "58d2912286f7744e27117493",
                    parentId: "37257f0dd9027cd324af6ec4",
                    slotId: "mod_stock",
                },
            ],
        },
        {
            Id: "66605afc01001a930c5e0e6e",
            Name: "ak101",
            Root: "953a8b429cff6b7c82a2c521",
            Items: [
                {
                    _id: "953a8b429cff6b7c82a2c521",
                    _tpl: "5ac66cb05acfc40198510a10",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "ee9b5db744ea90da1e6aeb2d",
                    _tpl: "5cf656f2d7f00c06585fb6eb",
                    parentId: "953a8b429cff6b7c82a2c521",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "76bb44a04fe850a7a9cf70a8",
                    _tpl: "5f633f791b231926f2329f13",
                    parentId: "953a8b429cff6b7c82a2c521",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "2575319badcb4347f704e69c",
                    _tpl: "5649ae4a4bdc2d1b2b8b4588",
                    parentId: "953a8b429cff6b7c82a2c521",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "3d7477a5acf8a750ac68ae93",
                    _tpl: "5d2c770c48f0354b4a07c100",
                    parentId: "953a8b429cff6b7c82a2c521",
                    slotId: "mod_reciever",
                },
                {
                    _id: "ad14a72dbfac46714c6a554a",
                    _tpl: "5ac72e475acfc400180ae6fe",
                    parentId: "953a8b429cff6b7c82a2c521",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "39c006d2ac13ec4fc2740749",
                    _tpl: "649ec87d8007560a9001ab36",
                    parentId: "953a8b429cff6b7c82a2c521",
                    slotId: "mod_stock",
                },
                {
                    _id: "31a44be79df2b211ff6b472c",
                    _tpl: "5c0548ae0db834001966a3c2",
                    parentId: "953a8b429cff6b7c82a2c521",
                    slotId: "mod_magazine",
                },
                {
                    _id: "41f2f8555ef87a87c401b955",
                    _tpl: "6130ca3fd92c473c77020dbd",
                    parentId: "953a8b429cff6b7c82a2c521",
                    slotId: "mod_charge",
                },
                {
                    _id: "4acccf69f5679942a0eeabf4",
                    _tpl: "5a9d6d13a2750c00164f6b03",
                    parentId: "ee9b5db744ea90da1e6aeb2d",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "ad89148f8d45193b5150969c",
                    _tpl: "64785e7c19d732620e045e15",
                    parentId: "3d7477a5acf8a750ac68ae93",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "b26a261eac35496f01203a31",
                    _tpl: "56eabf3bd2720b75698b4569",
                    parentId: "39c006d2ac13ec4fc2740749",
                    slotId: "mod_stock",
                },
                {
                    _id: "088d33cce4c47c4b2f148057",
                    _tpl: "5b057b4f5acfc4771e1bd3e9",
                    parentId: "4acccf69f5679942a0eeabf4",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "1d854dddae5a15b92bbd2309",
                    _tpl: "58d2912286f7744e27117493",
                    parentId: "b26a261eac35496f01203a31",
                    slotId: "mod_stock",
                },
            ],
        },
        {
            Id: "66605b9001001a930c0f7f2d",
            Name: "vector9x19",
            Root: "cb5a6bb5c3b8de5bbe179ac9",
            Items: [
                {
                    _id: "cb5a6bb5c3b8de5bbe179ac9",
                    _tpl: "5fc3f2d5900b1d5091531e57",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "6ae8cbbf6ba05f1396f8884e",
                    _tpl: "5a718f958dc32e00094b97e7",
                    parentId: "cb5a6bb5c3b8de5bbe179ac9",
                    slotId: "mod_magazine",
                },
                {
                    _id: "b1eeac314b251a640c7f8fa8",
                    _tpl: "5fb6567747ce63734e3fa1dc",
                    parentId: "cb5a6bb5c3b8de5bbe179ac9",
                    slotId: "mod_sight_front",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "6135ddb0afde33037eea650d",
                    _tpl: "5fb6564947ce63734e3fa1da",
                    parentId: "cb5a6bb5c3b8de5bbe179ac9",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "54b657c88b0de0d53f1d5684",
                    _tpl: "58491f3324597764bc48fa02",
                    parentId: "cb5a6bb5c3b8de5bbe179ac9",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "150d06263255488e55969fc2",
                    _tpl: "5fb655b748c711690e3a8d5a",
                    parentId: "cb5a6bb5c3b8de5bbe179ac9",
                    slotId: "mod_stock",
                },
                {
                    _id: "06e764b234180e6e030788bc",
                    _tpl: "5fbbc383d5cb881a7363194a",
                    parentId: "cb5a6bb5c3b8de5bbe179ac9",
                    slotId: "mod_barrel",
                },
                {
                    _id: "885e323f85f03d3589894c79",
                    _tpl: "5fbb976df9986c4cff3fe5f2",
                    parentId: "cb5a6bb5c3b8de5bbe179ac9",
                    slotId: "mod_mount",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "3003a367853641cb2ea86b3c",
                    _tpl: "5fce0f9b55375d18a253eff2",
                    parentId: "cb5a6bb5c3b8de5bbe179ac9",
                    slotId: "mod_mount_001",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "09f510f144a78bea8c4e2636",
                    _tpl: "5fce0f9b55375d18a253eff2",
                    parentId: "cb5a6bb5c3b8de5bbe179ac9",
                    slotId: "mod_mount_002",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "20c8a4b30d4d3fbc76743fa4",
                    _tpl: "5c793fb92e221644f31bfb64",
                    parentId: "150d06263255488e55969fc2",
                    slotId: "mod_stock_000",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "e2a0cc5488936e4065441d28",
                    _tpl: "5a32a064c4a28200741e22de",
                    parentId: "06e764b234180e6e030788bc",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "dda45cedde91e41837197c89",
                    _tpl: "655df24fdf80b12750626d0a",
                    parentId: "885e323f85f03d3589894c79",
                    slotId: "mod_foregrip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "cb01440a402ff9e2fcdb0f5c",
                    _tpl: "5a7b483fe899ef0016170d15",
                    parentId: "09f510f144a78bea8c4e2636",
                    slotId: "mod_tactical",
                    upd: {
                        SpawnedInSession: true,
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "c669f817310033e488bf6b3c",
                    _tpl: "56eabf3bd2720b75698b4569",
                    parentId: "20c8a4b30d4d3fbc76743fa4",
                    slotId: "mod_stock_004",
                },
                {
                    _id: "d68e83f4e5e6950613d93793",
                    _tpl: "58d2912286f7744e27117493",
                    parentId: "c669f817310033e488bf6b3c",
                    slotId: "mod_stock",
                },
            ],
        },
        {
            Id: "66605c0801001a930c205b76",
            Name: "vector45",
            Root: "d92ab5326d24718b61ca7a1b",
            Items: [
                {
                    _id: "d92ab5326d24718b61ca7a1b",
                    _tpl: "5fb64bc92b1b027b1f50bcf2",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "b5f211158a807fb199e85f8c",
                    _tpl: "5fb651dc85f90547f674b6f4",
                    parentId: "d92ab5326d24718b61ca7a1b",
                    slotId: "mod_magazine",
                },
                {
                    _id: "d3f65c4dff3bfbebada90831",
                    _tpl: "5fb6567747ce63734e3fa1dc",
                    parentId: "d92ab5326d24718b61ca7a1b",
                    slotId: "mod_sight_front",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "25303b001b794b984bd7b102",
                    _tpl: "5fb6564947ce63734e3fa1da",
                    parentId: "d92ab5326d24718b61ca7a1b",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "2d898fcec2ea283904bc52fe",
                    _tpl: "58491f3324597764bc48fa02",
                    parentId: "d92ab5326d24718b61ca7a1b",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "0d4b2f0b419295e43d5fc7f3",
                    _tpl: "5fb655b748c711690e3a8d5a",
                    parentId: "d92ab5326d24718b61ca7a1b",
                    slotId: "mod_stock",
                },
                {
                    _id: "c707b9bcc845ab1579e510ac",
                    _tpl: "5fb65363d1409e5ca04b54f5",
                    parentId: "d92ab5326d24718b61ca7a1b",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "65f8d54471b7e8d58327bbfc",
                    _tpl: "5fbb976df9986c4cff3fe5f2",
                    parentId: "d92ab5326d24718b61ca7a1b",
                    slotId: "mod_mount",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "89fb642a78113e876ad43d67",
                    _tpl: "5fce0f9b55375d18a253eff2",
                    parentId: "d92ab5326d24718b61ca7a1b",
                    slotId: "mod_mount_001",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "01b159cefe12f100f759b404",
                    _tpl: "5fce0f9b55375d18a253eff2",
                    parentId: "d92ab5326d24718b61ca7a1b",
                    slotId: "mod_mount_002",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "d3dc21c491c524a1cc8142fa",
                    _tpl: "5c793fb92e221644f31bfb64",
                    parentId: "0d4b2f0b419295e43d5fc7f3",
                    slotId: "mod_stock_000",
                },
                {
                    _id: "61bae081d0b93adae0e18a4a",
                    _tpl: "5a32a064c4a28200741e22de",
                    parentId: "c707b9bcc845ab1579e510ac",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "dfd9964f7f751cd300db63fe",
                    _tpl: "5b057b4f5acfc4771e1bd3e9",
                    parentId: "65f8d54471b7e8d58327bbfc",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "281dfdf55bfe8a48d91a5b0e",
                    _tpl: "56def37dd2720bec348b456a",
                    parentId: "01b159cefe12f100f759b404",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "655bf7e45bd778acc7d990db",
                    _tpl: "56eabf3bd2720b75698b4569",
                    parentId: "d3dc21c491c524a1cc8142fa",
                    slotId: "mod_stock_004",
                },
                {
                    _id: "e8aa53f4d4d366a3e1d77bf4",
                    _tpl: "58d2912286f7744e27117493",
                    parentId: "655bf7e45bd778acc7d990db",
                    slotId: "mod_stock",
                },
            ],
        },
        {
            Id: "66605c8d01001a930c3ec58f",
            Name: "tx15",
            Root: "c3083553006fac7f80d2c6ad",
            Items: [
                {
                    _id: "c3083553006fac7f80d2c6ad",
                    _tpl: "5d43021ca4b9362eab4b5e25",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "39e24e22af5c72a8f47d4c22",
                    _tpl: "59db3a1d86f77429e05b4e92",
                    parentId: "c3083553006fac7f80d2c6ad",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "3704be53255aa484b38bc838",
                    _tpl: "5aaa5dfee5b5b000140293d3",
                    parentId: "c3083553006fac7f80d2c6ad",
                    slotId: "mod_magazine",
                },
                {
                    _id: "54eac74187a15b661df652fa",
                    _tpl: "5d4405aaa4b9361e6a4e6bd3",
                    parentId: "c3083553006fac7f80d2c6ad",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "f122d819eba2e203fce24742",
                    _tpl: "5649be884bdc2d79388b4577",
                    parentId: "c3083553006fac7f80d2c6ad",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "695510a001834ed0b84ad856",
                    _tpl: "5d44334ba4b9362b346d1948",
                    parentId: "c3083553006fac7f80d2c6ad",
                    slotId: "mod_charge",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "b8527c8a7fe4ec6a397447f6",
                    _tpl: "57c69dd424597774c03b7bbc",
                    parentId: "54eac74187a15b661df652fa",
                    slotId: "mod_scope",
                },
                {
                    _id: "eab357e1836919617e1c9665",
                    _tpl: "5d440b93a4b9364276578d4b",
                    parentId: "54eac74187a15b661df652fa",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "1c430b530caa21386f543e97",
                    _tpl: "5d4405f0a4b9361e6a4e6bd9",
                    parentId: "54eac74187a15b661df652fa",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "45ab159cf822580abf699355",
                    _tpl: "5d4406a8a4b9361e4f6eb8b7",
                    parentId: "f122d819eba2e203fce24742",
                    slotId: "mod_stock_000",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "8a57f8e11e36596779cc4fb9",
                    _tpl: "5b3b99475acfc432ff4dcbee",
                    parentId: "b8527c8a7fe4ec6a397447f6",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "ae69a4847c01cc4c485a5882",
                    _tpl: "612e0cfc8004cc50514c2d9e",
                    parentId: "eab357e1836919617e1c9665",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "19fc4b6b4f5178f1684f4925",
                    _tpl: "56eabcd4d2720b66698b4574",
                    parentId: "eab357e1836919617e1c9665",
                    slotId: "mod_gas_block",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "21abcb59cef6558ed12df09d",
                    _tpl: "5a7b483fe899ef0016170d15",
                    parentId: "1c430b530caa21386f543e97",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "dee4ac5da892816ffbe6a819",
                    _tpl: "5b7be47f5acfc400170e2dd2",
                    parentId: "1c430b530caa21386f543e97",
                    slotId: "mod_mount_004",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "019dbdff2dd7af6dd6d079c5",
                    _tpl: "5b7be4895acfc400170e2dd5",
                    parentId: "1c430b530caa21386f543e97",
                    slotId: "mod_foregrip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "53a49fae56a020618d019088",
                    _tpl: "63877c99e785640d436458ea",
                    parentId: "ae69a4847c01cc4c485a5882",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "49963f2b18d2d597cb1a7602",
                    _tpl: "5c1cd46f2e22164bef5cfedb",
                    parentId: "019dbdff2dd7af6dd6d079c5",
                    slotId: "mod_foregrip",
                },
            ],
        },
        {
            Id: "66605cda01001a930c065fed",
            Name: "pkp",
            Root: "5b109a1e0cfef13692172d25",
            Items: [
                {
                    _id: "5b109a1e0cfef13692172d25",
                    _tpl: "64ca3d3954fc657e230529cc",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "fullauto",
                        },
                    },
                },
                {
                    _id: "dc04aa1395fbfb44ad800988",
                    _tpl: "5649ae4a4bdc2d1b2b8b4588",
                    parentId: "5b109a1e0cfef13692172d25",
                    slotId: "mod_pistolgrip",
                },
                {
                    _id: "ba677215ab302cd4950a1272",
                    _tpl: "646372518610c40fc20204e8",
                    parentId: "5b109a1e0cfef13692172d25",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "e3c95cca0081b69bc64575dd",
                    _tpl: "6492d7847363b8a52206bc52",
                    parentId: "5b109a1e0cfef13692172d25",
                    slotId: "mod_stock",
                },
                {
                    _id: "2f4602c28a4ad9c8dd7a469d",
                    _tpl: "64639a9aab86f8fd4300146c",
                    parentId: "5b109a1e0cfef13692172d25",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "44d93bab4d64ccd6ef017c1a",
                    _tpl: "6464d870bb2c580352070cc4",
                    parentId: "5b109a1e0cfef13692172d25",
                    slotId: "mod_bipod",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "399f5dcea926acc711749fc4",
                    _tpl: "6492fb8253acae0af00a29b6",
                    parentId: "5b109a1e0cfef13692172d25",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "b3ad71db73a2606d9807160b",
                    _tpl: "638db77630c4240f9e06f8b6",
                    parentId: "5b109a1e0cfef13692172d25",
                    slotId: "mod_scope",
                },
                {
                    _id: "708c1efba3cc81e21a0c108c",
                    _tpl: "5a0c59791526d8dba737bba7",
                    parentId: "e3c95cca0081b69bc64575dd",
                    slotId: "mod_stock_000",
                },
                {
                    _id: "a89e538bf0888698cb428fed",
                    _tpl: "5649ade84bdc2d1b2b8b4587",
                    parentId: "e3c95cca0081b69bc64575dd",
                    slotId: "mod_pistolgrip_000",
                },
                {
                    _id: "ead4bcb28e7744ca3a014906",
                    _tpl: "58d2664f86f7747fec5834f6",
                    parentId: "b3ad71db73a2606d9807160b",
                    slotId: "mod_scope",
                },
                {
                    _id: "90c2b00ab7edceed7f4021f0",
                    _tpl: "58d268fc86f774111273f8c2",
                    parentId: "ead4bcb28e7744ca3a014906",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
    ];
    weaponDecentBuilds = [
        {
            Id: "665bc5ca010012f7daeafc42",
            Name: "kbp9a-91",
            Root: "8ba6997701373140bb9e131f",
            Items: [
                {
                    _id: "8ba6997701373140bb9e131f",
                    _tpl: "644674a13d52156624001fbc",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "7e2d8c0a574e7015d79b79ce",
                    _tpl: "6450ec2e7da7133e5a09ca96",
                    parentId: "8ba6997701373140bb9e131f",
                    slotId: "mod_magazine",
                },
                {
                    _id: "306dd518e9c0cea9414cb06e",
                    _tpl: "6450f21a3d52156624001fcf",
                    parentId: "8ba6997701373140bb9e131f",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "32ffbdc151341293d9bfb36a",
                    _tpl: "6451167ad4928d46d30be3fd",
                    parentId: "8ba6997701373140bb9e131f",
                    slotId: "mod_stock_000",
                },
                {
                    _id: "9ef21e29b3a2ac9cd75dc923",
                    _tpl: "57486e672459770abd687134",
                    parentId: "8ba6997701373140bb9e131f",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "7970ddf9da893390d3ce5e7d",
                    _tpl: "645122f6d4928d46d30be3ff",
                    parentId: "8ba6997701373140bb9e131f",
                    slotId: "mod_barrel",
                },
                {
                    _id: "6db15a47f1fe066ba744d4d5",
                    _tpl: "64527a3a7da7133e5a09ca99",
                    parentId: "7970ddf9da893390d3ce5e7d",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "d67c6a2aede57c99248b7d6e",
                    _tpl: "644675573d52156624001fc9",
                    parentId: "7970ddf9da893390d3ce5e7d",
                    slotId: "mod_handguard",
                },
            ],
        },
        {
            Id: "665bc63c010012f7dad7a48f",
            Name: "ak-74n",
            Root: "6c7bc464373f16352af6affe",
            Items: [
                {
                    _id: "6c7bc464373f16352af6affe",
                    _tpl: "5644bd2b4bdc2d3b4c8b4572",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "87bd9a3848ae17d7909689f0",
                    _tpl: "59c6633186f7740cf0493bb9",
                    parentId: "6c7bc464373f16352af6affe",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "c8dc4dd57042937263c39f35",
                    _tpl: "5649ab884bdc2ded0b8b457f",
                    parentId: "6c7bc464373f16352af6affe",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "3b9a660adb0d0200a7438f34",
                    _tpl: "5649ad3f4bdc2df8348b4585",
                    parentId: "6c7bc464373f16352af6affe",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "a9475c25282e4e79daf22075",
                    _tpl: "5649af094bdc2df8348b4586",
                    parentId: "6c7bc464373f16352af6affe",
                    slotId: "mod_reciever",
                },
                {
                    _id: "a8c7041f67a6d968134c5763",
                    _tpl: "5649b0544bdc2d1b2b8b458a",
                    parentId: "6c7bc464373f16352af6affe",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "4ec011d2e348458da2b5599a",
                    _tpl: "5649b1c04bdc2d16268b457c",
                    parentId: "6c7bc464373f16352af6affe",
                    slotId: "mod_stock",
                },
                {
                    _id: "625c1d5757dde2bdbad39aff",
                    _tpl: "564ca99c4bdc2d16268b4589",
                    parentId: "6c7bc464373f16352af6affe",
                    slotId: "mod_magazine",
                },
                {
                    _id: "094a1b682b7a5c0bdc0c48a9",
                    _tpl: "5c90c3622e221601da359851",
                    parentId: "6c7bc464373f16352af6affe",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "cb9ce04b61abd6189c62af22",
                    _tpl: "5648ac824bdc2ded0b8b457d",
                    parentId: "6c7bc464373f16352af6affe",
                    slotId: "mod_charge",
                },
                {
                    _id: "e95623ba75fd4475d4ffc1c0",
                    _tpl: "5a9d56c8a2750c0032157146",
                    parentId: "87bd9a3848ae17d7909689f0",
                    slotId: "mod_handguard",
                },
                {
                    _id: "6e0b1e2c43ebbf2717d29149",
                    _tpl: "5c0505e00db834001b735073",
                    parentId: "094a1b682b7a5c0bdc0c48a9",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "2eb6b120fdafd436d94c375b",
                    _tpl: "5fc0f9b5d724d907e2077d82",
                    parentId: "e95623ba75fd4475d4ffc1c0",
                    slotId: "mod_mount_000",
                },
            ],
        },
        {
            Id: "665bc698010012f7da0cd030",
            Name: "vpo-209",
            Root: "401994c6848cbba44a7f965e",
            Items: [
                {
                    _id: "401994c6848cbba44a7f965e",
                    _tpl: "59e6687d86f77411d949b251",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "06ce863de9ed8206f0bc27a8",
                    _tpl: "59e649f986f77411d949b246",
                    parentId: "401994c6848cbba44a7f965e",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "1d2ec8e2b6fcbb449fb25896",
                    _tpl: "mechSlant_366",
                    parentId: "401994c6848cbba44a7f965e",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "d586ee5900e15c1909a16376",
                    _tpl: "59e6318286f77444dd62c4cc",
                    parentId: "401994c6848cbba44a7f965e",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "fae58d0cd18d84cbe747ffe4",
                    _tpl: "5d2c770c48f0354b4a07c100",
                    parentId: "401994c6848cbba44a7f965e",
                    slotId: "mod_reciever",
                },
                {
                    _id: "1ff4679d574055b810f5ec9f",
                    _tpl: "59e8977386f77415a553c453",
                    parentId: "401994c6848cbba44a7f965e",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "c2dc8e88c9564a0c6b16337d",
                    _tpl: "5cbdb1b0ae9215000d50e105",
                    parentId: "401994c6848cbba44a7f965e",
                    slotId: "mod_stock",
                },
                {
                    _id: "7c8cedb92dfcbc0b138058cb",
                    _tpl: "5b1fd4e35acfc40018633c39",
                    parentId: "401994c6848cbba44a7f965e",
                    slotId: "mod_magazine",
                },
                {
                    _id: "b5ea271fc86e77715793264e",
                    _tpl: "5648ac824bdc2ded0b8b457d",
                    parentId: "401994c6848cbba44a7f965e",
                    slotId: "mod_charge",
                },
                {
                    _id: "70c6c1d4dba53f22def4c9c9",
                    _tpl: "5a0f096dfcdbcb0176308b15",
                    parentId: "401994c6848cbba44a7f965e",
                    slotId: "mod_sight_front",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "327f7cf42b1630aecc8ead03",
                    _tpl: "5c9a07572e221644f31c4b32",
                    parentId: "06ce863de9ed8206f0bc27a8",
                    slotId: "mod_handguard",
                },
                {
                    _id: "dd52994579ee363c4e088bf2",
                    _tpl: "5c0505e00db834001b735073",
                    parentId: "fae58d0cd18d84cbe747ffe4",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "d7e8a2fe2ff5abc883e91e07",
                    _tpl: "5a0c59791526d8dba737bba7",
                    parentId: "c2dc8e88c9564a0c6b16337d",
                    slotId: "mod_stock",
                },
                {
                    _id: "dcb58a409849c0205e1fae5f",
                    _tpl: "57cffce524597763b31685d8",
                    parentId: "327f7cf42b1630aecc8ead03",
                    slotId: "mod_foregrip",
                },
            ],
        },
        {
            Id: "665bc6d3010012f7da222c4c",
            Name: "vp0-101",
            Root: "6afd434bb11973259088f4f5",
            Items: [
                {
                    _id: "6afd434bb11973259088f4f5",
                    _tpl: "5c501a4d2e221602b412b540",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "105744bbabde87c581ea902b",
                    _tpl: "5c5039be2e221602b177c9ff",
                    parentId: "6afd434bb11973259088f4f5",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "ac5b2641b3fba7f35c3b603d",
                    _tpl: "5c503d0a2e221602b542b7ef",
                    parentId: "6afd434bb11973259088f4f5",
                    slotId: "mod_reciever",
                },
                {
                    _id: "41609a8f436f7bd0a84a7c6b",
                    _tpl: "5c503b1c2e221602b21d6e9d",
                    parentId: "6afd434bb11973259088f4f5",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "8269587d2069a02cd4d6b980",
                    _tpl: "5f63405df5750b524b45f114",
                    parentId: "6afd434bb11973259088f4f5",
                    slotId: "mod_stock",
                },
                {
                    _id: "21cb2cbdb098ea31f06a263d",
                    _tpl: "5c503ad32e2216398b5aada2",
                    parentId: "6afd434bb11973259088f4f5",
                    slotId: "mod_magazine",
                },
                {
                    _id: "c4c51fae0008c56342e51ba8",
                    _tpl: "5c82343a2e221644f31c0611",
                    parentId: "6afd434bb11973259088f4f5",
                    slotId: "mod_mount",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "8b70bd69d51cc38d7be49402",
                    _tpl: "5f63407e1b231926f2329f15",
                    parentId: "6afd434bb11973259088f4f5",
                    slotId: "mod_muzzle",
                },
            ],
        },
        {
            Id: "665bc76e010012f7da176c5b",
            Name: "m4a1",
            Root: "459f0e04faac6ebf7b3a5c2b",
            Items: [
                {
                    _id: "459f0e04faac6ebf7b3a5c2b",
                    _tpl: "5447a9cd4bdc2dbd208b4567",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "1868c4cf744ec23511cdfb0b",
                    _tpl: "59db3acc86f7742a2c4ab912",
                    parentId: "459f0e04faac6ebf7b3a5c2b",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "4791f6183c8605794018a211",
                    _tpl: "55802d5f4bdc2dac148b458e",
                    parentId: "459f0e04faac6ebf7b3a5c2b",
                    slotId: "mod_magazine",
                },
                {
                    _id: "b4631fd3434c3245326262ba",
                    _tpl: "55d355e64bdc2d962f8b4569",
                    parentId: "459f0e04faac6ebf7b3a5c2b",
                    slotId: "mod_reciever",
                },
                {
                    _id: "37233624500b9f803314b2f1",
                    _tpl: "638de3603a1a4031d8260b8c",
                    parentId: "459f0e04faac6ebf7b3a5c2b",
                    slotId: "mod_stock",
                },
                {
                    _id: "4e8da17e3fd94fab12607f4f",
                    _tpl: "55d44fd14bdc2d962f8b456e",
                    parentId: "459f0e04faac6ebf7b3a5c2b",
                    slotId: "mod_charge",
                },
                {
                    _id: "9a6636ca920f1ceb9b7df8f3",
                    _tpl: "5c07dd120db834001c39092d",
                    parentId: "b4631fd3434c3245326262ba",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "e75d8f89b90d83bb8d2b58bf",
                    _tpl: "5d440b9fa4b93601354d480c",
                    parentId: "b4631fd3434c3245326262ba",
                    slotId: "mod_barrel",
                },
                {
                    _id: "bd86d0668582d4590c505672",
                    _tpl: "595cfa8b86f77427437e845b",
                    parentId: "b4631fd3434c3245326262ba",
                    slotId: "mod_handguard",
                },
                {
                    _id: "db3877bcce8f29f9b62d95ff",
                    _tpl: "5d135e83d7ad1a21b83f42d8",
                    parentId: "37233624500b9f803314b2f1",
                    slotId: "mod_stock_000",
                },
                {
                    _id: "0069df88409505cbb5476df0",
                    _tpl: "5b3a16655acfc40016387a2a",
                    parentId: "e75d8f89b90d83bb8d2b58bf",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "56a3eeca197bff0b678000d1",
                    _tpl: "56eabcd4d2720b66698b4574",
                    parentId: "e75d8f89b90d83bb8d2b58bf",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "14d0e99d975959be968fd7f5",
                    _tpl: "59e0bed186f774156f04ce84",
                    parentId: "bd86d0668582d4590c505672",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "fed064711014f5a0373540de",
                    _tpl: "58c157c886f774032749fb06",
                    parentId: "14d0e99d975959be968fd7f5",
                    slotId: "mod_foregrip",
                },
            ],
        },
        {
            Id: "665bc7b4010012f7da095985",
            Name: "rfb",
            Root: "766e68552c411a1f5c3439fd",
            Items: [
                {
                    _id: "766e68552c411a1f5c3439fd",
                    _tpl: "5f2a9575926fd9352339381f",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "a036d38be2c2fd312fa74b29",
                    _tpl: "5b099ac65acfc400186331e1",
                    parentId: "766e68552c411a1f5c3439fd",
                    slotId: "mod_magazine",
                },
                {
                    _id: "9de4a51c8d61f70e2e7d2534",
                    _tpl: "5f2aa46b878ef416f538b567",
                    parentId: "766e68552c411a1f5c3439fd",
                    slotId: "mod_barrel",
                },
                {
                    _id: "1e3d9c023247c029759f935b",
                    _tpl: "5f2aa47a200e2c0ee46efa71",
                    parentId: "766e68552c411a1f5c3439fd",
                    slotId: "mod_handguard",
                },
                {
                    _id: "825e0764f263eeda38c55d91",
                    _tpl: "5f2aa49f9b44de6b1b4e68d4",
                    parentId: "766e68552c411a1f5c3439fd",
                    slotId: "mod_mount",
                },
                {
                    _id: "88867b7d4c55e865b4ac7fe4",
                    _tpl: "5f2aa43ba9b91d26f20ae6d2",
                    parentId: "9de4a51c8d61f70e2e7d2534",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "0c131cd5fdf757a8acb32c8d",
                    _tpl: "5f2aa493cd375f14e15eea72",
                    parentId: "1e3d9c023247c029759f935b",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "db4426bedd191fe37c8e8b3a",
                    _tpl: "5c0517910db83400232ffee5",
                    parentId: "825e0764f263eeda38c55d91",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "ac6dd4b1941aadea69f12c0a",
                    _tpl: "615d8eb350224f204c1da1cf",
                    parentId: "88867b7d4c55e865b4ac7fe4",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "36df82d4b7fa6e018d0f961c",
                    _tpl: "5c791e872e2216001219c40a",
                    parentId: "0c131cd5fdf757a8acb32c8d",
                    slotId: "mod_foregrip",
                },
            ],
        },
        {
            Id: "665bc7e5010012f7da062590",
            Name: "val",
            Root: "6d01bc6fa6cd2e902a8e4c18",
            Items: [
                {
                    _id: "6d01bc6fa6cd2e902a8e4c18",
                    _tpl: "57c44b372459772d2b39b8ce",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "023f18835cd23d32b462eb8f",
                    _tpl: "57c44dd02459772d2e0ae249",
                    parentId: "6d01bc6fa6cd2e902a8e4c18",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "f01eb9e2a3ce216bcc95d1f8",
                    _tpl: "57c44f4f2459772d2c627113",
                    parentId: "6d01bc6fa6cd2e902a8e4c18",
                    slotId: "mod_reciever",
                },
                {
                    _id: "6a440db716e85b60a7db0b13",
                    _tpl: "57838f9f2459774a150289a0",
                    parentId: "6d01bc6fa6cd2e902a8e4c18",
                    slotId: "mod_magazine",
                },
                {
                    _id: "9f48c0d9105ed552338ca5f0",
                    _tpl: "57c44fa82459772d2d75e415",
                    parentId: "6d01bc6fa6cd2e902a8e4c18",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "da5fe08c39052034b3206b0b",
                    _tpl: "57c450252459772d28133253",
                    parentId: "6d01bc6fa6cd2e902a8e4c18",
                    slotId: "mod_stock",
                },
                {
                    _id: "eb84fa3bdaa2df99b8336f42",
                    _tpl: "57486e672459770abd687134",
                    parentId: "6d01bc6fa6cd2e902a8e4c18",
                    slotId: "mod_mount_004",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "432db4c0a7e8b513f119aa43",
                    _tpl: "57c44e7b2459772d28133248",
                    parentId: "023f18835cd23d32b462eb8f",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "665bc84c010012f7da105d17",
            Name: "ak-102",
            Root: "3e261ee92d5c40b760c66b82",
            Items: [
                {
                    _id: "3e261ee92d5c40b760c66b82",
                    _tpl: "5ac66d015acfc400180ae6e4",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "2b6d1d74f2751ccd9d2ce935",
                    _tpl: "59c6633186f7740cf0493bb9",
                    parentId: "3e261ee92d5c40b760c66b82",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "771fcbcee540a74ad5181c49",
                    _tpl: "5cc9a96cd7f00c011c04e04a",
                    parentId: "3e261ee92d5c40b760c66b82",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "d2415b4daef1265daa2b252b",
                    _tpl: "5649ade84bdc2d1b2b8b4587",
                    parentId: "3e261ee92d5c40b760c66b82",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "a19e45d56c4e880133420628",
                    _tpl: "5ac50da15acfc4001718d287",
                    parentId: "3e261ee92d5c40b760c66b82",
                    slotId: "mod_reciever",
                },
                {
                    _id: "7049e4281ba43e6f733d0dae",
                    _tpl: "5ac733a45acfc400192630e2",
                    parentId: "3e261ee92d5c40b760c66b82",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "77afcbc7fe7ab107f0d9e4f1",
                    _tpl: "5ac50c185acfc400163398d4",
                    parentId: "3e261ee92d5c40b760c66b82",
                    slotId: "mod_stock",
                },
                {
                    _id: "6817e418b10c534fc92ba0ae",
                    _tpl: "5c0548ae0db834001966a3c2",
                    parentId: "3e261ee92d5c40b760c66b82",
                    slotId: "mod_magazine",
                },
                {
                    _id: "d23e5c31de4280a53acb5f98",
                    _tpl: "6130ca3fd92c473c77020dbd",
                    parentId: "3e261ee92d5c40b760c66b82",
                    slotId: "mod_charge",
                },
                {
                    _id: "e0adb326a5cadefc893f9862",
                    _tpl: "5648b4534bdc2d3d1c8b4580",
                    parentId: "2b6d1d74f2751ccd9d2ce935",
                    slotId: "mod_handguard",
                },
                {
                    _id: "58ec6c7ed0b36716f6ef7a4a",
                    _tpl: "5a0c59791526d8dba737bba7",
                    parentId: "77afcbc7fe7ab107f0d9e4f1",
                    slotId: "mod_stock",
                },
                {
                    _id: "cd86ead2b1da404bf4ef247e",
                    _tpl: "588226d124597767ad33f787",
                    parentId: "e0adb326a5cadefc893f9862",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "3bff0a0d8c95479affc0bdfe",
                    _tpl: "570fd6c2d2720bc6458b457f",
                    parentId: "e0adb326a5cadefc893f9862",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "f42eadd7633d8119af458870",
                    _tpl: "56def37dd2720bec348b456a",
                    parentId: "e0adb326a5cadefc893f9862",
                    slotId: "mod_tactical_002",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "665bc87c010012f7da89cd3d",
            Name: "m700",
            Root: "96af1ce6fc2df8e4284b9624",
            Items: [
                {
                    _id: "96af1ce6fc2df8e4284b9624",
                    _tpl: "5bfea6e90db834001b7347f3",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "81fcb81a503ace43acb52026",
                    _tpl: "5bfea7ad0db834001c38f1ee",
                    parentId: "96af1ce6fc2df8e4284b9624",
                    slotId: "mod_magazine",
                },
                {
                    _id: "d528a317dcc55900073674b7",
                    _tpl: "5bfeb32b0db834001a6694d9",
                    parentId: "96af1ce6fc2df8e4284b9624",
                    slotId: "mod_stock",
                },
                {
                    _id: "1bb54dad11f949782adc1462",
                    _tpl: "5bfebc320db8340019668d79",
                    parentId: "96af1ce6fc2df8e4284b9624",
                    slotId: "mod_barrel",
                },
                {
                    _id: "cd0fb1e8730da85228fc3c73",
                    _tpl: "5bfebc5e0db834001a6694e5",
                    parentId: "96af1ce6fc2df8e4284b9624",
                    slotId: "mod_mount",
                },
                {
                    _id: "1402bc4a3e325224027230d8",
                    _tpl: "5a7b483fe899ef0016170d15",
                    parentId: "d528a317dcc55900073674b7",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "fc1272ac7a71ff097551b32e",
                    _tpl: "6130c43c67085e45ef1405a1",
                    parentId: "1bb54dad11f949782adc1462",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "39c4b2f81ce3036b1c5d77a6",
                    _tpl: "5b2388675acfc4771e1be0be",
                    parentId: "cd0fb1e8730da85228fc3c73",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "665bc8bf010012f7da2c0d92",
            Name: "glock19x",
            Root: "2a83090452bfc35b8ef82cea",
            Items: [
                {
                    _id: "2a83090452bfc35b8ef82cea",
                    _tpl: "63088377b5cd696784087147",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "1d4882ae915126d2e19af4c3",
                    _tpl: "630764fea987397c0816d219",
                    parentId: "2a83090452bfc35b8ef82cea",
                    slotId: "mod_barrel",
                },
                {
                    _id: "7c5504af7f5971d69cede8bd",
                    _tpl: "63075cc5962d0247b029dc2a",
                    parentId: "2a83090452bfc35b8ef82cea",
                    slotId: "mod_reciever",
                },
                {
                    _id: "0737aad0c155b12c10499680",
                    _tpl: "630767c37d50ff5e8a1ea71a",
                    parentId: "2a83090452bfc35b8ef82cea",
                    slotId: "mod_magazine",
                },
                {
                    _id: "05d52ad17bfcc68cc66ee04b",
                    _tpl: "6272379924e29f06af4d5ecb",
                    parentId: "2a83090452bfc35b8ef82cea",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "abb69ce979f1dbf7a3ae9eba",
                    _tpl: "5a7d9122159bd4001438dbf4",
                    parentId: "7c5504af7f5971d69cede8bd",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "4205c163eb121793b49f9dd4",
                    _tpl: "630765777d50ff5e8a1ea718",
                    parentId: "7c5504af7f5971d69cede8bd",
                    slotId: "mod_sight_front",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "665bc90a010012f7da9af452",
            Name: "mcx",
            Root: "106326e6020d9cbc51d61ef0",
            Items: [
                {
                    _id: "106326e6020d9cbc51d61ef0",
                    _tpl: "5fbcc1d9016cce60e8341ab3",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "54f904ecbe46f6bb08f74f27",
                    _tpl: "57af48872459771f0b2ebf11",
                    parentId: "106326e6020d9cbc51d61ef0",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "cf9a4f6e8cfc7e23d0717165",
                    _tpl: "5d1340b3d7ad1a0b52682ed7",
                    parentId: "106326e6020d9cbc51d61ef0",
                    slotId: "mod_magazine",
                },
                {
                    _id: "27d69b3b71fd342fcdd9c318",
                    _tpl: "5fbcc3e4d6fa9c00c571bb58",
                    parentId: "106326e6020d9cbc51d61ef0",
                    slotId: "mod_reciever",
                },
                {
                    _id: "aa572a390a5b046b6902cdf7",
                    _tpl: "5fbcc429900b1d5091531dd7",
                    parentId: "106326e6020d9cbc51d61ef0",
                    slotId: "mod_stock",
                },
                {
                    _id: "ca3e0cfda045f666c3ef5a00",
                    _tpl: "5fbcc640016cce60e8341acc",
                    parentId: "106326e6020d9cbc51d61ef0",
                    slotId: "mod_charge",
                },
                {
                    _id: "ae24a0a66fe9351799a4c990",
                    _tpl: "558022b54bdc2dac148b458d",
                    parentId: "27d69b3b71fd342fcdd9c318",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "057f77647ef644ac14f73bdd",
                    _tpl: "5fbbfacda56d053a3543f799",
                    parentId: "27d69b3b71fd342fcdd9c318",
                    slotId: "mod_barrel",
                },
                {
                    _id: "7a3953d0d7a57075f5431b04",
                    _tpl: "5fbc226eca32ed67276c155d",
                    parentId: "27d69b3b71fd342fcdd9c318",
                    slotId: "mod_handguard",
                },
                {
                    _id: "548603ed3c16d67da9c5eae8",
                    _tpl: "5fc0fa957283c4046c58147e",
                    parentId: "27d69b3b71fd342fcdd9c318",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "ba14f5a27fe1a7c38bf89253",
                    _tpl: "544909bb4bdc2d6f028b4577",
                    parentId: "27d69b3b71fd342fcdd9c318",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "f55505b90ee588a7741241e8",
                    _tpl: "5fbc22ccf24b94483f726483",
                    parentId: "057f77647ef644ac14f73bdd",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "4e25af3efa9f4dcafc7a2020",
                    _tpl: "5fbc210bf24b94483f726481",
                    parentId: "057f77647ef644ac14f73bdd",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "c6e58f17dd44b49546d5cd4c",
                    _tpl: "5fc0fa362770a0045c59c677",
                    parentId: "7a3953d0d7a57075f5431b04",
                    slotId: "mod_sight_front",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "c4cf32122d4b087a5e91f940",
                    _tpl: "5fc0f9b5d724d907e2077d82",
                    parentId: "7a3953d0d7a57075f5431b04",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "a31bfa99eeaa3716d8c95d50",
                    _tpl: "5fbcbd02900b1d5091531dd3",
                    parentId: "f55505b90ee588a7741241e8",
                    slotId: "mod_muzzle_000",
                },
                {
                    _id: "36c9fce7bc2c1cda46b9d308",
                    _tpl: "5fbe760793164a5b6278efc8",
                    parentId: "f55505b90ee588a7741241e8",
                    slotId: "mod_muzzle_001",
                },
            ],
        },
        {
            Id: "665bc93c010012f7daf9e4ce",
            Name: "stm-9",
            Root: "593a6a97eb481367928d4a4a",
            Items: [
                {
                    _id: "593a6a97eb481367928d4a4a",
                    _tpl: "60339954d62c9b14ed777c06",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "a925f78edf9397b0519cff72",
                    _tpl: "602e71bd53a60014f9705bfa",
                    parentId: "593a6a97eb481367928d4a4a",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "67bdb1248baff63a95b71875",
                    _tpl: "5a7ad2e851dfba0016153692",
                    parentId: "593a6a97eb481367928d4a4a",
                    slotId: "mod_magazine",
                },
                {
                    _id: "651443de1637d117c42fb9bc",
                    _tpl: "602e63fb6335467b0c5ac94d",
                    parentId: "593a6a97eb481367928d4a4a",
                    slotId: "mod_reciever",
                },
                {
                    _id: "dc11b7737c02845821e7cf71",
                    _tpl: "602e3f1254072b51b239f713",
                    parentId: "593a6a97eb481367928d4a4a",
                    slotId: "mod_stock_001",
                },
                {
                    _id: "d4dd5cd521aa77b0b06b75e0",
                    _tpl: "6033749e88382f4fab3fd2c5",
                    parentId: "593a6a97eb481367928d4a4a",
                    slotId: "mod_charge",
                },
                {
                    _id: "92d5336ad4062412c25c6b03",
                    _tpl: "602f85fd9b513876d4338d9c",
                    parentId: "593a6a97eb481367928d4a4a",
                    slotId: "mod_tactical_000",
                },
                {
                    _id: "699f414eb8862bc63339dae6",
                    _tpl: "58d2664f86f7747fec5834f6",
                    parentId: "651443de1637d117c42fb9bc",
                    slotId: "mod_scope",
                },
                {
                    _id: "aa865a52b1e625731f962d28",
                    _tpl: "603372b4da11d6478d5a07ff",
                    parentId: "651443de1637d117c42fb9bc",
                    slotId: "mod_barrel",
                },
                {
                    _id: "4261761bdae5f014750a91d1",
                    _tpl: "6034e3cb0ddce744014cb870",
                    parentId: "651443de1637d117c42fb9bc",
                    slotId: "mod_handguard",
                },
                {
                    _id: "619ad7ff93a38adfde2d01c4",
                    _tpl: "602e620f9b513876d4338d9a",
                    parentId: "dc11b7737c02845821e7cf71",
                    slotId: "mod_stock_000",
                },
                {
                    _id: "af57d747c9bc3fb6c56d8f30",
                    _tpl: "58d268fc86f774111273f8c2",
                    parentId: "699f414eb8862bc63339dae6",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "50a838c819ef0f74a0b8f736",
                    _tpl: "60337f5dce399e10262255d1",
                    parentId: "aa865a52b1e625731f962d28",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "b26bbed6cb1a8a1cf21a5d07",
                    _tpl: "57cffce524597763b31685d8",
                    parentId: "4261761bdae5f014750a91d1",
                    slotId: "mod_foregrip",
                },
            ],
        },
        {
            Id: "665bc9ad010012f7daab8a1c",
            Name: "adar",
            Root: "16c6a0f770e1f28fd29e9e22",
            Items: [
                {
                    _id: "16c6a0f770e1f28fd29e9e22",
                    _tpl: "5c07c60e0db834002330051f",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "1191fac925fedc9ec1bb97f5",
                    _tpl: "602e71bd53a60014f9705bfa",
                    parentId: "16c6a0f770e1f28fd29e9e22",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "6ef5dfc78a35eaa6029241d8",
                    _tpl: "55802d5f4bdc2dac148b458e",
                    parentId: "16c6a0f770e1f28fd29e9e22",
                    slotId: "mod_magazine",
                },
                {
                    _id: "3f95d99d256b1e3404bec81d",
                    _tpl: "5c0e2f26d174af02a9625114",
                    parentId: "16c6a0f770e1f28fd29e9e22",
                    slotId: "mod_reciever",
                },
                {
                    _id: "b6e94227e171bf0945523294",
                    _tpl: "638de3603a1a4031d8260b8c",
                    parentId: "16c6a0f770e1f28fd29e9e22",
                    slotId: "mod_stock",
                },
                {
                    _id: "4b17c4a14166dcb5f7a09caa",
                    _tpl: "5c0faf68d174af02a96260b8",
                    parentId: "16c6a0f770e1f28fd29e9e22",
                    slotId: "mod_charge",
                },
                {
                    _id: "3e0c0b57be4d188d413e3a30",
                    _tpl: "544a3a774bdc2d3a388b4567",
                    parentId: "3f95d99d256b1e3404bec81d",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "cf0d6e4945164ca9f19522b1",
                    _tpl: "5c0e2f94d174af029f650d56",
                    parentId: "3f95d99d256b1e3404bec81d",
                    slotId: "mod_barrel",
                },
                {
                    _id: "8ad815f818c3297f97c91109",
                    _tpl: "5c9a26332e2216001219ea70",
                    parentId: "3f95d99d256b1e3404bec81d",
                    slotId: "mod_handguard",
                },
                {
                    _id: "fd58133706a3582bf52c732f",
                    _tpl: "5bb20e70d4351e0035629f8f",
                    parentId: "b6e94227e171bf0945523294",
                    slotId: "mod_stock_000",
                },
                {
                    _id: "fe40574932524bb75aa52556",
                    _tpl: "5c0fafb6d174af02a96260ba",
                    parentId: "cf0d6e4945164ca9f19522b1",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "aa9335817c3c180928923fb5",
                    _tpl: "5ae30e795acfc408fb139a0b",
                    parentId: "cf0d6e4945164ca9f19522b1",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "b1541a5eb56835136ea58d68",
                    _tpl: "59fc48e086f77463b1118392",
                    parentId: "8ad815f818c3297f97c91109",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "2aeebfa4f5c6a0c2a13cbe76",
                    _tpl: "5a7b483fe899ef0016170d15",
                    parentId: "8ad815f818c3297f97c91109",
                    slotId: "mod_tactical_002",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "665bc9d6010012f7da08c1d0",
            Name: "153",
            Root: "138d61429be665fe3637299c",
            Items: [
                {
                    _id: "138d61429be665fe3637299c",
                    _tpl: "56dee2bdd2720bc8328b4567",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "84652fa7e8120cf207975662",
                    _tpl: "56deec93d2720bec348b4568",
                    parentId: "138d61429be665fe3637299c",
                    slotId: "mod_barrel",
                },
                {
                    _id: "c00f1b7abd79d04e7e83f037",
                    _tpl: "56deed6ed2720b4c698b4583",
                    parentId: "138d61429be665fe3637299c",
                    slotId: "mod_handguard",
                },
                {
                    _id: "0737400c2f0fa553bb1c632d",
                    _tpl: "55d485804bdc2d8c2f8b456b",
                    parentId: "138d61429be665fe3637299c",
                    slotId: "mod_magazine",
                },
                {
                    _id: "daf05199f11954f0589b8fd3",
                    _tpl: "56083be64bdc2d20478b456f",
                    parentId: "138d61429be665fe3637299c",
                    slotId: "mod_stock",
                },
                {
                    _id: "939ab08cce829a0414a1a41c",
                    _tpl: "55d48ebc4bdc2d8c2f8b456c",
                    parentId: "138d61429be665fe3637299c",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "da87cba76afbd8fbbb7c07a6",
                    _tpl: "560838c94bdc2d77798b4569",
                    parentId: "84652fa7e8120cf207975662",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "2c66a72834d4fcb7c4a30291",
                    _tpl: "609b9e31506cf869cf3eaf41",
                    parentId: "84652fa7e8120cf207975662",
                    slotId: "mod_mount",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "1cc2101f45074247f0fea604",
                    _tpl: "56def37dd2720bec348b456a",
                    parentId: "939ab08cce829a0414a1a41c",
                    slotId: "mod_tactical_002",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "665bca1f010012f7da8f2b28",
            Name: "g36",
            Root: "e4c41dd3cb4afb93310c0efe",
            Items: [
                {
                    _id: "e4c41dd3cb4afb93310c0efe",
                    _tpl: "623063e994fc3f7b302a9696",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "21d79a375179fd7ffc4a64ac",
                    _tpl: "62307b7b10d2321fa8741921",
                    parentId: "e4c41dd3cb4afb93310c0efe",
                    slotId: "mod_magazine",
                },
                {
                    _id: "053ac571770fe2ecda3511a0",
                    _tpl: "622f140da5958f63c67f1735",
                    parentId: "e4c41dd3cb4afb93310c0efe",
                    slotId: "mod_stock",
                },
                {
                    _id: "0de07788b48de37d8612035a",
                    _tpl: "622b379bf9cfc87d675d2de5",
                    parentId: "e4c41dd3cb4afb93310c0efe",
                    slotId: "mod_barrel",
                },
                {
                    _id: "3a109e8b8ca09fd3c9f32077",
                    _tpl: "62386b2adf47d66e835094b2",
                    parentId: "e4c41dd3cb4afb93310c0efe",
                    slotId: "mod_handguard",
                },
                {
                    _id: "e04397af1645728ab73c353e",
                    _tpl: "622f02437762f55aaa68ac85",
                    parentId: "e4c41dd3cb4afb93310c0efe",
                    slotId: "mod_mount",
                },
                {
                    _id: "ae0d5a928f46518c21b2ea7e",
                    _tpl: "622b3c081b89c677a33bcda6",
                    parentId: "e4c41dd3cb4afb93310c0efe",
                    slotId: "mod_scope",
                },
                {
                    _id: "c5427ea4b7fe4abecd4e6445",
                    _tpl: "609269c3b0e443224b421cc1",
                    parentId: "0de07788b48de37d8612035a",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "78e61ef487d82ff974ee00b3",
                    _tpl: "622b327b267a1b13a44abea3",
                    parentId: "0de07788b48de37d8612035a",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "fa6bdf5d083bb20fcc8338a8",
                    _tpl: "62444cb99f47004c781903eb",
                    parentId: "3a109e8b8ca09fd3c9f32077",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "13b247e078b87c7981c9b2df",
                    _tpl: "62444cd3674028188b052799",
                    parentId: "3a109e8b8ca09fd3c9f32077",
                    slotId: "mod_mount_002",
                },
                {
                    _id: "2d3349a51f7f4ea175ec4bbe",
                    _tpl: "622f16a1a5958f63c67f1737",
                    parentId: "3a109e8b8ca09fd3c9f32077",
                    slotId: "mod_tactical",
                },
                {
                    _id: "b48f8ed25745ff32ea3ecd7a",
                    _tpl: "60a23797a37c940de7062d02",
                    parentId: "ae0d5a928f46518c21b2ea7e",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "944f83ff504aafd1ec16b708",
                    _tpl: "623166e08c43374ca1567195",
                    parentId: "ae0d5a928f46518c21b2ea7e",
                    slotId: "mod_sight_front",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "743efdb7b51a8b22e0b6bb6b",
                    _tpl: "6231670f0b8aa5472d060095",
                    parentId: "ae0d5a928f46518c21b2ea7e",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "20c3648d6e8a889c37f1166e",
                    _tpl: "60926df0132d4d12c81fd9df",
                    parentId: "c5427ea4b7fe4abecd4e6445",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "b36b6c101ac4b03a8913401e",
                    _tpl: "5a800961159bd4315e3a1657",
                    parentId: "13b247e078b87c7981c9b2df",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "665bca3b010012f7da74e2f2",
            Name: "ump",
            Root: "472be74529e476d248a68519",
            Items: [
                {
                    _id: "472be74529e476d248a68519",
                    _tpl: "5fc3e272f8b6a877a729eac5",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "e1833b9f15b451505803b7bd",
                    _tpl: "5fc3e466187fea44d52eda90",
                    parentId: "472be74529e476d248a68519",
                    slotId: "mod_magazine",
                },
                {
                    _id: "52f0407d55cef1d33ccee465",
                    _tpl: "58491f3324597764bc48fa02",
                    parentId: "472be74529e476d248a68519",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "0da7c9cd349f987511b97f4c",
                    _tpl: "5fc3e4ee7283c4046c5814af",
                    parentId: "472be74529e476d248a68519",
                    slotId: "mod_stock",
                },
                {
                    _id: "d9a9cae7286526fd0b176dee",
                    _tpl: "5fc3e4a27283c4046c5814ab",
                    parentId: "472be74529e476d248a68519",
                    slotId: "mod_barrel",
                },
                {
                    _id: "5a78c7c0aeeb613d06db5429",
                    _tpl: "5fc53954f8b6a877a729eaeb",
                    parentId: "472be74529e476d248a68519",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "f59a2aa0839a0c1dea96772c",
                    _tpl: "5fc5396e900b1d5091531e72",
                    parentId: "472be74529e476d248a68519",
                    slotId: "mod_mount_001",
                },
                {
                    _id: "c81f0715fda9b66220f25798",
                    _tpl: "5fc5396e900b1d5091531e72",
                    parentId: "472be74529e476d248a68519",
                    slotId: "mod_mount_002",
                },
                {
                    _id: "f0dffffb855a1f180cd6ec81",
                    _tpl: "6130c4d51cb55961fa0fd49f",
                    parentId: "d9a9cae7286526fd0b176dee",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "71a890d5060b5a8d67d9831f",
                    _tpl: "5cda9bcfd7f00c0c0b53e900",
                    parentId: "5a78c7c0aeeb613d06db5429",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "d16e2ee3e56b20be78ec8d1c",
                    _tpl: "5a7b483fe899ef0016170d15",
                    parentId: "f59a2aa0839a0c1dea96772c",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "665bca52010012f7da367598",
            Name: "auga1",
            Root: "d62cd5fe9bc2985d36c4161e",
            Items: [
                {
                    _id: "d62cd5fe9bc2985d36c4161e",
                    _tpl: "62e7c4fba689e8c9c50dfc38",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "fa1a977deba7df1f1b054ba8",
                    _tpl: "630e295c984633f1fb0e7c30",
                    parentId: "d62cd5fe9bc2985d36c4161e",
                    slotId: "mod_magazine",
                },
                {
                    _id: "bf5707afe3a7c8f939022838",
                    _tpl: "62e7c880f68e7a0676050c7c",
                    parentId: "d62cd5fe9bc2985d36c4161e",
                    slotId: "mod_charge",
                },
                {
                    _id: "fb25efb68ebdc6aeb6f0ccdb",
                    _tpl: "62ea7c793043d74a0306e19f",
                    parentId: "d62cd5fe9bc2985d36c4161e",
                    slotId: "mod_reciever",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0, 0],
                            ScopesSelectedModes: [0, 0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "016ebd30f532d51dca01c219",
                    _tpl: "62e7c7f3c34ea971710c32fc",
                    parentId: "fb25efb68ebdc6aeb6f0ccdb",
                    slotId: "mod_barrel",
                },
                {
                    _id: "e7e8d5f0a76e1932ece047e2",
                    _tpl: "630f28f0cadb1fe05e06f004",
                    parentId: "016ebd30f532d51dca01c219",
                    slotId: "mod_muzzle_000",
                },
                {
                    _id: "76fc1c99e0d691c94cc5ca3c",
                    _tpl: "630f2982cdb9e392db0cbcc7",
                    parentId: "016ebd30f532d51dca01c219",
                    slotId: "mod_muzzle_001",
                },
                {
                    _id: "f92afca99e4a0285f955f1ca",
                    _tpl: "634e61b0767cb15c4601a877",
                    parentId: "016ebd30f532d51dca01c219",
                    slotId: "mod_foregrip",
                },
            ],
        },
        {
            Id: "665bca8c010012f7da6e5725",
            Name: "mpx",
            Root: "719cf6a1e424f9c349c7e662",
            Items: [
                {
                    _id: "719cf6a1e424f9c349c7e662",
                    _tpl: "58948c8e86f77409493f7266",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "32e23f06182c21daa55429fe",
                    _tpl: "55802f5d4bdc2dac148b458f",
                    parentId: "719cf6a1e424f9c349c7e662",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "55b88e45a09bd679ee1ed219",
                    _tpl: "5894a05586f774094708ef75",
                    parentId: "719cf6a1e424f9c349c7e662",
                    slotId: "mod_magazine",
                },
                {
                    _id: "bee997fae53402f6e9df3a03",
                    _tpl: "5894a5b586f77426d2590767",
                    parentId: "719cf6a1e424f9c349c7e662",
                    slotId: "mod_reciever",
                },
                {
                    _id: "68302a8536b1e31e41a2c120",
                    _tpl: "5fbcc437d724d907e2077d5c",
                    parentId: "719cf6a1e424f9c349c7e662",
                    slotId: "mod_stock",
                },
                {
                    _id: "3e5b56c49e6f01f2f072776d",
                    _tpl: "5c5db6b32e221600102611a0",
                    parentId: "719cf6a1e424f9c349c7e662",
                    slotId: "mod_charge",
                },
                {
                    _id: "72c1a344e2bda4a6123d919e",
                    _tpl: "570fd721d2720bc5458b4596",
                    parentId: "bee997fae53402f6e9df3a03",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "42b7c79c44c9c00264f69cf5",
                    _tpl: "5894a2c386f77427140b8342",
                    parentId: "bee997fae53402f6e9df3a03",
                    slotId: "mod_barrel",
                },
                {
                    _id: "5e3a45590ff0d8300bc39c15",
                    _tpl: "5894a42086f77426d2590762",
                    parentId: "bee997fae53402f6e9df3a03",
                    slotId: "mod_handguard",
                },
                {
                    _id: "a9ddd2f8bd0a3d5ec7525e10",
                    _tpl: "5fb6564947ce63734e3fa1da",
                    parentId: "bee997fae53402f6e9df3a03",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "6278318d08c96d7cd6f72bfe",
                    _tpl: "5c7e8fab2e22165df16b889b",
                    parentId: "42b7c79c44c9c00264f69cf5",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "2fd62c4da7b1aefe6fea4912",
                    _tpl: "58a56f8d86f774651579314c",
                    parentId: "5e3a45590ff0d8300bc39c15",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "01458099c1c72b6912807284",
                    _tpl: "58a5c12e86f7745d585a2b9e",
                    parentId: "5e3a45590ff0d8300bc39c15",
                    slotId: "mod_mount_001",
                },
                {
                    _id: "0503b84f2255d12e51274447",
                    _tpl: "58a56f8d86f774651579314c",
                    parentId: "5e3a45590ff0d8300bc39c15",
                    slotId: "mod_mount_002",
                },
                {
                    _id: "2b875efbf5033efd40590efc",
                    _tpl: "5f6340d3ca442212f4047eb2",
                    parentId: "01458099c1c72b6912807284",
                    slotId: "mod_foregrip",
                },
            ],
        },
        {
            Id: "665bcae6010012f7da2b5be9",
            Name: "sa-58",
            Root: "160a85ccf7918d3fb7c8d5be",
            Items: [
                {
                    _id: "160a85ccf7918d3fb7c8d5be",
                    _tpl: "5b0bbe4e5acfc40dc528a72d",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "10993693ab92caa92c50f285",
                    _tpl: "5b7d679f5acfc4001a5c4024",
                    parentId: "160a85ccf7918d3fb7c8d5be",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "fd9509e77fa827ea0bc062c1",
                    _tpl: "5b7bef5d5acfc43bca7067a3",
                    parentId: "160a85ccf7918d3fb7c8d5be",
                    slotId: "mod_magazine",
                },
                {
                    _id: "fd788e47eddada8b83a256dc",
                    _tpl: "5b7bedd75acfc43d825283f9",
                    parentId: "160a85ccf7918d3fb7c8d5be",
                    slotId: "mod_handguard",
                },
                {
                    _id: "ab1e622471329554ffc2242f",
                    _tpl: "5b7be1265acfc400161d0798",
                    parentId: "160a85ccf7918d3fb7c8d5be",
                    slotId: "mod_barrel",
                },
                {
                    _id: "79850107daefa2a142d177ac",
                    _tpl: "5b0bc22d5acfc47a8607f085",
                    parentId: "160a85ccf7918d3fb7c8d5be",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "e0eedc08cc88a238f5b8aa7e",
                    _tpl: "5b099bb25acfc400186331e8",
                    parentId: "160a85ccf7918d3fb7c8d5be",
                    slotId: "mod_reciever",
                },
                {
                    _id: "c79fc7851b49d185683d358f",
                    _tpl: "5b7d63b75acfc400170e2f8a",
                    parentId: "160a85ccf7918d3fb7c8d5be",
                    slotId: "mod_stock",
                },
                {
                    _id: "93922af3962badda4839e7c0",
                    _tpl: "5b7be46e5acfc400170e2dcf",
                    parentId: "fd788e47eddada8b83a256dc",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "76861b8210fdea7395b70bd3",
                    _tpl: "5b7be4575acfc400161d0832",
                    parentId: "fd788e47eddada8b83a256dc",
                    slotId: "mod_mount_002",
                },
                {
                    _id: "1b7cdaca2d42f5b0dd4f893a",
                    _tpl: "5b7d693d5acfc43bca706a3d",
                    parentId: "ab1e622471329554ffc2242f",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "4a0e33f5717c140350b51e99",
                    _tpl: "5c0517910db83400232ffee5",
                    parentId: "e0eedc08cc88a238f5b8aa7e",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "aa3629d1198634384afd79dc",
                    _tpl: "5c791e872e2216001219c40a",
                    parentId: "93922af3962badda4839e7c0",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "6fab7760300060e02971fc08",
                    _tpl: "5a7b483fe899ef0016170d15",
                    parentId: "76861b8210fdea7395b70bd3",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "665bcb3d010012f7daf52f0a",
            Name: "p90",
            Root: "8151d41ec19a60006c7cb805",
            Items: [
                {
                    _id: "8151d41ec19a60006c7cb805",
                    _tpl: "5cc82d76e24e8d00134b4b83",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "215a8bbd5a3f80b53a479fca",
                    _tpl: "5cc70093e4a949033c734312",
                    parentId: "8151d41ec19a60006c7cb805",
                    slotId: "mod_magazine",
                },
                {
                    _id: "19e669eaee75ed45a36a8a0a",
                    _tpl: "5cc700b9e4a949000f0f0f25",
                    parentId: "8151d41ec19a60006c7cb805",
                    slotId: "mod_stock",
                },
                {
                    _id: "f033ed98a4b10756e756d0a9",
                    _tpl: "5cc700ede4a949033c734315",
                    parentId: "8151d41ec19a60006c7cb805",
                    slotId: "mod_reciever",
                },
                {
                    _id: "85a301b5064c97a5d70b65e6",
                    _tpl: "5cc701aae4a949000e1ea45c",
                    parentId: "8151d41ec19a60006c7cb805",
                    slotId: "mod_barrel",
                },
                {
                    _id: "c4a0109e5ab03774290e94c1",
                    _tpl: "5cc6ea78e4a949000e1ea3c1",
                    parentId: "8151d41ec19a60006c7cb805",
                    slotId: "mod_charge",
                },
                {
                    _id: "16df01629482c37be56e3926",
                    _tpl: "5cc700d4e4a949000f0f0f28",
                    parentId: "19e669eaee75ed45a36a8a0a",
                    slotId: "mod_stock_000",
                },
                {
                    _id: "b62f02384a092fe300dfdb25",
                    _tpl: "58491f3324597764bc48fa02",
                    parentId: "f033ed98a4b10756e756d0a9",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "0ba8fd5454ccf1b2ca905f0a",
                    _tpl: "5cc82796e24e8d000f5859a8",
                    parentId: "85a301b5064c97a5d70b65e6",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "af9be5491400533cda92e0f3",
                    _tpl: "5cebec00d7f00c065c53522a",
                    parentId: "0ba8fd5454ccf1b2ca905f0a",
                    slotId: "mod_muzzle",
                },
            ],
        },
        {
            Id: "665bcb70010012f7dac40af9",
            Name: "mdr1",
            Root: "e8c61f41fa0da5eceb9b3af1",
            Items: [
                {
                    _id: "e8c61f41fa0da5eceb9b3af1",
                    _tpl: "5c488a752e221602b412af63",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "6e88d14c876cb9fc023018ca",
                    _tpl: "5c48a2c22e221602b313fb6c",
                    parentId: "e8c61f41fa0da5eceb9b3af1",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "f8e7db3fcd69533bb5e42023",
                    _tpl: "5d1340b3d7ad1a0b52682ed7",
                    parentId: "e8c61f41fa0da5eceb9b3af1",
                    slotId: "mod_magazine",
                },
                {
                    _id: "db4a0efca76f93dfd8b3e99c",
                    _tpl: "5c48a14f2e2216152006edd7",
                    parentId: "e8c61f41fa0da5eceb9b3af1",
                    slotId: "mod_handguard",
                },
                {
                    _id: "8f92206107fc084ef4daf7f9",
                    _tpl: "5c48a2852e221602b21d5923",
                    parentId: "e8c61f41fa0da5eceb9b3af1",
                    slotId: "mod_barrel",
                },
                {
                    _id: "f87df0f307edf73b3682e8af",
                    _tpl: "5d2dc3e548f035404a1a4798",
                    parentId: "e8c61f41fa0da5eceb9b3af1",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "4d57ba9f7511984ddb518483",
                    _tpl: "651a8e529829226ceb67c319",
                    parentId: "db4a0efca76f93dfd8b3e99c",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "b14838564a08e34d8d6fed85",
                    _tpl: "5b3a16655acfc40016387a2a",
                    parentId: "8f92206107fc084ef4daf7f9",
                    slotId: "mod_muzzle",
                },
            ],
        },
        {
            Id: "665bcba2010012f7dad13351",
            Name: "577",
            Root: "621c396f822802176fd25e43",
            Items: [
                {
                    _id: "621c396f822802176fd25e43",
                    _tpl: "5d3eb3b0a4b93615055e84d2",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "5362a19084d984ec5fbe72dd",
                    _tpl: "5d3eb59ea4b9361c284bb4b2",
                    parentId: "621c396f822802176fd25e43",
                    slotId: "mod_barrel",
                },
                {
                    _id: "29b25989455bddb00192145f",
                    _tpl: "5d3eb44aa4b93650d64e4979",
                    parentId: "621c396f822802176fd25e43",
                    slotId: "mod_reciever",
                },
                {
                    _id: "48edfd6e401b8d3613140856",
                    _tpl: "5d3eb5eca4b9363b1f22f8e4",
                    parentId: "621c396f822802176fd25e43",
                    slotId: "mod_magazine",
                },
                {
                    _id: "71f0b383639d9f3702176908",
                    _tpl: "5d3ef698a4b9361182109872",
                    parentId: "5362a19084d984ec5fbe72dd",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "dcf4173f9cc17c532b3cdc79",
                    _tpl: "5d7b6bafa4b93652786f4c76",
                    parentId: "29b25989455bddb00192145f",
                    slotId: "mod_sight_rear",
                },
                {
                    _id: "43861ab641f43ff444abe458",
                    _tpl: "5a32aa8bc4a2826c6e06d737",
                    parentId: "dcf4173f9cc17c532b3cdc79",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "665bcbd1010012f7da8621e1",
            Name: "m9a3",
            Root: "81195b7e546f0a398ffca5eb",
            Items: [
                {
                    _id: "81195b7e546f0a398ffca5eb",
                    _tpl: "5cadc190ae921500103bb3b6",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "a6885c81f677f80d220a4b2f",
                    _tpl: "5cadc1c6ae9215000f2775a4",
                    parentId: "81195b7e546f0a398ffca5eb",
                    slotId: "mod_barrel",
                },
                {
                    _id: "4fca5937deeefc26e8e62d06",
                    _tpl: "5cadc431ae921500113bb8d5",
                    parentId: "81195b7e546f0a398ffca5eb",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "7f9d5f6f713aa2d25aafe541",
                    _tpl: "5cadc55cae921500103bb3be",
                    parentId: "81195b7e546f0a398ffca5eb",
                    slotId: "mod_reciever",
                },
                {
                    _id: "cc71524e61e70a7c27955161",
                    _tpl: "5cadc2e0ae9215051e1c21e7",
                    parentId: "81195b7e546f0a398ffca5eb",
                    slotId: "mod_magazine",
                },
                {
                    _id: "02a5e1ed36f74df9d463a893",
                    _tpl: "5a800961159bd4315e3a1657",
                    parentId: "81195b7e546f0a398ffca5eb",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "729bb77f1a52af6b0aa31e6d",
                    _tpl: "5cadc390ae921500126a77f1",
                    parentId: "a6885c81f677f80d220a4b2f",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "5b14918dc485908354539de4",
                    _tpl: "5cadd954ae921500103bb3c2",
                    parentId: "7f9d5f6f713aa2d25aafe541",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "2c70970a8528ebebd681dc7b",
                    _tpl: "5cadd919ae921500126a77f3",
                    parentId: "7f9d5f6f713aa2d25aafe541",
                    slotId: "mod_sight_front",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "488747c108a92b59ee852e9a",
                    _tpl: "577d128124597739d65d0e56",
                    parentId: "5b14918dc485908354539de4",
                    slotId: "mod_scope",
                },
                {
                    _id: "36e6d37fbc07177f2c68c5e5",
                    _tpl: "577d141e24597739c5255e01",
                    parentId: "488747c108a92b59ee852e9a",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "665bcc00010012f7dab04d42",
            Name: "usp",
            Root: "ab389cf2bee5d0ea3eb140bc",
            Items: [
                {
                    _id: "ab389cf2bee5d0ea3eb140bc",
                    _tpl: "6193a720f8ee7e52e42109ed",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "16082451feea56a93230c2da",
                    _tpl: "6194efe07c6c7b169525f11b",
                    parentId: "ab389cf2bee5d0ea3eb140bc",
                    slotId: "mod_barrel",
                },
                {
                    _id: "5fc179706888521948c6341d",
                    _tpl: "6193d382ed0429009f543e65",
                    parentId: "ab389cf2bee5d0ea3eb140bc",
                    slotId: "mod_reciever",
                },
                {
                    _id: "d83935f4982d487c466f89c6",
                    _tpl: "6193d3149fb0c665d5490e32",
                    parentId: "ab389cf2bee5d0ea3eb140bc",
                    slotId: "mod_magazine",
                },
                {
                    _id: "2450db7a494ee9172c8657f2",
                    _tpl: "6193d3cded0429009f543e6a",
                    parentId: "ab389cf2bee5d0ea3eb140bc",
                    slotId: "mod_trigger",
                },
                {
                    _id: "0938cfbc055e700d3f6805f3",
                    _tpl: "6193d3be7c6c7b169525f0da",
                    parentId: "ab389cf2bee5d0ea3eb140bc",
                    slotId: "mod_hammer",
                },
                {
                    _id: "ff794029c5defbe36fc21fad",
                    _tpl: "6193d5d4f8ee7e52e4210a1b",
                    parentId: "ab389cf2bee5d0ea3eb140bc",
                    slotId: "mod_catch",
                },
                {
                    _id: "6b742688c5909ac17b483869",
                    _tpl: "6196255558ef8c428c287d1c",
                    parentId: "ab389cf2bee5d0ea3eb140bc",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "52f7ca56d34672864d8da76a",
                    _tpl: "5a32a064c4a28200741e22de",
                    parentId: "16082451feea56a93230c2da",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "7328370fabc55652fd2cb3df",
                    _tpl: "6194f2df645b5d229654ad77",
                    parentId: "5fc179706888521948c6341d",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "237b5639c5438b2a77c3261b",
                    _tpl: "6194f3286db0f2477964e67d",
                    parentId: "5fc179706888521948c6341d",
                    slotId: "mod_sight_front",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "60c577db99f58bc83cb42061",
                    _tpl: "5a7b483fe899ef0016170d15",
                    parentId: "6b742688c5909ac17b483869",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "66604d5e010012f7da8864ff",
            Name: "m4a1Better",
            Root: "f33f7d8da315ad937ede56ce",
            Items: [
                {
                    _id: "f33f7d8da315ad937ede56ce",
                    _tpl: "5447a9cd4bdc2dbd208b4567",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "6e18e238dc6200b5475185f3",
                    _tpl: "652911675ae2ae97b80fdf3c",
                    parentId: "f33f7d8da315ad937ede56ce",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "4bdb0ef1768515e7aab22cbe",
                    _tpl: "55802d5f4bdc2dac148b458e",
                    parentId: "f33f7d8da315ad937ede56ce",
                    slotId: "mod_magazine",
                },
                {
                    _id: "0b3b77d4709f86731d021165",
                    _tpl: "55d355e64bdc2d962f8b4569",
                    parentId: "f33f7d8da315ad937ede56ce",
                    slotId: "mod_reciever",
                },
                {
                    _id: "9d938baf3aaae65fd14f53b8",
                    _tpl: "5947eab886f77475961d96c5",
                    parentId: "f33f7d8da315ad937ede56ce",
                    slotId: "mod_stock",
                },
                {
                    _id: "1a08df07636d3397ea9ea1b6",
                    _tpl: "5f633ff5c444ce7e3c30a006",
                    parentId: "f33f7d8da315ad937ede56ce",
                    slotId: "mod_charge",
                },
                {
                    _id: "27104f6f75d7b2455b5339ac",
                    _tpl: "558022b54bdc2dac148b458d",
                    parentId: "0b3b77d4709f86731d021165",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "49c33d2afbe163eb72403dac",
                    _tpl: "mechAR15_260mm",
                    parentId: "0b3b77d4709f86731d021165",
                    slotId: "mod_barrel",
                },
                {
                    _id: "6d4c2f6f72f5e0719eecc0d8",
                    _tpl: "5ea16acdfadf1d18c87b0784",
                    parentId: "0b3b77d4709f86731d021165",
                    slotId: "mod_handguard",
                },
                {
                    _id: "9b956ec078a39558355abaad",
                    _tpl: "63ac5c9658d0485fc039f0b8",
                    parentId: "49c33d2afbe163eb72403dac",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "68be3a5552f84ec016e1d09f",
                    _tpl: "56eabcd4d2720b66698b4574",
                    parentId: "49c33d2afbe163eb72403dac",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "05f1186bd277968fd348b088",
                    _tpl: "57cffb66245977632f391a99",
                    parentId: "6d4c2f6f72f5e0719eecc0d8",
                    slotId: "mod_foregrip",
                },
            ],
        },
        {
            Id: "66604dcb010012f7dad5b8b1",
            Name: "ash12",
            Root: "d6ddd53845d193ae46981eee",
            Items: [
                {
                    _id: "d6ddd53845d193ae46981eee",
                    _tpl: "5cadfbf7ae92152ac412eeef",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "12be963cd8a231d194509179",
                    _tpl: "5caf187cae92157c28402e43",
                    parentId: "d6ddd53845d193ae46981eee",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "e9acee91399d12c92aa0a0d6",
                    _tpl: "5caf1109ae9215753c44119f",
                    parentId: "d6ddd53845d193ae46981eee",
                    slotId: "mod_magazine",
                },
                {
                    _id: "6049a6ca92dbdab5d6f87075",
                    _tpl: "5caf16a2ae92152ac412efbc",
                    parentId: "d6ddd53845d193ae46981eee",
                    slotId: "mod_sight_front",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "bdd52ad73c8f0e573fafb789",
                    _tpl: "5cdaa99dd7f00c002412d0b2",
                    parentId: "d6ddd53845d193ae46981eee",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "6e80a0262228f37ec5390465",
                    _tpl: "5d2dc3e548f035404a1a4798",
                    parentId: "d6ddd53845d193ae46981eee",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "739eef8687be628ccabac561",
                    _tpl: "5cc9c20cd7f00c001336c65d",
                    parentId: "d6ddd53845d193ae46981eee",
                    slotId: "mod_tactical_001",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "8d94f186d63a665756bab2a5",
                    _tpl: "5cda9bcfd7f00c0c0b53e900",
                    parentId: "bdd52ad73c8f0e573fafb789",
                    slotId: "mod_foregrip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "66604e0f010012f7da3be707",
            Name: "ak74n1",
            Root: "5f7e61cdc27c7c25b480d0c5",
            Items: [
                {
                    _id: "5f7e61cdc27c7c25b480d0c5",
                    _tpl: "5644bd2b4bdc2d3b4c8b4572",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "1fa0e49c6f256db43bf77196",
                    _tpl: "59c6633186f7740cf0493bb9",
                    parentId: "5f7e61cdc27c7c25b480d0c5",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "ed356d0354c4749d1145700b",
                    _tpl: "593d493f86f7745e6b2ceb22",
                    parentId: "5f7e61cdc27c7c25b480d0c5",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "f638cff85f23e2f4c99d8472",
                    _tpl: "5649ad3f4bdc2df8348b4585",
                    parentId: "5f7e61cdc27c7c25b480d0c5",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "3c7149a6ecce92ee21e7ca14",
                    _tpl: "5d2c770c48f0354b4a07c100",
                    parentId: "5f7e61cdc27c7c25b480d0c5",
                    slotId: "mod_reciever",
                },
                {
                    _id: "e24262d3fb5ec3df3c7844f4",
                    _tpl: "5649b0544bdc2d1b2b8b458a",
                    parentId: "5f7e61cdc27c7c25b480d0c5",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "2bd31fc36f411a22d270e5ce",
                    _tpl: "5649b1c04bdc2d16268b457c",
                    parentId: "5f7e61cdc27c7c25b480d0c5",
                    slotId: "mod_stock",
                },
                {
                    _id: "f510548a6087f066b958974b",
                    _tpl: "564ca99c4bdc2d16268b4589",
                    parentId: "5f7e61cdc27c7c25b480d0c5",
                    slotId: "mod_magazine",
                },
                {
                    _id: "10bb6b12ee15fc8df20484ee",
                    _tpl: "5648ac824bdc2ded0b8b457d",
                    parentId: "5f7e61cdc27c7c25b480d0c5",
                    slotId: "mod_charge",
                },
                {
                    _id: "ebc36465f27e1c8b86468319",
                    _tpl: "5a9d56c8a2750c0032157146",
                    parentId: "1fa0e49c6f256db43bf77196",
                    slotId: "mod_handguard",
                },
                {
                    _id: "d6333d7f63673d455d342b01",
                    _tpl: "5d2da1e948f035477b1ce2ba",
                    parentId: "3c7149a6ecce92ee21e7ca14",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "2eb217341990fae950267dcd",
                    _tpl: "5a0c59791526d8dba737bba7",
                    parentId: "2bd31fc36f411a22d270e5ce",
                    slotId: "mod_stock",
                },
                {
                    _id: "147971bdfa02a8fe5032a59f",
                    _tpl: "5fc0f9b5d724d907e2077d82",
                    parentId: "ebc36465f27e1c8b86468319",
                    slotId: "mod_mount_000",
                },
            ],
        },
        {
            Id: "66604e48010012f7da682ef9",
            Name: "ak12",
            Root: "1b5cf2bdf778265186ea473b",
            Items: [
                {
                    _id: "1b5cf2bdf778265186ea473b",
                    _tpl: "6499849fc93611967b034949",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "50566ed77a5b8c2759abbda1",
                    _tpl: "649ec107961514b22506b10c",
                    parentId: "1b5cf2bdf778265186ea473b",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "8c1d507c711eec1b0b9474d1",
                    _tpl: "64c196ad26a15b84aa07132f",
                    parentId: "1b5cf2bdf778265186ea473b",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "dace439f65dbeeeba6a5c2c2",
                    _tpl: "5beec8ea0db834001a6f9dbf",
                    parentId: "1b5cf2bdf778265186ea473b",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "80b5c2e9cbe148cdaa6130ad",
                    _tpl: "649ec2f3961514b22506b111",
                    parentId: "1b5cf2bdf778265186ea473b",
                    slotId: "mod_reciever",
                },
                {
                    _id: "ddc4faa4eb303cecd3f50a29",
                    _tpl: "5ac50c185acfc400163398d4",
                    parentId: "1b5cf2bdf778265186ea473b",
                    slotId: "mod_stock_001",
                },
                {
                    _id: "8e900e3f04454efb8763533f",
                    _tpl: "649ec30cb013f04a700e60fb",
                    parentId: "1b5cf2bdf778265186ea473b",
                    slotId: "mod_magazine",
                },
                {
                    _id: "69848cb9467a477611f3c0a3",
                    _tpl: "6130ca3fd92c473c77020dbd",
                    parentId: "1b5cf2bdf778265186ea473b",
                    slotId: "mod_charge",
                },
                {
                    _id: "1f11f971f6bd61d88ce9a1ba",
                    _tpl: "649ec127c93611967b034957",
                    parentId: "1b5cf2bdf778265186ea473b",
                    slotId: "mod_handguard",
                },
                {
                    _id: "eb806afffbe5d9531d8c075a",
                    _tpl: "57adff4f24597737f373b6e6",
                    parentId: "80b5c2e9cbe148cdaa6130ad",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "6c67a92aac58eefa009ff44d",
                    _tpl: "649ec2da59cbb3c813042dca",
                    parentId: "80b5c2e9cbe148cdaa6130ad",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "eb4d231435d260282df8db1f",
                    _tpl: "5a0c59791526d8dba737bba7",
                    parentId: "ddc4faa4eb303cecd3f50a29",
                    slotId: "mod_stock",
                },
                {
                    _id: "4f47c5a54ab526115cd72659",
                    _tpl: "5beecbb80db834001d2c465e",
                    parentId: "1f11f971f6bd61d88ce9a1ba",
                    slotId: "mod_mount_001",
                },
                {
                    _id: "02e428d26cd0a7039db56dd8",
                    _tpl: "649ec2cec93611967b03495e",
                    parentId: "6c67a92aac58eefa009ff44d",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "66604eb2010012f7da393820",
            Name: "m4a12",
            Root: "713c7965ffde0f8d02310f5a",
            Items: [
                {
                    _id: "713c7965ffde0f8d02310f5a",
                    _tpl: "5447a9cd4bdc2dbd208b4567",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "db2f0ba3f90498242f2e3031",
                    _tpl: "5bb20e18d4351e00320205d5",
                    parentId: "713c7965ffde0f8d02310f5a",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "c69c770346be98bccd3a389f",
                    _tpl: "5aaa5dfee5b5b000140293d3",
                    parentId: "713c7965ffde0f8d02310f5a",
                    slotId: "mod_magazine",
                },
                {
                    _id: "3d5a09d175d2b15c1a73b47a",
                    _tpl: "55d355e64bdc2d962f8b4569",
                    parentId: "713c7965ffde0f8d02310f5a",
                    slotId: "mod_reciever",
                },
                {
                    _id: "3796c275768153b17e491da1",
                    _tpl: "5649be884bdc2d79388b4577",
                    parentId: "713c7965ffde0f8d02310f5a",
                    slotId: "mod_stock",
                },
                {
                    _id: "028652b5c1aff0e4988d2248",
                    _tpl: "55d44fd14bdc2d962f8b456e",
                    parentId: "713c7965ffde0f8d02310f5a",
                    slotId: "mod_charge",
                },
                {
                    _id: "92cc7a720a6bf977e41c6051",
                    _tpl: "5c0a2cec0db834001b7ce47d",
                    parentId: "3d5a09d175d2b15c1a73b47a",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "76f3450718136e8bd54419dd",
                    _tpl: "55d3632e4bdc2d972f8b4569",
                    parentId: "3d5a09d175d2b15c1a73b47a",
                    slotId: "mod_barrel",
                },
                {
                    _id: "f52a355b2a1ca97a921975da",
                    _tpl: "55d459824bdc2d892f8b4573",
                    parentId: "3d5a09d175d2b15c1a73b47a",
                    slotId: "mod_handguard",
                },
                {
                    _id: "4380ddeaba48a27e86f8637e",
                    _tpl: "58d2947e86f77447aa070d53",
                    parentId: "3796c275768153b17e491da1",
                    slotId: "mod_stock_000",
                },
                {
                    _id: "964f17283fa9bba2981e5bb8",
                    _tpl: "609269c3b0e443224b421cc1",
                    parentId: "76f3450718136e8bd54419dd",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "9e2119254d4a7cdbfb8daba3",
                    _tpl: "5ae30e795acfc408fb139a0b",
                    parentId: "76f3450718136e8bd54419dd",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "a35e6152df19a218e41f51d0",
                    _tpl: "637f57b78d137b27f70c496a",
                    parentId: "f52a355b2a1ca97a921975da",
                    slotId: "mod_handguard",
                },
                {
                    _id: "51cb5aa4e11b445e65ea4a9f",
                    _tpl: "60926df0132d4d12c81fd9df",
                    parentId: "964f17283fa9bba2981e5bb8",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "c0d7feb0ca8de04d7d452994",
                    _tpl: "5c7fc87d2e221644f31c0298",
                    parentId: "a35e6152df19a218e41f51d0",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "44c1d9d9ef92f2a23fc6a931",
                    _tpl: "58d2912286f7744e27117493",
                    parentId: "4380ddeaba48a27e86f8637e",
                    slotId: "mod_stock",
                },
            ],
        },
        {
            Id: "66604f44010012f7daf760a3",
            Name: "ak103",
            Root: "15f83f5741a56b1f4c3e2bd8",
            Items: [
                {
                    _id: "15f83f5741a56b1f4c3e2bd8",
                    _tpl: "5ac66d2e5acfc43b321d4b53",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "6a2695c7ee4fefc27ca0981e",
                    _tpl: "59c6633186f7740cf0493bb9",
                    parentId: "15f83f5741a56b1f4c3e2bd8",
                    slotId: "mod_gas_block",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "d3a30c4099b1e1289642197a",
                    _tpl: "5a0d63621526d8dba31fe3bf",
                    parentId: "15f83f5741a56b1f4c3e2bd8",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "c0916b7470043be5b5402220",
                    _tpl: "628a664bccaab13006640e47",
                    parentId: "15f83f5741a56b1f4c3e2bd8",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "caf6bbe217e33006132f62b2",
                    _tpl: "5649af094bdc2df8348b4586",
                    parentId: "15f83f5741a56b1f4c3e2bd8",
                    slotId: "mod_reciever",
                },
                {
                    _id: "dc94c81edb8554c5d1a2e7b2",
                    _tpl: "5ac72e475acfc400180ae6fe",
                    parentId: "15f83f5741a56b1f4c3e2bd8",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "83536a8072cf0d7d0b0d9aa2",
                    _tpl: "5ac50c185acfc400163398d4",
                    parentId: "15f83f5741a56b1f4c3e2bd8",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "31b975f31df23d6267286560",
                    _tpl: "5a0060fc86f7745793204432",
                    parentId: "15f83f5741a56b1f4c3e2bd8",
                    slotId: "mod_magazine",
                },
                {
                    _id: "1c74fc2f378099c8afe8d367",
                    _tpl: "5c82343a2e221644f31c0611",
                    parentId: "15f83f5741a56b1f4c3e2bd8",
                    slotId: "mod_mount_000",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "6346062ef6e8bb82fcca6a10",
                    _tpl: "5648ac824bdc2ded0b8b457d",
                    parentId: "15f83f5741a56b1f4c3e2bd8",
                    slotId: "mod_charge",
                },
                {
                    _id: "133a22e5bdf6d7347d94a56b",
                    _tpl: "57cff947245977638e6f2a19",
                    parentId: "6a2695c7ee4fefc27ca0981e",
                    slotId: "mod_handguard",
                },
                {
                    _id: "aa9c4010e64fc244d18754b0",
                    _tpl: "5a0c59791526d8dba737bba7",
                    parentId: "83536a8072cf0d7d0b0d9aa2",
                    slotId: "mod_stock",
                },
                {
                    _id: "b279828e1614c6e63d3b58ff",
                    _tpl: "57cffb66245977632f391a99",
                    parentId: "133a22e5bdf6d7347d94a56b",
                    slotId: "mod_mount_003",
                },
            ],
        },
        {
            Id: "66604f88010012f7dad4409b",
            Name: "aks74n",
            Root: "8c44f6b34e355dbb8e57c566",
            Items: [
                {
                    _id: "8c44f6b34e355dbb8e57c566",
                    _tpl: "5ab8e9fcd8ce870019439434",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "c6da88f788a28ea669476266",
                    _tpl: "59ccfdba86f7747f2109a587",
                    parentId: "8c44f6b34e355dbb8e57c566",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "ee3ae850e78111264693d438",
                    _tpl: "5943eeeb86f77412d6384f6b",
                    parentId: "8c44f6b34e355dbb8e57c566",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "9ebc073c96b6f4d96a2b4231",
                    _tpl: "5f6341043ada5942720e2dc5",
                    parentId: "8c44f6b34e355dbb8e57c566",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "854cdad655e28a9fb3113890",
                    _tpl: "5649af094bdc2df8348b4586",
                    parentId: "8c44f6b34e355dbb8e57c566",
                    slotId: "mod_reciever",
                },
                {
                    _id: "c0b7b00a9ba6e3230b83ca83",
                    _tpl: "5649b0544bdc2d1b2b8b458a",
                    parentId: "8c44f6b34e355dbb8e57c566",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "f62a8e54e39750abcf4c1458",
                    _tpl: "59ecc28286f7746d7a68aa8c",
                    parentId: "8c44f6b34e355dbb8e57c566",
                    slotId: "mod_stock",
                },
                {
                    _id: "95ae67597e80e488df67098a",
                    _tpl: "5aaa4194e5b5b055d06310a5",
                    parentId: "8c44f6b34e355dbb8e57c566",
                    slotId: "mod_magazine",
                },
                {
                    _id: "5eb2ce76abdc95761fac5151",
                    _tpl: "5c61a40d2e2216001403158d",
                    parentId: "8c44f6b34e355dbb8e57c566",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "dee700106c93c9d922842536",
                    _tpl: "5648ac824bdc2ded0b8b457d",
                    parentId: "8c44f6b34e355dbb8e57c566",
                    slotId: "mod_charge",
                },
                {
                    _id: "38b28b2309590ccf1c94c429",
                    _tpl: "59ecc3dd86f7746dc827481c",
                    parentId: "f62a8e54e39750abcf4c1458",
                    slotId: "mod_stock",
                },
                {
                    _id: "15048008247a1c451703bfb7",
                    _tpl: "591c4efa86f7741030027726",
                    parentId: "5eb2ce76abdc95761fac5151",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "66604fd6010012f7daa6aa06",
            Name: "akmsn",
            Root: "3c781b099a1095088c7e8a77",
            Items: [
                {
                    _id: "3c781b099a1095088c7e8a77",
                    _tpl: "5abcbc27d8ce8700182eceeb",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "90ddbee0eb15f3abe07c2188",
                    _tpl: "59d64ec286f774171d1e0a42",
                    parentId: "3c781b099a1095088c7e8a77",
                    slotId: "mod_gas_block",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "1711f99113ab2a8c746ca133",
                    _tpl: "5cc9ad73d7f00c000e2579d4",
                    parentId: "3c781b099a1095088c7e8a77",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "546c1a95fd5c06c61669c26f",
                    _tpl: "5a0071d486f77404e23a12b2",
                    parentId: "3c781b099a1095088c7e8a77",
                    slotId: "mod_pistol_grip_akms",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "c1d4489b72e4aff3a0804d13",
                    _tpl: "59d6507c86f7741b846413a2",
                    parentId: "3c781b099a1095088c7e8a77",
                    slotId: "mod_reciever",
                },
                {
                    _id: "bc78a1b22362f22cd39ce3b5",
                    _tpl: "59d650cf86f7741b846413a4",
                    parentId: "3c781b099a1095088c7e8a77",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "087aee674f3b1f2a69726a11",
                    _tpl: "5abcd472d8ce8700166032ae",
                    parentId: "3c781b099a1095088c7e8a77",
                    slotId: "mod_stock_akms",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "429c0353e65d70fc6861de35",
                    _tpl: "5a0060fc86f7745793204432",
                    parentId: "3c781b099a1095088c7e8a77",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "ca41c73ebf5ca25100a05b1f",
                    _tpl: "5648ac824bdc2ded0b8b457d",
                    parentId: "3c781b099a1095088c7e8a77",
                    slotId: "mod_charge",
                },
                {
                    _id: "d3c8ee47e8bbf6d77db0e9af",
                    _tpl: "6544d4187c5457729210d277",
                    parentId: "3c781b099a1095088c7e8a77",
                    slotId: "mod_mount_001",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "ab9e87ad4255874a74a29e93",
                    _tpl: "5d2c829448f0353a5c7d6674",
                    parentId: "90ddbee0eb15f3abe07c2188",
                    slotId: "mod_handguard",
                },
                {
                    _id: "1ccff07f94c0219917c629d9",
                    _tpl: "5a0c59791526d8dba737bba7",
                    parentId: "087aee674f3b1f2a69726a11",
                    slotId: "mod_stock",
                },
            ],
        },
        {
            Id: "66605027010012f7da5092cc",
            Name: "aks74un",
            Root: "4e509681e82fff8eee5408f0",
            Items: [
                {
                    _id: "4e509681e82fff8eee5408f0",
                    _tpl: "583990e32459771419544dd2",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "bd3efb49bb53a9bd92641ad2",
                    _tpl: "5649ae4a4bdc2d1b2b8b4588",
                    parentId: "4e509681e82fff8eee5408f0",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "355311822f2b784784937cba",
                    _tpl: "59ecc28286f7746d7a68aa8c",
                    parentId: "4e509681e82fff8eee5408f0",
                    slotId: "mod_stock",
                },
                {
                    _id: "cf9e741a3708eab5d9599608",
                    _tpl: "6130ca3fd92c473c77020dbd",
                    parentId: "4e509681e82fff8eee5408f0",
                    slotId: "mod_charge",
                },
                {
                    _id: "67e8312410ddc585d5a63453",
                    _tpl: "5bed61680db834001d2c45ab",
                    parentId: "4e509681e82fff8eee5408f0",
                    slotId: "mod_magazine",
                },
                {
                    _id: "a1b68cbc797910b40ed5a613",
                    _tpl: "593d493f86f7745e6b2ceb22",
                    parentId: "4e509681e82fff8eee5408f0",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "a6ef10e9d8d6f293d183afa1",
                    _tpl: "57dc334d245977597164366f",
                    parentId: "4e509681e82fff8eee5408f0",
                    slotId: "mod_reciever",
                },
                {
                    _id: "68b2c16d6d034e6287921a0b",
                    _tpl: "59d36a0086f7747e673f3946",
                    parentId: "4e509681e82fff8eee5408f0",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "7a09c365769954cc6b5e5265",
                    _tpl: "5b222d405acfc400153af4fe",
                    parentId: "355311822f2b784784937cba",
                    slotId: "mod_stock",
                },
                {
                    _id: "7d518c899a8b727d7feb6b5d",
                    _tpl: "57ffb0062459777a045af529",
                    parentId: "a6ef10e9d8d6f293d183afa1",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "b8809e45f0ecef4f7dd48d4f",
                    _tpl: "57ffa9f4245977728561e844",
                    parentId: "68b2c16d6d034e6287921a0b",
                    slotId: "mod_handguard",
                },
                {
                    _id: "c74d5e5ede4a40b590b9605b",
                    _tpl: "64785e7c19d732620e045e15",
                    parentId: "7d518c899a8b727d7feb6b5d",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "48a98dc3b446438cf1086eb3",
                    _tpl: "5d2369418abbc306c62e0c80",
                    parentId: "b8809e45f0ecef4f7dd48d4f",
                    slotId: "mod_tactical_001",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "66605079010012f7da4c47ea",
            Name: "akm",
            Root: "a34e06aa07051d489b44c207",
            Items: [
                {
                    _id: "a34e06aa07051d489b44c207",
                    _tpl: "59d6088586f774275f37482f",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "afe29778e7066313e2d61e0e",
                    _tpl: "5a01ad4786f77450561fda02",
                    parentId: "a34e06aa07051d489b44c207",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "356463810091b9553a57c048",
                    _tpl: "59d64fc686f774171b243fe2",
                    parentId: "a34e06aa07051d489b44c207",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "3af4065e8676094c5b083bd3",
                    _tpl: "628a664bccaab13006640e47",
                    parentId: "a34e06aa07051d489b44c207",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "adec70ea89ac1e10f530aad8",
                    _tpl: "5d2c770c48f0354b4a07c100",
                    parentId: "a34e06aa07051d489b44c207",
                    slotId: "mod_reciever",
                },
                {
                    _id: "6001de258f40267fb7365ae5",
                    _tpl: "59d650cf86f7741b846413a4",
                    parentId: "a34e06aa07051d489b44c207",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "02cd6f231772fe101d0adfae",
                    _tpl: "5b04473a5acfc40018632f70",
                    parentId: "a34e06aa07051d489b44c207",
                    slotId: "mod_stock",
                },
                {
                    _id: "09a653121b2d4db0820a6503",
                    _tpl: "59fafc9386f774067d462453",
                    parentId: "a34e06aa07051d489b44c207",
                    slotId: "mod_magazine",
                },
                {
                    _id: "878ff1cad369a60420abf223",
                    _tpl: "5648b4534bdc2d3d1c8b4580",
                    parentId: "afe29778e7066313e2d61e0e",
                    slotId: "mod_handguard",
                },
                {
                    _id: "e664c7699c130551a0eefb37",
                    _tpl: "57aca93d2459771f2c7e26db",
                    parentId: "adec70ea89ac1e10f530aad8",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0, 0],
                            ScopesSelectedModes: [0, 0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "a0a1bb65759501d1baf97be1",
                    _tpl: "588226dd24597767ad33f789",
                    parentId: "878ff1cad369a60420abf223",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "ffcac4c079563d276b3f4c35",
                    _tpl: "5a7b483fe899ef0016170d15",
                    parentId: "878ff1cad369a60420abf223",
                    slotId: "mod_tactical_002",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "666050bb010012f7da32de1d",
            Name: "akm1",
            Root: "1912b79f1b8dab875a1e66d6",
            Items: [
                {
                    _id: "1912b79f1b8dab875a1e66d6",
                    _tpl: "59d6088586f774275f37482f",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "d9644a02a11b212a68407f6c",
                    _tpl: "59d64ec286f774171d1e0a42",
                    parentId: "1912b79f1b8dab875a1e66d6",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "4671e831cca5ee6537655be5",
                    _tpl: "5a9fbacda2750c00141e080f",
                    parentId: "1912b79f1b8dab875a1e66d6",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "35bf9eca27d97698afd0558e",
                    _tpl: "59e62cc886f77440d40b52a1",
                    parentId: "1912b79f1b8dab875a1e66d6",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "6935e847dabdb34598145a97",
                    _tpl: "59e6449086f7746c9f75e822",
                    parentId: "1912b79f1b8dab875a1e66d6",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "341c4b89e32f426ee458dd71",
                    _tpl: "59d650cf86f7741b846413a4",
                    parentId: "1912b79f1b8dab875a1e66d6",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "a172f5a79efdb7ad0824e467",
                    _tpl: "5b0e794b5acfc47a877359b2",
                    parentId: "1912b79f1b8dab875a1e66d6",
                    slotId: "mod_stock",
                },
                {
                    _id: "7bdcc1b411c5a2dcbab2f9cc",
                    _tpl: "59d625f086f774661516605d",
                    parentId: "1912b79f1b8dab875a1e66d6",
                    slotId: "mod_magazine",
                },
                {
                    _id: "107e70ca6e48a1b764a608ec",
                    _tpl: "5d4aaa54a4b9365392071170",
                    parentId: "d9644a02a11b212a68407f6c",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "76fc56c2a7f7852370fd8bb6",
                    _tpl: "651a8bf3a8520e48047bf708",
                    parentId: "107e70ca6e48a1b764a608ec",
                    slotId: "mod_foregrip",
                },
            ],
        },
        {
            Id: "66605141010012f7da5cf969",
            Name: "mcx1",
            Root: "aff7a9bb2a2a97a613228a6d",
            Items: [
                {
                    _id: "aff7a9bb2a2a97a613228a6d",
                    _tpl: "5fbcc1d9016cce60e8341ab3",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "9607b095ac1fbe2e3b637ea3",
                    _tpl: "59db3a1d86f77429e05b4e92",
                    parentId: "aff7a9bb2a2a97a613228a6d",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "2bf29241214631f60db3ea4c",
                    _tpl: "55802d5f4bdc2dac148b458e",
                    parentId: "aff7a9bb2a2a97a613228a6d",
                    slotId: "mod_magazine",
                },
                {
                    _id: "0ba966e73bd088149ea25b3f",
                    _tpl: "5fbcc3e4d6fa9c00c571bb58",
                    parentId: "aff7a9bb2a2a97a613228a6d",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "7d4749d8423ef0a3414783e0",
                    _tpl: "5fbcc429900b1d5091531dd7",
                    parentId: "aff7a9bb2a2a97a613228a6d",
                    slotId: "mod_stock",
                },
                {
                    _id: "e1ebb132b05a03f35a5357f2",
                    _tpl: "5fbcc640016cce60e8341acc",
                    parentId: "aff7a9bb2a2a97a613228a6d",
                    slotId: "mod_charge",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "ecbad554943b221932918820",
                    _tpl: "64785e7c19d732620e045e15",
                    parentId: "0ba966e73bd088149ea25b3f",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "77f2e2816c0456bdf8d7b86e",
                    _tpl: "5fbbfacda56d053a3543f799",
                    parentId: "0ba966e73bd088149ea25b3f",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "79c91a7acbd49b41981ee58f",
                    _tpl: "5fbc226eca32ed67276c155d",
                    parentId: "0ba966e73bd088149ea25b3f",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "cabcb803eddcbe7a39443537",
                    _tpl: "5fc0fa957283c4046c58147e",
                    parentId: "0ba966e73bd088149ea25b3f",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "1b0cf24315d037c4861f8d5a",
                    _tpl: "5fbc22ccf24b94483f726483",
                    parentId: "77f2e2816c0456bdf8d7b86e",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "2285348df39b57a007061617",
                    _tpl: "5fbc210bf24b94483f726481",
                    parentId: "77f2e2816c0456bdf8d7b86e",
                    slotId: "mod_gas_block",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "8a1f3efffc211b8f30db1934",
                    _tpl: "5fc0fa362770a0045c59c677",
                    parentId: "79c91a7acbd49b41981ee58f",
                    slotId: "mod_sight_front",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "d46bfccbc14ac566c073adbd",
                    _tpl: "615d8fd3290d254f5e6b2edc",
                    parentId: "79c91a7acbd49b41981ee58f",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "74aac0e7bb5af47753606e48",
                    _tpl: "5fbcbcf593164a5b6278efb2",
                    parentId: "1b0cf24315d037c4861f8d5a",
                    slotId: "mod_muzzle_000",
                },
            ],
        },
        {
            Id: "666051a1010012f7da8fffb0",
            Name: "stm9",
            Root: "564404c4005862eb29b7e04f",
            Items: [
                {
                    _id: "564404c4005862eb29b7e04f",
                    _tpl: "60339954d62c9b14ed777c06",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "315f976db42b3e8ff6e54d63",
                    _tpl: "602e71bd53a60014f9705bfa",
                    parentId: "564404c4005862eb29b7e04f",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "156257cf3b7542e3e62771b2",
                    _tpl: "5a718da68dc32e000d46d264",
                    parentId: "564404c4005862eb29b7e04f",
                    slotId: "mod_magazine",
                },
                {
                    _id: "8f1f8cb5054836eaa9542049",
                    _tpl: "602e63fb6335467b0c5ac94d",
                    parentId: "564404c4005862eb29b7e04f",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "dae66b33a2b08d8a58092ebf",
                    _tpl: "602e3f1254072b51b239f713",
                    parentId: "564404c4005862eb29b7e04f",
                    slotId: "mod_stock_001",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "16ca0419356452fc588b919e",
                    _tpl: "6033749e88382f4fab3fd2c5",
                    parentId: "564404c4005862eb29b7e04f",
                    slotId: "mod_charge",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "202dfde19c988552f5c61f38",
                    _tpl: "602f85fd9b513876d4338d9c",
                    parentId: "564404c4005862eb29b7e04f",
                    slotId: "mod_tactical_000",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "575d24cf88a75a6540a871ce",
                    _tpl: "570fd721d2720bc5458b4596",
                    parentId: "8f1f8cb5054836eaa9542049",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "64b9ff4abe5c50e67c044e6d",
                    _tpl: "603372b4da11d6478d5a07ff",
                    parentId: "8f1f8cb5054836eaa9542049",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "6bb149d57df1541e7a66f221",
                    _tpl: "6034e3cb0ddce744014cb870",
                    parentId: "8f1f8cb5054836eaa9542049",
                    slotId: "mod_handguard",
                },
                {
                    _id: "68555912f7e490766133dd98",
                    _tpl: "58d2947e86f77447aa070d53",
                    parentId: "dae66b33a2b08d8a58092ebf",
                    slotId: "mod_stock_000",
                },
                {
                    _id: "b06df6d64f7dbb4d05d8050b",
                    _tpl: "5a32a064c4a28200741e22de",
                    parentId: "64b9ff4abe5c50e67c044e6d",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "84907f2e9d7a79fb32c53d2c",
                    _tpl: "57cffce524597763b31685d8",
                    parentId: "6bb149d57df1541e7a66f221",
                    slotId: "mod_foregrip",
                },
            ],
        },
        {
            Id: "666051fa010012f7da409c24",
            Name: "mp9",
            Root: "0af4a83a006442f0cc018df9",
            Items: [
                {
                    _id: "0af4a83a006442f0cc018df9",
                    _tpl: "5de7bd7bfd6b4e6e2276dc25",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "7c9f9c866a53bdd2feb56f4b",
                    _tpl: "5de8eac42a78646d96665d91",
                    parentId: "0af4a83a006442f0cc018df9",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "5d9a57010c59d4ee3e31185e",
                    _tpl: "5de8f237bbaf010b10528a70",
                    parentId: "0af4a83a006442f0cc018df9",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "4bd6ed4e05bc9487c16b3432",
                    _tpl: "5de910da8b6c4240ba2651b5",
                    parentId: "0af4a83a006442f0cc018df9",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "4063d7f63c38d0becc9238c3",
                    _tpl: "5de8fbad2fbe23140d3ee9c4",
                    parentId: "0af4a83a006442f0cc018df9",
                    slotId: "mod_foregrip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "9b6165af7ac8791a62383162",
                    _tpl: "5de8e67c4a9f347bc92edbd7",
                    parentId: "0af4a83a006442f0cc018df9",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "6e51c12d2f0b9a75f19cd3f5",
                    _tpl: "5de922d4b11454561e39239f",
                    parentId: "0af4a83a006442f0cc018df9",
                    slotId: "mod_charge",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "09a8490ee345d4539db626cc",
                    _tpl: "5de8f2d5b74cd90030650c72",
                    parentId: "5d9a57010c59d4ee3e31185e",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "a1bcb36c3e5779b62c83657a",
                    _tpl: "584984812459776a704a82a6",
                    parentId: "9b6165af7ac8791a62383162",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "39335d6c385acfbea067fa48",
                    _tpl: "5de8fb539f98ac2bc659513a",
                    parentId: "9b6165af7ac8791a62383162",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "916f34e413195d70706fcaea",
                    _tpl: "5de8fc0b205ddc616a6bc51b",
                    parentId: "9b6165af7ac8791a62383162",
                    slotId: "mod_mount",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "66605224010012f7daae69d5",
            Name: "pp19",
            Root: "1ffa6f494617ba93ee2a28a6",
            Items: [
                {
                    _id: "1ffa6f494617ba93ee2a28a6",
                    _tpl: "59984ab886f7743e98271174",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "3533a3b1ebc773aa90588d3b",
                    _tpl: "5998517986f7746017232f7e",
                    parentId: "1ffa6f494617ba93ee2a28a6",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "4871b41463b11ea197c43767",
                    _tpl: "599851db86f77467372f0a18",
                    parentId: "1ffa6f494617ba93ee2a28a6",
                    slotId: "mod_stock",
                },
                {
                    _id: "35557b79837fa8e2d0db386d",
                    _tpl: "5648ac824bdc2ded0b8b457d",
                    parentId: "1ffa6f494617ba93ee2a28a6",
                    slotId: "mod_charge",
                },
                {
                    _id: "c1e1d49eea426d0a20affd8c",
                    _tpl: "599860ac86f77436b225ed1a",
                    parentId: "1ffa6f494617ba93ee2a28a6",
                    slotId: "mod_magazine",
                },
                {
                    _id: "f50fe75e15fb1adcd95206bc",
                    _tpl: "59bfc5c886f7743bf6794e62",
                    parentId: "1ffa6f494617ba93ee2a28a6",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "4a20e913a00ddf4262fb4419",
                    _tpl: "59985a6c86f77414ec448d17",
                    parentId: "1ffa6f494617ba93ee2a28a6",
                    slotId: "mod_reciever",
                },
                {
                    _id: "dcade3c1b41d787d5680ff78",
                    _tpl: "599860e986f7743bb57573a6",
                    parentId: "1ffa6f494617ba93ee2a28a6",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "adef2045cdc10939221a3a56",
                    _tpl: "59ccd11386f77428f24a488f",
                    parentId: "1ffa6f494617ba93ee2a28a6",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "ccb81be03a5cf1c1ea1fe12c",
                    _tpl: "6494094948796d891603e59f",
                    parentId: "4871b41463b11ea197c43767",
                    slotId: "mod_stock",
                },
                {
                    _id: "86aa320848d56853b39813bc",
                    _tpl: "570fd6c2d2720bc6458b457f",
                    parentId: "4a20e913a00ddf4262fb4419",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "fa16c2708e30c807dc39ce92",
                    _tpl: "5648b1504bdc2d9d488b4584",
                    parentId: "adef2045cdc10939221a3a56",
                    slotId: "mod_handguard",
                },
            ],
        },
        {
            Id: "66605257010012f7dae195b2",
            Name: "mp91",
            Root: "25e6c1bc024b20dc84248a3c",
            Items: [
                {
                    _id: "25e6c1bc024b20dc84248a3c",
                    _tpl: "5e00903ae9dc277128008b87",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "2d67a49a225f767c852e3b4b",
                    _tpl: "5de8eac42a78646d96665d91",
                    parentId: "25e6c1bc024b20dc84248a3c",
                    slotId: "mod_magazine",
                },
                {
                    _id: "f6a4718e3f22096bc7084f64",
                    _tpl: "5de8f237bbaf010b10528a70",
                    parentId: "25e6c1bc024b20dc84248a3c",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "e4c26e765272920325ed90b2",
                    _tpl: "5de910da8b6c4240ba2651b5",
                    parentId: "25e6c1bc024b20dc84248a3c",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "e7740a52b2b06000c862f03e",
                    _tpl: "5e0090f7e9dc277128008b93",
                    parentId: "25e6c1bc024b20dc84248a3c",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "b341181ba98a6760049a0bb0",
                    _tpl: "5de922d4b11454561e39239f",
                    parentId: "25e6c1bc024b20dc84248a3c",
                    slotId: "mod_charge",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "7125ba1e7bd8ec6896b18684",
                    _tpl: "5de8fbf2b74cd90030650c79",
                    parentId: "25e6c1bc024b20dc84248a3c",
                    slotId: "mod_mount_000",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "5e200abe50806952b3ee5ac9",
                    _tpl: "5a7b483fe899ef0016170d15",
                    parentId: "f6a4718e3f22096bc7084f64",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "081b180e4d9fb993d467dff7",
                    _tpl: "58d2664f86f7747fec5834f6",
                    parentId: "e7740a52b2b06000c862f03e",
                    slotId: "mod_scope",
                },
                {
                    _id: "7ea405275d7b18855e7a106f",
                    _tpl: "5de8fb539f98ac2bc659513a",
                    parentId: "e7740a52b2b06000c862f03e",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "df7923871e4f78665de048b9",
                    _tpl: "64807a29e5ffe165600abc97",
                    parentId: "7125ba1e7bd8ec6896b18684",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "b25b5f2494450b09305ad033",
                    _tpl: "58d268fc86f774111273f8c2",
                    parentId: "081b180e4d9fb993d467dff7",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "666052bd010012f7da381851",
            Name: "adar1",
            Root: "ac890b1f745cde5fb0011433",
            Items: [
                {
                    _id: "ac890b1f745cde5fb0011433",
                    _tpl: "5c07c60e0db834002330051f",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "236926efb4fb7e886a9cbf21",
                    _tpl: "5c0e2ff6d174af02a1659d4a",
                    parentId: "ac890b1f745cde5fb0011433",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "89a1a49a1b91a952d62eda2c",
                    _tpl: "5d1340cad7ad1a0b0b249869",
                    parentId: "ac890b1f745cde5fb0011433",
                    slotId: "mod_magazine",
                },
                {
                    _id: "df329f4f53c8e118f893166e",
                    _tpl: "5c0e2f26d174af02a9625114",
                    parentId: "ac890b1f745cde5fb0011433",
                    slotId: "mod_reciever",
                },
                {
                    _id: "7d566c74780b7f8243dc04b0",
                    _tpl: "5c0faeddd174af02a962601f",
                    parentId: "ac890b1f745cde5fb0011433",
                    slotId: "mod_stock",
                },
                {
                    _id: "aa95e2e4f364037473bbb75a",
                    _tpl: "5c0faf68d174af02a96260b8",
                    parentId: "ac890b1f745cde5fb0011433",
                    slotId: "mod_charge",
                },
                {
                    _id: "6155520cc994b38a09a3e717",
                    _tpl: "57aca93d2459771f2c7e26db",
                    parentId: "df329f4f53c8e118f893166e",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0, 0],
                            ScopesSelectedModes: [0, 0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "ddc3925e950131d0f0119f30",
                    _tpl: "5c0e2f94d174af029f650d56",
                    parentId: "df329f4f53c8e118f893166e",
                    slotId: "mod_barrel",
                },
                {
                    _id: "ab9ba4fe0745a8e7bc6b4fcc",
                    _tpl: "5c0e2f5cd174af02a012cfc9",
                    parentId: "df329f4f53c8e118f893166e",
                    slotId: "mod_handguard",
                },
                {
                    _id: "7c5e997baec7050122417de3",
                    _tpl: "5c0fafb6d174af02a96260ba",
                    parentId: "ddc3925e950131d0f0119f30",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "eae49a43fef3e185d4779ff0",
                    _tpl: "5ae30e795acfc408fb139a0b",
                    parentId: "ddc3925e950131d0f0119f30",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "c2913d376390fe472b7b1927",
                    _tpl: "638612b607dfed1ccb7206ba",
                    parentId: "7c5e997baec7050122417de3",
                    slotId: "mod_muzzle",
                },
            ],
        },
        {
            Id: "66605328010012f7da686425",
            Name: "mdr2",
            Root: "81d6ebd8b5c8161b1da214d1",
            Items: [
                {
                    _id: "81d6ebd8b5c8161b1da214d1",
                    _tpl: "5c488a752e221602b412af63",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "56b290186f8f54bdb9d10d83",
                    _tpl: "5c48a2c22e221602b313fb6c",
                    parentId: "81d6ebd8b5c8161b1da214d1",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "60882c89aa550ff0df4f4aaa",
                    _tpl: "5d1340b3d7ad1a0b52682ed7",
                    parentId: "81d6ebd8b5c8161b1da214d1",
                    slotId: "mod_magazine",
                },
                {
                    _id: "7b09e67ea89ce6897fb9e019",
                    _tpl: "5c48a14f2e2216152006edd7",
                    parentId: "81d6ebd8b5c8161b1da214d1",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "e42efe7661e4be19b9a23475",
                    _tpl: "5c48a2852e221602b21d5923",
                    parentId: "81d6ebd8b5c8161b1da214d1",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "227966da5bcda2a4d728a874",
                    _tpl: "5c0a2cec0db834001b7ce47d",
                    parentId: "81d6ebd8b5c8161b1da214d1",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "eb2d11577d67d8b5a7cb1fc8",
                    _tpl: "57cffcd624597763133760c5",
                    parentId: "7b09e67ea89ce6897fb9e019",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "52b36b0798a0a571a556057e",
                    _tpl: "5b7be47f5acfc400170e2dd2",
                    parentId: "7b09e67ea89ce6897fb9e019",
                    slotId: "mod_mount_001",
                },
                {
                    _id: "a8975a9d78ec12c43a974b94",
                    _tpl: "56ea8180d2720bf2698b456a",
                    parentId: "e42efe7661e4be19b9a23475",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "037fb74ed78e8fa5cfad2c63",
                    _tpl: "626becf9582c3e319310b837",
                    parentId: "52b36b0798a0a571a556057e",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "5760a8941012fab798e83bff",
                    _tpl: "57dbb57e2459774673234890",
                    parentId: "a8975a9d78ec12c43a974b94",
                    slotId: "mod_muzzle",
                },
            ],
        },
        {
            Id: "6660539b010012f7dabe4898",
            Name: "sr25",
            Root: "b3cee26772f36d32a1b35767",
            Items: [
                {
                    _id: "b3cee26772f36d32a1b35767",
                    _tpl: "5df8ce05b11454561e39243b",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "a451d31533b11b2f8427ec74",
                    _tpl: "63f5feead259b42f0b4d6d0f",
                    parentId: "b3cee26772f36d32a1b35767",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "f9667c723be5d83a136f7941",
                    _tpl: "5a3501acc4a282000d72293a",
                    parentId: "b3cee26772f36d32a1b35767",
                    slotId: "mod_magazine",
                },
                {
                    _id: "4cd71644a28134d23da3dd99",
                    _tpl: "5649be884bdc2d79388b4577",
                    parentId: "b3cee26772f36d32a1b35767",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "42824e8f102febb846a656e2",
                    _tpl: "5df8e4080b92095fd441e594",
                    parentId: "b3cee26772f36d32a1b35767",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "54f3c8ff4a9ec4558de449d9",
                    _tpl: "5df8e053bb49d91fb446d6a6",
                    parentId: "b3cee26772f36d32a1b35767",
                    slotId: "mod_charge",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "a0dd5af3a47edb4c40fe2dc4",
                    _tpl: "5ae30c9a5acfc408fb139a03",
                    parentId: "4cd71644a28134d23da3dd99",
                    slotId: "mod_stock_000",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "106724bf810fb6e5f36e7c7a",
                    _tpl: "5c07dd120db834001c39092d",
                    parentId: "42824e8f102febb846a656e2",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "6a6184ed279be5cb118eeb98",
                    _tpl: "5df917564a9f347bc92edca3",
                    parentId: "42824e8f102febb846a656e2",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "69c8fe9b3c22d2d527d07688",
                    _tpl: "5df916dfbb49d91fb446d6b9",
                    parentId: "42824e8f102febb846a656e2",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "808336fd6e0e72a4651e8ee4",
                    _tpl: "5dfa3d7ac41b2312ea33362a",
                    parentId: "42824e8f102febb846a656e2",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "8633d722c07951ca63720a16",
                    _tpl: "5fbe7618d6fa9c00c571bb6c",
                    parentId: "6a6184ed279be5cb118eeb98",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "602324c9b0228b502786b518",
                    _tpl: "5dfa3d45dfc58d14537c20b0",
                    parentId: "6a6184ed279be5cb118eeb98",
                    slotId: "mod_gas_block",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "0f14b8540a36962ca54db49b",
                    _tpl: "5dfa3d950dee1b22f862eae0",
                    parentId: "69c8fe9b3c22d2d527d07688",
                    slotId: "mod_sight_front",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "d3c6e3ee583882a7815fc11d",
                    _tpl: "57cffce524597763b31685d8",
                    parentId: "69c8fe9b3c22d2d527d07688",
                    slotId: "mod_foregrip",
                },
            ],
        },
        {
            Id: "666053e9010012f7da00a1e1",
            Name: "opsks",
            Root: "cc06b983510ed0f2f552b4a0",
            Items: [
                {
                    _id: "cc06b983510ed0f2f552b4a0",
                    _tpl: "587e02ff24597743df3deaeb",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "b80374c14fa15065499493ac",
                    _tpl: "587e0531245977466077a0f7",
                    parentId: "cc06b983510ed0f2f552b4a0",
                    slotId: "mod_stock",
                },
                {
                    _id: "5dc9064b1e46d9962f790250",
                    _tpl: "634eff66517ccc8a960fc735",
                    parentId: "cc06b983510ed0f2f552b4a0",
                    slotId: "mod_barrel",
                },
                {
                    _id: "c6803e63088e8094b6cd0fbe",
                    _tpl: "587df3a12459772c28142567",
                    parentId: "cc06b983510ed0f2f552b4a0",
                    slotId: "mod_magazine",
                },
                {
                    _id: "1e3f9e3bad3d100c45fe85c1",
                    _tpl: "587e08ee245977446b4410cf",
                    parentId: "cc06b983510ed0f2f552b4a0",
                    slotId: "mod_mount",
                },
                {
                    _id: "79025c9e30a1c9558f131860",
                    _tpl: "634f06262e5def262d0b30ca",
                    parentId: "cc06b983510ed0f2f552b4a0",
                    slotId: "mod_reciever",
                },
                {
                    _id: "faa8234df82beacd56721a10",
                    _tpl: "634f05a21f9f536910079b56",
                    parentId: "5dc9064b1e46d9962f790250",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "c97343f85587af195552c767",
                    _tpl: "5cf67cadd7f00c065a5abab7",
                    parentId: "5dc9064b1e46d9962f790250",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "b9a53bf55f7609d4ec98419c",
                    _tpl: "5c82342f2e221644f31c060e",
                    parentId: "1e3f9e3bad3d100c45fe85c1",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "36844bd9b4fd90ffa17886f0",
                    _tpl: "634f036a517ccc8a960fc746",
                    parentId: "faa8234df82beacd56721a10",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "85b11c8b813f4554d39dcf36",
                    _tpl: "574db213245977459a2f3f5d",
                    parentId: "faa8234df82beacd56721a10",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "640f3bcdce5c6e26b9d3383e",
                    _tpl: "5649ab884bdc2ded0b8b457f",
                    parentId: "c97343f85587af195552c767",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "9e0495e2ebea75be35b9b8b2",
                    _tpl: "634f03d40384a3ba4f06f874",
                    parentId: "36844bd9b4fd90ffa17886f0",
                    slotId: "mod_mount_000",
                },
            ],
        },
        {
            Id: "66605416010012f7da565d24",
            Name: "svt",
            Root: "d2ea345e1b5071915c2db731",
            Items: [
                {
                    _id: "d2ea345e1b5071915c2db731",
                    _tpl: "643ea5b23db6f9f57107d9fd",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "4b203c307c3005d25bc85be5",
                    _tpl: "6410745d5dd49d77bd078485",
                    parentId: "d2ea345e1b5071915c2db731",
                    slotId: "mod_stock",
                },
                {
                    _id: "4f1c4ca9a3ea5adb9eb1a6bb",
                    _tpl: "6410758c857473525b08bb77",
                    parentId: "d2ea345e1b5071915c2db731",
                    slotId: "mod_barrel",
                },
                {
                    _id: "6127f9a1ed82cc1f5ae03a4f",
                    _tpl: "641074a07fd350b98c0b3f96",
                    parentId: "d2ea345e1b5071915c2db731",
                    slotId: "mod_magazine",
                },
                {
                    _id: "0dcc364c22c67967c9d7e1eb",
                    _tpl: "64119cdbdcf48d656f0aa272",
                    parentId: "d2ea345e1b5071915c2db731",
                    slotId: "mod_reciever",
                },
                {
                    _id: "4d786c15f7fc5b66664251da",
                    _tpl: "641dc35e19604f20c800be18",
                    parentId: "d2ea345e1b5071915c2db731",
                    slotId: "mod_scope",
                },
                {
                    _id: "9e575f2db9aba7cd715fa43a",
                    _tpl: "64119d1f2c6d6f921a0929f8",
                    parentId: "4f1c4ca9a3ea5adb9eb1a6bb",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "0bb3b0aeceacf8c34793b028",
                    _tpl: "64119d90dcf48d656f0aa275",
                    parentId: "4f1c4ca9a3ea5adb9eb1a6bb",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "13c5dbada22e64e47c7af8eb",
                    _tpl: "5b3f7c1c5acfc40dc5296b1d",
                    parentId: "4d786c15f7fc5b66664251da",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "0f12164f6f279905f1b528de",
                    _tpl: "64119d672c6d6f921a0929fb",
                    parentId: "9e575f2db9aba7cd715fa43a",
                    slotId: "mod_sight_front",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "6660547f010012f7da67cc5c",
            Name: "m1a",
            Root: "8cd6b6be64032e6b474fd01f",
            Items: [
                {
                    _id: "8cd6b6be64032e6b474fd01f",
                    _tpl: "5aafa857e5b5b00018480968",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "55cb2c8f63298630890c4060",
                    _tpl: "5aaf8a0be5b5b00015693243",
                    parentId: "8cd6b6be64032e6b474fd01f",
                    slotId: "mod_magazine",
                },
                {
                    _id: "8f6f69f6b61a41fc65f387b7",
                    _tpl: "5aaf8e43e5b5b00015693246",
                    parentId: "8cd6b6be64032e6b474fd01f",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "1d8c8aca181a1892894b1cb8",
                    _tpl: "5aaf9d53e5b5b00015042a52",
                    parentId: "8cd6b6be64032e6b474fd01f",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "f47d31fd7da7404aa948fef7",
                    _tpl: "5abcbb20d8ce87001773e258",
                    parentId: "8cd6b6be64032e6b474fd01f",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "e0ef81a12767f6475c09117b",
                    _tpl: "5addbfe15acfc4001a5fc58b",
                    parentId: "8cd6b6be64032e6b474fd01f",
                    slotId: "mod_mount",
                },
                {
                    _id: "9294c6c7b00141ee34662ee8",
                    _tpl: "5ab24ef9e5b5b00fe93c9209",
                    parentId: "8f6f69f6b61a41fc65f387b7",
                    slotId: "mod_mount",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "38a73f44a680a94c3175dcab",
                    _tpl: "5ab3afb2d8ce87001660304d",
                    parentId: "1d8c8aca181a1892894b1cb8",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "7828a2f9db6323598516b76a",
                    _tpl: "5c0517910db83400232ffee5",
                    parentId: "e0ef81a12767f6475c09117b",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "3d6211adbea38095a66ed6ac",
                    _tpl: "5c878e9d2e2216000f201903",
                    parentId: "38a73f44a680a94c3175dcab",
                    slotId: "mod_muzzle",
                },
            ],
        },
        {
            Id: "666054f4010012f7da934ded",
            Name: "pl15",
            Root: "04ea0cae4d11f42c3aa0e760",
            Items: [
                {
                    _id: "04ea0cae4d11f42c3aa0e760",
                    _tpl: "602a9740da11d6478d5a06dc",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "8346524cb7f8c255233a4ab9",
                    _tpl: "602a95fe4e02ce1eaa358729",
                    parentId: "04ea0cae4d11f42c3aa0e760",
                    slotId: "mod_barrel",
                },
                {
                    _id: "5e82dfa413b28ce68d0731a5",
                    _tpl: "60228924961b8d75ee233c32",
                    parentId: "04ea0cae4d11f42c3aa0e760",
                    slotId: "mod_reciever",
                },
                {
                    _id: "bcfa7fa72c9f53545656accc",
                    _tpl: "602286df23506e50807090c6",
                    parentId: "04ea0cae4d11f42c3aa0e760",
                    slotId: "mod_magazine",
                },
                {
                    _id: "efef27f859971b9c6914240e",
                    _tpl: "6272370ee4013c5d7e31f418",
                    parentId: "04ea0cae4d11f42c3aa0e760",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "36180e487c49806eee187d96",
                    _tpl: "5c7e8fab2e22165df16b889b",
                    parentId: "8346524cb7f8c255233a4ab9",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "7ab56fd814345836ef01c5e8",
                    _tpl: "60229948cacb6b0506369e27",
                    parentId: "5e82dfa413b28ce68d0731a5",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "8b932e8d432212c2f5689417",
                    _tpl: "60228a76d62c9b14ed777a66",
                    parentId: "5e82dfa413b28ce68d0731a5",
                    slotId: "mod_sight_front",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
    ];
    weaponBaseBuilds = [
        {
            Id: "666040240100111a389e2500",
            Name: "val",
            Root: "a8467bf7892cc102d3c728c6",
            Items: [
                {
                    _id: "a8467bf7892cc102d3c728c6",
                    _tpl: "57c44b372459772d2b39b8ce",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "5ce2520b2863e7807f753f21",
                    _tpl: "57c44dd02459772d2e0ae249",
                    parentId: "a8467bf7892cc102d3c728c6",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "4b8db5daaecca836c37e76d0",
                    _tpl: "57c44f4f2459772d2c627113",
                    parentId: "a8467bf7892cc102d3c728c6",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "7ef00dfc606874c0f76cb8d3",
                    _tpl: "57838f9f2459774a150289a0",
                    parentId: "a8467bf7892cc102d3c728c6",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "d3f449fb49770fbef0f2eb51",
                    _tpl: "57c44fa82459772d2d75e415",
                    parentId: "a8467bf7892cc102d3c728c6",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "b4c9937021b677e0bfb6f37c",
                    _tpl: "57c450252459772d28133253",
                    parentId: "a8467bf7892cc102d3c728c6",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "7a7338ad6061fa25963309ce",
                    _tpl: "57c44e7b2459772d28133248",
                    parentId: "5ce2520b2863e7807f753f21",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "666040290100111a388dc2c4",
            Name: "sks",
            Root: "16707de86097d409afb8d761",
            Items: [
                {
                    _id: "16707de86097d409afb8d761",
                    _tpl: "587e02ff24597743df3deaeb",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "297ddc64f61074ae16ef11ea",
                    _tpl: "587e0531245977466077a0f7",
                    parentId: "16707de86097d409afb8d761",
                    slotId: "mod_stock",
                },
                {
                    _id: "4e4c86efa606fe1e422c1199",
                    _tpl: "634eff66517ccc8a960fc735",
                    parentId: "16707de86097d409afb8d761",
                    slotId: "mod_barrel",
                },
                {
                    _id: "da950059a5917f3b5ddbc6c0",
                    _tpl: "587df3a12459772c28142567",
                    parentId: "16707de86097d409afb8d761",
                    slotId: "mod_magazine",
                },
                {
                    _id: "699818b77c721f3c46194db8",
                    _tpl: "634f06262e5def262d0b30ca",
                    parentId: "16707de86097d409afb8d761",
                    slotId: "mod_reciever",
                },
                {
                    _id: "c6a6dc7e9526008a4a2f57c9",
                    _tpl: "634f05a21f9f536910079b56",
                    parentId: "4e4c86efa606fe1e422c1199",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "118f792305736f6db7e82c0d",
                    _tpl: "634f036a517ccc8a960fc746",
                    parentId: "c6a6dc7e9526008a4a2f57c9",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "16c968a9afc88458539fd31f",
                    _tpl: "574db213245977459a2f3f5d",
                    parentId: "c6a6dc7e9526008a4a2f57c9",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "aaef8829b16283d3c042ac37",
                    _tpl: "634f03d40384a3ba4f06f874",
                    parentId: "118f792305736f6db7e82c0d",
                    slotId: "mod_mount_000",
                },
            ],
        },
        {
            Id: "6660402f0100111a38b0e975",
            Name: "vepr",
            Root: "34b5b377826b549d6c78444a",
            Items: [
                {
                    _id: "34b5b377826b549d6c78444a",
                    _tpl: "5c501a4d2e221602b412b540",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "46ba9e63d8e406149004d823",
                    _tpl: "5c5039be2e221602b177c9ff",
                    parentId: "34b5b377826b549d6c78444a",
                    slotId: "mod_gas_block",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "947a90678606a0e5b481fa29",
                    _tpl: "5c503d0a2e221602b542b7ef",
                    parentId: "34b5b377826b549d6c78444a",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "dd237cb25c2b317c4f5b14f6",
                    _tpl: "5c503b1c2e221602b21d6e9d",
                    parentId: "34b5b377826b549d6c78444a",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "df5f30188107252a24e31169",
                    _tpl: "5c503af12e221602b177ca02",
                    parentId: "34b5b377826b549d6c78444a",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "185bb6e226edc1a08e6d79ee",
                    _tpl: "5c503ac82e221602b21d6e9a",
                    parentId: "34b5b377826b549d6c78444a",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666040350100111a38c624db",
            Name: "tt33",
            Root: "292e4e3e405978619d762b5d",
            Items: [
                {
                    _id: "292e4e3e405978619d762b5d",
                    _tpl: "571a12c42459771f627b58a0",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "2f40818535663bf67517dec3",
                    _tpl: "571a26d524597720680fbe8a",
                    parentId: "292e4e3e405978619d762b5d",
                    slotId: "mod_barrel",
                },
                {
                    _id: "b5908f17c13777ecc6781519",
                    _tpl: "571a282c2459771fb2755a69",
                    parentId: "292e4e3e405978619d762b5d",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "6cfb0e9cd3b63687558d180a",
                    _tpl: "571a29dc2459771fb2755a6a",
                    parentId: "292e4e3e405978619d762b5d",
                    slotId: "mod_magazine",
                },
            ],
        },
        {
            Id: "666040410100111a384bd66f",
            Name: "pb pistol",
            Root: "eeb9b71e43fe5ed8eb8ffd2e",
            Items: [
                {
                    _id: "eeb9b71e43fe5ed8eb8ffd2e",
                    _tpl: "56e0598dd2720bb5668b45a6",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "298f13959bc239109b066eef",
                    _tpl: "5448c12b4bdc2d02308b456f",
                    parentId: "eeb9b71e43fe5ed8eb8ffd2e",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "99094eaa2a9ce076821e2d10",
                    _tpl: "56e05b06d2720bb2668b4586",
                    parentId: "eeb9b71e43fe5ed8eb8ffd2e",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "5e4057c6bbf2a74b63b5ed8a",
                    _tpl: "56e05a6ed2720bd0748b4567",
                    parentId: "eeb9b71e43fe5ed8eb8ffd2e",
                    slotId: "mod_pistolgrip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666040500100111a38de5f9e",
            Name: "svt",
            Root: "c021abc02914d04cfa94a1a2",
            Items: [
                {
                    _id: "c021abc02914d04cfa94a1a2",
                    _tpl: "643ea5b23db6f9f57107d9fd",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "090feb21ee0f2e9f928aeb75",
                    _tpl: "6410745d5dd49d77bd078485",
                    parentId: "c021abc02914d04cfa94a1a2",
                    slotId: "mod_stock",
                },
                {
                    _id: "9d172bac0c910a011900e4cd",
                    _tpl: "6410758c857473525b08bb77",
                    parentId: "c021abc02914d04cfa94a1a2",
                    slotId: "mod_barrel",
                },
                {
                    _id: "61c8d215c4c0e99b11df47f0",
                    _tpl: "6422e1ea3c0f06190302161a",
                    parentId: "c021abc02914d04cfa94a1a2",
                    slotId: "mod_magazine",
                },
                {
                    _id: "fd145811f8c12e3855fe310f",
                    _tpl: "64119cdbdcf48d656f0aa272",
                    parentId: "c021abc02914d04cfa94a1a2",
                    slotId: "mod_reciever",
                },
                {
                    _id: "1754049f9e8199c8a04c0d30",
                    _tpl: "64119d1f2c6d6f921a0929f8",
                    parentId: "9d172bac0c910a011900e4cd",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "dfdf656e6a84bdbf0db96dad",
                    _tpl: "64119d90dcf48d656f0aa275",
                    parentId: "9d172bac0c910a011900e4cd",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "f569d3cf413087246ea23fe2",
                    _tpl: "64119d672c6d6f921a0929fb",
                    parentId: "1754049f9e8199c8a04c0d30",
                    slotId: "mod_sight_front",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "666040550100111a38c4c664",
            Name: "9a91",
            Root: "d715374f4403d633ac8176be",
            Items: [
                {
                    _id: "d715374f4403d633ac8176be",
                    _tpl: "644674a13d52156624001fbc",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "ea0e50bf7ee1ba75493a55d3",
                    _tpl: "6450ec2e7da7133e5a09ca96",
                    parentId: "d715374f4403d633ac8176be",
                    slotId: "mod_magazine",
                },
                {
                    _id: "eb4d0ee9041381dc61e04c6b",
                    _tpl: "6450f21a3d52156624001fcf",
                    parentId: "d715374f4403d633ac8176be",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "a359a892b759ae1d7928ba7c",
                    _tpl: "6451167ad4928d46d30be3fd",
                    parentId: "d715374f4403d633ac8176be",
                    slotId: "mod_stock_000",
                },
                {
                    _id: "1392b5f710e8ca6678afc986",
                    _tpl: "645122f6d4928d46d30be3ff",
                    parentId: "d715374f4403d633ac8176be",
                    slotId: "mod_barrel",
                },
                {
                    _id: "fa25fe449d349c5ba71bccc8",
                    _tpl: "64527a263d52156624001fd7",
                    parentId: "1392b5f710e8ca6678afc986",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "5e7d5f62ad515ec81d952155",
                    _tpl: "644675573d52156624001fc9",
                    parentId: "1392b5f710e8ca6678afc986",
                    slotId: "mod_handguard",
                },
            ],
        },
        {
            Id: "6660405c0100111a3858c24e",
            Name: "m4a1",
            Root: "f837000044aae3246cff1f37",
            Items: [
                {
                    _id: "f837000044aae3246cff1f37",
                    _tpl: "5447a9cd4bdc2dbd208b4567",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "2e19c6ce7fc3ef6dffabbe60",
                    _tpl: "55d4b9964bdc2d1d4e8b456e",
                    parentId: "f837000044aae3246cff1f37",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "c08fe1fec397b5ffee7ac4ad",
                    _tpl: "55d4887d4bdc2d962f8b4570",
                    parentId: "f837000044aae3246cff1f37",
                    slotId: "mod_magazine",
                },
                {
                    _id: "c3155e7d28b9385ea2684685",
                    _tpl: "55d355e64bdc2d962f8b4569",
                    parentId: "f837000044aae3246cff1f37",
                    slotId: "mod_reciever",
                },
                {
                    _id: "f6eb695f46fe0aab0456195f",
                    _tpl: "5649be884bdc2d79388b4577",
                    parentId: "f837000044aae3246cff1f37",
                    slotId: "mod_stock",
                },
                {
                    _id: "8b133d6cca7b6c4c6e59e1e6",
                    _tpl: "55d44fd14bdc2d962f8b456e",
                    parentId: "f837000044aae3246cff1f37",
                    slotId: "mod_charge",
                },
                {
                    _id: "7d07fdb26fa6daab877cb554",
                    _tpl: "55d3632e4bdc2d972f8b4569",
                    parentId: "c3155e7d28b9385ea2684685",
                    slotId: "mod_barrel",
                },
                {
                    _id: "f5e4885c62bba00efb8984ca",
                    _tpl: "5ae30db85acfc408fb139a05",
                    parentId: "c3155e7d28b9385ea2684685",
                    slotId: "mod_handguard",
                },
                {
                    _id: "84bf74b0349a0d224e265063",
                    _tpl: "5ae30bad5acfc400185c2dc4",
                    parentId: "c3155e7d28b9385ea2684685",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "647022ac00bf4d73993149d7",
                    _tpl: "55d4ae6c4bdc2d8b2f8b456e",
                    parentId: "f6eb695f46fe0aab0456195f",
                    slotId: "mod_stock_000",
                },
                {
                    _id: "d7fb0f69828fe2ceb103de8e",
                    _tpl: "544a38634bdc2d58388b4568",
                    parentId: "7d07fdb26fa6daab877cb554",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "e225f98adc8399eabadfa203",
                    _tpl: "5ae30e795acfc408fb139a0b",
                    parentId: "7d07fdb26fa6daab877cb554",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "799d63b9f3b68e1c7798b90d",
                    _tpl: "637f57a68d137b27f70c4968",
                    parentId: "f5e4885c62bba00efb8984ca",
                    slotId: "mod_handguard",
                },
            ],
        },
        {
            Id: "666040660100111a38dda574",
            Name: "aks74u",
            Root: "47b289083cd3054e6614d747",
            Items: [
                {
                    _id: "47b289083cd3054e6614d747",
                    _tpl: "57dc2fa62459775949412633",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "16c4d9ec6336a8e3cd0cc442",
                    _tpl: "57e3dba62459770f0c32322b",
                    parentId: "47b289083cd3054e6614d747",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "591ea07795f40515b191a210",
                    _tpl: "57dc347d245977596754e7a1",
                    parentId: "47b289083cd3054e6614d747",
                    slotId: "mod_stock",
                },
                {
                    _id: "99cfe5bf47199faa060a5e0e",
                    _tpl: "564ca99c4bdc2d16268b4589",
                    parentId: "47b289083cd3054e6614d747",
                    slotId: "mod_magazine",
                },
                {
                    _id: "dac68dd4db68718c3b6f0d2e",
                    _tpl: "57dc324a24597759501edc20",
                    parentId: "47b289083cd3054e6614d747",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "d4abebc67f7df1a8231d1cb9",
                    _tpl: "57dc334d245977597164366f",
                    parentId: "47b289083cd3054e6614d747",
                    slotId: "mod_reciever",
                },
                {
                    _id: "87976758cfb216e9fabdaee8",
                    _tpl: "59d36a0086f7747e673f3946",
                    parentId: "47b289083cd3054e6614d747",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "37b689f369f8c5a0d1249187",
                    _tpl: "57dc32dc245977596d4ef3d3",
                    parentId: "87976758cfb216e9fabdaee8",
                    slotId: "mod_handguard",
                },
            ],
        },
        {
            Id: "6660406e0100111a380a971d",
            Name: "aks74un",
            Root: "b659166ef5222973e74c7118",
            Items: [
                {
                    _id: "b659166ef5222973e74c7118",
                    _tpl: "583990e32459771419544dd2",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "c85513d3557e8052dcb611b2",
                    _tpl: "5649ad3f4bdc2df8348b4585",
                    parentId: "b659166ef5222973e74c7118",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "04f40ebabf9a53efaebdeb33",
                    _tpl: "57dc347d245977596754e7a1",
                    parentId: "b659166ef5222973e74c7118",
                    slotId: "mod_stock",
                },
                {
                    _id: "301d3efa453e58a6c3597970",
                    _tpl: "564ca99c4bdc2d16268b4589",
                    parentId: "b659166ef5222973e74c7118",
                    slotId: "mod_magazine",
                },
                {
                    _id: "7c4befdf69f8f2d8a111d4a9",
                    _tpl: "57dc324a24597759501edc20",
                    parentId: "b659166ef5222973e74c7118",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "cac3b1978f9947f2f9156e92",
                    _tpl: "57dc334d245977597164366f",
                    parentId: "b659166ef5222973e74c7118",
                    slotId: "mod_reciever",
                },
                {
                    _id: "4519724bb329a19aa9cc9463",
                    _tpl: "59d36a0086f7747e673f3946",
                    parentId: "b659166ef5222973e74c7118",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "76f278cbce5ec656d9a621de",
                    _tpl: "57dc32dc245977596d4ef3d3",
                    parentId: "4519724bb329a19aa9cc9463",
                    slotId: "mod_handguard",
                },
            ],
        },
        {
            Id: "666040760100111a38993151",
            Name: "aks74ub",
            Root: "cc2c8265a09085d30211f692",
            Items: [
                {
                    _id: "cc2c8265a09085d30211f692",
                    _tpl: "5839a40f24597726f856b511",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 95,
                            Durability: 95,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "3a1faf0072d57323eb623d90",
                    _tpl: "5649ad3f4bdc2df8348b4585",
                    parentId: "cc2c8265a09085d30211f692",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "1be844f7e01b8be364497858",
                    _tpl: "57dc347d245977596754e7a1",
                    parentId: "cc2c8265a09085d30211f692",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "7b45ca540e887710317a9314",
                    _tpl: "564ca99c4bdc2d16268b4589",
                    parentId: "cc2c8265a09085d30211f692",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "af5a2e004af4a7f774cbd7c1",
                    _tpl: "57ffb0e42459777d047111c5",
                    parentId: "cc2c8265a09085d30211f692",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "06e0742fa1504d8df1c6047f",
                    _tpl: "5839a7742459773cf9693481",
                    parentId: "cc2c8265a09085d30211f692",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "0881d2f097bfe27f0fda6cc8",
                    _tpl: "59d36a0086f7747e673f3946",
                    parentId: "cc2c8265a09085d30211f692",
                    slotId: "mod_gas_block",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "52ef839dcdf4c8abbd3997fb",
                    _tpl: "57dc32dc245977596d4ef3d3",
                    parentId: "0881d2f097bfe27f0fda6cc8",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666040880100111a38f4513b",
            Name: "grach",
            Root: "230c8bf3f9fb61d59b9a0c95",
            Items: [
                {
                    _id: "230c8bf3f9fb61d59b9a0c95",
                    _tpl: "576a581d2459771e7b1bc4f1",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "a8ad56531a1ae2e2852144f3",
                    _tpl: "576a5ed62459771e9c2096cb",
                    parentId: "230c8bf3f9fb61d59b9a0c95",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "9b9d1e5d7947697addd5232d",
                    _tpl: "576a63cd2459771e796e0e11",
                    parentId: "230c8bf3f9fb61d59b9a0c95",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666040910100111a3838854f",
            Name: "vpo",
            Root: "6db93d07d301550b23ae4464",
            Items: [
                {
                    _id: "6db93d07d301550b23ae4464",
                    _tpl: "59e6152586f77473dc057aa1",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "f0df4878def459c8eec63218",
                    _tpl: "59e649f986f77411d949b246",
                    parentId: "6db93d07d301550b23ae4464",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "a69811b3f3886bf6031ea398",
                    _tpl: "59e61eb386f77440d64f5daf",
                    parentId: "6db93d07d301550b23ae4464",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "4e690be789083da99c46fa0e",
                    _tpl: "59e6318286f77444dd62c4cc",
                    parentId: "6db93d07d301550b23ae4464",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "3797ac22858b7d91bd3998f9",
                    _tpl: "59e6449086f7746c9f75e822",
                    parentId: "6db93d07d301550b23ae4464",
                    slotId: "mod_reciever",
                },
                {
                    _id: "fb2dae473a4d9bab007c57e4",
                    _tpl: "59d650cf86f7741b846413a4",
                    parentId: "6db93d07d301550b23ae4464",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "c58dad84080e9bf0534733c8",
                    _tpl: "59e6227d86f77440d64f5dc2",
                    parentId: "6db93d07d301550b23ae4464",
                    slotId: "mod_stock",
                },
                {
                    _id: "0fdae9ea149c662a7e0a67b1",
                    _tpl: "5b1fd4e35acfc40018633c39",
                    parentId: "6db93d07d301550b23ae4464",
                    slotId: "mod_magazine",
                },
                {
                    _id: "0598b4d49e436324d223b54a",
                    _tpl: "59e6284f86f77440d569536f",
                    parentId: "f0df4878def459c8eec63218",
                    slotId: "mod_handguard",
                },
            ],
        },
        {
            Id: "666040960100111a387f3480",
            Name: "vpo209",
            Root: "5b3d3ddac387b377994acf02",
            Items: [
                {
                    _id: "5b3d3ddac387b377994acf02",
                    _tpl: "59e6687d86f77411d949b251",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "8b3042beafa27729b9671314",
                    _tpl: "59e649f986f77411d949b246",
                    parentId: "5b3d3ddac387b377994acf02",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "b0fcff594d36c65125fa3aea",
                    _tpl: "59e8a00d86f7742ad93b569c",
                    parentId: "5b3d3ddac387b377994acf02",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "862a2285e9368ccb757fd7f4",
                    _tpl: "59e6318286f77444dd62c4cc",
                    parentId: "5b3d3ddac387b377994acf02",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "6fbd6be64ec4c913c65d5c97",
                    _tpl: "59e6449086f7746c9f75e822",
                    parentId: "5b3d3ddac387b377994acf02",
                    slotId: "mod_reciever",
                },
                {
                    _id: "e3818eb8d608fe29a15aaa97",
                    _tpl: "59e8977386f77415a553c453",
                    parentId: "5b3d3ddac387b377994acf02",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "f909f6c053f5a0be2e1d96ba",
                    _tpl: "59e89d0986f77427600d226e",
                    parentId: "5b3d3ddac387b377994acf02",
                    slotId: "mod_stock",
                },
                {
                    _id: "aa472d6ef74ddbf3ad1a344c",
                    _tpl: "5b1fd4e35acfc40018633c39",
                    parentId: "5b3d3ddac387b377994acf02",
                    slotId: "mod_magazine",
                },
                {
                    _id: "d20f5bd3ff9efffe6d60d50c",
                    _tpl: "59e898ee86f77427614bd225",
                    parentId: "8b3042beafa27729b9671314",
                    slotId: "mod_handguard",
                },
            ],
        },
        {
            Id: "666040a00100111a387f0e80",
            Name: "aks74n",
            Root: "0854ff5fbc406f140c7f75e3",
            Items: [
                {
                    _id: "0854ff5fbc406f140c7f75e3",
                    _tpl: "5ab8e9fcd8ce870019439434",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "6901f7e0e291e11aec0d9a9d",
                    _tpl: "59c6633186f7740cf0493bb9",
                    parentId: "0854ff5fbc406f140c7f75e3",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "311b385dd69780383c3d4859",
                    _tpl: "5649aa744bdc2ded0b8b457e",
                    parentId: "0854ff5fbc406f140c7f75e3",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "213791b5660eb510b4e78c0e",
                    _tpl: "57e3dba62459770f0c32322b",
                    parentId: "0854ff5fbc406f140c7f75e3",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "e3c8b3e79da68b080cb0696f",
                    _tpl: "5649af094bdc2df8348b4586",
                    parentId: "0854ff5fbc406f140c7f75e3",
                    slotId: "mod_reciever",
                },
                {
                    _id: "7ddb0e1b60868c133a570a79",
                    _tpl: "5649b0544bdc2d1b2b8b458a",
                    parentId: "0854ff5fbc406f140c7f75e3",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "220db72147b471eba78e7ee2",
                    _tpl: "5ab626e4d8ce87272e4c6e43",
                    parentId: "0854ff5fbc406f140c7f75e3",
                    slotId: "mod_stock",
                },
                {
                    _id: "aecc78bfa7cb4eee1f3bd57b",
                    _tpl: "564ca99c4bdc2d16268b4589",
                    parentId: "0854ff5fbc406f140c7f75e3",
                    slotId: "mod_magazine",
                },
                {
                    _id: "8cbfc0eb905782adfc28a26d",
                    _tpl: "5648b0744bdc2d363b8b4578",
                    parentId: "6901f7e0e291e11aec0d9a9d",
                    slotId: "mod_handguard",
                },
            ],
        },
        {
            Id: "666040a70100111a3859c276",
            Name: "akmsn",
            Root: "349ed69fa8ea012b1709f9aa",
            Items: [
                {
                    _id: "349ed69fa8ea012b1709f9aa",
                    _tpl: "5abcbc27d8ce8700182eceeb",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "c9aa4df19f59fa386649a7cc",
                    _tpl: "59d64ec286f774171d1e0a42",
                    parentId: "349ed69fa8ea012b1709f9aa",
                    slotId: "mod_gas_block",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "bb6c3ff3ebc951004ace280c",
                    _tpl: "59e61eb386f77440d64f5daf",
                    parentId: "349ed69fa8ea012b1709f9aa",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "876f040481e65ba3fe1f0e37",
                    _tpl: "5a0071d486f77404e23a12b2",
                    parentId: "349ed69fa8ea012b1709f9aa",
                    slotId: "mod_pistol_grip_akms",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "32fa732cb68cd22e9c072a83",
                    _tpl: "59d6507c86f7741b846413a2",
                    parentId: "349ed69fa8ea012b1709f9aa",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "0df970e0dd2101758e286f60",
                    _tpl: "59d650cf86f7741b846413a4",
                    parentId: "349ed69fa8ea012b1709f9aa",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "849dbdd8dfef4292471b02e9",
                    _tpl: "5abcd472d8ce8700166032ae",
                    parentId: "349ed69fa8ea012b1709f9aa",
                    slotId: "mod_stock_akms",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "27220d988aa451c888eab5e6",
                    _tpl: "5a0060fc86f7745793204432",
                    parentId: "349ed69fa8ea012b1709f9aa",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "22e6f6f0e3d9fcbb13e90671",
                    _tpl: "59d64f2f86f77417193ef8b3",
                    parentId: "c9aa4df19f59fa386649a7cc",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666040b70100111a389fb88f",
            Name: "ak74m",
            Root: "3e553fa9318e3905a60fcb60",
            Items: [
                {
                    _id: "3e553fa9318e3905a60fcb60",
                    _tpl: "5ac4cd105acfc40016339859",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "358f3e67538d7912830b4697",
                    _tpl: "59c6633186f7740cf0493bb9",
                    parentId: "3e553fa9318e3905a60fcb60",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "b381ac4d560c9b5d9bb55b08",
                    _tpl: "5ac7655e5acfc40016339a19",
                    parentId: "3e553fa9318e3905a60fcb60",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "52dd3f6cfd9ff5c46f0081de",
                    _tpl: "5649ade84bdc2d1b2b8b4587",
                    parentId: "3e553fa9318e3905a60fcb60",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "59a2b68ba27ef20c4d4e789b",
                    _tpl: "5ac50da15acfc4001718d287",
                    parentId: "3e553fa9318e3905a60fcb60",
                    slotId: "mod_reciever",
                },
                {
                    _id: "365b51a660af24f323ac3fc5",
                    _tpl: "5ac72e475acfc400180ae6fe",
                    parentId: "3e553fa9318e3905a60fcb60",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "89a56d164f368d288bbc79a4",
                    _tpl: "5ac50c185acfc400163398d4",
                    parentId: "3e553fa9318e3905a60fcb60",
                    slotId: "mod_stock",
                },
                {
                    _id: "cf71faf8d1d4d31579a8875a",
                    _tpl: "55d480c04bdc2d1d4e8b456a",
                    parentId: "3e553fa9318e3905a60fcb60",
                    slotId: "mod_magazine",
                },
                {
                    _id: "8acfcdbd23796c205ee51f75",
                    _tpl: "5648b1504bdc2d9d488b4584",
                    parentId: "358f3e67538d7912830b4697",
                    slotId: "mod_handguard",
                },
            ],
        },
        {
            Id: "666040be0100111a38fae358",
            Name: "ak101",
            Root: "cc778fbb3e1e4704603ec0af",
            Items: [
                {
                    _id: "cc778fbb3e1e4704603ec0af",
                    _tpl: "5ac66cb05acfc40198510a10",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "eb06ea5a5e33960f5a73e4ac",
                    _tpl: "59c6633186f7740cf0493bb9",
                    parentId: "cc778fbb3e1e4704603ec0af",
                    slotId: "mod_gas_block",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "5f636906a694db03b3478e0f",
                    _tpl: "5ac72e615acfc43f67248aa0",
                    parentId: "cc778fbb3e1e4704603ec0af",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "d8c2c2bd805abed80a558f53",
                    _tpl: "5649ade84bdc2d1b2b8b4587",
                    parentId: "cc778fbb3e1e4704603ec0af",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "5dfe8440148db77c6b7f4e21",
                    _tpl: "5ac50da15acfc4001718d287",
                    parentId: "cc778fbb3e1e4704603ec0af",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "093f1daffc7a1a2094706c8e",
                    _tpl: "5ac72e475acfc400180ae6fe",
                    parentId: "cc778fbb3e1e4704603ec0af",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "3849a834c14fdce9411fbc38",
                    _tpl: "5ac50c185acfc400163398d4",
                    parentId: "cc778fbb3e1e4704603ec0af",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "2f739eaae0bc8faeee59f795",
                    _tpl: "5ac66c5d5acfc4001718d314",
                    parentId: "cc778fbb3e1e4704603ec0af",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "1156457bd61b451095b5ab99",
                    _tpl: "5648b1504bdc2d9d488b4584",
                    parentId: "eb06ea5a5e33960f5a73e4ac",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666040c50100111a385f5be7",
            Name: "ak102",
            Root: "33eb5ea1c42bd47e15e99bc3",
            Items: [
                {
                    _id: "33eb5ea1c42bd47e15e99bc3",
                    _tpl: "5ac66d015acfc400180ae6e4",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "a09e817636db17a47b5953a5",
                    _tpl: "59c6633186f7740cf0493bb9",
                    parentId: "33eb5ea1c42bd47e15e99bc3",
                    slotId: "mod_gas_block",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "1c8299dda410b2a20562c19e",
                    _tpl: "5ac72e725acfc400180ae701",
                    parentId: "33eb5ea1c42bd47e15e99bc3",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "55eacdd41bdf1192ea4045d5",
                    _tpl: "5649ade84bdc2d1b2b8b4587",
                    parentId: "33eb5ea1c42bd47e15e99bc3",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "d74c0ad503c0f585f10ca60e",
                    _tpl: "5ac50da15acfc4001718d287",
                    parentId: "33eb5ea1c42bd47e15e99bc3",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "911a8aec35ba8cb672a657ef",
                    _tpl: "5ac733a45acfc400192630e2",
                    parentId: "33eb5ea1c42bd47e15e99bc3",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "011cdb61601d6773c5718d9c",
                    _tpl: "5ac50c185acfc400163398d4",
                    parentId: "33eb5ea1c42bd47e15e99bc3",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "1cb0d76ae4195f52df8a9076",
                    _tpl: "5ac66c5d5acfc4001718d314",
                    parentId: "33eb5ea1c42bd47e15e99bc3",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "255a275e99fca8c4efe654bf",
                    _tpl: "5648b1504bdc2d9d488b4584",
                    parentId: "a09e817636db17a47b5953a5",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666040cd0100111a38642226",
            Name: "ak103",
            Root: "17e2c62fe0ac4e959c539757",
            Items: [
                {
                    _id: "17e2c62fe0ac4e959c539757",
                    _tpl: "5ac66d2e5acfc43b321d4b53",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "b100d20fc86b4b5aaacd32d4",
                    _tpl: "59c6633186f7740cf0493bb9",
                    parentId: "17e2c62fe0ac4e959c539757",
                    slotId: "mod_gas_block",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "eb63bc2751eca2fb43c11ad1",
                    _tpl: "5ac72e7d5acfc40016339a02",
                    parentId: "17e2c62fe0ac4e959c539757",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "f8b1a6d628e5b07c9d2d1198",
                    _tpl: "5649ade84bdc2d1b2b8b4587",
                    parentId: "17e2c62fe0ac4e959c539757",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "102b2a49c838c2feba4eefca",
                    _tpl: "5ac50da15acfc4001718d287",
                    parentId: "17e2c62fe0ac4e959c539757",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "f30dca44435fbe804326ce52",
                    _tpl: "5ac72e475acfc400180ae6fe",
                    parentId: "17e2c62fe0ac4e959c539757",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "b8774d34caa2ff709464efc1",
                    _tpl: "5ac50c185acfc400163398d4",
                    parentId: "17e2c62fe0ac4e959c539757",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "72778ff5fa4cc1a5371c07b1",
                    _tpl: "5ac66bea5acfc43b321d4aec",
                    parentId: "17e2c62fe0ac4e959c539757",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "8c72eab9532f0e4cf164ade0",
                    _tpl: "5648b1504bdc2d9d488b4584",
                    parentId: "b100d20fc86b4b5aaacd32d4",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666040d40100111a385dcbe7",
            Name: "ak104",
            Root: "7c87b157585b257d543ea3d3",
            Items: [
                {
                    _id: "7c87b157585b257d543ea3d3",
                    _tpl: "5ac66d725acfc43b321d4b60",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "3dc492d738d98732bbc42d2f",
                    _tpl: "59c6633186f7740cf0493bb9",
                    parentId: "7c87b157585b257d543ea3d3",
                    slotId: "mod_gas_block",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "13900f12e36a3d1e2ad2f935",
                    _tpl: "5ac72e895acfc43b321d4bd5",
                    parentId: "7c87b157585b257d543ea3d3",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "699c95b2f317d46ed3196891",
                    _tpl: "5649ade84bdc2d1b2b8b4587",
                    parentId: "7c87b157585b257d543ea3d3",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "5ab8eee40b7c627dddedb329",
                    _tpl: "5ac50da15acfc4001718d287",
                    parentId: "7c87b157585b257d543ea3d3",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "c9dd98c8e633e2cd8fe07ce4",
                    _tpl: "5ac733a45acfc400192630e2",
                    parentId: "7c87b157585b257d543ea3d3",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "6dc0263a34cc1786cd454437",
                    _tpl: "5ac50c185acfc400163398d4",
                    parentId: "7c87b157585b257d543ea3d3",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "af855852db9bc1e942148d2a",
                    _tpl: "5ac66bea5acfc43b321d4aec",
                    parentId: "7c87b157585b257d543ea3d3",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "a7e702fa8f2f66a4ddd6ccaa",
                    _tpl: "5648b1504bdc2d9d488b4584",
                    parentId: "3dc492d738d98732bbc42d2f",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666040da0100111a38c1a092",
            Name: "ak105",
            Root: "c0b7e5b2388e36cf8f4415af",
            Items: [
                {
                    _id: "c0b7e5b2388e36cf8f4415af",
                    _tpl: "5ac66d9b5acfc4001633997a",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "ec10952a371d180bc8a469f0",
                    _tpl: "59c6633186f7740cf0493bb9",
                    parentId: "c0b7e5b2388e36cf8f4415af",
                    slotId: "mod_gas_block",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "e349526e1aeeaadd14acfcc2",
                    _tpl: "5ac72e945acfc43f3b691116",
                    parentId: "c0b7e5b2388e36cf8f4415af",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "a5a9b1422c381e565956ebcd",
                    _tpl: "5649ade84bdc2d1b2b8b4587",
                    parentId: "c0b7e5b2388e36cf8f4415af",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "770b8a90a55c97231af0b38b",
                    _tpl: "5ac50da15acfc4001718d287",
                    parentId: "c0b7e5b2388e36cf8f4415af",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "6ed8defa18acbdf86f4b8825",
                    _tpl: "5ac733a45acfc400192630e2",
                    parentId: "c0b7e5b2388e36cf8f4415af",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "f546c98ecb43bdb5b0c8fbd2",
                    _tpl: "5ac50c185acfc400163398d4",
                    parentId: "c0b7e5b2388e36cf8f4415af",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "60aeaf3110a385a5a80cca8a",
                    _tpl: "55d480c04bdc2d1d4e8b456a",
                    parentId: "c0b7e5b2388e36cf8f4415af",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "5e8a458c60ea83b893b98eab",
                    _tpl: "5648b1504bdc2d9d488b4584",
                    parentId: "ec10952a371d180bc8a469f0",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666040e00100111a38d5bf5f",
            Name: "pmt",
            Root: "4b48ec05a6f8b0e66cfcac53",
            Items: [
                {
                    _id: "4b48ec05a6f8b0e66cfcac53",
                    _tpl: "579204f224597773d619e051",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "9baf8480a19776b64ccf8660",
                    _tpl: "5448c12b4bdc2d02308b456f",
                    parentId: "4b48ec05a6f8b0e66cfcac53",
                    slotId: "mod_magazine",
                },
                {
                    _id: "92a8b0ae61d3ff2ed539cc6f",
                    _tpl: "6374a822e629013b9c0645c8",
                    parentId: "4b48ec05a6f8b0e66cfcac53",
                    slotId: "mod_reciever",
                },
                {
                    _id: "9ed4adf74d57802e797ca6dd",
                    _tpl: "6374a7e7417239a7bf00f042",
                    parentId: "4b48ec05a6f8b0e66cfcac53",
                    slotId: "mod_pistolgrip",
                },
                {
                    _id: "fc4e81b7bb3404010b735532",
                    _tpl: "63c6adcfb4ba094317063742",
                    parentId: "92a8b0ae61d3ff2ed539cc6f",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "666040ea0100111a3815754f",
            Name: "glock17",
            Root: "207917a255e07786de63ec07",
            Items: [
                {
                    _id: "207917a255e07786de63ec07",
                    _tpl: "5a7ae0c351dfba0017554310",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "02187a4350d9e14a611c4246",
                    _tpl: "5a6b5f868dc32e000a311389",
                    parentId: "207917a255e07786de63ec07",
                    slotId: "mod_barrel",
                },
                {
                    _id: "3939c3262f87111d1b30fc0d",
                    _tpl: "5a6f5e048dc32e00094b97da",
                    parentId: "207917a255e07786de63ec07",
                    slotId: "mod_reciever",
                },
                {
                    _id: "90d801f50cb7423eb7205969",
                    _tpl: "5a718b548dc32e000d46d262",
                    parentId: "207917a255e07786de63ec07",
                    slotId: "mod_magazine",
                },
                {
                    _id: "8a4151c9a8100d7e8ff00918",
                    _tpl: "5a6f5d528dc32e00094b97d9",
                    parentId: "3939c3262f87111d1b30fc0d",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "d77b91287ae0f2ac9fa8fa68",
                    _tpl: "5a6f58f68dc32e000a311390",
                    parentId: "3939c3262f87111d1b30fc0d",
                    slotId: "mod_sight_front",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "666040f10100111a3840a6a4",
            Name: "sa58",
            Root: "4639e38ca398a725dd4ab9cf",
            Items: [
                {
                    _id: "4639e38ca398a725dd4ab9cf",
                    _tpl: "5b0bbe4e5acfc40dc528a72d",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "dd67613eebc316ced458d8cd",
                    _tpl: "5b099b965acfc400186331e6",
                    parentId: "4639e38ca398a725dd4ab9cf",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "bbc909f18ef221cc08957b9d",
                    _tpl: "5b099ac65acfc400186331e1",
                    parentId: "4639e38ca398a725dd4ab9cf",
                    slotId: "mod_magazine",
                },
                {
                    _id: "1c6f55e729ea4023f849303e",
                    _tpl: "5b099a9d5acfc47a8607efe7",
                    parentId: "4639e38ca398a725dd4ab9cf",
                    slotId: "mod_handguard",
                },
                {
                    _id: "13be1d4e3581e633784d59b1",
                    _tpl: "5b099a765acfc47a8607efe3",
                    parentId: "4639e38ca398a725dd4ab9cf",
                    slotId: "mod_barrel",
                },
                {
                    _id: "d3ae21dea685524793c1a059",
                    _tpl: "5b0bc22d5acfc47a8607f085",
                    parentId: "4639e38ca398a725dd4ab9cf",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "e2706b46b9b747eb68504e29",
                    _tpl: "5b099bb25acfc400186331e8",
                    parentId: "4639e38ca398a725dd4ab9cf",
                    slotId: "mod_reciever",
                },
                {
                    _id: "f0f0c84c56431a0587dc8397",
                    _tpl: "5b099bf25acfc4001637e683",
                    parentId: "4639e38ca398a725dd4ab9cf",
                    slotId: "mod_stock",
                },
                {
                    _id: "201c128e66290809da115428",
                    _tpl: "5b099b7d5acfc400186331e4",
                    parentId: "13be1d4e3581e633784d59b1",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "9475c4bf58125b8a09c13aec",
                    _tpl: "5649be884bdc2d79388b4577",
                    parentId: "f0f0c84c56431a0587dc8397",
                    slotId: "mod_stock_000",
                },
                {
                    _id: "382c396c4993cc6eb9c582f2",
                    _tpl: "56eabf3bd2720b75698b4569",
                    parentId: "9475c4bf58125b8a09c13aec",
                    slotId: "mod_stock_000",
                },
                {
                    _id: "878bb2d6bd4760e96ce9eea7",
                    _tpl: "58d2912286f7744e27117493",
                    parentId: "382c396c4993cc6eb9c582f2",
                    slotId: "mod_stock",
                },
            ],
        },
        {
            Id: "666040f70100111a38956fc4",
            Name: "hk416",
            Root: "c147fd4f013d4f405ddc6b33",
            Items: [
                {
                    _id: "c147fd4f013d4f405ddc6b33",
                    _tpl: "5bb2475ed4351e00853264e3",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "0c54b04c3328947bb0e2b83b",
                    _tpl: "5bb20e0ed4351e3bac1212dc",
                    parentId: "c147fd4f013d4f405ddc6b33",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "83b725bc1e4ae5443f366630",
                    _tpl: "5c05413a0db834001c390617",
                    parentId: "c147fd4f013d4f405ddc6b33",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "730eee40dea17d2ea5070f22",
                    _tpl: "5bb20d53d4351e4502010a69",
                    parentId: "c147fd4f013d4f405ddc6b33",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "6a1389d0153a36fce41ea01f",
                    _tpl: "5bb20e58d4351e00320205d7",
                    parentId: "c147fd4f013d4f405ddc6b33",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "98b657012fde7ced9f9256bd",
                    _tpl: "5bb20dbcd4351e44f824c04e",
                    parentId: "c147fd4f013d4f405ddc6b33",
                    slotId: "mod_charge",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "b34a776ed36172113d7279c8",
                    _tpl: "5bb20d9cd4351e00334c9d8a",
                    parentId: "730eee40dea17d2ea5070f22",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "73556eb0bba38f81e9b9666f",
                    _tpl: "5bb20de5d4351e0035629e59",
                    parentId: "730eee40dea17d2ea5070f22",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "b1b4768b3a7d36c533784800",
                    _tpl: "5bb20e49d4351e3bac1212de",
                    parentId: "730eee40dea17d2ea5070f22",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "e8bd501a93bea897c5aa3d71",
                    _tpl: "5bb20e70d4351e0035629f8f",
                    parentId: "6a1389d0153a36fce41ea01f",
                    slotId: "mod_stock_000",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "cba4b674c3c677359a2e5d2f",
                    _tpl: "544a38634bdc2d58388b4568",
                    parentId: "b34a776ed36172113d7279c8",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "24a061fda8ec5fe367cf1b8c",
                    _tpl: "5bb20dcad4351e3bac1212da",
                    parentId: "b34a776ed36172113d7279c8",
                    slotId: "mod_gas_block",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666040fd0100111a387eaffc",
            Name: "ak74",
            Root: "6a09166099574db483fee9ef",
            Items: [
                {
                    _id: "6a09166099574db483fee9ef",
                    _tpl: "5bf3e03b0db834001d2c4a9c",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "76faf484c84c7f4132ea06ab",
                    _tpl: "59c6633186f7740cf0493bb9",
                    parentId: "6a09166099574db483fee9ef",
                    slotId: "mod_gas_block",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "417073544a2f4af2beb6ed66",
                    _tpl: "5649aa744bdc2ded0b8b457e",
                    parentId: "6a09166099574db483fee9ef",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "9152b5f52a8abb890fe5cd73",
                    _tpl: "57e3dba62459770f0c32322b",
                    parentId: "6a09166099574db483fee9ef",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "78903ec87fa84e13a67be8c2",
                    _tpl: "5649af094bdc2df8348b4586",
                    parentId: "6a09166099574db483fee9ef",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "295b5751e4665d96ae25007d",
                    _tpl: "5649b0544bdc2d1b2b8b458a",
                    parentId: "6a09166099574db483fee9ef",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "d345e244906f756a7d96fcd0",
                    _tpl: "5649b1c04bdc2d16268b457c",
                    parentId: "6a09166099574db483fee9ef",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "f38e7859e45b22b03fb5a904",
                    _tpl: "564ca99c4bdc2d16268b4589",
                    parentId: "6a09166099574db483fee9ef",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "d6274d8d2d92c4693090de72",
                    _tpl: "5648b0744bdc2d363b8b4578",
                    parentId: "76faf484c84c7f4132ea06ab",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666041040100111a38249b19",
            Name: "adar",
            Root: "e0cd99c1bac871fcfb9f0152",
            Items: [
                {
                    _id: "e0cd99c1bac871fcfb9f0152",
                    _tpl: "5c07c60e0db834002330051f",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "e00558b4baed69090757abcc",
                    _tpl: "5c0e2ff6d174af02a1659d4a",
                    parentId: "e0cd99c1bac871fcfb9f0152",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "adb40d19b1e1a1548ffb3755",
                    _tpl: "5aaa5e60e5b5b000140293d6",
                    parentId: "e0cd99c1bac871fcfb9f0152",
                    slotId: "mod_magazine",
                },
                {
                    _id: "7c7ec457e61e7c6665f9f67c",
                    _tpl: "5c0e2f26d174af02a9625114",
                    parentId: "e0cd99c1bac871fcfb9f0152",
                    slotId: "mod_reciever",
                },
                {
                    _id: "48c4c4bfcee36682a16f7ee5",
                    _tpl: "5c0faeddd174af02a962601f",
                    parentId: "e0cd99c1bac871fcfb9f0152",
                    slotId: "mod_stock",
                },
                {
                    _id: "6744173080485234d7747706",
                    _tpl: "5c0faf68d174af02a96260b8",
                    parentId: "e0cd99c1bac871fcfb9f0152",
                    slotId: "mod_charge",
                },
                {
                    _id: "648012922a8697d59cbac5cd",
                    _tpl: "5c0e2f94d174af029f650d56",
                    parentId: "7c7ec457e61e7c6665f9f67c",
                    slotId: "mod_barrel",
                },
                {
                    _id: "6505f6cf309aeca1dba871bd",
                    _tpl: "5c0e2f5cd174af02a012cfc9",
                    parentId: "7c7ec457e61e7c6665f9f67c",
                    slotId: "mod_handguard",
                },
                {
                    _id: "4d798f56adef41938d88dc29",
                    _tpl: "5c0fafb6d174af02a96260ba",
                    parentId: "648012922a8697d59cbac5cd",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "129e4918dca6fd463c6a9abb",
                    _tpl: "5ae30e795acfc408fb139a0b",
                    parentId: "648012922a8697d59cbac5cd",
                    slotId: "mod_gas_block",
                },
            ],
        },
        {
            Id: "666041090100111a38936158",
            Name: "mdr",
            Root: "c277590f98d013c95084b4db",
            Items: [
                {
                    _id: "c277590f98d013c95084b4db",
                    _tpl: "5c488a752e221602b412af63",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "2444c69ea03f5fc39870b3cb",
                    _tpl: "5c48a2c22e221602b313fb6c",
                    parentId: "c277590f98d013c95084b4db",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "b9e67c4bfb5ae13498c233b1",
                    _tpl: "55802d5f4bdc2dac148b458e",
                    parentId: "c277590f98d013c95084b4db",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "d9fdc33000022832240fa12e",
                    _tpl: "5c48a14f2e2216152006edd7",
                    parentId: "c277590f98d013c95084b4db",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "bb03295aaa871a407a7ff605",
                    _tpl: "5c48a2852e221602b21d5923",
                    parentId: "c277590f98d013c95084b4db",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "c66c49e828f6dbd803d13b51",
                    _tpl: "5c48a2a42e221602b66d1e07",
                    parentId: "bb03295aaa871a407a7ff605",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "6660410f0100111a3890001c",
            Name: "ash12",
            Root: "e34c9c9f992506933a79e33c",
            Items: [
                {
                    _id: "e34c9c9f992506933a79e33c",
                    _tpl: "5cadfbf7ae92152ac412eeef",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "3c6dddae0e7f627d3275b07a",
                    _tpl: "5caf17c9ae92150b30006be1",
                    parentId: "e34c9c9f992506933a79e33c",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "45ccf768e54aa0f6dae397f6",
                    _tpl: "5caf1041ae92157c28402e3f",
                    parentId: "e34c9c9f992506933a79e33c",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "b93b52a770a42a6e842649cb",
                    _tpl: "5caf16a2ae92152ac412efbc",
                    parentId: "e34c9c9f992506933a79e33c",
                    slotId: "mod_sight_front",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "ff1c7a3b78ff11e1512e2116",
                    _tpl: "5cdaa99dd7f00c002412d0b2",
                    parentId: "e34c9c9f992506933a79e33c",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "7643ea5f171f28d752bf486d",
                    _tpl: "5caf1691ae92152ac412efb9",
                    parentId: "e34c9c9f992506933a79e33c",
                    slotId: "mod_scope",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "3d352cc22f3b68178f69485d",
                    _tpl: "5cda9bcfd7f00c0c0b53e900",
                    parentId: "ff1c7a3b78ff11e1512e2116",
                    slotId: "mod_foregrip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666041320100111a387c2677",
            Name: "glock18",
            Root: "65f9e2f2ff72b4bf99b6c802",
            Items: [
                {
                    _id: "65f9e2f2ff72b4bf99b6c802",
                    _tpl: "5b1fa9b25acfc40018633c01",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "3dc1cad7bac1d7fcaf7d491a",
                    _tpl: "5b1fa9ea5acfc40018633c0a",
                    parentId: "65f9e2f2ff72b4bf99b6c802",
                    slotId: "mod_barrel",
                },
                {
                    _id: "66d34874ad15a5b71ed14164",
                    _tpl: "5b1faa0f5acfc40dc528aeb5",
                    parentId: "65f9e2f2ff72b4bf99b6c802",
                    slotId: "mod_reciever",
                },
                {
                    _id: "cf2ae2c31616df4445e8743c",
                    _tpl: "5a718b548dc32e000d46d262",
                    parentId: "65f9e2f2ff72b4bf99b6c802",
                    slotId: "mod_magazine",
                },
                {
                    _id: "6f834e5a5fdd170932e732d4",
                    _tpl: "5a6f5d528dc32e00094b97d9",
                    parentId: "66d34874ad15a5b71ed14164",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "cd469eaaec09327c47c0cbe2",
                    _tpl: "5a6f58f68dc32e000a311390",
                    parentId: "66d34874ad15a5b71ed14164",
                    slotId: "mod_sight_front",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "666045ca0100111a38df803a",
            Name: "tx15",
            Root: "2614eb2857b3f24940394410",
            Items: [
                {
                    _id: "2614eb2857b3f24940394410",
                    _tpl: "5d43021ca4b9362eab4b5e25",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "6305252f82c557becd110741",
                    _tpl: "55802f5d4bdc2dac148b458f",
                    parentId: "2614eb2857b3f24940394410",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "fe4027ccfefba62207549857",
                    _tpl: "5aaa5dfee5b5b000140293d3",
                    parentId: "2614eb2857b3f24940394410",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "d321ea791965b7f957ae710d",
                    _tpl: "5d4405aaa4b9361e6a4e6bd3",
                    parentId: "2614eb2857b3f24940394410",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "b026b5bff9ad251aeabb304d",
                    _tpl: "5649be884bdc2d79388b4577",
                    parentId: "2614eb2857b3f24940394410",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "daad6e5618045a219e5284ea",
                    _tpl: "5d44334ba4b9362b346d1948",
                    parentId: "2614eb2857b3f24940394410",
                    slotId: "mod_charge",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "0127f7632a39b2d8722befdb",
                    _tpl: "5d440b93a4b9364276578d4b",
                    parentId: "d321ea791965b7f957ae710d",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "0b4b22a96aa51d4b851d2e5b",
                    _tpl: "5d4405f0a4b9361e6a4e6bd9",
                    parentId: "d321ea791965b7f957ae710d",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "b2ed8fcff3bb7224d785e41f",
                    _tpl: "5d4406a8a4b9361e4f6eb8b7",
                    parentId: "b026b5bff9ad251aeabb304d",
                    slotId: "mod_stock_000",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "f4a2fc0f4a300a1af73b78ed",
                    _tpl: "5d440625a4b9361eec4ae6c5",
                    parentId: "0127f7632a39b2d8722befdb",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "e3b048812901cf8fde3d1988",
                    _tpl: "56eabcd4d2720b66698b4574",
                    parentId: "0127f7632a39b2d8722befdb",
                    slotId: "mod_gas_block",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "8da74c1575635c87c6e87c78",
                    _tpl: "5b7be47f5acfc400170e2dd2",
                    parentId: "0b4b22a96aa51d4b851d2e5b",
                    slotId: "mod_mount_004",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "44bce6d992b879ebc695e611",
                    _tpl: "5b7be4895acfc400170e2dd5",
                    parentId: "0b4b22a96aa51d4b851d2e5b",
                    slotId: "mod_foregrip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "609a47a80af0437e763aa2d2",
                    _tpl: "5d44064fa4b9361e4f6eb8b5",
                    parentId: "f4a2fc0f4a300a1af73b78ed",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666045d00100111a38c0ee3b",
            Name: "mdr762",
            Root: "56f5590122069b10e66391ba",
            Items: [
                {
                    _id: "56f5590122069b10e66391ba",
                    _tpl: "5dcbd56fdbd3d91b3e5468d5",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "4ff10809fd0fe820469cb63a",
                    _tpl: "5dcbd6dddbd3d91b3e5468de",
                    parentId: "56f5590122069b10e66391ba",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "5716d7506c0293cc4b988673",
                    _tpl: "5a3501acc4a282000d72293a",
                    parentId: "56f5590122069b10e66391ba",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "986b6e933550b462568b61ab",
                    _tpl: "5dcbd6b46ec07c0c4347a564",
                    parentId: "56f5590122069b10e66391ba",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "ee42a625a19ad82748289945",
                    _tpl: "5dcbe9431e1f4616d354987e",
                    parentId: "56f5590122069b10e66391ba",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "d8db9d12140886b463316b76",
                    _tpl: "5dcbe965e4ed22586443a79d",
                    parentId: "ee42a625a19ad82748289945",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666045d80100111a38aa91ce",
            Name: "mutant",
            Root: "a2dbcc63393384c6ba2f7932",
            Items: [
                {
                    _id: "a2dbcc63393384c6ba2f7932",
                    _tpl: "606587252535c57a13424cfd",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "7ce7050cab2d1ab39e33ad64",
                    _tpl: "55802f5d4bdc2dac148b458f",
                    parentId: "a2dbcc63393384c6ba2f7932",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "ab4e6bed2de7c0828ecce597",
                    _tpl: "59d6272486f77466146386ff",
                    parentId: "a2dbcc63393384c6ba2f7932",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "89bb79ba8ecb219417995674",
                    _tpl: "606587a88900dc2d9a55b659",
                    parentId: "a2dbcc63393384c6ba2f7932",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "5a37cc56eb57408acc587f1a",
                    _tpl: "606587e18900dc2d9a55b65f",
                    parentId: "a2dbcc63393384c6ba2f7932",
                    slotId: "mod_stock_001",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "2318cbc2aedfff24182072b1",
                    _tpl: "606587bd6d0bd7580617bacc",
                    parentId: "a2dbcc63393384c6ba2f7932",
                    slotId: "mod_charge",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "25ace57dc7cba7d33e7ad41b",
                    _tpl: "60658776f2cb2e02a42ace2b",
                    parentId: "89bb79ba8ecb219417995674",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "6d1e0f80373a2883de3d0e01",
                    _tpl: "6065880c132d4d12c81fd8da",
                    parentId: "89bb79ba8ecb219417995674",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "f40474688191ff260a95f303",
                    _tpl: "5bc09a18d4351e003562b68e",
                    parentId: "89bb79ba8ecb219417995674",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "676f12be98eacfdec33f8bc1",
                    _tpl: "606587d11246154cad35d635",
                    parentId: "5a37cc56eb57408acc587f1a",
                    slotId: "mod_stock_000",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "7c3de091c225643f67148eb9",
                    _tpl: "6065c6e7132d4d12c81fd8e1",
                    parentId: "25ace57dc7cba7d33e7ad41b",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "e387ea2b2ab8ef6148016517",
                    _tpl: "6065dc8a132d4d12c81fd8e3",
                    parentId: "25ace57dc7cba7d33e7ad41b",
                    slotId: "mod_gas_block",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "cda82ff9a951964c5d0c5257",
                    _tpl: "5bc09a30d4351e00367fb7c8",
                    parentId: "6d1e0f80373a2883de3d0e01",
                    slotId: "mod_sight_front",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "666045df0100111a38ff87c4",
            Name: "mk17",
            Root: "e33ddff7b2bd89f3a7d88281",
            Items: [
                {
                    _id: "e33ddff7b2bd89f3a7d88281",
                    _tpl: "6183afd850224f204c1da514",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "0a514d64ba874d7392fa6133",
                    _tpl: "55d4b9964bdc2d1d4e8b456e",
                    parentId: "e33ddff7b2bd89f3a7d88281",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "0db0b8b1a6ed6d68a2970d1f",
                    _tpl: "618168dc8004cc50514c34fc",
                    parentId: "e33ddff7b2bd89f3a7d88281",
                    slotId: "mod_magazine",
                },
                {
                    _id: "d39ee329eb09ca28a8760d5a",
                    _tpl: "6165adcdd3a39d50044c120f",
                    parentId: "e33ddff7b2bd89f3a7d88281",
                    slotId: "mod_reciever",
                },
                {
                    _id: "50990f81df8b1a662ae7dc3f",
                    _tpl: "61816734d8e3106d9806c1f3",
                    parentId: "e33ddff7b2bd89f3a7d88281",
                    slotId: "mod_stock",
                },
                {
                    _id: "ba46ca7b9d8f65a67b88bec5",
                    _tpl: "6181688c6c780c1e710c9b04",
                    parentId: "e33ddff7b2bd89f3a7d88281",
                    slotId: "mod_charge",
                },
                {
                    _id: "b792e713e621a62f95a21b5e",
                    _tpl: "6183b084a112697a4b3a6e6c",
                    parentId: "d39ee329eb09ca28a8760d5a",
                    slotId: "mod_barrel",
                },
                {
                    _id: "6bb6efee8abe7a45d0f7408a",
                    _tpl: "61817865d3a39d50044c13a4",
                    parentId: "d39ee329eb09ca28a8760d5a",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "393fd907b369fc927a57f1d7",
                    _tpl: "61816df1d3a39d50044c139e",
                    parentId: "d39ee329eb09ca28a8760d5a",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "8f33eba33549c8670535dde1",
                    _tpl: "61816dfa6ef05c2ce828f1ad",
                    parentId: "d39ee329eb09ca28a8760d5a",
                    slotId: "mod_mount_001",
                },
                {
                    _id: "176032b47bad58e93a5e7e54",
                    _tpl: "618167528004cc50514c34f9",
                    parentId: "50990f81df8b1a662ae7dc3f",
                    slotId: "mod_stock_001",
                },
                {
                    _id: "7136ad3227e79743571eb06b",
                    _tpl: "618167441cb55961fa0fdc71",
                    parentId: "50990f81df8b1a662ae7dc3f",
                    slotId: "mod_stock_002",
                },
                {
                    _id: "a3c9137cf0f11d1029ba36e1",
                    _tpl: "618178aa1cb55961fa0fdc80",
                    parentId: "b792e713e621a62f95a21b5e",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "02409eecacd2f11a346236f1",
                    _tpl: "61816fcad92c473c770215cc",
                    parentId: "b792e713e621a62f95a21b5e",
                    slotId: "mod_sight_front",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "1f8402d4f20c3ab9f0b11515",
                    _tpl: "618167616ef05c2ce828f1a8",
                    parentId: "176032b47bad58e93a5e7e54",
                    slotId: "mod_stock",
                },
            ],
        },
        {
            Id: "666045e80100111a380c5f8b",
            Name: "mk16",
            Root: "ce89a901be66a4a5e259b358",
            Items: [
                {
                    _id: "ce89a901be66a4a5e259b358",
                    _tpl: "6184055050224f204c1da540",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "50604b0c47f4756f0561524c",
                    _tpl: "55d4b9964bdc2d1d4e8b456e",
                    parentId: "ce89a901be66a4a5e259b358",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "b1dad1c9883d7c957b03b131",
                    _tpl: "61840bedd92c473c77021635",
                    parentId: "ce89a901be66a4a5e259b358",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "43fa553b6ea8e6dc97d139b0",
                    _tpl: "618405198004cc50514c3594",
                    parentId: "ce89a901be66a4a5e259b358",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "7f1a664098b1c915850b7c16",
                    _tpl: "61816734d8e3106d9806c1f3",
                    parentId: "ce89a901be66a4a5e259b358",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "b6bcba19e10018773fec151c",
                    _tpl: "6181688c6c780c1e710c9b04",
                    parentId: "ce89a901be66a4a5e259b358",
                    slotId: "mod_charge",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "608fb45b9a995d5754e81e80",
                    _tpl: "6183fd9e8004cc50514c358f",
                    parentId: "43fa553b6ea8e6dc97d139b0",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "d40d327adb8320f8f98cca9f",
                    _tpl: "61817865d3a39d50044c13a4",
                    parentId: "43fa553b6ea8e6dc97d139b0",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "a53fdd9b62a42f19f3a7fe9a",
                    _tpl: "61816df1d3a39d50044c139e",
                    parentId: "43fa553b6ea8e6dc97d139b0",
                    slotId: "mod_mount_000",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "a2ae250be99e8ac4ff914da8",
                    _tpl: "61816dfa6ef05c2ce828f1ad",
                    parentId: "43fa553b6ea8e6dc97d139b0",
                    slotId: "mod_mount_001",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "0ba5f55b04797b1d5efe636c",
                    _tpl: "618167528004cc50514c34f9",
                    parentId: "7f1a664098b1c915850b7c16",
                    slotId: "mod_stock_001",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "57b0d729456cc2d028dab833",
                    _tpl: "618167441cb55961fa0fdc71",
                    parentId: "7f1a664098b1c915850b7c16",
                    slotId: "mod_stock_002",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "5b990d7c2191278d0248e140",
                    _tpl: "618407a850224f204c1da549",
                    parentId: "608fb45b9a995d5754e81e80",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "6158ebf05a6216903c797a48",
                    _tpl: "61816fcad92c473c770215cc",
                    parentId: "608fb45b9a995d5754e81e80",
                    slotId: "mod_sight_front",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "da3816169b9c409724499ef1",
                    _tpl: "618167616ef05c2ce828f1a8",
                    parentId: "0ba5f55b04797b1d5efe636c",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666045ed0100111a38e1a431",
            Name: "rd704",
            Root: "b92f5323e627194cbd0806e1",
            Items: [
                {
                    _id: "b92f5323e627194cbd0806e1",
                    _tpl: "628a60ae6b1d481ff772e9c8",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "39cdb934885ec9fd07b3167c",
                    _tpl: "628a83c29179c324ed269508",
                    parentId: "b92f5323e627194cbd0806e1",
                    slotId: "mod_gas_block",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "7a4ccef34c2b6be27ab35267",
                    _tpl: "628a66b41d5e41750e314f34",
                    parentId: "b92f5323e627194cbd0806e1",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "2b1d4926f7d41e2ce84eeee2",
                    _tpl: "628a664bccaab13006640e47",
                    parentId: "b92f5323e627194cbd0806e1",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "ca2267301a41d0eac0089dd0",
                    _tpl: "628a665a86cbd9750d2ff5e5",
                    parentId: "b92f5323e627194cbd0806e1",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "6a6e29237a9ef1e672668c2e",
                    _tpl: "628a7b23b0f75035732dd565",
                    parentId: "b92f5323e627194cbd0806e1",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "ca3161a5848b198640a38f8c",
                    _tpl: "628a6678ccaab13006640e49",
                    parentId: "b92f5323e627194cbd0806e1",
                    slotId: "mod_stock_000",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "a822105dd2ad4cf58e1ad55a",
                    _tpl: "59d625f086f774661516605d",
                    parentId: "b92f5323e627194cbd0806e1",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "69c058d854eaa14c89f968a2",
                    _tpl: "5649be884bdc2d79388b4577",
                    parentId: "ca3161a5848b198640a38f8c",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "6f684623d32eed5484bb2738",
                    _tpl: "628a85ee6b1d481ff772e9d5",
                    parentId: "69c058d854eaa14c89f968a2",
                    slotId: "mod_stock_000",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666045f40100111a38e46cfe",
            Name: "mk556",
            Root: "dae8e7495224e070b318a86f",
            Items: [
                {
                    _id: "dae8e7495224e070b318a86f",
                    _tpl: "618428466ef05c2ce828f218",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "ff7098826e7cc5b275db8d0e",
                    _tpl: "571659bb2459771fb2755a12",
                    parentId: "dae8e7495224e070b318a86f",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "0a9e7716e5288194d65c3906",
                    _tpl: "61840d85568c120fdd2962a5",
                    parentId: "dae8e7495224e070b318a86f",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "21e285557f60baa9a986037a",
                    _tpl: "618426d96c780c1e710c9b9f",
                    parentId: "dae8e7495224e070b318a86f",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "5339d95f3e6ced7624169c52",
                    _tpl: "61825d06d92c473c770215de",
                    parentId: "dae8e7495224e070b318a86f",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "9937c8f530c9a5f1d1a34522",
                    _tpl: "6181688c6c780c1e710c9b04",
                    parentId: "dae8e7495224e070b318a86f",
                    slotId: "mod_charge",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "885e8de1d2f8a87a738b39bf",
                    _tpl: "6183fd911cb55961fa0fdce9",
                    parentId: "21e285557f60baa9a986037a",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "9037b1e678429ad1a42f462e",
                    _tpl: "61817865d3a39d50044c13a4",
                    parentId: "21e285557f60baa9a986037a",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "f41e627bd3de3de9fe93a806",
                    _tpl: "61816df1d3a39d50044c139e",
                    parentId: "21e285557f60baa9a986037a",
                    slotId: "mod_mount_000",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "566480b0bdf304254f2f6ad4",
                    _tpl: "61816dfa6ef05c2ce828f1ad",
                    parentId: "21e285557f60baa9a986037a",
                    slotId: "mod_mount_001",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "bf75d9f4e63f26756725fc91",
                    _tpl: "61825d136ef05c2ce828f1cc",
                    parentId: "5339d95f3e6ced7624169c52",
                    slotId: "mod_stock_001",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "d8b698310b68dff208031995",
                    _tpl: "61825d24d3a39d50044c13af",
                    parentId: "5339d95f3e6ced7624169c52",
                    slotId: "mod_stock_002",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "7cf86e40a233a90b9f06290e",
                    _tpl: "618407a850224f204c1da549",
                    parentId: "885e8de1d2f8a87a738b39bf",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "a408fc3ea67a4c564626f5c8",
                    _tpl: "61816fcad92c473c770215cc",
                    parentId: "885e8de1d2f8a87a738b39bf",
                    slotId: "mod_sight_front",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "e1dd16391d92ec6f2643ad7b",
                    _tpl: "618167616ef05c2ce828f1a8",
                    parentId: "bf75d9f4e63f26756725fc91",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666045fe0100111a38101347",
            Name: "g36",
            Root: "16cc588daf2c34b114520964",
            Items: [
                {
                    _id: "16cc588daf2c34b114520964",
                    _tpl: "623063e994fc3f7b302a9696",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "29be92be441e7b50f294c827",
                    _tpl: "62307b7b10d2321fa8741921",
                    parentId: "16cc588daf2c34b114520964",
                    slotId: "mod_magazine",
                },
                {
                    _id: "40fe17270b9490ed90406c38",
                    _tpl: "622f14e899892a7f9e08f6c5",
                    parentId: "16cc588daf2c34b114520964",
                    slotId: "mod_stock",
                },
                {
                    _id: "1b610e68a8a1801c2d389bd2",
                    _tpl: "622b3858034a3e17ad0b81f5",
                    parentId: "16cc588daf2c34b114520964",
                    slotId: "mod_barrel",
                },
                {
                    _id: "dcd9683236d242fe569955f1",
                    _tpl: "62386b7153757417e93a4e9f",
                    parentId: "16cc588daf2c34b114520964",
                    slotId: "mod_handguard",
                },
                {
                    _id: "d484cbf997988ca1cbc077c4",
                    _tpl: "622f02437762f55aaa68ac85",
                    parentId: "16cc588daf2c34b114520964",
                    slotId: "mod_mount",
                },
                {
                    _id: "b08b174f4669b0ab9e81aef4",
                    _tpl: "622b3d5cf9cfc87d675d2de9",
                    parentId: "16cc588daf2c34b114520964",
                    slotId: "mod_scope",
                },
                {
                    _id: "e54249a48f6f0ae860522d0d",
                    _tpl: "622f128cec80d870d349b4e8",
                    parentId: "1b610e68a8a1801c2d389bd2",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "ab77cecfac8654cb26dba34a",
                    _tpl: "622b327b267a1b13a44abea3",
                    parentId: "1b610e68a8a1801c2d389bd2",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "bfa856e9facddf6a28693ee3",
                    _tpl: "622f16a1a5958f63c67f1737",
                    parentId: "dcd9683236d242fe569955f1",
                    slotId: "mod_tactical",
                },
            ],
        },
        {
            Id: "666046030100111a3887a9b6",
            Name: "ak545",
            Root: "47108ce69d5ee25f181af2bb",
            Items: [
                {
                    _id: "47108ce69d5ee25f181af2bb",
                    _tpl: "628b5638ad252a16da6dd245",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "82072c106384c204ecf9e8bd",
                    _tpl: "628b8d83717774443b15e248",
                    parentId: "47108ce69d5ee25f181af2bb",
                    slotId: "mod_gas_block",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "26e7e088cafc43c4c465353c",
                    _tpl: "5ac7655e5acfc40016339a19",
                    parentId: "47108ce69d5ee25f181af2bb",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "fc877a71d4a09b4d9722d3a4",
                    _tpl: "5cf50850d7f00c056e24104c",
                    parentId: "47108ce69d5ee25f181af2bb",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "3cb8caf9c6332475d5d3397c",
                    _tpl: "628b9a40717774443b15e9f2",
                    parentId: "47108ce69d5ee25f181af2bb",
                    slotId: "mod_stock_000",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "1dc3d6a21b4f8b36094575f1",
                    _tpl: "55d480c04bdc2d1d4e8b456a",
                    parentId: "47108ce69d5ee25f181af2bb",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "f1b77c5565e6178d5a80d92b",
                    _tpl: "628b916469015a4e1711ed8d",
                    parentId: "82072c106384c204ecf9e8bd",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "19ddff7c2cde46e8d22fd4af",
                    _tpl: "55d4ae6c4bdc2d8b2f8b456e",
                    parentId: "3cb8caf9c6332475d5d3397c",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "f7db4ac75203e11fe5d11f31",
                    _tpl: "628b9be6cff66b70c002b14c",
                    parentId: "f1b77c5565e6178d5a80d92b",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "5fed30b768f6a576314b9a4e",
                    _tpl: "628b9471078f94059a4b9bfb",
                    parentId: "f7db4ac75203e11fe5d11f31",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "6660460a0100111a3876d8f7",
            Name: "aks545",
            Root: "94064b6c0300464bd28b6757",
            Items: [
                {
                    _id: "94064b6c0300464bd28b6757",
                    _tpl: "628b9c37a733087d0d7fe84b",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "e8ee3c02fea9c669b4875950",
                    _tpl: "628b8d83717774443b15e248",
                    parentId: "94064b6c0300464bd28b6757",
                    slotId: "mod_gas_block",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "3032c9e25c313796abb7745c",
                    _tpl: "5943eeeb86f77412d6384f6b",
                    parentId: "94064b6c0300464bd28b6757",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "b9fc46d8fe92e737217ee8e4",
                    _tpl: "5cf50850d7f00c056e24104c",
                    parentId: "94064b6c0300464bd28b6757",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "edac3921bb010806f5261c46",
                    _tpl: "628b9a40717774443b15e9f2",
                    parentId: "94064b6c0300464bd28b6757",
                    slotId: "mod_stock_000",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "544a229d436543b9cb3b5654",
                    _tpl: "55d480c04bdc2d1d4e8b456a",
                    parentId: "94064b6c0300464bd28b6757",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "f7ee8c74fd964ec958734916",
                    _tpl: "628b916469015a4e1711ed8d",
                    parentId: "e8ee3c02fea9c669b4875950",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "aa4e4ca92a3069f65af2d86e",
                    _tpl: "55d4ae6c4bdc2d8b2f8b456e",
                    parentId: "edac3921bb010806f5261c46",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "598c5f2fe473182c9451c810",
                    _tpl: "628b9be6cff66b70c002b14c",
                    parentId: "f7ee8c74fd964ec958734916",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "3b6c226a3cbd14bde5fefb6f",
                    _tpl: "628b9471078f94059a4b9bfb",
                    parentId: "598c5f2fe473182c9451c810",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "666046100100111a38705fbd",
            Name: "auga1",
            Root: "8b434aa59886a0ae3721abd3",
            Items: [
                {
                    _id: "8b434aa59886a0ae3721abd3",
                    _tpl: "62e7c4fba689e8c9c50dfc38",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "43faec0b99a336be362e1e47",
                    _tpl: "62e7c98b550c8218d602cbb4",
                    parentId: "8b434aa59886a0ae3721abd3",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "fe463392c97437c3097e2e06",
                    _tpl: "62e7c880f68e7a0676050c7c",
                    parentId: "8b434aa59886a0ae3721abd3",
                    slotId: "mod_charge",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "0b35f1e014eaabccc0f41b4e",
                    _tpl: "62ea7c793043d74a0306e19f",
                    parentId: "8b434aa59886a0ae3721abd3",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0, 0],
                            ScopesSelectedModes: [0, 0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "f79d9233fa9918607652a8ac",
                    _tpl: "62e7c7f3c34ea971710c32fc",
                    parentId: "0b35f1e014eaabccc0f41b4e",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "8cf9bb878bdeeaeb94a971e6",
                    _tpl: "630f2872911356c17d06abc5",
                    parentId: "f79d9233fa9918607652a8ac",
                    slotId: "mod_muzzle_000",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "76843f92312ac60b4b09ac9e",
                    _tpl: "634e61b0767cb15c4601a877",
                    parentId: "f79d9233fa9918607652a8ac",
                    slotId: "mod_foregrip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "6660461e0100111a38fd084c",
            Name: "auga3",
            Root: "8eaed10b9f212236f24b6b72",
            Items: [
                {
                    _id: "8eaed10b9f212236f24b6b72",
                    _tpl: "63171672192e68c5460cebc5",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "89692d9a6df2d8149f2dd8ec",
                    _tpl: "62e7c98b550c8218d602cbb4",
                    parentId: "8eaed10b9f212236f24b6b72",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "91b0193861830a04e97a386d",
                    _tpl: "62ebbc53e3c1e1ec7c02c44f",
                    parentId: "8eaed10b9f212236f24b6b72",
                    slotId: "mod_charge",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "ef57e52f3e696dc0e385aa7e",
                    _tpl: "62e7c72df68e7a0676050c77",
                    parentId: "8eaed10b9f212236f24b6b72",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "2239f6745d0d21d0a5421c35",
                    _tpl: "62e7c7f3c34ea971710c32fc",
                    parentId: "ef57e52f3e696dc0e385aa7e",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "44e782e8d8ffd4e0765ac088",
                    _tpl: "62ebd290c427473eff0baafb",
                    parentId: "ef57e52f3e696dc0e385aa7e",
                    slotId: "mod_mount",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "ba62950173bbf058658d5789",
                    _tpl: "630f28f0cadb1fe05e06f004",
                    parentId: "2239f6745d0d21d0a5421c35",
                    slotId: "mod_muzzle_000",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "c99b6e92c3270bc50a05f1cb",
                    _tpl: "634e61b0767cb15c4601a877",
                    parentId: "2239f6745d0d21d0a5421c35",
                    slotId: "mod_foregrip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666046280100111a382f8646",
            Name: "vss",
            Root: "adc4d6844f27226791531547",
            Items: [
                {
                    _id: "adc4d6844f27226791531547",
                    _tpl: "57838ad32459774a17445cd2",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "167f22813dc518644865f917",
                    _tpl: "57838f0b2459774a256959b2",
                    parentId: "adc4d6844f27226791531547",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "4ff4bcff1a26f3c66518ca22",
                    _tpl: "57838c962459774a1651ec63",
                    parentId: "adc4d6844f27226791531547",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "fa312f78f02c96bcd84f3ddc",
                    _tpl: "578395402459774a256959b5",
                    parentId: "adc4d6844f27226791531547",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "d60d85ab8d11d738b1d78ee1",
                    _tpl: "578395e82459774a0e553c7b",
                    parentId: "adc4d6844f27226791531547",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "aed13fa11b2f4b7b782e8c02",
                    _tpl: "57838e1b2459774a256959b1",
                    parentId: "4ff4bcff1a26f3c66518ca22",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "6660462e0100111a38642f88",
            Name: "m1a",
            Root: "a0d7a4dea9a1fe2100af8d00",
            Items: [
                {
                    _id: "a0d7a4dea9a1fe2100af8d00",
                    _tpl: "5aafa857e5b5b00018480968",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "1ec7a9a21eb7aa30ec73ef88",
                    _tpl: "64b9e2037fdfb81df81e3c25",
                    parentId: "a0d7a4dea9a1fe2100af8d00",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "87b861710df4b60179715a2f",
                    _tpl: "5aaf8e43e5b5b00015693246",
                    parentId: "a0d7a4dea9a1fe2100af8d00",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "6ba3b2188c45f594824c6ee8",
                    _tpl: "5aaf9d53e5b5b00015042a52",
                    parentId: "a0d7a4dea9a1fe2100af8d00",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "5bd70d780ef0f451d5f091a2",
                    _tpl: "5abcbb20d8ce87001773e258",
                    parentId: "a0d7a4dea9a1fe2100af8d00",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "21e6d442a7651d91d233562e",
                    _tpl: "5ab24ef9e5b5b00fe93c9209",
                    parentId: "87b861710df4b60179715a2f",
                    slotId: "mod_mount",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "3494c1ecdb92841bd96a9de7",
                    _tpl: "5aafa1c2e5b5b00015042a56",
                    parentId: "6ba3b2188c45f594824c6ee8",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "fc8be2cfd70c021d2871a6d1",
                    _tpl: "5aafa49ae5b5b00015042a58",
                    parentId: "3494c1ecdb92841bd96a9de7",
                    slotId: "mod_sight_front",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "666046380100111a38ce9abf",
            Name: "svds",
            Root: "0fd58b4775c2328df45221fd",
            Items: [
                {
                    _id: "0fd58b4775c2328df45221fd",
                    _tpl: "5c46fbd72e2216398b5a8c9c",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "4e0215df9d3d73d63105d16a",
                    _tpl: "5c471be12e221602b66cd9ac",
                    parentId: "0fd58b4775c2328df45221fd",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "939ea7a9164aca56c0dc800a",
                    _tpl: "5c471c442e221602b542a6f8",
                    parentId: "0fd58b4775c2328df45221fd",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "7cb95905de65a7b04a5f16e7",
                    _tpl: "5c471b5d2e221602b21d4e14",
                    parentId: "0fd58b4775c2328df45221fd",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "26abbc47889a3318d86c9279",
                    _tpl: "5c471cb32e221602b177afaa",
                    parentId: "0fd58b4775c2328df45221fd",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "6da4d0b634d7e3bbc0c1e2e3",
                    _tpl: "5c471c2d2e22164bef5d077f",
                    parentId: "0fd58b4775c2328df45221fd",
                    slotId: "mod_mount_001",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "87ae31c3b5d14bc8412f78ce",
                    _tpl: "5c471bd12e221602b4129c3a",
                    parentId: "0fd58b4775c2328df45221fd",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "a79c476adb91b4cf407e67de",
                    _tpl: "5c471bfc2e221602b21d4e17",
                    parentId: "26abbc47889a3318d86c9279",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "a047817088a1bcdfac8acd20",
                    _tpl: "5c471c842e221615214259b5",
                    parentId: "26abbc47889a3318d86c9279",
                    slotId: "mod_gas_block",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "93b0fa23eec128e922d3c7ac",
                    _tpl: "5c471c6c2e221602b66cd9ae",
                    parentId: "6da4d0b634d7e3bbc0c1e2e3",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "67b8ba51a0a484f1bc4ae60b",
                    _tpl: "5c471b7e2e2216152006e46c",
                    parentId: "6da4d0b634d7e3bbc0c1e2e3",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "d7b27f18b9ca2f3b8557e4c4",
                    _tpl: "5c471ba12e221602b3137d76",
                    parentId: "a79c476adb91b4cf407e67de",
                    slotId: "mod_sight_front",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "6660463f0100111a38e570c0",
            Name: "rdb",
            Root: "b2b82ab18e4a199ea9605b9b",
            Items: [
                {
                    _id: "b2b82ab18e4a199ea9605b9b",
                    _tpl: "5f2a9575926fd9352339381f",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "1e42ec946da417c48c37d9a8",
                    _tpl: "5b099ac65acfc400186331e1",
                    parentId: "b2b82ab18e4a199ea9605b9b",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "49add1d960cdc5b3343e2df2",
                    _tpl: "5f2aa46b878ef416f538b567",
                    parentId: "b2b82ab18e4a199ea9605b9b",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "48333160e2b0403634878863",
                    _tpl: "5f2aa47a200e2c0ee46efa71",
                    parentId: "b2b82ab18e4a199ea9605b9b",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "3ca922667832ec705b73ba3d",
                    _tpl: "5f2aa49f9b44de6b1b4e68d4",
                    parentId: "b2b82ab18e4a199ea9605b9b",
                    slotId: "mod_mount",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "850f141292a042ec97a4a0cc",
                    _tpl: "5f2aa4464b50c14bcf07acdb",
                    parentId: "49add1d960cdc5b3343e2df2",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "cae59c73f3abc57998000416",
                    _tpl: "5f2aa493cd375f14e15eea72",
                    parentId: "48333160e2b0403634878863",
                    slotId: "mod_mount_000",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666046440100111a3820566a",
            Name: "sr25",
            Root: "e915b6d2ea8dafd50078d4b9",
            Items: [
                {
                    _id: "e915b6d2ea8dafd50078d4b9",
                    _tpl: "5df8ce05b11454561e39243b",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "ea48e65b1d5916e258d0fe67",
                    _tpl: "55d4b9964bdc2d1d4e8b456e",
                    parentId: "e915b6d2ea8dafd50078d4b9",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "194949289f29e9d86e965415",
                    _tpl: "5df8f541c41b2312ea3335e3",
                    parentId: "e915b6d2ea8dafd50078d4b9",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "0364aec1d19fb63238848d8c",
                    _tpl: "5649be884bdc2d79388b4577",
                    parentId: "e915b6d2ea8dafd50078d4b9",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "2ebb18b6391c7fd24bf7d848",
                    _tpl: "5df8e4080b92095fd441e594",
                    parentId: "e915b6d2ea8dafd50078d4b9",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "8e64566d91b0c49ef75d7a33",
                    _tpl: "5df8e053bb49d91fb446d6a6",
                    parentId: "e915b6d2ea8dafd50078d4b9",
                    slotId: "mod_charge",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "aa000ee6133ad4b7c875c8e3",
                    _tpl: "5ae30c9a5acfc408fb139a03",
                    parentId: "0364aec1d19fb63238848d8c",
                    slotId: "mod_stock_000",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "033d6ed955044d598d981f5a",
                    _tpl: "5df917564a9f347bc92edca3",
                    parentId: "2ebb18b6391c7fd24bf7d848",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "9fa9962ddb546cbd842f82d6",
                    _tpl: "5df916dfbb49d91fb446d6b9",
                    parentId: "2ebb18b6391c7fd24bf7d848",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "97422f3a7bec57acd9a1b5ce",
                    _tpl: "5dfa3d7ac41b2312ea33362a",
                    parentId: "2ebb18b6391c7fd24bf7d848",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "887bfb71c7123d1c07557314",
                    _tpl: "5dfa3cd1b33c0951220c079b",
                    parentId: "033d6ed955044d598d981f5a",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "72220eed9af69de7288ad393",
                    _tpl: "5dfa3d45dfc58d14537c20b0",
                    parentId: "033d6ed955044d598d981f5a",
                    slotId: "mod_gas_block",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "1650ff082bad5d63c9fbec46",
                    _tpl: "5dfa3d950dee1b22f862eae0",
                    parentId: "9fa9962ddb546cbd842f82d6",
                    slotId: "mod_sight_front",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "6660464b0100111a38e5120f",
            Name: "apb",
            Root: "a374a2495c7cc52903da341e",
            Items: [
                {
                    _id: "a374a2495c7cc52903da341e",
                    _tpl: "5abccb7dd8ce87001773e277",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "973ccca65aabae31ab809b8f",
                    _tpl: "5a17fb03fcdbcbcae668728f",
                    parentId: "a374a2495c7cc52903da341e",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "cdde12141a9f309c09cbc6c4",
                    _tpl: "5a17fb9dfcdbcbcae6687291",
                    parentId: "a374a2495c7cc52903da341e",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "ffbead2ac581ea562f2a97dd",
                    _tpl: "5a17fc70fcdbcb0176308b3d",
                    parentId: "a374a2495c7cc52903da341e",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "ba4280100949f8d833c6449a",
                    _tpl: "5aba62f8d8ce87001943946b",
                    parentId: "a374a2495c7cc52903da341e",
                    slotId: "mod_sight_front",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "0c9ee8f69ead2624943e3ab9",
                    _tpl: "5aba639ed8ce8700182ece67",
                    parentId: "a374a2495c7cc52903da341e",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "af8fa0a72fbe6420817bdf2e",
                    _tpl: "5abcc328d8ce8700194394f3",
                    parentId: "a374a2495c7cc52903da341e",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666046550100111a38e5c8e6",
            Name: "57mk2",
            Root: "10603d501c9049d5f2164e10",
            Items: [
                {
                    _id: "10603d501c9049d5f2164e10",
                    _tpl: "5d3eb3b0a4b93615055e84d2",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "1c30565237f3191552c35dfe",
                    _tpl: "5d3eb5b6a4b9361eab311902",
                    parentId: "10603d501c9049d5f2164e10",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "98b3813266f2ac4558c26af7",
                    _tpl: "5d3eb44aa4b93650d64e4979",
                    parentId: "10603d501c9049d5f2164e10",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "fa63f09b67505940ab8500fb",
                    _tpl: "5d3eb5eca4b9363b1f22f8e4",
                    parentId: "10603d501c9049d5f2164e10",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "3126fc4c95f102fe2b0a9b12",
                    _tpl: "5d3eb4aba4b93650d64e497d",
                    parentId: "98b3813266f2ac4558c26af7",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "22822f0aa223a853444d474e",
                    _tpl: "5d3eb536a4b9363b1f22f8e2",
                    parentId: "98b3813266f2ac4558c26af7",
                    slotId: "mod_sight_front",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "6660465f0100111a38f872fe",
            Name: "pl15",
            Root: "2bb5dae471990905a4cff451",
            Items: [
                {
                    _id: "2bb5dae471990905a4cff451",
                    _tpl: "602a9740da11d6478d5a06dc",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "b5dc354e58244ea51c061d73",
                    _tpl: "602a95edda11d6478d5a06da",
                    parentId: "2bb5dae471990905a4cff451",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "9b8805f96351e91244c6c787",
                    _tpl: "60228924961b8d75ee233c32",
                    parentId: "2bb5dae471990905a4cff451",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "efbd9b33b50aaf205665f48b",
                    _tpl: "602286df23506e50807090c6",
                    parentId: "2bb5dae471990905a4cff451",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "846c956542f938393cb846fc",
                    _tpl: "60229948cacb6b0506369e27",
                    parentId: "9b8805f96351e91244c6c787",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "3fe4cf788c822ffb59d75cb9",
                    _tpl: "60228a76d62c9b14ed777a66",
                    parentId: "9b8805f96351e91244c6c787",
                    slotId: "mod_sight_front",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "666046650100111a389cb1e9",
            Name: "rsh12",
            Root: "d21a443875a4b5d2a6df54d0",
            Items: [
                {
                    _id: "d21a443875a4b5d2a6df54d0",
                    _tpl: "633ec7c2a6918cb895019c6c",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "93030e0d25ec65808143c501",
                    _tpl: "633ec6ee025b096d320a3b15",
                    parentId: "d21a443875a4b5d2a6df54d0",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "7aa13d92d33263a991c35679",
                    _tpl: "633ec8e4025b096d320a3b1e",
                    parentId: "d21a443875a4b5d2a6df54d0",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "6660466b0100111a3899e98a",
            Name: "133",
            Root: "17053179dd45e8c1a233df68",
            Items: [
                {
                    _id: "17053179dd45e8c1a233df68",
                    _tpl: "54491c4f4bdc2db1078b4568",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "6f4231c605cf6a205d06c2a4",
                    _tpl: "55d4491a4bdc2d882f8b456e",
                    parentId: "17053179dd45e8c1a233df68",
                    slotId: "mod_barrel",
                },
                {
                    _id: "81192f3b1db5bb2387ecd171",
                    _tpl: "55d45d3f4bdc2d972f8b456c",
                    parentId: "17053179dd45e8c1a233df68",
                    slotId: "mod_handguard",
                },
                {
                    _id: "ab191acdd124d10ed846afd4",
                    _tpl: "55d484b44bdc2d1d4e8b456d",
                    parentId: "17053179dd45e8c1a233df68",
                    slotId: "mod_magazine",
                },
                {
                    _id: "ba36aa7a65aa110698289fa5",
                    _tpl: "56083cba4bdc2de22e8b456f",
                    parentId: "17053179dd45e8c1a233df68",
                    slotId: "mod_stock",
                },
            ],
        },
        {
            Id: "666046720100111a387d40b2",
            Name: "mp7a1",
            Root: "6069f9ad2727107d29b6f330",
            Items: [
                {
                    _id: "6069f9ad2727107d29b6f330",
                    _tpl: "5ba26383d4351e00334c93d9",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "3978d97d462bbf3061830a37",
                    _tpl: "5ba264f6d4351e0034777d52",
                    parentId: "6069f9ad2727107d29b6f330",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "3351efb66dca8631add6b788",
                    _tpl: "5ba26acdd4351e003562908e",
                    parentId: "6069f9ad2727107d29b6f330",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "fd9f4e25d93e3c23ae33b452",
                    _tpl: "5ba26b01d4351e0085325a51",
                    parentId: "6069f9ad2727107d29b6f330",
                    slotId: "mod_sight_front",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "f38b53bcc945670f105fd2f2",
                    _tpl: "5ba26b17d4351e00367f9bdd",
                    parentId: "6069f9ad2727107d29b6f330",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "f429201829b315fa439e3b86",
                    _tpl: "5bcf0213d4351e0085327c17",
                    parentId: "6069f9ad2727107d29b6f330",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "6660467d0100111a38227071",
            Name: "mp43",
            Root: "9ef98b42b84dda29e5620992",
            Items: [
                {
                    _id: "9ef98b42b84dda29e5620992",
                    _tpl: "5580223e4bdc2d1c128b457f",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "7003718dcc06b90d0b04f435",
                    _tpl: "55d447bb4bdc2d892f8b456f",
                    parentId: "9ef98b42b84dda29e5620992",
                    slotId: "mod_barrel",
                },
                {
                    _id: "8cfff876a123af29f4b8e8fb",
                    _tpl: "611a31ce5b7ffe001b4649d1",
                    parentId: "9ef98b42b84dda29e5620992",
                    slotId: "mod_stock",
                },
            ],
        },
        {
            Id: "666046850100111a38753b5d",
            Name: "toz",
            Root: "d5cd883d89bb08d654e3cf65",
            Items: [
                {
                    _id: "d5cd883d89bb08d654e3cf65",
                    _tpl: "5a38e6bac4a2826c6e06d79b",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "86cf4067a25d436d29483709",
                    _tpl: "5a38ee51c4a282000c5a955c",
                    parentId: "d5cd883d89bb08d654e3cf65",
                    slotId: "mod_magazine",
                },
                {
                    _id: "ef607a8360e6f7a418b969f8",
                    _tpl: "5a38ef1fc4a282000b1521f6",
                    parentId: "d5cd883d89bb08d654e3cf65",
                    slotId: "mod_stock",
                    upd: {
                        Foldable: {
                            Folded: false,
                        },
                    },
                },
                {
                    _id: "1385cc6b6d09061d14916a59",
                    _tpl: "5a38eecdc4a282329a73b512",
                    parentId: "ef607a8360e6f7a418b969f8",
                    slotId: "mod_pistol_grip",
                },
            ],
        },
        {
            Id: "6660468b0100111a380e6ebd",
            Name: "153",
            Root: "1f4559f481b46d6199949fd5",
            Items: [
                {
                    _id: "1f4559f481b46d6199949fd5",
                    _tpl: "56dee2bdd2720bc8328b4567",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "c35b734991dc0996500e3284",
                    _tpl: "56deec93d2720bec348b4568",
                    parentId: "1f4559f481b46d6199949fd5",
                    slotId: "mod_barrel",
                },
                {
                    _id: "7c85160269c8ee5804bdcb08",
                    _tpl: "56deed6ed2720b4c698b4583",
                    parentId: "1f4559f481b46d6199949fd5",
                    slotId: "mod_handguard",
                },
                {
                    _id: "b8b66643196b581af67fa9f9",
                    _tpl: "56deee15d2720bee328b4567",
                    parentId: "1f4559f481b46d6199949fd5",
                    slotId: "mod_magazine",
                },
                {
                    _id: "c5523e32108cbd0ad6d081cb",
                    _tpl: "56083be64bdc2d20478b456f",
                    parentId: "1f4559f481b46d6199949fd5",
                    slotId: "mod_stock",
                },
            ],
        },
        {
            Id: "666046900100111a38130f29",
            Name: "mp7a2",
            Root: "37aa91df671c5003d5600751",
            Items: [
                {
                    _id: "37aa91df671c5003d5600751",
                    _tpl: "5bd70322209c4d00d7167b8f",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "693351d45089a5aac4c5ad92",
                    _tpl: "5ba264f6d4351e0034777d52",
                    parentId: "37aa91df671c5003d5600751",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "be49f85768468d397ae1d3bb",
                    _tpl: "5ba26acdd4351e003562908e",
                    parentId: "37aa91df671c5003d5600751",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "1b06de8ab2eec660feb68379",
                    _tpl: "5ba26b01d4351e0085325a51",
                    parentId: "37aa91df671c5003d5600751",
                    slotId: "mod_sight_front",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "9b506155845d93127c23480c",
                    _tpl: "5ba26b17d4351e00367f9bdd",
                    parentId: "37aa91df671c5003d5600751",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "204a45ce89e54b9d10fb7421",
                    _tpl: "5bd704e7209c4d00d7167c31",
                    parentId: "37aa91df671c5003d5600751",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666046980100111a38149494",
            Name: "saiga12",
            Root: "282b75fec963b004a205e23c",
            Items: [
                {
                    _id: "282b75fec963b004a205e23c",
                    _tpl: "576165642459773c7a400233",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "90176c8e7f09cc019f3f3a45",
                    _tpl: "576169e62459773c69055191",
                    parentId: "282b75fec963b004a205e23c",
                    slotId: "mod_handguard",
                },
                {
                    _id: "de72af4e0bff97195c360fd7",
                    _tpl: "576167ab2459773cad038c43",
                    parentId: "282b75fec963b004a205e23c",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "c55c02167af71d487ba4ec1a",
                    _tpl: "5649ade84bdc2d1b2b8b4587",
                    parentId: "282b75fec963b004a205e23c",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "18fbdfed36fe989e528b5e07",
                    _tpl: "57616c112459773cce774d66",
                    parentId: "282b75fec963b004a205e23c",
                    slotId: "mod_reciever",
                },
                {
                    _id: "4a1ac25ea3b055f9d98178cf",
                    _tpl: "57a9b9ce2459770ee926038d",
                    parentId: "282b75fec963b004a205e23c",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "97bae4ef6e8d2630c081de5e",
                    _tpl: "57616ca52459773c69055192",
                    parentId: "282b75fec963b004a205e23c",
                    slotId: "mod_stock",
                },
                {
                    _id: "fa7f3588a03c0488312479c1",
                    _tpl: "57616a9e2459773c7a400234",
                    parentId: "282b75fec963b004a205e23c",
                    slotId: "mod_magazine",
                },
            ],
        },
        {
            Id: "6660469f0100111a38afe310",
            Name: "m870",
            Root: "ce40c6c364cd41d9c8cb8cab",
            Items: [
                {
                    _id: "ce40c6c364cd41d9c8cb8cab",
                    _tpl: "5a7828548dc32e5a9c28b516",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "b19956d75b8f5f9f6848aa19",
                    _tpl: "5a787f7ac5856700177af660",
                    parentId: "ce40c6c364cd41d9c8cb8cab",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "914e2bbebc5b5e0d202605b2",
                    _tpl: "5a788089c5856700142fdd9c",
                    parentId: "ce40c6c364cd41d9c8cb8cab",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "96beca7769fd3db7a54f1bba",
                    _tpl: "5a7882dcc5856700177af662",
                    parentId: "ce40c6c364cd41d9c8cb8cab",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "3b7fa9c1d401f87934b74f91",
                    _tpl: "5a7880d0c5856700142fdd9d",
                    parentId: "ce40c6c364cd41d9c8cb8cab",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666046a60100111a381fce67",
            Name: "mossberg",
            Root: "8fb0eb38b95188d69766b0ec",
            Items: [
                {
                    _id: "8fb0eb38b95188d69766b0ec",
                    _tpl: "5e870397991fd70db46995c8",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "df4ae66b69eb9126f104c14b",
                    _tpl: "5e87071478f43e51ca2de5e1",
                    parentId: "8fb0eb38b95188d69766b0ec",
                    slotId: "mod_barrel",
                },
                {
                    _id: "83295e428ab1ced716d10797",
                    _tpl: "5e87076ce2db31558c75a11d",
                    parentId: "8fb0eb38b95188d69766b0ec",
                    slotId: "mod_handguard",
                },
                {
                    _id: "6673d6132f3130ab6e00274b",
                    _tpl: "5e87080c81c4ed43e83cefda",
                    parentId: "8fb0eb38b95188d69766b0ec",
                    slotId: "mod_magazine",
                },
                {
                    _id: "76bde14f1d882218815f9e16",
                    _tpl: "5e87116b81c4ed43e83cefdd",
                    parentId: "8fb0eb38b95188d69766b0ec",
                    slotId: "mod_stock",
                },
                {
                    _id: "fa50173ff9767a4cbcbf0935",
                    _tpl: "5e87114fe2db31558c75a120",
                    parentId: "8fb0eb38b95188d69766b0ec",
                    slotId: "mod_mount",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "f73779d77a949fe82fcb7528",
                    _tpl: "5e8708d4ae379e67d22e0102",
                    parentId: "df4ae66b69eb9126f104c14b",
                    slotId: "mod_sight_front",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "666046ae0100111a382e1a9a",
            Name: "ks23",
            Root: "34e7c51b491aeeafc1b9f709",
            Items: [
                {
                    _id: "34e7c51b491aeeafc1b9f709",
                    _tpl: "5e848cc2988a8701445df1e8",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "a9f549123655bc1e557e15f7",
                    _tpl: "5e848d2eea0a7c419c2f9bfd",
                    parentId: "34e7c51b491aeeafc1b9f709",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "a0a9a82399eb8856a8d26340",
                    _tpl: "5e848d51e4dbc5266a4ec63b",
                    parentId: "34e7c51b491aeeafc1b9f709",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "c5dbb9eb7d73cf4d67bf8bc7",
                    _tpl: "5f647d9f8499b57dc40ddb93",
                    parentId: "34e7c51b491aeeafc1b9f709",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "6ef6669f722ca159929923c4",
                    _tpl: "5e848db4681bea2ada00daa9",
                    parentId: "34e7c51b491aeeafc1b9f709",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666046b40100111a386fd9dc",
            Name: "155",
            Root: "1c2619d55767e71a8937c8a3",
            Items: [
                {
                    _id: "1c2619d55767e71a8937c8a3",
                    _tpl: "606dae0ab0e443224b421bb7",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "c320c3508873f36513a1f9a0",
                    _tpl: "6076c1b9f2cb2e02a42acedc",
                    parentId: "1c2619d55767e71a8937c8a3",
                    slotId: "mod_barrel",
                },
                {
                    _id: "38a8058821da1f424d247fcf",
                    _tpl: "607d5aa50494a626335e12ed",
                    parentId: "1c2619d55767e71a8937c8a3",
                    slotId: "mod_handguard",
                },
                {
                    _id: "979cda923ffb48085238f440",
                    _tpl: "6076c87f232e5a31c233d50e",
                    parentId: "1c2619d55767e71a8937c8a3",
                    slotId: "mod_magazine",
                },
                {
                    _id: "e6b7ae52f7f18be9c8692006",
                    _tpl: "607d5a891246154cad35d6aa",
                    parentId: "1c2619d55767e71a8937c8a3",
                    slotId: "mod_stock",
                },
            ],
        },
        {
            Id: "666046ba0100111a3827c1dc",
            Name: "benelli-m3",
            Root: "f06a5256d1690d7c61388f4e",
            Items: [
                {
                    _id: "f06a5256d1690d7c61388f4e",
                    _tpl: "6259b864ebedf17603599e88",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "8777c5976eb86f110378ce12",
                    _tpl: "6259c2c1d714855d182bad85",
                    parentId: "f06a5256d1690d7c61388f4e",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "5d0a359465b2db10bc3abaa1",
                    _tpl: "6259c4347d6aab70bc23a190",
                    parentId: "f06a5256d1690d7c61388f4e",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "9e0fbdeaebba3e21c92aa661",
                    _tpl: "625ff2ccb8c587128c1a01dd",
                    parentId: "f06a5256d1690d7c61388f4e",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "0f7952049b66683152288cbb",
                    _tpl: "6259c3387d6aab70bc23a18d",
                    parentId: "f06a5256d1690d7c61388f4e",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                        Foldable: {
                            Folded: false,
                        },
                    },
                },
                {
                    _id: "685ad685648ae5b4d5366b13",
                    _tpl: "625ed7c64d9b6612df732146",
                    parentId: "f06a5256d1690d7c61388f4e",
                    slotId: "mod_mount",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "450f801eda7d874bc6fbbba1",
                    _tpl: "625ebcef6f53af4aa66b44dc",
                    parentId: "f06a5256d1690d7c61388f4e",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "8e833535b323a995d53bcbf7",
                    _tpl: "625ec45bb14d7326ac20f572",
                    parentId: "f06a5256d1690d7c61388f4e",
                    slotId: "mod_charge",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "8773365debbc8e9cc4d72b59",
                    _tpl: "6259c3d8012d6678ec38eeb8",
                    parentId: "0f7952049b66683152288cbb",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666046c70100111a380cbd99",
            Name: "mpx",
            Root: "aa3787c0291ee366d52f7a01",
            Items: [
                {
                    _id: "aa3787c0291ee366d52f7a01",
                    _tpl: "58948c8e86f77409493f7266",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "b29a04acb3a2b1d913e144ef",
                    _tpl: "5894a51286f77426d13baf02",
                    parentId: "aa3787c0291ee366d52f7a01",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "e2d50e820055f4d7bae21ddd",
                    _tpl: "5894a05586f774094708ef75",
                    parentId: "aa3787c0291ee366d52f7a01",
                    slotId: "mod_magazine",
                },
                {
                    _id: "ce65d69f884ea4ea927f67d6",
                    _tpl: "5894a5b586f77426d2590767",
                    parentId: "aa3787c0291ee366d52f7a01",
                    slotId: "mod_reciever",
                },
                {
                    _id: "74dd899963b8ab803ba61cc2",
                    _tpl: "5894a13e86f7742405482982",
                    parentId: "aa3787c0291ee366d52f7a01",
                    slotId: "mod_stock",
                },
                {
                    _id: "51b9f1fd2e05f57b3f7f602d",
                    _tpl: "58949edd86f77409483e16a9",
                    parentId: "aa3787c0291ee366d52f7a01",
                    slotId: "mod_charge",
                },
                {
                    _id: "37b8c6fcbcc39b01474f2355",
                    _tpl: "5894a2c386f77427140b8342",
                    parentId: "ce65d69f884ea4ea927f67d6",
                    slotId: "mod_barrel",
                },
                {
                    _id: "7536b03db32b5e237b64f3e6",
                    _tpl: "5894a42086f77426d2590762",
                    parentId: "ce65d69f884ea4ea927f67d6",
                    slotId: "mod_handguard",
                },
                {
                    _id: "ef6f8fd33a04408b27a45d72",
                    _tpl: "5894a81786f77427140b8347",
                    parentId: "ce65d69f884ea4ea927f67d6",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "c7f1b95682b1628b69e0ebad",
                    _tpl: "58949dea86f77409483e16a8",
                    parentId: "37b8c6fcbcc39b01474f2355",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "d83b7ea405c9b9e7bbb49553",
                    _tpl: "5894a73486f77426d259076c",
                    parentId: "7536b03db32b5e237b64f3e6",
                    slotId: "mod_sight_front",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "e44b5460d8b9d343e53fcb6a",
                    _tpl: "58a56f8d86f774651579314c",
                    parentId: "7536b03db32b5e237b64f3e6",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "732a038190910fd00d525ad5",
                    _tpl: "58a5c12e86f7745d585a2b9e",
                    parentId: "7536b03db32b5e237b64f3e6",
                    slotId: "mod_mount_001",
                },
                {
                    _id: "e0343115ef56ef359826cdb9",
                    _tpl: "58a56f8d86f774651579314c",
                    parentId: "7536b03db32b5e237b64f3e6",
                    slotId: "mod_mount_002",
                },
            ],
        },
        {
            Id: "666046cd0100111a38d71f27",
            Name: "mp5",
            Root: "5e4005b4842917c6705bffe8",
            Items: [
                {
                    _id: "5e4005b4842917c6705bffe8",
                    _tpl: "5926bb2186f7744b1c6c6e60",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "11c83cac294271c36c2da835",
                    _tpl: "5926c3b286f774640d189b6b",
                    parentId: "5e4005b4842917c6705bffe8",
                    slotId: "mod_magazine",
                },
                {
                    _id: "ba0e42975378a0e12531ccff",
                    _tpl: "5926c0df86f77462f647f764",
                    parentId: "5e4005b4842917c6705bffe8",
                    slotId: "mod_reciever",
                },
                {
                    _id: "959d342a42e2ea8ff78b4762",
                    _tpl: "5926c32286f774616e42de99",
                    parentId: "5e4005b4842917c6705bffe8",
                    slotId: "mod_charge",
                },
                {
                    _id: "b0efd62c16c15c3e5bcd4015",
                    _tpl: "5926c36d86f77467a92a8629",
                    parentId: "ba0e42975378a0e12531ccff",
                    slotId: "mod_handguard",
                },
                {
                    _id: "19eb07c5349e420c8ed1c128",
                    _tpl: "5926d2be86f774134d668e4e",
                    parentId: "ba0e42975378a0e12531ccff",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "40162ee41625839f72a59dc9",
                    _tpl: "5926d3c686f77410de68ebc8",
                    parentId: "ba0e42975378a0e12531ccff",
                    slotId: "mod_stock",
                },
                {
                    _id: "4920d613244867dd0dcb018f",
                    _tpl: "5926e16e86f7742f5a0f7ecb",
                    parentId: "ba0e42975378a0e12531ccff",
                    slotId: "mod_muzzle",
                },
            ],
        },
        {
            Id: "666046d20100111a38afd009",
            Name: "p90",
            Root: "aea79af7f9791cb2531adc52",
            Items: [
                {
                    _id: "aea79af7f9791cb2531adc52",
                    _tpl: "5cc82d76e24e8d00134b4b83",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "2375aa3bde4a2de0f9afb19d",
                    _tpl: "5cc70093e4a949033c734312",
                    parentId: "aea79af7f9791cb2531adc52",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "e9845e04160cc8404fb37adb",
                    _tpl: "5cc700b9e4a949000f0f0f25",
                    parentId: "aea79af7f9791cb2531adc52",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "a6c23fb32bd1bd371394953e",
                    _tpl: "5cc70102e4a949035e43ba74",
                    parentId: "aea79af7f9791cb2531adc52",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "406eacb9bf317f4dc2b15f05",
                    _tpl: "5cc701aae4a949000e1ea45c",
                    parentId: "aea79af7f9791cb2531adc52",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "9309ab20692772a8e668348f",
                    _tpl: "5cc6ea78e4a949000e1ea3c1",
                    parentId: "aea79af7f9791cb2531adc52",
                    slotId: "mod_charge",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "6afdfad3f4a3402895bba7f5",
                    _tpl: "5cc700cae4a949035e43ba72",
                    parentId: "e9845e04160cc8404fb37adb",
                    slotId: "mod_stock_000",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "1ab5afd6de36a1128a64e9d0",
                    _tpl: "5cebec38d7f00c00110a652a",
                    parentId: "a6c23fb32bd1bd371394953e",
                    slotId: "mod_mount_000",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "c0983ec5d932f0ce0ac71a67",
                    _tpl: "5cc70146e4a949000d73bf6b",
                    parentId: "a6c23fb32bd1bd371394953e",
                    slotId: "mod_mount_001",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "01d79201f306414b55fb3cec",
                    _tpl: "5cc70146e4a949000d73bf6b",
                    parentId: "a6c23fb32bd1bd371394953e",
                    slotId: "mod_mount_002",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "e700e2d3a32eecdbf129057e",
                    _tpl: "5cc82796e24e8d000f5859a8",
                    parentId: "406eacb9bf317f4dc2b15f05",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666046d70100111a385ada08",
            Name: "mp9",
            Root: "8300947c27cf937ef2fffd52",
            Items: [
                {
                    _id: "8300947c27cf937ef2fffd52",
                    _tpl: "5de7bd7bfd6b4e6e2276dc25",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "484fa04108607a2967089513",
                    _tpl: "5de8eac42a78646d96665d91",
                    parentId: "8300947c27cf937ef2fffd52",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "46d2d8f0a81b0bccbd0e79de",
                    _tpl: "5de910da8b6c4240ba2651b5",
                    parentId: "8300947c27cf937ef2fffd52",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "21d6ae44b0fe1914ba27e943",
                    _tpl: "5de8fbad2fbe23140d3ee9c4",
                    parentId: "8300947c27cf937ef2fffd52",
                    slotId: "mod_foregrip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "61cd5689fcd7e7ddf59ac9d9",
                    _tpl: "5de8e67c4a9f347bc92edbd7",
                    parentId: "8300947c27cf937ef2fffd52",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "eb8951bd36edd3adc11a545c",
                    _tpl: "5de922d4b11454561e39239f",
                    parentId: "8300947c27cf937ef2fffd52",
                    slotId: "mod_charge",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "3ad3d77420fcb217fa541d08",
                    _tpl: "5de8fb539f98ac2bc659513a",
                    parentId: "61cd5689fcd7e7ddf59ac9d9",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "b74f3c169147e69cf6781d57",
                    _tpl: "5de8fc0b205ddc616a6bc51b",
                    parentId: "61cd5689fcd7e7ddf59ac9d9",
                    slotId: "mod_mount",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666046dd0100111a38d29880",
            Name: "mp99",
            Root: "13bb51f2ba33b74ac98265d1",
            Items: [
                {
                    _id: "13bb51f2ba33b74ac98265d1",
                    _tpl: "5e00903ae9dc277128008b87",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "632d98762188f53e0cf9b8bc",
                    _tpl: "5de8eac42a78646d96665d91",
                    parentId: "13bb51f2ba33b74ac98265d1",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "fd6a68ddb59044837e59770d",
                    _tpl: "5de910da8b6c4240ba2651b5",
                    parentId: "13bb51f2ba33b74ac98265d1",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "2436b7b77112afb6496f38c7",
                    _tpl: "5e0090f7e9dc277128008b93",
                    parentId: "13bb51f2ba33b74ac98265d1",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "0f93d9b323224215f654b359",
                    _tpl: "5de922d4b11454561e39239f",
                    parentId: "13bb51f2ba33b74ac98265d1",
                    slotId: "mod_charge",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "2fedc94f5a83e85a21c728ad",
                    _tpl: "5de8fbf2b74cd90030650c79",
                    parentId: "13bb51f2ba33b74ac98265d1",
                    slotId: "mod_mount_000",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "67139ca46b2a8a5e1a0ce23f",
                    _tpl: "5de8fb539f98ac2bc659513a",
                    parentId: "2436b7b77112afb6496f38c7",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "666046ef0100111a3870ac33",
            Name: "ppsh",
            Root: "93ae47580f73e0ec5be42936",
            Items: [
                {
                    _id: "93ae47580f73e0ec5be42936",
                    _tpl: "5ea03f7400685063ec28bfa8",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "31203c71b6ddbac419115252",
                    _tpl: "5ea03e9400685063ec28bfa4",
                    parentId: "93ae47580f73e0ec5be42936",
                    slotId: "mod_stock",
                },
                {
                    _id: "03c5f071a1a3eafbeb58bd74",
                    _tpl: "5ea034eb5aad6446a939737b",
                    parentId: "93ae47580f73e0ec5be42936",
                    slotId: "mod_magazine",
                },
                {
                    _id: "e89c5c4e64f8f26a78339d97",
                    _tpl: "5ea03e5009aa976f2e7a514b",
                    parentId: "93ae47580f73e0ec5be42936",
                    slotId: "mod_reciever",
                },
                {
                    _id: "538d48087a1a465831d26518",
                    _tpl: "5ea02bb600685063ec28bfa1",
                    parentId: "93ae47580f73e0ec5be42936",
                    slotId: "mod_barrel",
                },
            ],
        },
        {
            Id: "666046f40100111a385958f1",
            Name: "vector45",
            Root: "c674d0d3e969341d9c2a3d46",
            Items: [
                {
                    _id: "c674d0d3e969341d9c2a3d46",
                    _tpl: "5fb64bc92b1b027b1f50bcf2",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "d99a6bf5e336d158a369f6d5",
                    _tpl: "5fb651b52b1b027b1f50bcff",
                    parentId: "c674d0d3e969341d9c2a3d46",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "7e6f50c443ddd7d70fc233fd",
                    _tpl: "5fb6567747ce63734e3fa1dc",
                    parentId: "c674d0d3e969341d9c2a3d46",
                    slotId: "mod_sight_front",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "3fa2c7a3f5205799b7ffb338",
                    _tpl: "5fb6564947ce63734e3fa1da",
                    parentId: "c674d0d3e969341d9c2a3d46",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "263c7870b291938d5c8c7e11",
                    _tpl: "5fb6558ad6f0b2136f2d7eb7",
                    parentId: "c674d0d3e969341d9c2a3d46",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "d56e48c2be0d7646bdd3f8a8",
                    _tpl: "5fb65363d1409e5ca04b54f5",
                    parentId: "c674d0d3e969341d9c2a3d46",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "6208e203ecaf18623a67786d",
                    _tpl: "5fbb976df9986c4cff3fe5f2",
                    parentId: "c674d0d3e969341d9c2a3d46",
                    slotId: "mod_mount",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "71ac8c02f73b1dd53891b7c7",
                    _tpl: "5fce0f9b55375d18a253eff2",
                    parentId: "c674d0d3e969341d9c2a3d46",
                    slotId: "mod_mount_001",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "2dc24e10954b891d706c77b5",
                    _tpl: "5fce0f9b55375d18a253eff2",
                    parentId: "c674d0d3e969341d9c2a3d46",
                    slotId: "mod_mount_002",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "9bbf91d4fdc8f9903f6c80f4",
                    _tpl: "5fb6548dd1409e5ca04b54f9",
                    parentId: "d56e48c2be0d7646bdd3f8a8",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666046fa0100111a38a8bcce",
            Name: "ump",
            Root: "fa112228b4b09f6c5188216f",
            Items: [
                {
                    _id: "fa112228b4b09f6c5188216f",
                    _tpl: "5fc3e272f8b6a877a729eac5",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "d14b6ea387a673d7fccb343a",
                    _tpl: "5fc3e466187fea44d52eda90",
                    parentId: "fa112228b4b09f6c5188216f",
                    slotId: "mod_magazine",
                },
                {
                    _id: "952cb7fa6c95bef3148137ac",
                    _tpl: "5fc3e4ee7283c4046c5814af",
                    parentId: "fa112228b4b09f6c5188216f",
                    slotId: "mod_stock",
                },
                {
                    _id: "1ad9d9203b8dd1c5c3d9c9c2",
                    _tpl: "5fc3e4a27283c4046c5814ab",
                    parentId: "fa112228b4b09f6c5188216f",
                    slotId: "mod_barrel",
                },
                {
                    _id: "4ef378188abf4fae1038070d",
                    _tpl: "5fc53954f8b6a877a729eaeb",
                    parentId: "fa112228b4b09f6c5188216f",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "e387c7422a5580a62ca998e6",
                    _tpl: "5fc5396e900b1d5091531e72",
                    parentId: "fa112228b4b09f6c5188216f",
                    slotId: "mod_mount_001",
                },
                {
                    _id: "2b00590bfee69b98e251b5df",
                    _tpl: "5fc5396e900b1d5091531e72",
                    parentId: "fa112228b4b09f6c5188216f",
                    slotId: "mod_mount_002",
                },
            ],
        },
        {
            Id: "666046ff0100111a38826ad3",
            Name: "vector9x19",
            Root: "cf11c781582d76054fbe8144",
            Items: [
                {
                    _id: "cf11c781582d76054fbe8144",
                    _tpl: "5fc3f2d5900b1d5091531e57",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "29d922f2509bbc865e35d5d4",
                    _tpl: "5a718b548dc32e000d46d262",
                    parentId: "cf11c781582d76054fbe8144",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "1c2b79ec630a5410182bd8ab",
                    _tpl: "5fb6567747ce63734e3fa1dc",
                    parentId: "cf11c781582d76054fbe8144",
                    slotId: "mod_sight_front",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "d8aafc2986965545b85cccf6",
                    _tpl: "5fb6564947ce63734e3fa1da",
                    parentId: "cf11c781582d76054fbe8144",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "e2e50547810db056bd6321fd",
                    _tpl: "5fb6558ad6f0b2136f2d7eb7",
                    parentId: "cf11c781582d76054fbe8144",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "e686ac78f0a263cd48e3f763",
                    _tpl: "5fbbc366ca32ed67276c1557",
                    parentId: "cf11c781582d76054fbe8144",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "72775f4c30533f3653abc8b9",
                    _tpl: "5fbb976df9986c4cff3fe5f2",
                    parentId: "cf11c781582d76054fbe8144",
                    slotId: "mod_mount",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "22045471b944c60385bff013",
                    _tpl: "5fce0f9b55375d18a253eff2",
                    parentId: "cf11c781582d76054fbe8144",
                    slotId: "mod_mount_001",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "8290bf8edbcc6dbbce61998f",
                    _tpl: "5fce0f9b55375d18a253eff2",
                    parentId: "cf11c781582d76054fbe8144",
                    slotId: "mod_mount_002",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "806c94d522ee6ad0d97dd40a",
                    _tpl: "5fbbc34106bde7524f03cbe9",
                    parentId: "e686ac78f0a263cd48e3f763",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "6660470d0100111a381a18db",
            Name: "stm9",
            Root: "9831072c7b0dd7ac6b9fd3bf",
            Items: [
                {
                    _id: "9831072c7b0dd7ac6b9fd3bf",
                    _tpl: "60339954d62c9b14ed777c06",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "a1f282edc5fd09d6d7c7906a",
                    _tpl: "602e71bd53a60014f9705bfa",
                    parentId: "9831072c7b0dd7ac6b9fd3bf",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "66b079e8d3410d52779482e6",
                    _tpl: "5a7ad2e851dfba0016153692",
                    parentId: "9831072c7b0dd7ac6b9fd3bf",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "aa166dce46bcea0b7290670d",
                    _tpl: "602e63fb6335467b0c5ac94d",
                    parentId: "9831072c7b0dd7ac6b9fd3bf",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "01f0479d770c0b8396d71100",
                    _tpl: "602e3f1254072b51b239f713",
                    parentId: "9831072c7b0dd7ac6b9fd3bf",
                    slotId: "mod_stock_001",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "ee56c6837e759b852aaa763d",
                    _tpl: "6033749e88382f4fab3fd2c5",
                    parentId: "9831072c7b0dd7ac6b9fd3bf",
                    slotId: "mod_charge",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "fd33067bd4557c949d85bb99",
                    _tpl: "602f85fd9b513876d4338d9c",
                    parentId: "9831072c7b0dd7ac6b9fd3bf",
                    slotId: "mod_tactical_000",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "cf212a291b93feb848a317fe",
                    _tpl: "603372b4da11d6478d5a07ff",
                    parentId: "aa166dce46bcea0b7290670d",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "a54458e5359a5182a4bafe0c",
                    _tpl: "6034e3cb0ddce744014cb870",
                    parentId: "aa166dce46bcea0b7290670d",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "89ec2b35dde7caf73bd989c4",
                    _tpl: "602e620f9b513876d4338d9a",
                    parentId: "01f0479d770c0b8396d71100",
                    slotId: "mod_stock_000",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "c8ddb094224b46b12e53fbaa",
                    _tpl: "60337f5dce399e10262255d1",
                    parentId: "cf212a291b93feb848a317fe",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666047130100111a3815d3d7",
            Name: "sr2m",
            Root: "2a0dad29591c9e7a089ff4b5",
            Items: [
                {
                    _id: "2a0dad29591c9e7a089ff4b5",
                    _tpl: "62e14904c2699c0ec93adc47",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "eae7e84b8a92c5c5623927ea",
                    _tpl: "633a98eab8b0506e48497c1a",
                    parentId: "2a0dad29591c9e7a089ff4b5",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "916b6d67c2a03b7eff2c92ed",
                    _tpl: "62e2a754b6c0ee2f230cee0f",
                    parentId: "2a0dad29591c9e7a089ff4b5",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "c83bb736bfab20f2903e406d",
                    _tpl: "62e292e7b6c0ee2f230cee00",
                    parentId: "2a0dad29591c9e7a089ff4b5",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "c9414578b62314efe4cd737a",
                    _tpl: "62e27a7865f0b1592a49e17b",
                    parentId: "2a0dad29591c9e7a089ff4b5",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "7bdb997450e80ca6c020485a",
                    _tpl: "62e15547db1a5c41971c1b5e",
                    parentId: "2a0dad29591c9e7a089ff4b5",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "8334244ff912ebcf4096adf8",
                    _tpl: "637b9c37b7e3bc41b21ce71a",
                    parentId: "2a0dad29591c9e7a089ff4b5",
                    slotId: "mod_pistolgrip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "5e1a5bdfb3f111421fc1d04a",
                    _tpl: "62ed189fb3608410ef5a2bfc",
                    parentId: "7bdb997450e80ca6c020485a",
                    slotId: "mod_mount_001",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666047180100111a3824a44a",
            Name: "sv98",
            Root: "8463643e74226b30afbd0749",
            Items: [
                {
                    _id: "8463643e74226b30afbd0749",
                    _tpl: "55801eed4bdc2d89578b4588",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "a75c80c9a65280d8bae0960d",
                    _tpl: "559ba5b34bdc2d1f1a8b4582",
                    parentId: "8463643e74226b30afbd0749",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "558417f24d1295dbfd9649dd",
                    _tpl: "56083e1b4bdc2dc8488b4572",
                    parentId: "8463643e74226b30afbd0749",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "3a1120f5b4e239aee8995689",
                    _tpl: "56083eab4bdc2d26448b456a",
                    parentId: "8463643e74226b30afbd0749",
                    slotId: "mod_tactical",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "2ce026162d098564c63cf705",
                    _tpl: "560e620e4bdc2d724b8b456b",
                    parentId: "8463643e74226b30afbd0749",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "bdbe54c1041e425e8ea6f661",
                    _tpl: "61faa91878830f069b6b7967",
                    parentId: "8463643e74226b30afbd0749",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "10f481d2269541aa0eb80924",
                    _tpl: "56ea8222d2720b69698b4567",
                    parentId: "bdbe54c1041e425e8ea6f661",
                    slotId: "mod_bipod",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666047200100111a38dae989",
            Name: "dvl",
            Root: "d04fe35e6869a4f915456fa1",
            Items: [
                {
                    _id: "d04fe35e6869a4f915456fa1",
                    _tpl: "588892092459774ac91d4b11",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "7e9117b27bffe1198112b45d",
                    _tpl: "5888988e24597752fe43a6fa",
                    parentId: "d04fe35e6869a4f915456fa1",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "68687caf251c1cc18ce84541",
                    _tpl: "5888956924597752983e182d",
                    parentId: "d04fe35e6869a4f915456fa1",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "24f260db3dbde231d4972859",
                    _tpl: "57c55f172459772d27602381",
                    parentId: "d04fe35e6869a4f915456fa1",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "ba298c5b8ebc1051712ac615",
                    _tpl: "58889d0c2459775bc215d981",
                    parentId: "d04fe35e6869a4f915456fa1",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "15be9015beb5ec236657c05b",
                    _tpl: "5888996c24597754281f9419",
                    parentId: "68687caf251c1cc18ce84541",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "4214260ac2b606355b4b5ecd",
                    _tpl: "5888976c24597754281f93f5",
                    parentId: "68687caf251c1cc18ce84541",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666047260100111a384ce4a4",
            Name: "mosin",
            Root: "74f8c676b681afb46f87a68d",
            Items: [
                {
                    _id: "74f8c676b681afb46f87a68d",
                    _tpl: "5ae08f0a5acfc408fb1398a1",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "ef4534cbad47deacbbab9241",
                    _tpl: "5ae0973a5acfc4001562206c",
                    parentId: "74f8c676b681afb46f87a68d",
                    slotId: "mod_magazine",
                },
                {
                    _id: "b2628e4442712a56176463b0",
                    _tpl: "5ae096d95acfc400185c2c81",
                    parentId: "74f8c676b681afb46f87a68d",
                    slotId: "mod_stock",
                },
                {
                    _id: "acd6972351ae68737f30ba42",
                    _tpl: "5ae09bff5acfc4001562219d",
                    parentId: "74f8c676b681afb46f87a68d",
                    slotId: "mod_barrel",
                },
                {
                    _id: "c11053d33c12712273037e98",
                    _tpl: "5ae099875acfc4001714e593",
                    parentId: "acd6972351ae68737f30ba42",
                    slotId: "mod_sight_front",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "c2919379bec834b4ae070620",
                    _tpl: "5ae099925acfc4001a5fc7b3",
                    parentId: "acd6972351ae68737f30ba42",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "6660472e0100111a385a1818",
            Name: "m700",
            Root: "c9f3e63fb31e4318783c4bf6",
            Items: [
                {
                    _id: "c9f3e63fb31e4318783c4bf6",
                    _tpl: "5bfea6e90db834001b7347f3",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "d3f3ca82241704878abe30f1",
                    _tpl: "5bfea7ad0db834001c38f1ee",
                    parentId: "c9f3e63fb31e4318783c4bf6",
                    slotId: "mod_magazine",
                },
                {
                    _id: "a2c41e5b3cabdefefb9fc7af",
                    _tpl: "5bfeb32b0db834001a6694d9",
                    parentId: "c9f3e63fb31e4318783c4bf6",
                    slotId: "mod_stock",
                },
                {
                    _id: "3aac380294b6b18c6c63f240",
                    _tpl: "5bfebc320db8340019668d79",
                    parentId: "c9f3e63fb31e4318783c4bf6",
                    slotId: "mod_barrel",
                },
            ],
        },
        {
            Id: "666047340100111a38199d4b",
            Name: "vpo215",
            Root: "d6e55395d692371f6ed4feac",
            Items: [
                {
                    _id: "d6e55395d692371f6ed4feac",
                    _tpl: "5de652c31b7e3716273428be",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "2cc458651ef3200f3fdcaa66",
                    _tpl: "5de653abf76fdc1ce94a5a2a",
                    parentId: "d6e55395d692371f6ed4feac",
                    slotId: "mod_magazine",
                },
                {
                    _id: "17315b82eeafe9b82cc39a88",
                    _tpl: "5de655be4a9f347bc92edb88",
                    parentId: "d6e55395d692371f6ed4feac",
                    slotId: "mod_stock",
                },
                {
                    _id: "e54718e4ced3728dd6058e84",
                    _tpl: "5de65547883dde217541644b",
                    parentId: "d6e55395d692371f6ed4feac",
                    slotId: "mod_barrel",
                },
                {
                    _id: "cae4e1a7d63a6e910c81f1da",
                    _tpl: "5de6558e9f98ac2bc65950fc",
                    parentId: "d6e55395d692371f6ed4feac",
                    slotId: "mod_mount",
                },
                {
                    _id: "3e3c2aa836ec1391329da681",
                    _tpl: "5de6556a205ddc616a6bc4f7",
                    parentId: "e54718e4ced3728dd6058e84",
                    slotId: "mod_muzzle",
                },
            ],
        },
        {
            Id: "6660473f0100111a3819d7da",
            Name: "t5000",
            Root: "d381f3c6143c4151c8b629a9",
            Items: [
                {
                    _id: "d381f3c6143c4151c8b629a9",
                    _tpl: "5df24cf80dee1b22f862e9bc",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "852e25e0e3593e387e23312b",
                    _tpl: "5df25b6c0b92095fd441e4cf",
                    parentId: "d381f3c6143c4151c8b629a9",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "d0d04b04a135166afaecf469",
                    _tpl: "5df256570dee1b22f862e9c4",
                    parentId: "d381f3c6143c4151c8b629a9",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "4b49503a97a51394de01fdc0",
                    _tpl: "5df35e59c41b2312ea3334d5",
                    parentId: "d381f3c6143c4151c8b629a9",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                        Foldable: {
                            Folded: false,
                        },
                    },
                },
                {
                    _id: "bc6f38153ab71aa5630b31d9",
                    _tpl: "5df35e970b92095fd441e4d2",
                    parentId: "d381f3c6143c4151c8b629a9",
                    slotId: "mod_mount",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "43b4ce8ffd68e0dc719de8e2",
                    _tpl: "5df35e7f2a78646d96665dd4",
                    parentId: "d0d04b04a135166afaecf469",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "a4465f52ee92ed662de4b13d",
                    _tpl: "5df25d3bfd6b4e6e2276dc9a",
                    parentId: "4b49503a97a51394de01fdc0",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "c1bdb3648c2eabfacdc3c6cd",
                    _tpl: "5df38a5fb74cd90030650cb6",
                    parentId: "4b49503a97a51394de01fdc0",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "9dde2b7ee7c5cd59c2ef6838",
                    _tpl: "5df35ddddfc58d14537c2036",
                    parentId: "4b49503a97a51394de01fdc0",
                    slotId: "mod_stock_axis",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "a84019cec44c5ceed28a4329",
                    _tpl: "5df35eb2b11454561e3923e2",
                    parentId: "a4465f52ee92ed662de4b13d",
                    slotId: "mod_mount_000",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "a4e301c6e519466fb226c58b",
                    _tpl: "5df35eb2b11454561e3923e2",
                    parentId: "a4465f52ee92ed662de4b13d",
                    slotId: "mod_mount_001",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "f869569c5d3da85905f90d82",
                    _tpl: "5df35ea9c41b2312ea3334d8",
                    parentId: "a4465f52ee92ed662de4b13d",
                    slotId: "mod_mount_002",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "8c784708d0eba405c21a27cf",
                    _tpl: "5df35eb2b11454561e3923e2",
                    parentId: "a4465f52ee92ed662de4b13d",
                    slotId: "mod_mount_003",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "36e46926bb336a2c590563f8",
                    _tpl: "5df36948bb49d91fb446d5ad",
                    parentId: "a4465f52ee92ed662de4b13d",
                    slotId: "mod_foregrip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "6660479e0100111a388a40ac",
            Name: "sawedoff",
            Root: "00b1dab1498b3c4370c4f69f",
            Items: [
                {
                    _id: "00b1dab1498b3c4370c4f69f",
                    _tpl: "64748cb8de82c85eaf0a273a",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "a4714484bdecf6bedf1604fe",
                    _tpl: "64748d02d1c009260702b526",
                    parentId: "00b1dab1498b3c4370c4f69f",
                    slotId: "mod_barrel",
                },
            ],
        },
        {
            Id: "666047b10100111a38070882",
            Name: "kedrb",
            Root: "81bd71ce7738e6a9baa64ee9",
            Items: [
                {
                    _id: "81bd71ce7738e6a9baa64ee9",
                    _tpl: "57f3c6bd24597738e730fa2f",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 77,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "5e911b3e8a26c59f1206ceae",
                    _tpl: "57d152ec245977144076ccdf",
                    parentId: "81bd71ce7738e6a9baa64ee9",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "0814b5ce7caeb790bfbc8daa",
                    _tpl: "57f3c7e024597738ea4ba286",
                    parentId: "81bd71ce7738e6a9baa64ee9",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "2d2943f724d93f32bd216d46",
                    _tpl: "57d1519e24597714373db79d",
                    parentId: "81bd71ce7738e6a9baa64ee9",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "0cdd633f0b8697f523d20a72",
                    _tpl: "57f3c8cc2459773ec4480328",
                    parentId: "0814b5ce7caeb790bfbc8daa",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666047bb0100111a38f8b04b",
            Name: "saiga9",
            Root: "045b9da8665968b753acd081",
            Items: [
                {
                    _id: "045b9da8665968b753acd081",
                    _tpl: "59f9cabd86f7743a10721f46",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 95,
                            Durability: 95,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "b713f87bc19c96bf7dbd9f34",
                    _tpl: "5998517986f7746017232f7e",
                    parentId: "045b9da8665968b753acd081",
                    slotId: "mod_pistol_grip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "cd27b58ae75a7b64c3eafeaf",
                    _tpl: "599851db86f77467372f0a18",
                    parentId: "045b9da8665968b753acd081",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "dd4e58a8a24b7b4d40b8f41e",
                    _tpl: "5998529a86f774647f44f421",
                    parentId: "045b9da8665968b753acd081",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "4689a28dbaaf445b93caa61e",
                    _tpl: "5998598e86f7740b3f498a86",
                    parentId: "045b9da8665968b753acd081",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "df8dc1199ff1ef1bef7a4ca4",
                    _tpl: "59985a8086f77414ec448d1a",
                    parentId: "045b9da8665968b753acd081",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "6733f58e751192f3676091d4",
                    _tpl: "599860e986f7743bb57573a6",
                    parentId: "045b9da8665968b753acd081",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "a5b90c373a91bc9a917eec92",
                    _tpl: "59ccd11386f77428f24a488f",
                    parentId: "045b9da8665968b753acd081",
                    slotId: "mod_gas_block",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "9a1cb6bb3f85c15899c33352",
                    _tpl: "5648b1504bdc2d9d488b4584",
                    parentId: "a5b90c373a91bc9a917eec92",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
            ],
        },
        {
            Id: "666047c40100111a3825313f",
            Name: "mp18",
            Root: "14df610f7fdc5edcda9df6d8",
            Items: [
                {
                    _id: "14df610f7fdc5edcda9df6d8",
                    _tpl: "61f7c9e189e6fb1a5e3ea78d",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "1bf2ecb41149918cd6942056",
                    _tpl: "61f4012adfc9f01a816adda1",
                    parentId: "14df610f7fdc5edcda9df6d8",
                    slotId: "mod_barrel",
                },
                {
                    _id: "9badbdad3fc043b4cd21001e",
                    _tpl: "61f7b234ea4ab34f2f59c3ec",
                    parentId: "14df610f7fdc5edcda9df6d8",
                    slotId: "mod_stock",
                },
                {
                    _id: "0ec16cbf1a08a0493c9db533",
                    _tpl: "61f7b85367ddd414173fdb36",
                    parentId: "1bf2ecb41149918cd6942056",
                    slotId: "mod_handguard",
                },
            ],
        },
    ];
    weaponMemeBuilds = [
        {
            Id: "66614a18010019bcce5ece68",
            Name: "The Careless Whisper",
            Root: "146bd19aab103e3affd91a74",
            Items: [
                {
                    _id: "146bd19aab103e3affd91a74",
                    _tpl: "5ae08f0a5acfc408fb1398a1",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "dd0548f22e1e77e7c78c4504",
                    _tpl: "5ae0973a5acfc4001562206c",
                    parentId: "146bd19aab103e3affd91a74",
                    slotId: "mod_magazine",
                },
                {
                    _id: "8f981baf1e04510c470ebce5",
                    _tpl: "5bfd36ad0db834001c38ef66",
                    parentId: "146bd19aab103e3affd91a74",
                    slotId: "mod_stock",
                },
                {
                    _id: "d357a01a5d99a3a06e193c0f",
                    _tpl: "5ae09bff5acfc4001562219d",
                    parentId: "146bd19aab103e3affd91a74",
                    slotId: "mod_barrel",
                },
                {
                    _id: "65c8d1a4a96aba092397a161",
                    _tpl: "5bbde41ed4351e003562b038",
                    parentId: "8f981baf1e04510c470ebce5",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "dfe218982c0634bf4f50a334",
                    _tpl: "5ae099875acfc4001714e593",
                    parentId: "d357a01a5d99a3a06e193c0f",
                    slotId: "mod_sight_front",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "669d82e34ea5124955ee92b7",
                    _tpl: "5bbdb811d4351e45020113c7",
                    parentId: "d357a01a5d99a3a06e193c0f",
                    slotId: "mod_sight_rear",
                },
                {
                    _id: "be82101003aab68dacdbf77e",
                    _tpl: "5b86a0e586f7745b600ccb23",
                    parentId: "d357a01a5d99a3a06e193c0f",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "8cf45ffca5b9d9a40b50fee0",
                    _tpl: "5b2389515acfc4771e1be0c0",
                    parentId: "669d82e34ea5124955ee92b7",
                    slotId: "mod_scope",
                },
                {
                    _id: "bd16f7598df899214052d334",
                    _tpl: "5b3a337e5acfc4704b4a19a0",
                    parentId: "669d82e34ea5124955ee92b7",
                    slotId: "mod_tactical_000",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "d70a689e67f14ab729736661",
                    _tpl: "5b3a337e5acfc4704b4a19a0",
                    parentId: "669d82e34ea5124955ee92b7",
                    slotId: "mod_tactical_001",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "03902759bcbb4b2602579631",
                    _tpl: "5b2388675acfc4771e1be0be",
                    parentId: "8cf45ffca5b9d9a40b50fee0",
                    slotId: "mod_scope_000",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "f538bd3c8446ea64fc57cf54",
                    _tpl: "57ae0171245977343c27bfcf",
                    parentId: "8cf45ffca5b9d9a40b50fee0",
                    slotId: "mod_scope_001",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "32f6febc58af4fbb9f64740a",
                    _tpl: "57ae0171245977343c27bfcf",
                    parentId: "8cf45ffca5b9d9a40b50fee0",
                    slotId: "mod_scope_002",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "66614a8c010019bcce3048ec",
            Name: "The Giant Handcannon",
            Root: "29551d5a460c3070a18f856a",
            Items: [
                {
                    _id: "29551d5a460c3070a18f856a",
                    _tpl: "588892092459774ac91d4b11",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "eb970c56861fbc3189bcec54",
                    _tpl: "5888988e24597752fe43a6fa",
                    parentId: "29551d5a460c3070a18f856a",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "a77257631b037e1cfd2dc526",
                    _tpl: "5d2dc3e548f035404a1a4798",
                    parentId: "29551d5a460c3070a18f856a",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "d982400de131165cfed9fb82",
                    _tpl: "5888945a2459774bf43ba385",
                    parentId: "29551d5a460c3070a18f856a",
                    slotId: "mod_barrel",
                },
                {
                    _id: "320b09ec1d3dbe963f282807",
                    _tpl: "6113cc78d3a39d50044c065a",
                    parentId: "29551d5a460c3070a18f856a",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "847cd0a80a267ff8298395da",
                    _tpl: "58889c7324597754281f9439",
                    parentId: "d982400de131165cfed9fb82",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "f63e0d3ac8551e034bb0c94b",
                    _tpl: "5888961624597754281f93f3",
                    parentId: "d982400de131165cfed9fb82",
                    slotId: "mod_bipod",
                },
            ],
        },
        {
            Id: "66614af1010019bcce8c17e7",
            Name: "The Flashbang",
            Root: "043e98427fdf327fba078378",
            Items: [
                {
                    _id: "043e98427fdf327fba078378",
                    _tpl: "59f98b4986f7746f546d2cef",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "fcf9e4ef72e02fc787de3bd5",
                    _tpl: "5a27bad7c4a282000b15184b",
                    parentId: "043e98427fdf327fba078378",
                    slotId: "mod_mount",
                },
                {
                    _id: "b1b4da38cc70de35536a9022",
                    _tpl: "59f99a7d86f7745b134aa97b",
                    parentId: "043e98427fdf327fba078378",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "924ba6a76de3ab28d3bfcc29",
                    _tpl: "5b3a337e5acfc4704b4a19a0",
                    parentId: "fcf9e4ef72e02fc787de3bd5",
                    slotId: "mod_tactical_000",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "57492bb6d3047636e095bed9",
                    _tpl: "5a27b3d0c4a282000d721ec1",
                    parentId: "fcf9e4ef72e02fc787de3bd5",
                    slotId: "mod_mount",
                },
                {
                    _id: "345ffc5fa590621ae3312948",
                    _tpl: "5b3a337e5acfc4704b4a19a0",
                    parentId: "fcf9e4ef72e02fc787de3bd5",
                    slotId: "mod_tactical_001",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "cf8db063c79cc844887eaede",
                    _tpl: "5b3a337e5acfc4704b4a19a0",
                    parentId: "fcf9e4ef72e02fc787de3bd5",
                    slotId: "mod_tactical_002",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "227a6706c79ecccb470bd81d",
                    _tpl: "584984812459776a704a82a6",
                    parentId: "fcf9e4ef72e02fc787de3bd5",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "3f398add12b79ff877661e90",
                    _tpl: "5a27b6bec4a282000e496f78",
                    parentId: "57492bb6d3047636e095bed9",
                    slotId: "mod_muzzle",
                },
            ],
        },
        {
            Id: "66614be9010019bccedefa30",
            Name: "Economy VSS",
            Root: "5040034645ec6d4b06511f48",
            Items: [
                {
                    _id: "5040034645ec6d4b06511f48",
                    _tpl: "5447a9cd4bdc2dbd208b4567",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "683471832a581c954edbd8a5",
                    _tpl: "5c0e2ff6d174af02a1659d4a",
                    parentId: "5040034645ec6d4b06511f48",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "ff393aa7dfeb5e3bbd30f5e3",
                    _tpl: "5448c1d04bdc2dff2f8b4569",
                    parentId: "5040034645ec6d4b06511f48",
                    slotId: "mod_magazine",
                },
                {
                    _id: "2543e6dfcc8f54337353d91e",
                    _tpl: "55d355e64bdc2d962f8b4569",
                    parentId: "5040034645ec6d4b06511f48",
                    slotId: "mod_reciever",
                },
                {
                    _id: "036b2c03bf4251b4fe752592",
                    _tpl: "5c0faeddd174af02a962601f",
                    parentId: "5040034645ec6d4b06511f48",
                    slotId: "mod_stock",
                },
                {
                    _id: "b08309f61ad7c5778cfa07dc",
                    _tpl: "55d44fd14bdc2d962f8b456e",
                    parentId: "5040034645ec6d4b06511f48",
                    slotId: "mod_charge",
                },
                {
                    _id: "00ce64d637a67399eab5d5aa",
                    _tpl: "570fd79bd2720bc7458b4583",
                    parentId: "2543e6dfcc8f54337353d91e",
                    slotId: "mod_scope",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "de5d119c46a33d66bef0e1ef",
                    _tpl: "55d3632e4bdc2d972f8b4569",
                    parentId: "2543e6dfcc8f54337353d91e",
                    slotId: "mod_barrel",
                },
                {
                    _id: "3760fdafa3c09b9352236f8a",
                    _tpl: "5b2cfa535acfc432ff4db7a0",
                    parentId: "2543e6dfcc8f54337353d91e",
                    slotId: "mod_handguard",
                },
                {
                    _id: "6f66c6beecdd37437d88610e",
                    _tpl: "56ea8180d2720bf2698b456a",
                    parentId: "de5d119c46a33d66bef0e1ef",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "75c399328669d330e7f425a0",
                    _tpl: "5d00ec68d7ad1a04a067e5be",
                    parentId: "de5d119c46a33d66bef0e1ef",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "d5cd5f6e36ee9b4d31e128ef",
                    _tpl: "5b30bc285acfc47a8608615d",
                    parentId: "3760fdafa3c09b9352236f8a",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "5d142c425e48a9ea194fd791",
                    _tpl: "57da93632459771cb65bf83f",
                    parentId: "6f66c6beecdd37437d88610e",
                    slotId: "mod_muzzle",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "69295fc9877733c7cdf205e6",
                    _tpl: "5c1bc7432e221602b412949d",
                    parentId: "d5cd5f6e36ee9b4d31e128ef",
                    slotId: "mod_foregrip",
                },
            ],
        },
        {
            Id: "66614ccb010019bccedf6aae",
            Name: "Mini Head Blaster",
            Root: "d85da8724559347a0179d1fe",
            Items: [
                {
                    _id: "d85da8724559347a0179d1fe",
                    _tpl: "5a7828548dc32e5a9c28b516",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "8dc24891edf6f81dff6702dd",
                    _tpl: "5a787fdfc5856700142fdd9a",
                    parentId: "d85da8724559347a0179d1fe",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "21303614969dee05ad921845",
                    _tpl: "5a788031c585673f2b5c1c79",
                    parentId: "d85da8724559347a0179d1fe",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "7b60a25d44be2da30ae8099f",
                    _tpl: "5a78830bc5856700137e4c90",
                    parentId: "d85da8724559347a0179d1fe",
                    slotId: "mod_magazine",
                },
                {
                    _id: "0df7dbcaf5dcb441278f509e",
                    _tpl: "5a788169c5856700142fdd9e",
                    parentId: "d85da8724559347a0179d1fe",
                    slotId: "mod_stock",
                },
                {
                    _id: "848d2814472261a219f97af5",
                    _tpl: "5a7893c1c585673f2b5c374d",
                    parentId: "d85da8724559347a0179d1fe",
                    slotId: "mod_mount",
                },
                {
                    _id: "e8e9f153990cc71aa6fa1481",
                    _tpl: "5c1cd46f2e22164bef5cfedb",
                    parentId: "21303614969dee05ad921845",
                    slotId: "mod_foregrip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "70a0366e21bb2eb811bbb01e",
                    _tpl: "5b3a337e5acfc4704b4a19a0",
                    parentId: "21303614969dee05ad921845",
                    slotId: "mod_tactical_001",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "d934080e1b31d4766dc66008",
                    _tpl: "5b3a337e5acfc4704b4a19a0",
                    parentId: "21303614969dee05ad921845",
                    slotId: "mod_tactical_000",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "3d6fc3082b1065fd137aad2f",
                    _tpl: "5b3b99265acfc4704b4a1afb",
                    parentId: "848d2814472261a219f97af5",
                    slotId: "mod_scope",
                },
                {
                    _id: "ef67f33c534c30a634a859aa",
                    _tpl: "5b2388675acfc4771e1be0be",
                    parentId: "3d6fc3082b1065fd137aad2f",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "66614d82010019bccece665b",
            Name: "MP5K All You Need Is Here",
            Root: "13456ade1f86f62d2391d376",
            Items: [
                {
                    _id: "13456ade1f86f62d2391d376",
                    _tpl: "5d2f0d8048f0356c925bc3b0",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "6533710236924083481b44d6",
                    _tpl: "5a351711c4a282000b1521a4",
                    parentId: "13456ade1f86f62d2391d376",
                    slotId: "mod_magazine",
                },
                {
                    _id: "19ab34e649ef0c887e7abef6",
                    _tpl: "5d2f261548f03576f500e7b7",
                    parentId: "13456ade1f86f62d2391d376",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "dc0c9094cb40bc6c15d3760e",
                    _tpl: "5d2f2d5748f03572ec0c0139",
                    parentId: "13456ade1f86f62d2391d376",
                    slotId: "mod_charge",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "9a0964d6aa5dc389817cc2e8",
                    _tpl: "5d2f259b48f0355a844acd74",
                    parentId: "19ab34e649ef0c887e7abef6",
                    slotId: "mod_handguard",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "103ea6b01d5486028cf5ee9a",
                    _tpl: "5d2f25bc48f03502573e5d85",
                    parentId: "19ab34e649ef0c887e7abef6",
                    slotId: "mod_stock",
                },
                {
                    _id: "36ee87f9b22e58fa177f3b2c",
                    _tpl: "5926dad986f7741f82604363",
                    parentId: "19ab34e649ef0c887e7abef6",
                    slotId: "mod_mount",
                },
                {
                    _id: "2f58ad9ccc3851843447a501",
                    _tpl: "5aa66c72e5b5b00016327c93",
                    parentId: "36ee87f9b22e58fa177f3b2c",
                    slotId: "mod_scope",
                },
                {
                    _id: "0cd72435af2146505027d5c4",
                    _tpl: "5aa66be6e5b5b0214e506e97",
                    parentId: "2f58ad9ccc3851843447a501",
                    slotId: "mod_scope_000",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "f2d0858955bb3c58698a08fc",
                    _tpl: "57ae0171245977343c27bfcf",
                    parentId: "2f58ad9ccc3851843447a501",
                    slotId: "mod_scope_001",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "0b7767c3d9a91343b2ece86d",
                    _tpl: "57ae0171245977343c27bfcf",
                    parentId: "2f58ad9ccc3851843447a501",
                    slotId: "mod_scope_002",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "356bd8e2f128fbd59d58e625",
                    _tpl: "57ae0171245977343c27bfcf",
                    parentId: "2f58ad9ccc3851843447a501",
                    slotId: "mod_scope_003",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "66614ea7010019bcce0f1b97",
            Name: "The Predator",
            Root: "a78c58a9ac5bd20d1cbab6dc",
            Items: [
                {
                    _id: "a78c58a9ac5bd20d1cbab6dc",
                    _tpl: "5a0ec13bfcdbcb00165aa685",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "a14194375d7b5458c98bf1ff",
                    _tpl: "59d64ec286f774171d1e0a42",
                    parentId: "a78c58a9ac5bd20d1cbab6dc",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "e9e47d256145eb90f460fcb4",
                    _tpl: "5f633f68f5750b524b45f112",
                    parentId: "a78c58a9ac5bd20d1cbab6dc",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "64fa84d3464ee25a1695445f",
                    _tpl: "5649ae4a4bdc2d1b2b8b4588",
                    parentId: "a78c58a9ac5bd20d1cbab6dc",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "c385ac148f82a1975bb86a9a",
                    _tpl: "5d2c770c48f0354b4a07c100",
                    parentId: "a78c58a9ac5bd20d1cbab6dc",
                    slotId: "mod_reciever",
                },
                {
                    _id: "623ed3bc4d002f8eca853b68",
                    _tpl: "59d650cf86f7741b846413a4",
                    parentId: "a78c58a9ac5bd20d1cbab6dc",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "34c74fa12a0cdd5dc1c9e701",
                    _tpl: "5b0e794b5acfc47a877359b2",
                    parentId: "a78c58a9ac5bd20d1cbab6dc",
                    slotId: "mod_stock",
                },
                {
                    _id: "ea210a878bf0789fb45d10ba",
                    _tpl: "5c6175362e221600133e3b94",
                    parentId: "a78c58a9ac5bd20d1cbab6dc",
                    slotId: "mod_magazine",
                },
                {
                    _id: "8f4228468fd6839c8e21d70d",
                    _tpl: "6130ca3fd92c473c77020dbd",
                    parentId: "a78c58a9ac5bd20d1cbab6dc",
                    slotId: "mod_charge",
                },
                {
                    _id: "0e8b5122903fa9fd28073bd7",
                    _tpl: "5cf4e3f3d7f00c06595bc7f0",
                    parentId: "a14194375d7b5458c98bf1ff",
                    slotId: "mod_handguard",
                },
                {
                    _id: "51f6e3cc603f4accb959bde9",
                    _tpl: "5aa66c72e5b5b00016327c93",
                    parentId: "c385ac148f82a1975bb86a9a",
                    slotId: "mod_scope",
                },
                {
                    _id: "c6fe78ae034b64644ace927b",
                    _tpl: "5c1cd46f2e22164bef5cfedb",
                    parentId: "0e8b5122903fa9fd28073bd7",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "2700e40e52f466159e26c69d",
                    _tpl: "5c06595c0db834001a66af6c",
                    parentId: "0e8b5122903fa9fd28073bd7",
                    slotId: "mod_scope",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "ee068b00a0a0a27546980ee4",
                    _tpl: "5c06595c0db834001a66af6c",
                    parentId: "0e8b5122903fa9fd28073bd7",
                    slotId: "mod_tactical_001",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "138d2e1d2816144e2c3ce819",
                    _tpl: "5c06595c0db834001a66af6c",
                    parentId: "0e8b5122903fa9fd28073bd7",
                    slotId: "mod_tactical_002",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "8452e70dd403cd861ca0e29a",
                    _tpl: "5c06595c0db834001a66af6c",
                    parentId: "0e8b5122903fa9fd28073bd7",
                    slotId: "mod_tactical_000",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "c21f96c0a1fca5e0aa83efb0",
                    _tpl: "5c06595c0db834001a66af6c",
                    parentId: "0e8b5122903fa9fd28073bd7",
                    slotId: "mod_tactical_003",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "b8efab87194846b9f8e2b6bc",
                    _tpl: "58d2664f86f7747fec5834f6",
                    parentId: "51f6e3cc603f4accb959bde9",
                    slotId: "mod_scope_001",
                },
                {
                    _id: "f94add2c0c067415b167e0b5",
                    _tpl: "58d2664f86f7747fec5834f6",
                    parentId: "51f6e3cc603f4accb959bde9",
                    slotId: "mod_scope_002",
                },
                {
                    _id: "e8187e40e31253be41c21212",
                    _tpl: "58d2664f86f7747fec5834f6",
                    parentId: "51f6e3cc603f4accb959bde9",
                    slotId: "mod_scope_003",
                },
                {
                    _id: "2418950a5b346ee57e8bdda2",
                    _tpl: "58d268fc86f774111273f8c2",
                    parentId: "b8efab87194846b9f8e2b6bc",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "8adbb564fa63c8b84250cc55",
                    _tpl: "58d268fc86f774111273f8c2",
                    parentId: "f94add2c0c067415b167e0b5",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "2e81b4f5ab72fff157b8cf29",
                    _tpl: "58d268fc86f774111273f8c2",
                    parentId: "e8187e40e31253be41c21212",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "66614f28010019bcce25f165",
            Name: "Big Choppa",
            Root: "3b53ea5966f2d9d6c3bc9969",
            Items: [
                {
                    _id: "3b53ea5966f2d9d6c3bc9969",
                    _tpl: "5b0bbe4e5acfc40dc528a72d",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "8f2e54590af3ef89c74bfbed",
                    _tpl: "5b7d679f5acfc4001a5c4024",
                    parentId: "3b53ea5966f2d9d6c3bc9969",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "e1569163f82ede89c5578095",
                    _tpl: "5b7bef5d5acfc43bca7067a3",
                    parentId: "3b53ea5966f2d9d6c3bc9969",
                    slotId: "mod_magazine",
                },
                {
                    _id: "3be005e42cd52cafba90bd74",
                    _tpl: "5b7be1ca5acfc400170e2d2f",
                    parentId: "3b53ea5966f2d9d6c3bc9969",
                    slotId: "mod_handguard",
                },
                {
                    _id: "15b2802ceabbef446ea942b4",
                    _tpl: "5b7be1265acfc400161d0798",
                    parentId: "3b53ea5966f2d9d6c3bc9969",
                    slotId: "mod_barrel",
                },
                {
                    _id: "e65e2e93433efaff68cc93b5",
                    _tpl: "5b0bc22d5acfc47a8607f085",
                    parentId: "3b53ea5966f2d9d6c3bc9969",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "d1bdf02bd8af795db21b8f01",
                    _tpl: "5b099bb25acfc400186331e8",
                    parentId: "3b53ea5966f2d9d6c3bc9969",
                    slotId: "mod_reciever",
                },
                {
                    _id: "8a7cc4515b44342a4978542e",
                    _tpl: "5b099bf25acfc4001637e683",
                    parentId: "3b53ea5966f2d9d6c3bc9969",
                    slotId: "mod_stock",
                },
                {
                    _id: "76ce35a624c3bbaf5b9c2011",
                    _tpl: "5c1cd46f2e22164bef5cfedb",
                    parentId: "3be005e42cd52cafba90bd74",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "a16e46a04c24f1ad1b03a9b1",
                    _tpl: "57d17e212459775a1179a0f5",
                    parentId: "3be005e42cd52cafba90bd74",
                    slotId: "mod_tactical_001",
                },
                {
                    _id: "3f8f20ca4d97c83946bbd1e2",
                    _tpl: "57d17e212459775a1179a0f5",
                    parentId: "3be005e42cd52cafba90bd74",
                    slotId: "mod_tactical_002",
                },
                {
                    _id: "cc23d89dd48d22fa9d6ead0e",
                    _tpl: "57d17e212459775a1179a0f5",
                    parentId: "3be005e42cd52cafba90bd74",
                    slotId: "mod_tactical_003",
                },
                {
                    _id: "89a52b2c3a1aa7312e0e7851",
                    _tpl: "5cdd7693d7f00c0010373aa5",
                    parentId: "15b2802ceabbef446ea942b4",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "5a1e768e2e960cd62e2dcdcc",
                    _tpl: "59f9d81586f7744c7506ee62",
                    parentId: "d1bdf02bd8af795db21b8f01",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "92a2a5ef8b04e7c0f2c1faf8",
                    _tpl: "57d17c5e2459775a5c57d17d",
                    parentId: "a16e46a04c24f1ad1b03a9b1",
                    slotId: "mod_flashlight",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "831dad8f34a87f66e4741a57",
                    _tpl: "57d17c5e2459775a5c57d17d",
                    parentId: "3f8f20ca4d97c83946bbd1e2",
                    slotId: "mod_flashlight",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "c13ba88cf254e9adba530c09",
                    _tpl: "59d790f486f77403cb06aec6",
                    parentId: "cc23d89dd48d22fa9d6ead0e",
                    slotId: "mod_flashlight",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "66614f91010019bcce4e463a",
            Name: "The Red Menace",
            Root: "b7f50daca1599e53e9c05c56",
            Items: [
                {
                    _id: "b7f50daca1599e53e9c05c56",
                    _tpl: "59d6088586f774275f37482f",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "a0c32fa6b2cf8637da026c9b",
                    _tpl: "59d64ec286f774171d1e0a42",
                    parentId: "b7f50daca1599e53e9c05c56",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "897c31f81da2a3bad3b55f83",
                    _tpl: "593d489686f7745c6255d58a",
                    parentId: "b7f50daca1599e53e9c05c56",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "dce0442766c5cccc2e2dd7de",
                    _tpl: "5e2192a498a36665e8337386",
                    parentId: "b7f50daca1599e53e9c05c56",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "baea60b826514e447276cb21",
                    _tpl: "5d2c770c48f0354b4a07c100",
                    parentId: "b7f50daca1599e53e9c05c56",
                    slotId: "mod_reciever",
                },
                {
                    _id: "731d98c3efe7224d502c836f",
                    _tpl: "59d650cf86f7741b846413a4",
                    parentId: "b7f50daca1599e53e9c05c56",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "be564c1f66f0b58e5ea6cefc",
                    _tpl: "5e217ba4c1434648c13568cd",
                    parentId: "b7f50daca1599e53e9c05c56",
                    slotId: "mod_stock",
                },
                {
                    _id: "1428fa41c0b3ebf6dfe4bd88",
                    _tpl: "5cbdc23eae9215001136a407",
                    parentId: "b7f50daca1599e53e9c05c56",
                    slotId: "mod_magazine",
                },
                {
                    _id: "30c275852cf9d4021dccb3e6",
                    _tpl: "5b80242286f77429445e0b47",
                    parentId: "a0c32fa6b2cf8637da026c9b",
                    slotId: "mod_handguard",
                },
                {
                    _id: "7bce0236ece768d1b0438634",
                    _tpl: "59f9d81586f7744c7506ee62",
                    parentId: "baea60b826514e447276cb21",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "49d3d0d9c86443511f5e1aa4",
                    _tpl: "5b8403a086f7747ff856f4e2",
                    parentId: "30c275852cf9d4021dccb3e6",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "733cc4e3af76efaf6d728ee9",
                    _tpl: "5b84038986f774774913b0c1",
                    parentId: "30c275852cf9d4021dccb3e6",
                    slotId: "mod_mount_001",
                },
                {
                    _id: "321a5f24d10a7d996cab34f5",
                    _tpl: "5c1cd46f2e22164bef5cfedb",
                    parentId: "49d3d0d9c86443511f5e1aa4",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "e4326f1573f12fa6f5081489",
                    _tpl: "56def37dd2720bec348b456a",
                    parentId: "733cc4e3af76efaf6d728ee9",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "66615005010019bcce4c03df",
            Name: "Chad Molester",
            Root: "86ff4122cdad81b1dd4bc775",
            Items: [
                {
                    _id: "86ff4122cdad81b1dd4bc775",
                    _tpl: "5de7bd7bfd6b4e6e2276dc25",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "b7461056ba0663e5373e8906",
                    _tpl: "5de8eac42a78646d96665d91",
                    parentId: "86ff4122cdad81b1dd4bc775",
                    slotId: "mod_magazine",
                },
                {
                    _id: "bd730acacd92b2eeaad09b17",
                    _tpl: "5de8f237bbaf010b10528a70",
                    parentId: "86ff4122cdad81b1dd4bc775",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "fba1b94c1c6a339626d256aa",
                    _tpl: "5de910da8b6c4240ba2651b5",
                    parentId: "86ff4122cdad81b1dd4bc775",
                    slotId: "mod_stock",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "0f19cf1c64d2ffbdcd0e511f",
                    _tpl: "5de8fbad2fbe23140d3ee9c4",
                    parentId: "86ff4122cdad81b1dd4bc775",
                    slotId: "mod_foregrip",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "e5881f769f126a24d94bc9fe",
                    _tpl: "5de8e67c4a9f347bc92edbd7",
                    parentId: "86ff4122cdad81b1dd4bc775",
                    slotId: "mod_reciever",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "dd7ed53de2ee0d24a869111f",
                    _tpl: "5de922d4b11454561e39239f",
                    parentId: "86ff4122cdad81b1dd4bc775",
                    slotId: "mod_charge",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "2f9816e64be529f14cc7f1ee",
                    _tpl: "5de8f2d5b74cd90030650c72",
                    parentId: "bd730acacd92b2eeaad09b17",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "40226c375a736d0768cb81fe",
                    _tpl: "5b3a337e5acfc4704b4a19a0",
                    parentId: "bd730acacd92b2eeaad09b17",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "8906e729208c748025812562",
                    _tpl: "61713cc4d8e3106d9806c109",
                    parentId: "e5881f769f126a24d94bc9fe",
                    slotId: "mod_scope",
                },
                {
                    _id: "7f30400be1e806aa6b932403",
                    _tpl: "5de8fb539f98ac2bc659513a",
                    parentId: "e5881f769f126a24d94bc9fe",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "f946e60ee4c2f946d82fcc38",
                    _tpl: "5de8fc0b205ddc616a6bc51b",
                    parentId: "e5881f769f126a24d94bc9fe",
                    slotId: "mod_mount",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "5676bc909da205c1251b526a",
                    _tpl: "62850c28da09541f43158cca",
                    parentId: "8906e729208c748025812562",
                    slotId: "mod_scope_000",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "e80bedda6f47dd6e53ae61a8",
                    _tpl: "61714b2467085e45ef140b2c",
                    parentId: "8906e729208c748025812562",
                    slotId: "mod_scope_001",
                },
                {
                    _id: "a7a4cb354467f7fdd4b3180e",
                    _tpl: "61605d88ffa6e502ac5e7eeb",
                    parentId: "8906e729208c748025812562",
                    slotId: "mod_scope_002",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "8abdd29ad34028480efdfd32",
                    _tpl: "58d399e486f77442e0016fe7",
                    parentId: "e80bedda6f47dd6e53ae61a8",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "66615080010019bcce8a8628",
            Name: "Toe Sniffer",
            Root: "4610e897aaae8783f00f8401",
            Items: [
                {
                    _id: "4610e897aaae8783f00f8401",
                    _tpl: "5fc3f2d5900b1d5091531e57",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "960ab7659667a984eea88ab4",
                    _tpl: "630767c37d50ff5e8a1ea71a",
                    parentId: "4610e897aaae8783f00f8401",
                    slotId: "mod_magazine",
                },
                {
                    _id: "4c4d5737cb6e92d86d15c4ce",
                    _tpl: "5fb6567747ce63734e3fa1dc",
                    parentId: "4610e897aaae8783f00f8401",
                    slotId: "mod_sight_front",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "a026a4bc4c52cc495d76e511",
                    _tpl: "5fb6564947ce63734e3fa1da",
                    parentId: "4610e897aaae8783f00f8401",
                    slotId: "mod_sight_rear",
                    upd: {
                        SpawnedInSession: true,
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "5e8b4a46db5f35826b59d346",
                    _tpl: "5d1b5e94d7ad1a2b865a96b0",
                    parentId: "4610e897aaae8783f00f8401",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "ab54af257bae790f1b77d624",
                    _tpl: "5fb655b748c711690e3a8d5a",
                    parentId: "4610e897aaae8783f00f8401",
                    slotId: "mod_stock",
                },
                {
                    _id: "5d3ecbbe448a7c0e01174a69",
                    _tpl: "5fbbc366ca32ed67276c1557",
                    parentId: "4610e897aaae8783f00f8401",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "7070f1f27957bd286b195af6",
                    _tpl: "5fbb976df9986c4cff3fe5f2",
                    parentId: "4610e897aaae8783f00f8401",
                    slotId: "mod_mount",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "32058143589218c3f3de14b2",
                    _tpl: "5fce0f9b55375d18a253eff2",
                    parentId: "4610e897aaae8783f00f8401",
                    slotId: "mod_mount_001",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "4a7a6fba0e53a37c89152e0a",
                    _tpl: "5fce0f9b55375d18a253eff2",
                    parentId: "4610e897aaae8783f00f8401",
                    slotId: "mod_mount_002",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "ecd930586ea075e47acac09a",
                    _tpl: "5c793fb92e221644f31bfb64",
                    parentId: "ab54af257bae790f1b77d624",
                    slotId: "mod_stock_000",
                },
                {
                    _id: "05e667d833a3b49ad019dcac",
                    _tpl: "5a32a064c4a28200741e22de",
                    parentId: "5d3ecbbe448a7c0e01174a69",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "eff81ab49862061d7d81710a",
                    _tpl: "5b057b4f5acfc4771e1bd3e9",
                    parentId: "7070f1f27957bd286b195af6",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "f561690f79884a1c51095b20",
                    _tpl: "5b3a337e5acfc4704b4a19a0",
                    parentId: "32058143589218c3f3de14b2",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "9902cf86f0c45987a2b5e124",
                    _tpl: "5b3a337e5acfc4704b4a19a0",
                    parentId: "4a7a6fba0e53a37c89152e0a",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "a00b9c5cef53998bc743be53",
                    _tpl: "58d2946386f774496974c37e",
                    parentId: "ecd930586ea075e47acac09a",
                    slotId: "mod_stock_004",
                },
                {
                    _id: "960b18843467ffbd673636ee",
                    _tpl: "58d2912286f7744e27117493",
                    parentId: "a00b9c5cef53998bc743be53",
                    slotId: "mod_stock",
                },
            ],
        },
        {
            Id: "6661511a010019bcce285829",
            Name: "Soviet Waffle Maker",
            Root: "61b0bcf4dc4c397890e70810",
            Items: [
                {
                    _id: "61b0bcf4dc4c397890e70810",
                    _tpl: "5644bd2b4bdc2d3b4c8b4572",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "63af9fd44fd7836d4460859f",
                    _tpl: "59c6633186f7740cf0493bb9",
                    parentId: "61b0bcf4dc4c397890e70810",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "65235f99ccad61a2d626cb8a",
                    _tpl: "615d8f5dd92c473c770212ef",
                    parentId: "61b0bcf4dc4c397890e70810",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "5d6af1c7e166f705f707da84",
                    _tpl: "5649ad3f4bdc2df8348b4585",
                    parentId: "61b0bcf4dc4c397890e70810",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "c7af9c757a5fd866ef21840c",
                    _tpl: "5649d9a14bdc2d79388b4580",
                    parentId: "61b0bcf4dc4c397890e70810",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "b166a1eef84ac51959ff8eff",
                    _tpl: "5649b1c04bdc2d16268b457c",
                    parentId: "61b0bcf4dc4c397890e70810",
                    slotId: "mod_stock",
                },
                {
                    _id: "594f9570c7a7c6070ca97405",
                    _tpl: "55d481904bdc2d8c2f8b456a",
                    parentId: "61b0bcf4dc4c397890e70810",
                    slotId: "mod_magazine",
                },
                {
                    _id: "ffe0ad04fd13af8935dbcdc0",
                    _tpl: "57acb6222459771ec34b5cb0",
                    parentId: "61b0bcf4dc4c397890e70810",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "ac8d9ff6747360d0a335ea89",
                    _tpl: "6130ca3fd92c473c77020dbd",
                    parentId: "61b0bcf4dc4c397890e70810",
                    slotId: "mod_charge",
                },
                {
                    _id: "fca9bbbe1c72423da9916f58",
                    _tpl: "5648b0744bdc2d363b8b4578",
                    parentId: "63af9fd44fd7836d4460859f",
                    slotId: "mod_handguard",
                },
                {
                    _id: "b40a7292caf829813ecc2ddd",
                    _tpl: "615d8f8567085e45ef1409ca",
                    parentId: "65235f99ccad61a2d626cb8a",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "4bb138607d93d833d88def87",
                    _tpl: "5d2da1e948f035477b1ce2ba",
                    parentId: "c7af9c757a5fd866ef21840c",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "aac5ffdb1c26ea349006479a",
                    _tpl: "5a0c59791526d8dba737bba7",
                    parentId: "b166a1eef84ac51959ff8eff",
                    slotId: "mod_stock",
                },
                {
                    _id: "fe11ff413ce8454bba2eeb20",
                    _tpl: "544a3a774bdc2d3a388b4567",
                    parentId: "ffe0ad04fd13af8935dbcdc0",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "d02e3a85acf53206e4c6834a",
                    _tpl: "58d268fc86f774111273f8c2",
                    parentId: "fe11ff413ce8454bba2eeb20",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "6661535a010019bcce19023c",
            Name: "The Maw",
            Root: "fe5d4ec6d4972a2e5b430e43",
            Items: [
                {
                    _id: "fe5d4ec6d4972a2e5b430e43",
                    _tpl: "5c46fbd72e2216398b5a8c9c",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        Foldable: {
                            Folded: false,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "b2348a92f4f17a48930a9f06",
                    _tpl: "6516b129609aaf354b34b3a8",
                    parentId: "fe5d4ec6d4972a2e5b430e43",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "db2e759634a299f268b23434",
                    _tpl: "5c88f24b2e22160bc12c69a6",
                    parentId: "fe5d4ec6d4972a2e5b430e43",
                    slotId: "mod_magazine",
                },
                {
                    _id: "da09a353bd08844d41f0d91e",
                    _tpl: "5c471b5d2e221602b21d4e14",
                    parentId: "fe5d4ec6d4972a2e5b430e43",
                    slotId: "mod_stock",
                },
                {
                    _id: "736b0aad967de15c9d8bd413",
                    _tpl: "5c471cb32e221602b177afaa",
                    parentId: "fe5d4ec6d4972a2e5b430e43",
                    slotId: "mod_barrel",
                },
                {
                    _id: "c97b8630adb74964dc597891",
                    _tpl: "5c471c2d2e22164bef5d077f",
                    parentId: "fe5d4ec6d4972a2e5b430e43",
                    slotId: "mod_mount_001",
                },
                {
                    _id: "4e80c3ec4cfe8c0162689bd4",
                    _tpl: "5c471bd12e221602b4129c3a",
                    parentId: "fe5d4ec6d4972a2e5b430e43",
                    slotId: "mod_reciever",
                },
                {
                    _id: "1b6c05cfff98cfd7ac2f4021",
                    _tpl: "5dff8db859400025ea5150d4",
                    parentId: "fe5d4ec6d4972a2e5b430e43",
                    slotId: "mod_mount_002",
                },
                {
                    _id: "97ab64fee92c4ca6100b3f85",
                    _tpl: "5f6341043ada5942720e2dc5",
                    parentId: "b2348a92f4f17a48930a9f06",
                    slotId: "mod_pistolgrip",
                },
                {
                    _id: "09b42b532eb0aae31c7b567e",
                    _tpl: "5c471bfc2e221602b21d4e17",
                    parentId: "736b0aad967de15c9d8bd413",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "8808fb812cf935bf3ebecdf9",
                    _tpl: "5c471c842e221615214259b5",
                    parentId: "736b0aad967de15c9d8bd413",
                    slotId: "mod_gas_block",
                },
                {
                    _id: "ddee09afb4e36be9ec295134",
                    _tpl: "5e569a132642e66b0b68015c",
                    parentId: "736b0aad967de15c9d8bd413",
                    slotId: "mod_mount",
                },
                {
                    _id: "235e2c39dee8210d863a1802",
                    _tpl: "5e56991336989c75ab4f03f6",
                    parentId: "c97b8630adb74964dc597891",
                    slotId: "mod_handguard",
                },
                {
                    _id: "d060e25249cee9a03b17a0aa",
                    _tpl: "5c471b7e2e2216152006e46c",
                    parentId: "c97b8630adb74964dc597891",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "76b4b8fccf0b241dc81fc527",
                    _tpl: "5aa66c72e5b5b00016327c93",
                    parentId: "1b6c05cfff98cfd7ac2f4021",
                    slotId: "mod_scope",
                },
                {
                    _id: "6e28e34d47b485abfef37f3f",
                    _tpl: "5c471ba12e221602b3137d76",
                    parentId: "09b42b532eb0aae31c7b567e",
                    slotId: "mod_sight_front",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "6a4b7e172462e7ff7ed20b03",
                    _tpl: "5e01e9e273d8eb11426f5bc3",
                    parentId: "09b42b532eb0aae31c7b567e",
                    slotId: "mod_muzzle",
                },
                {
                    _id: "d16069f7f457f9b50d8f6db8",
                    _tpl: "644a3df63b0b6f03e101e065",
                    parentId: "ddee09afb4e36be9ec295134",
                    slotId: "mod_tactical_000",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "a0711714b41d9bb51a7000e7",
                    _tpl: "5b7be47f5acfc400170e2dd2",
                    parentId: "235e2c39dee8210d863a1802",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "f4b7ca3f11edb159a704532f",
                    _tpl: "5b7be47f5acfc400170e2dd2",
                    parentId: "235e2c39dee8210d863a1802",
                    slotId: "mod_mount_001",
                },
                {
                    _id: "0ab7d84bef3b91ef853f6fd6",
                    _tpl: "5b7be47f5acfc400170e2dd2",
                    parentId: "235e2c39dee8210d863a1802",
                    slotId: "mod_mount_002",
                },
                {
                    _id: "3cb03cf4133e1cb0343ceb77",
                    _tpl: "644a3df63b0b6f03e101e065",
                    parentId: "235e2c39dee8210d863a1802",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "1c3fca0393dda35dbf3b34ef",
                    _tpl: "616554fe50224f204c1da2aa",
                    parentId: "235e2c39dee8210d863a1802",
                    slotId: "mod_scope",
                },
                {
                    _id: "1c8bade7524cc38381f91c3e",
                    _tpl: "5b7be4895acfc400170e2dd5",
                    parentId: "235e2c39dee8210d863a1802",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "fd09ece8a58d4b8f1a15df21",
                    _tpl: "644a3df63b0b6f03e101e065",
                    parentId: "a0711714b41d9bb51a7000e7",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "d8c79bed26e355386850cbae",
                    _tpl: "644a3df63b0b6f03e101e065",
                    parentId: "f4b7ca3f11edb159a704532f",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "345d958ccb96bababba25745",
                    _tpl: "644a3df63b0b6f03e101e065",
                    parentId: "0ab7d84bef3b91ef853f6fd6",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "64851b9ffa714fd85913bf85",
                    _tpl: "5b3116595acfc40019476364",
                    parentId: "1c3fca0393dda35dbf3b34ef",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "9a2a120113328fb6fe1ccbba",
                    _tpl: "5b057b4f5acfc4771e1bd3e9",
                    parentId: "1c8bade7524cc38381f91c3e",
                    slotId: "mod_foregrip",
                },
                {
                    _id: "4334bdf550a7c848a6bf7087",
                    _tpl: "616554fe50224f204c1da2aa",
                    parentId: "76b4b8fccf0b241dc81fc527",
                    slotId: "mod_scope_001",
                },
                {
                    _id: "a67e41babbd3fc0b7b18bee3",
                    _tpl: "616554fe50224f204c1da2aa",
                    parentId: "76b4b8fccf0b241dc81fc527",
                    slotId: "mod_scope_002",
                },
                {
                    _id: "55cfb660eb04ae91f321ea62",
                    _tpl: "616554fe50224f204c1da2aa",
                    parentId: "76b4b8fccf0b241dc81fc527",
                    slotId: "mod_scope_003",
                },
                {
                    _id: "f25d8ad9a7f8436a5c9f5615",
                    _tpl: "5b3116595acfc40019476364",
                    parentId: "4334bdf550a7c848a6bf7087",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "c27a5b5ac7e554646e0a6b97",
                    _tpl: "5b3116595acfc40019476364",
                    parentId: "a67e41babbd3fc0b7b18bee3",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "131f84fd5943a6a8873fdd12",
                    _tpl: "5b3116595acfc40019476364",
                    parentId: "55cfb660eb04ae91f321ea62",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "666153cb010019bccefc6be6",
            Name: "CCTV",
            Root: "ea063e307a88a192db3e11f0",
            Items: [
                {
                    _id: "ea063e307a88a192db3e11f0",
                    _tpl: "5cc82d76e24e8d00134b4b83",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "e7b076ca2a8f56e25ea87d26",
                    _tpl: "5cc70093e4a949033c734312",
                    parentId: "ea063e307a88a192db3e11f0",
                    slotId: "mod_magazine",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "88716eba819726dd380ecfec",
                    _tpl: "5cebec10d7f00c065703d185",
                    parentId: "ea063e307a88a192db3e11f0",
                    slotId: "mod_stock",
                },
                {
                    _id: "c55384333a8b620ac73c4c0b",
                    _tpl: "5cc700ede4a949033c734315",
                    parentId: "ea063e307a88a192db3e11f0",
                    slotId: "mod_reciever",
                },
                {
                    _id: "79eda2408b3dbf235f8e588a",
                    _tpl: "5cc701aae4a949000e1ea45c",
                    parentId: "ea063e307a88a192db3e11f0",
                    slotId: "mod_barrel",
                    upd: {
                        SpawnedInSession: true,
                    },
                },
                {
                    _id: "299bfd53b71bf42cca35f2a8",
                    _tpl: "5cc6ea85e4a949000e1ea3c3",
                    parentId: "ea063e307a88a192db3e11f0",
                    slotId: "mod_charge",
                },
                {
                    _id: "7fc50c498257a83e3a1acf3d",
                    _tpl: "5cc700d4e4a949000f0f0f28",
                    parentId: "88716eba819726dd380ecfec",
                    slotId: "mod_stock_000",
                },
                {
                    _id: "de6a81c1c522c331b92f2d41",
                    _tpl: "5cc7012ae4a949001252b43e",
                    parentId: "c55384333a8b620ac73c4c0b",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "daf7a42c5a3006db4035fb4c",
                    _tpl: "5cc7012ae4a949001252b43e",
                    parentId: "c55384333a8b620ac73c4c0b",
                    slotId: "mod_mount_001",
                },
                {
                    _id: "9fdfb0cdb82ded75ff4af71a",
                    _tpl: "5dfe6104585a0c3e995c7b82",
                    parentId: "c55384333a8b620ac73c4c0b",
                    slotId: "mod_scope",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0, 0],
                            ScopesSelectedModes: [0, 0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "aebbbf77e338b0552f4796b8",
                    _tpl: "5cc9c20cd7f00c001336c65d",
                    parentId: "de6a81c1c522c331b92f2d41",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "308a1bf1ba97568a0f57980b",
                    _tpl: "5cc9c20cd7f00c001336c65d",
                    parentId: "daf7a42c5a3006db4035fb4c",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
            ],
        },
        {
            Id: "6661544e010019bccee69296",
            Name: "Keep It 100",
            Root: "b8bdfd29adfa29e817399171",
            Items: [
                {
                    _id: "b8bdfd29adfa29e817399171",
                    _tpl: "5c488a752e221602b412af63",
                    upd: {
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "38b16108ff94cfbc019ac7df",
                    _tpl: "5c48a2c22e221602b313fb6c",
                    parentId: "b8bdfd29adfa29e817399171",
                    slotId: "mod_pistol_grip",
                },
                {
                    _id: "67b3f3d260c1491e0e167665",
                    _tpl: "5c6592372e221600133e47d7",
                    parentId: "b8bdfd29adfa29e817399171",
                    slotId: "mod_magazine",
                },
                {
                    _id: "23694f0c57e0096e54feeb47",
                    _tpl: "5c48a14f2e2216152006edd7",
                    parentId: "b8bdfd29adfa29e817399171",
                    slotId: "mod_handguard",
                },
                {
                    _id: "7a5cf6908ad595a5bb95ce5e",
                    _tpl: "5c48a2852e221602b21d5923",
                    parentId: "b8bdfd29adfa29e817399171",
                    slotId: "mod_barrel",
                },
                {
                    _id: "f54fb433fa0263d197bb4664",
                    _tpl: "5ae30bad5acfc400185c2dc4",
                    parentId: "b8bdfd29adfa29e817399171",
                    slotId: "mod_sight_rear",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "0b7bcf7119d9973b8f9d9393",
                    _tpl: "57cffcd624597763133760c5",
                    parentId: "23694f0c57e0096e54feeb47",
                    slotId: "mod_mount_000",
                },
                {
                    _id: "eaf514f8e62e61b6b24fce04",
                    _tpl: "6269545d0e57f218e4548ca2",
                    parentId: "23694f0c57e0096e54feeb47",
                    slotId: "mod_mount_001",
                },
                {
                    _id: "4b1602a2c75027b33d17ddc2",
                    _tpl: "6269545d0e57f218e4548ca2",
                    parentId: "23694f0c57e0096e54feeb47",
                    slotId: "mod_mount_002",
                },
                {
                    _id: "b7a85870580cbcf50e249b40",
                    _tpl: "57fd23e32459772d0805bcf1",
                    parentId: "23694f0c57e0096e54feeb47",
                    slotId: "mod_tactical",
                    upd: {
                        Light: {
                            IsActive: true,
                            SelectedMode: 0,
                        },
                    },
                },
                {
                    _id: "d2cac0c15ac47d5d5d1305fa",
                    _tpl: "5c17804b2e2216152006c02f",
                    parentId: "23694f0c57e0096e54feeb47",
                    slotId: "mod_sight_front",
                    upd: {
                        Sight: {
                            ScopesCurrentCalibPointIndexes: [0],
                            ScopesSelectedModes: [0],
                            SelectedScope: 0,
                        },
                    },
                },
                {
                    _id: "51f1a50986a18b838f85145e",
                    _tpl: "56ea6fafd2720b844b8b4593",
                    parentId: "7a5cf6908ad595a5bb95ce5e",
                    slotId: "mod_muzzle",
                },
            ],
        },
        {
            Id: "6661549f010019bcce6e3e14",
            Name: "Womp Womp",
            Root: "6f3c7ab1720bf48bf59278d9",
            Items: [
                {
                    _id: "6f3c7ab1720bf48bf59278d9",
                    _tpl: "5cadfbf7ae92152ac412eeef",
                    upd: {
                        SpawnedInSession: true,
                        Repairable: {
                            MaxDurability: 100,
                            Durability: 100,
                        },
                        FireMode: {
                            FireMode: "single",
                        },
                    },
                },
                {
                    _id: "6bf4eade6e6c194df70d469b",
                    _tpl: "5caf1109ae9215753c44119f",
                    parentId: "6f3c7ab1720bf48bf59278d9",
                    slotId: "mod_magazine",
                },
                {
                    _id: "06b4746103bfd41b1ffc7316",
                    _tpl: "5b2389515acfc4771e1be0c0",
                    parentId: "6f3c7ab1720bf48bf59278d9",
                    slotId: "mod_scope",
                },
            ],
        },
    ];
}
exports.Weapons = Weapons;
//# sourceMappingURL=Weapons.js.map