/**
 * Copyright: jbs4bmx
*/

import { DependencyContainer } from "tsyringe";
import { IMod } from "@spt-aki/models/external/mod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer"
import { VFS } from "@spt-aki/utils/VFS";
import { jsonc } from "jsonc";
import path from "path";

"use strict";

class healer implements IMod
{
	private pkg;

	public postDBLoad(container: DependencyContainer): void
	{
        const vfs = container.resolve<VFS>("VFS");
        const {MedKits,Pills,Bandages,Splints,Topicals,SurgicalKits,Tourniquets,Injectors} = jsonc.parse(vfs.readFile(path.resolve(__dirname, "../config.jsonc")));
		const logger = container.resolve<ILogger>("WinstonLogger");
        const db = container.resolve<DatabaseServer>("DatabaseServer").getTables().templates.items;
		this.pkg = require("../package.json");

		let locationsMin = [
			"laboratory",
			"Interchange",
			"ReservBase",
			"TarkovStreets",
			"Sandbox"
		]
		let locationsMax = [
			"laboratory",
			"Interchange",
			"Shoreline",
			"ReservBase",
			"factory4_day",
			"factory4_night",
			"bigmap",
			"Woods",
			"TarkovStreets",
			"Sandbox"
		]
		const injectorList = [
			"544fb3f34bdc2d03748b456a",
			"5c0e530286f7747fa1419862",
			"5c0e531286f7747fa54205c2",
			"5c0e531d86f7747fa23f4d42",
			"5c0e533786f7747fa23f4d47",
			"5c0e534186f7747fa1419867",
			"5c10c8fd86f7743d7d706df3",
			"5ed515c8d380ab312177c0fa",
			"5ed515e03a40a50460332579",
			"5ed515ece452db0eb56fc028",
			"5ed515f6915ec335206e4152",
			"5ed5160a87bb8443d10680b5",
			"5ed51652f6c34d2cc26336a1",
			"5ed5166ad380ab312177c100",
			"5fca138c2a7b221b2852a5c6",
			"5fca13ca637ee0341a484f46",
			"637b60c3b7afa97bfc3d7001",
			"637b612fb7afa97bfc3d7005",
			"637b6179104668754b72f8f5",
			"637b620db7afa97bfc3d7009",
			"637b6251104668754b72f8f9"
		]
		const parentList = [
			"5448f3a14bdc2d27728b4569",
			"5448f3a64bdc2d60728b456a"
		]

		for (let item in db)
		{
			let medItem = db[item];


			/** ===== MEDKITS ================================================================ */
			if (MedKits.Ai2.Enable === true) {
				//AI-2 Medkit
				if (medItem._id === "5755356824597772cb798962") {
					medItem._props.MaxHpResource = MedKits.Ai2.hpResource
					medItem._props.medUseTime = 1;
					medItem._props.hpResourceRate = MedKits.Ai2.hpResourceRate;
					if (MedKits.Ai2.AddStopLightBleeding === true) {
						medItem._props.effects_damage.LightBleeding =
						{
							"delay": 0,
							"duration": MedKits.Ai2.Duration,
							"fadeOut": 0,
							"cost": 10,
							"healthPenaltyMin": 0,
							"healthPenaltyMax": 0
						};
					}
					if (MedKits.Ai2.AddStopHeavyBleeding === true) {
						medItem._props.effects_damage.HeavyBleeding =
						{
							"delay": 0,
							"duration": MedKits.Ai2.Duration,
							"fadeOut": 0,
							"cost": 20,
							"healthPenaltyMin": 0,
							"healthPenaltyMax": 0
						};
					}
				}
			}
			if (MedKits.Car.Enable === true) {
				//Car First Aid Kit
				if (medItem._id === "590c661e86f7741e566b646a") {
					medItem._props.MaxHpResource = MedKits.Car.hpResource;
					medItem._props.medUseTime = 3;
					medItem._props.hpResourceRate = MedKits.Car.hpResourceRate;
					medItem._props.effects_damage.LightBleeding.duration = MedKits.Car.Duration;
					medItem._props.effects_damage.LightBleeding.cost= 10;
					if (MedKits.Car.AddStopHeavyBleeding === true) {
						medItem._props.effects_damage.HeavyBleeding =
						{
							"delay": 0,
							"duration": MedKits.Car.Duration,
							"fadeOut": 0,
							"cost": 20,
							"healthPenaltyMin": 0,
							"healthPenaltyMax": 0
						};
					}
				}
			}
			if (MedKits.Salewa.Enable === true) {
				//Salewa
				if (medItem._id === "544fb45d4bdc2dee738b4568") {
					medItem._props.MaxHpResource = MedKits.Salewa.hpResource;
					medItem._props.medUseTime = 3;
					medItem._props.hpResourceRate = MedKits.Salewa.hpResourceRate;
					medItem._props.effects_damage.LightBleeding.duration = MedKits.Salewa.Duration;
					medItem._props.effects_damage.LightBleeding.cost= 10;
					medItem._props.effects_damage.HeavyBleeding.duration = MedKits.Salewa.Duration;
					medItem._props.effects_damage.HeavyBleeding.cost= 20;
					if (MedKits.Salewa.AddFixFracture === true) {
						medItem._props.effects_damage.Fracture = {
							"delay": 0,
							"duration": MedKits.Salewa.Duration,
							"fadeOut": 0,
							"cost": 30,
							"healthPenaltyMin": 0,
							"healthPenaltyMax": 0
						};
					}
					if (MedKits.Salewa.AddFixDestroyedPart === true) {
						medItem._props.effects_damage.DestroyedPart = {
							"delay": 0,
							"duration": MedKits.Salewa.Duration,
							"fadeOut": 0,
							"cost": 50,
							"healthPenaltyMin": 70,
							"healthPenaltyMax": 100
						};
					}
				}
			}
			if (MedKits.Ifak.Enable === true) {
				//IFAK
				if (medItem._id === "590c678286f77426c9660122") {
					medItem._props.MaxHpResource = MedKits.Ifak.hpResource;
					medItem._props.medUseTime = 1;
					medItem._props.hpResourceRate = MedKits.Ifak.hpResourceRate;
					medItem._props.effects_damage.LightBleeding.duration = MedKits.Ifak.Duration;
					medItem._props.effects_damage.LightBleeding.cost= 10;
					medItem._props.effects_damage.HeavyBleeding.duration = MedKits.Ifak.Duration;
					medItem._props.effects_damage.HeavyBleeding.cost= 20;
					medItem._props.effects_damage.RadExposure.duration = MedKits.Ifak.Duration;
					medItem._props.effects_damage.RadExposure.cost = 10;
					if (MedKits.Ifak.AddFixFracture === true) {
						medItem._props.effects_damage.Fracture = {
							"delay": 0,
							"duration": MedKits.Ifak.Duration,
							"fadeOut": 0,
							"cost": 30,
							"healthPenaltyMin": 0,
							"healthPenaltyMax": 0
						};
					}
					if (MedKits.Ifak.AddFixDestroyedPart === true) {
						medItem._props.effects_damage.DestroyedPart = {
							"delay": 0,
							"duration": MedKits.Ifak.Duration,
							"fadeOut": 0,
							"cost": 50,
							"healthPenaltyMin": 25,
							"healthPenaltyMax": 75
						};
					}
				}
			}
			if (MedKits.Sanitar.Enable === true) {
				//Sanitar's Personal IFAK Medkit
				if (medItem._id === "5e99711486f7744bfc4af328") {
					if (MedKits.Sanitar.ResizeTo1x1 === true) {
						medItem._props.Height = 1;
					}
					medItem._props.MaxHpResource = MedKits.Sanitar.hpResource;
					medItem._props.medUseTime = 1;
					medItem._props.hpResourceRate = MedKits.Sanitar.hpResourceRate;
					medItem._props.effects_damage.DestroyedPart.duration = MedKits.Sanitar.Duration;
					if (MedKits.Sanitar.AddStopLightBleeding === true) {
						medItem._props.effects_damage.LightBleeding =
						{
							"delay": 0,
							"duration": MedKits.Sanitar.Duration,
							"fadeOut": 0,
							"cost": 10,
							"healthPenaltyMin": 0,
							"healthPenaltyMax": 0
						};
					}
					if (MedKits.Sanitar.AddStopHeavyBleeding === true) {
						medItem._props.effects_damage.HeavyBleeding =
						{
							"delay": 0,
							"duration": MedKits.Sanitar.Duration,
							"fadeOut": 0,
							"cost": 20,
							"healthPenaltyMin": 0,
							"healthPenaltyMax": 0
						};
					}
					if (MedKits.Sanitar.AddFixFracture === true) {
						medItem._props.effects_damage.Fracture = {
							"delay": 0,
							"duration": 0,
							"fadeOut": 0,
							"cost": 30,
							"healthPenaltyMin": 40,
							"healthPenaltyMax": 100
						};
					}
				}
			}
			if (MedKits.Afak.Enable === true) {
				//AFAK
				if (medItem._id === "60098ad7c2240c0fe85c570a") {
					medItem._props.MaxHpResource = MedKits.Afak.hpResource;
					medItem._props.medUseTime = 1;
					medItem._props.hpResourceRate = MedKits.Afak.hpResourceRate;
					medItem._props.effects_damage.LightBleeding.duration = MedKits.Afak.Duration;
					medItem._props.effects_damage.LightBleeding.cost= 10;
					medItem._props.effects_damage.HeavyBleeding.duration = MedKits.Afak.Duration;
					medItem._props.effects_damage.HeavyBleeding.cost= 20;
					medItem._props.effects_damage.RadExposure.duration = MedKits.Afak.Duration;
					medItem._props.effects_damage.RadExposure.cost = 10;
					if (MedKits.Afak.AddFixFracture === true) {
						medItem._props.effects_damage.Fracture = {
							"delay": 0,
							"duration": 0,
							"fadeOut": 0,
							"cost": 30,
							"healthPenaltyMin": 0,
							"healthPenaltyMax": 0
						};
					}
					if (MedKits.Afak.AddFixDestroyedPart === true) {
						medItem._props.effects_damage.DestroyedPart = {
							"delay": 0,
							"duration": 0,
							"fadeOut": 0,
							"cost": 50,
							"healthPenaltyMin": 100,
							"healthPenaltyMax": 100
						};
					}
				}
			}
			if (MedKits.Grizzly.Enable === true) {
				//Grizzly
				if (medItem._id === "590c657e86f77412b013051d") {
					medItem._props.MaxHpResource = MedKits.Grizzly.hpResource;
					medItem._props.medUseTime = 5;
					medItem._props.hpResourceRate = MedKits.Grizzly.hpResourceRate;
					medItem._props.effects_damage.LightBleeding.duration = MedKits.Grizzly.Duration;
					medItem._props.effects_damage.LightBleeding.cost= 10;
					medItem._props.effects_damage.HeavyBleeding.duration = MedKits.Grizzly.Duration;
					medItem._props.effects_damage.HeavyBleeding.cost= 20;
					medItem._props.effects_damage.RadExposure.duration = MedKits.Grizzly.Duration;
					medItem._props.effects_damage.RadExposure.cost = 10;
					medItem._props.effects_damage.Contusion.duration = MedKits.Grizzly.Duration;
					medItem._props.effects_damage.Contusion.cost = 10;
					if (MedKits.Grizzly.AddFixDestroyedPart === true) {
						medItem._props.effects_damage.DestroyedPart = {
							"delay": 0,
							"duration": 0,
							"fadeOut": 0,
							"healthPenaltyMin": 100,
							"healthPenaltyMax": 100
						};
					}
				}
			}

			/** ===== PILLS ================================================================== */
			if(Pills.Analgin.Enable === true) {
				//Analgin Painkillers
				if (medItem._id === "544fb37f4bdc2dee738b4567") {
					medItem._props.MaxHpResource = Pills.Analgin.hpResource;
					medItem._props.medUseTime = 2;
					medItem._props.effects_health.Hydration.value = Pills.Analgin.HydrationBurn;
					medItem._props.effects_damage.Pain.duration = Pills.Analgin.Duration;
					if (Pills.Analgin.AddEnergyIncrease === true) {
						medItem._props.effects_health.Energy = {
							"delay": 0,
							"duration": Pills.Analgin.EnergyIncrease,
							"fadeOut": 0
						};
					}
					if (Pills.Analgin.AddRadExposureFix === true) {
						medItem._props.effects_damage.RadExposure = {
							"delay": 0,
							"duration": Pills.Analgin.Duration,
							"fadeOut": 0,
							"cost": 0
						};
					}
				}
			}
			if(Pills.Augmentin.Enable === true) {
				//Augmentin Antibiotic Pills
				if (medItem._id === "590c695186f7741e566b64a2") {
					medItem._props.MaxHpResource = Pills.Augmentin.hpResource;
					medItem._props.medUseTime = 5;
					medItem._props.effects_damage.Pain.duration = Pills.Augmentin.Duration;
					medItem._props.effects_health.Energy.value = Pills.Augmentin.EnergyIncrease;
					medItem._props.effects_health.Hydration.value = Pills.Augmentin.HydrationBurn;
					if (Pills.Augmentin.AddRadExposureFix === true) {
						medItem._props.effects_damage.RadExposure = {
							"delay": 0,
							"duration": Pills.Augmentin.Duration,
							"fadeOut": 0,
							"cost": 0
						};
					}
				}
			}
			if(Pills.Ibuprofen.Enable === true) {
				//Ibuprofen Pills
				if (medItem._id === "5af0548586f7743a532b7e99") {
					medItem._props.MaxHpResource = Pills.Ibuprofen.hpResource;
					medItem._props.effects_health.Hydration.value = Pills.Ibuprofen.HydrationBurn;
					medItem._props.effects_damage.Pain.duration = Pills.Ibuprofen.Duration;
					if (Pills.Ibuprofen.AddEnergyIncrease === true) {
						medItem._props.effects_health.Energy = {
							"delay": 0,
							"duration": Pills.Ibuprofen.EnergyIncrease,
							"fadeOut": 0
						};
					}
					if (Pills.Ibuprofen.AddRadExposureFix === true) {
						medItem._props.effects_damage.RadExposure = {
							"delay": 0,
							"duration": Pills.Ibuprofen.Duration,
							"fadeOut": 0,
							"cost": 0
						};
					}
				}
			}

			/** ===== BANDAGES =============================================================== */
			if (Bandages.Aseptic.Enable === true) {
				//Aseptic Bandage
				if (medItem._id === "544fb25a4bdc2dfb738b4567") {
					medItem._props.MaxHpResource = Bandages.Aseptic.hpResource;
					medItem._props.effects_damage.LightBleeding.duration = Bandages.Aseptic.Duration;
					if (Bandages.Aseptic.AddStopHeavyBleeding === true) {
						medItem._props.effects_damage.HeavyBleeding =
						{
							"delay": 0,
							"duration": Bandages.Aseptic.Duration,
							"fadeOut": 0
						};
					}
				}
			}
			if (Bandages.Army.Enable === true) {
				//Army Bandage
				if (medItem._id === "5751a25924597722c463c472") {
					medItem._props.MaxHpResource = Bandages.Army.hpResource;
					medItem._props.effects_damage.LightBleeding.duration = Bandages.Army.Duration;
					if (Bandages.Army.AddStopHeavyBleeding === true) {
						medItem._props.effects_damage.HeavyBleeding =
						{
							"delay": 0,
							"duration": Bandages.Army.Duration,
							"fadeOut": 0
						};
					}
				}
			}

			/** ===== SPLINTS ================================================================ */
			if (Splints.Splint.Enable === true) {
				//Splint
				if (medItem._id === "544fb3364bdc2d34748b456a") {
					medItem._props.MaxHpResource = Splints.Splint.hpResource;
					medItem._props.medUseTime = 2;
				}
			}
			if (Splints.AluminumSplint.Enable === true) {
				//Aluminum Splint
				if (medItem._id === "5af0454c86f7746bf20992e8") {
					medItem._props.MaxHpResource = Splints.AluminumSplint.hpResource;
					medItem._props.medUseTime = 1;
				}
			}

			/** ===== TOPICALS =============================================================== */
			if (Topicals.Vaseline.Enable === true) {
				//Vaseline
				if (medItem._id === "5755383e24597772cb798966") {
					medItem._props.MaxHpResource = Topicals.Vaseline.hpResource;
					medItem._props.medUseTime = 2;
					medItem._props.effects_health.Energy.value = Topicals.Vaseline.EnergyBurn;
					medItem._props.effects_health.Hydration.value = Topicals.Vaseline.HydrationBurn;
					medItem._props.effects_damage.Pain.duration =Topicals.Vaseline.Duration;
					if (Topicals.Vaseline.AddRadExposureFix === true) {
						medItem._props.effects_damage.RadExposure =
						{
							"delay": 0,
							"duration": Topicals.Vaseline.Duration,
							"fadeOut": 10
						};
					}
				}
			}
			if (Topicals.GoldenStarBalm.Enable === true) {
				//Golden Star Balm
				if (medItem._id === "5751a89d24597722aa0e8db0") {
					medItem._props.MaxHpResource = Topicals.GoldenStarBalm.hpResource;
					medItem._props.medUseTime = 2;
					medItem._props.effects_damage.Pain.duration =Topicals.GoldenStarBalm.Duration;
					medItem._props.effects_health.Energy.value = Topicals.GoldenStarBalm.EnergyBurn;
					if (Topicals.GoldenStarBalm.EnableHydrationBurn === true) {
						medItem._props.effects_health.Hydration =
						{
							"value": Topicals.GoldenStarBalm.HydrationBurn
						};
					}
					if (Topicals.GoldenStarBalm.AddRadExposureFix === true) {
						medItem._props.effects_damage.RadExposure =
						{
							"delay": 0,
							"duration": Topicals.GoldenStarBalm.Duration,
							"fadeOut": 10
						};
					}
				}
			}

			/** ===== SURGICALKITS =========================================================== */
			if (SurgicalKits.CMSSurgicalKit.Enable === true) {
				//CMS Kit
				if (medItem._id === "5d02778e86f774203e7dedbe") {
					medItem._props.MaxHpResource = SurgicalKits.CMSSurgicalKit.hpResource;
					medItem._props.medUseTime = 8;
					medItem._props.effects_damage.DestroyedPart.healthPenaltyMin = 80;
					medItem._props.effects_damage.DestroyedPart.healthPenaltyMax = 100;
					if (SurgicalKits.CMSSurgicalKit.AddStopLightBleeding === true) {
						medItem._props.effects_damage.LightBleeding =
						{
							"delay": 0,
							"duration": 0,
							"fadeOut": 0
						};
					}
					if (SurgicalKits.CMSSurgicalKit.AddStopHeavyBleeding === true) {
						medItem._props.effects_damage.HeavyBleeding =
						{
							"delay": 0,
							"duration": 0,
							"fadeOut": 0
						};
					}
					if (SurgicalKits.CMSSurgicalKit.AddFixFracture === true) {
						medItem._props.effects_damage.Fracture = {
							"delay": 0,
							"duration": 0,
							"fadeOut": 0,
							"healthPenaltyMin": 0,
							"healthPenaltyMax": 0
						};
					}
				}
			}
			if (SurgicalKits.SanitarSurgicalKit.Enable === true) {
				//Sanitar Medical Surgical Kit
				if (medItem._id === "5e99735686f7744bfc4af32c") {
					if (SurgicalKits.SanitarSurgicalKit.ResizeTo2x1 === true) {
						medItem._props.Width = 2;
						medItem._props.Height = 1;
					}
					medItem._props.MaxHpResource = SurgicalKits.SanitarSurgicalKit.hpResource;
					medItem._props.effects_damage.DestroyedPart.healthPenaltyMin = 30;
					medItem._props.effects_damage.DestroyedPart.healthPenaltyMax = 90;
					if (SurgicalKits.SanitarSurgicalKit.AddStopLightBleeding === true) {
						medItem._props.effects_damage.LightBleeding =
						{
							"delay": 0,
							"duration": 0,
							"fadeOut": 0
						};
					}
					if (SurgicalKits.SanitarSurgicalKit.AddStopHeavyBleeding === true) {
						medItem._props.effects_damage.HeavyBleeding =
						{
							"delay": 0,
							"duration": 0,
							"fadeOut": 0
						};
					}
					if (SurgicalKits.SanitarSurgicalKit.AddFixFracture === true) {
						medItem._props.effects_damage.Fracture = {
							"delay": 0,
							"duration": 0,
							"fadeOut": 0,
							"healthPenaltyMin": 0,
							"healthPenaltyMax": 0
						};
					}
				}
			}
			if (SurgicalKits.Surv12FieldSurgicalKit.Enable === true) {
				//Surv12 Field Surgical Kit
				if (medItem._id === "5d02797c86f774203f38e30a") {
					medItem._props.MaxHpResource = SurgicalKits.Surv12FieldSurgicalKit.hpResource;
					medItem._props.medUseTime = 10;
					medItem._props.effects_damage.DestroyedPart.healthPenaltyMin = 100;
					medItem._props.effects_damage.DestroyedPart.healthPenaltyMax = 100;
					if (SurgicalKits.Surv12FieldSurgicalKit.AddStopLightBleeding === true) {
						medItem._props.effects_damage.LightBleeding =
						{
							"delay": 0,
							"duration": 0,
							"fadeOut": 0
						};
					}
					if (SurgicalKits.Surv12FieldSurgicalKit.AddStopHeavyBleeding === true) {
						medItem._props.effects_damage.HeavyBleeding =
						{
							"delay": 0,
							"duration": 0,
							"fadeOut": 0
						};
					}
				}
			}

			/** ===== TOURNIQUETS ============================================================ */
			if (Tourniquets.Esmarch.Enable === true) {
				//Esmarch Tourniquet
				if (medItem._id === "5e831507ea0a7c419c2f9bd9") {
					medItem._props.MaxHpResource = Tourniquets.Esmarch.hpResource;
					medItem._props.medUseTime = 3;
					if (Tourniquets.Esmarch.AddStopLightBleeding === true) {
						medItem._props.effects_damage.LightBleeding =
						{
							"delay": 0,
							"duration": 0,
							"fadeOut": 0
						};
					}
				}
			}
			if (Tourniquets.CalokB.Enable === true) {
				//Calok-B Hemostatic
				if (medItem._id === "5e8488fa988a8701445df1e4") {
					medItem._props.MaxHpResource = Tourniquets.CalokB.hpResource;
					medItem._props.medUseTime = 2;
					if (Tourniquets.CalokB.AddStopLightBleeding === true) {
						medItem._props.effects_damage.LightBleeding =
						{
							"delay": 0,
							"duration": 0,
							"fadeOut": 0
						};
					}
				}
			}
			if (Tourniquets.Cat.Enable === true) {
				//Hemostatic Tourniquet CAT
				if (medItem._id === "60098af40accd37ef2175f27") {
					medItem._props.MaxHpResource = Tourniquets.Cat.hpResource;
					medItem._props.medUseTime = 2;
					if (Tourniquets.Cat.AddStopLightBleeding === true) {
						medItem._props.effects_damage.LightBleeding =
						{
							"delay": 0,
							"duration": 0,
							"fadeOut": 0
						};
					}
				}
			}

			/** ===== INJECTORS ============================================================== */
			if (Injectors.Morphine.Enable === true) {
				// Morphine Injector
				if (medItem._id === "544fb3f34bdc2d03748b456a") {
					medItem._props.MaxHpResource = Injectors.Morphine.hpResource;
					medItem._props.effects_health.Hydration.value = Injectors.Morphine.HydrationBurn;
					medItem._props.effects_health.Energy.value = Injectors.Morphine.EnergyBurn;
					medItem._props.effects_damage.Pain.duration = Injectors.Morphine.Duration;
				}
			}
			if (Injectors.Sj1.Enable === true) {
				// Combat Stimulant Injector SJ1 TGLabs
				if (medItem._id === "5c0e531286f7747fa54205c2") {
					medItem._props.MaxHpResource = Injectors.Sj1.hpResource;
				}
			}
			if (Injectors.eTGchange.Enable === true) {
				// Regenerative Stimulant Injector eTG-change
				if (medItem._id === "5c0e534186f7747fa1419867") {
					medItem._props.MaxHpResource = Injectors.eTGchange.hpResource;
					medItem._props.effects_damage.Contusion.duration = Injectors.eTGchange.Duration;
				}
			}
			if (Injectors.Sj6.Enable === true) {
				// Combat Stimulant Injector SJ6 TGLabs
				if (medItem._id === "5c0e531d86f7747fa23f4d42") {
					medItem._props.MaxHpResource = Injectors.Sj6.hpResource;
				}
			}
			if (Injectors.Sj9.Enable === true) {
				// Combat Stimulant Injector SJ9 TGLabs
				if (medItem._id === "5fca13ca637ee0341a484f46") {
					medItem._props.MaxHpResource = Injectors.Sj9.hpResource;
				}
			}
			if (Injectors.Propital.Enable === true) {
				// Propital
				if (medItem._id === "5c0e530286f7747fa1419862") {
					medItem._props.MaxHpResource = Injectors.Propital.hpResource;
					medItem._props.effects_damage.Pain.duration = Injectors.Propital.Duration;
					medItem._props.effects_damage.Contusion.duration = Injectors.Propital.Duration;
				}
			}
			if (Injectors.Zagustin.Enable === true) {
				// Hemostatic Drug Zagustin
				if (medItem._id === "5c0e533786f7747fa23f4d47") {
					medItem._props.MaxHpResource = Injectors.Zagustin.hpResource;
					medItem._props.effects_damage.LightBleeding.duration = Injectors.Zagustin.Duration;
					medItem._props.effects_damage.HeavyBleeding.duration = Injectors.Zagustin.Duration;
				}
			}
			if (Injectors.Adrenaline.Enable === true) {
				// Adrenaline Injector
				if (medItem._id === "5c10c8fd86f7743d7d706df3") {
					medItem._props.MaxHpResource = Injectors.Adrenaline.hpResource;
					medItem._props.effects_damage.Pain.duration = Injectors.Adrenaline.Duration;
					medItem._props.effects_damage.Contusion.duration = Injectors.Adrenaline.Duration;
				}
			}
			if (Injectors.Meldonin.Enable === true) {
				// Meldonin
				if (medItem._id === "5ed5160a87bb8443d10680b5") {
					medItem._props.MaxHpResource = Injectors.Meldonin.hpResource;
				}
			}
			if (Injectors.Ahf1m.Enable === true) {
				// AHF1-M
				if (medItem._id === "5ed515f6915ec335206e4152") {
					medItem._props.MaxHpResource = Injectors.Ahf1m.hpResource;
				}
			}
			if (Injectors.bTG.Enable === true) {
				// 3-(b-TG)
				if (medItem._id === "5ed515c8d380ab312177c0fa") {
					medItem._props.MaxHpResource = Injectors.bTG.hpResource;
				}
			}
			if (Injectors.Norepinephrine.Enable === true) {
				// L1 (Norepinephrine)
				if (medItem._id === "5ed515e03a40a50460332579") {
					medItem._props.MaxHpResource = Injectors.Norepinephrine.hpResource;
					medItem._props.effects_damage.Pain.duration = Injectors.Norepinephrine.Duration;
				}
			}
			if (Injectors.p22.Enable === true) {
				// P22
				if (medItem._id === "5ed515ece452db0eb56fc028") {
					medItem._props.MaxHpResource = Injectors.p22.hpResource;
				}
			}
			if (Injectors.Obdolbos.Enable === true) {
				// Cocktail "Obdolbos"
				if (medItem._id === "5ed5166ad380ab312177c100") {
					medItem._props.MaxHpResource = Injectors.Obdolbos.hpResource;
				}
			}
			if (Injectors.Mule.Enable === true) {
				// M.U.L.E. stimulator
				if (medItem._id === "5ed51652f6c34d2cc26336a1") {
					medItem._props.MaxHpResource = Injectors.Mule.hpResource;
				}
			}
			if (Injectors.xTG12.Enable === true) {
				// Antidote xTG-12
				if (medItem._id === "5fca138c2a7b221b2852a5c6") {
					medItem._props.MaxHpResource = Injectors.xTG12.hpResource;
				}
			}
			if (Injectors.Obdolbos2.Enable === true) {
				// Obdolbos 2
				if (medItem._id === "637b60c3b7afa97bfc3d7001") {
					medItem._props.MaxHpResource = Injectors.Obdolbos2.hpResource;
				}
			}
			if (Injectors.Sj12.Enable === true) {
				// SJ12 TGLabs
				if (medItem._id === "637b612fb7afa97bfc3d7005") {
					medItem._props.MaxHpResource = Injectors.Sj12.hpResource;
				}
			}
			if (Injectors.Perfotoran.Enable === true) {
				// Perfotoran (Blue Blood)
				if (medItem._id === "637b6251104668754b72f8f9") {
					medItem._props.MaxHpResource = Injectors.Perfotoran.hpResource;
					medItem._props.effects_damage.Intoxication.duration = Injectors.Perfotoran.Duration;
					medItem._props.effects_damage.RadExposure.duration = Injectors.Perfotoran.Duration;
				}
			}
			if (Injectors.Trimadol.Enable === true) {
				// Trimadol
				if (medItem._id === "637b620db7afa97bfc3d7009") {
					medItem._props.MaxHpResource = Injectors.Trimadol.hpResource;
					medItem._props.effects_damage.Pain.duration = Injectors.Trimadol.Duration;
					medItem._props.effects_damage.Contusion.duration = Injectors.Trimadol.Duration;
				}
			}
			if (Injectors.Pnb.Enable === true) {
				// PNB
				if (medItem._id === "637b6179104668754b72f8f5") {
					medItem._props.MaxHpResource = Injectors.Pnb.hpResource;
					medItem._props.effects_damage.Contusion.duration = Injectors.Pnb.Duration;
				}
			}
			if (Injectors.ModInjectors.Enable === true) {
				// Untested... Do not use!
				if (!injectorList.includes(medItem._id)) {
					if (parentList.includes(medItem._parent)) {
						medItem._props.MaxHpResource = Injectors.ModInjectors.hpResource;
					}
				}
			}

		}

		logger.info(`${this.pkg.author}-${this.pkg.name} v${this.pkg.version}: Cached Successfully`);
	}

}

module.exports = { mod: new healer() }