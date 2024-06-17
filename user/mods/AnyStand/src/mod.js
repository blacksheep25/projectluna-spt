"use strict";

class AnyStand {
	postDBLoad(container) {
		const logger = container.resolve("WinstonLogger");
		const database = container.resolve("DatabaseServer").getTables();
		const modDb = require("../db/items/itemData.json");


		//WeaponStand_Stash_1
		database.templates.items["6401c7b213d9b818bf0e7dd7"] = modDb.items["6401c7b213d9b818bf0e7dd7"];
		//WeaponStand_Stash_2
		database.templates.items["64381b582bb1c5dedd0fc925"] = modDb.items["64381b582bb1c5dedd0fc925"];
		//WeaponStand_Stash_3
		database.templates.items["64381b6e44b37a080d0245b9"] = modDb.items["64381b6e44b37a080d0245b9"];
		//PlaceOfFame_Stash_lvl1
		//database.templates.items["63dbd45917fff4dee40fe16e"] = modDb.items["63dbd45917fff4dee40fe16e"];
		//PlaceOfFame_Stash_lvl2
		//database.templates.items["65424185a57eea37ed6562e9"] = modDb.items["65424185a57eea37ed6562e9"];
		//PlaceOfFame_Stash_lvl3
		//database.templates.items["6542435ea57eea37ed6562f0"] = modDb.items["6542435ea57eea37ed6562f0"];




	}

	postAkiLoad(container) {
		const configServer = container.resolve("ConfigServer");
		const inventoryConfig = configServer.getConfig("aki-inventory");
		const modDb = require("../db/items/itemData.json");


	}
}


module.exports = { mod: new AnyStand() }