"use strict";
/**
 * Copyright: jbs4bmx, revingly
*/
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("C:/snapshot/project/node_modules/tsyringe");
const logger = tsyringe_1.container.resolve("WinstonLogger");
const imageRouter = tsyringe_1.container.resolve("ImageRouter");
const preAkiModLoader = tsyringe_1.container.resolve("PreAkiModLoader");

class TraderPics {
    container;
    pkg;
    path = require('path');
    modName = this.path.basename(this.path.dirname(__dirname.split('/').pop()));
    fs = require('fs');
    postAkiLoad(container) {
        this.pkg = require("../package.json");
        const { extension, updateAllTraders, updatePrapor, updateTherapist, updateFence, updateSkier, updatePeacekeeper, updateMechanic, updateRagman, updateJaeger, updateLightKeeper, smilingPrapor } = require('./config.json');
        const filepath = `${preAkiModLoader.getModPath(this.modName)}res/`;
        this.fs.readdir(filepath, (err, files) => {
            files.forEach(file => {
                const traderName = file.split('/').pop().split('.').shift();
                if (updateAllTraders) {
                    // Updates all supported traders, both default and mod traders.
                    imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                } else {
                    // Updates only the selected traders as supported by this mod.
                    if (updatePrapor) {
                        if (smilingPrapor) {
                            if (traderName === "59b91ca086f77469a81232e4") {
                                imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}${"Smile"}.${extension}`);
                            } else if (traderName === "59b91ca086f77469a81232e4") {
                                imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                            }
                        } else if (traderName === "59b91ca086f77469a81232e4") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                        }
                    }
                    if (updateTherapist && traderName === "59b91cab86f77469aa5343ca") {
                        imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                    }
                    if (updateFence && traderName === "579dc571d53a0658a154fbec") {
                        imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                    }
                    if (updateSkier && traderName === "59b91cb486f77469a81232e5") {
                        imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                    }
                    if (updatePeacekeeper && traderName === "59b91cbd86f77469aa5343cb") {
                        imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                    }
                    if (updateMechanic && traderName === "5a7c2ebb86f7746e324a06ab") {
                        imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                    }
                    if (updateRagman && traderName === "5ac3b86a86f77461491d1ad8") {
                        imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                    }
                    if (updateJaeger && traderName === "5c06531a86f7746319710e1b") {
                        imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                    }
                    if (updateLightKeeper && traderName === "638f541a29ffd1183d187f57") {
                        imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                    }
                }
            });
        });
    }
}

module.exports = { mod: new TraderPics() };
//# sourceMappingURL=altPics.js.map