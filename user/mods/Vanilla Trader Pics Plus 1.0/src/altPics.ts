/**
 * Copyright: jbs4bmx, revingly
*/

import { container, DependencyContainer } from "tsyringe";
import { PreAkiModLoader } from "@spt-aki/loaders/PreAkiModLoader";
import { IPreAkiLoadMod } from "@spt-aki/models/external/IPreAkiLoadMod";
import { IPostAkiLoadMod } from "@spt-aki/models/external/IPostAkiLoadMod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { ImageRouter } from "@spt-aki/routers/ImageRouter";

const logger = container.resolve<ILogger>("WinstonLogger");
const imageRouter = container.resolve<ImageRouter>("ImageRouter");
const preAkiModLoader = container.resolve<PreAkiModLoader>("PreAkiModLoader");

class TraderPics implements IPreAkiLoadMod, IPostAkiLoadMod
{
    private container: DependencyContainer;
    private pkg;
    private path = require('path');
    private modName = this.path.basename(this.path.dirname(__dirname.split('/').pop()));
    private fs = require('fs');

    public postAkiLoad(container: DependencyContainer) {
        this.pkg = require("../package.json");
        const { extension, updatePrapor, updateTherapist, smilingPrapor, updateFence, updateSkier, updatePeacekeeper, updateMechanic, updateRagman, updateJaeger, updateLightKeeper} = require('./config.json');
        const filepath = `${preAkiModLoader.getModPath(this.modName)}res/`;

        this.fs.readdir(filepath, (err, files) => {
            files.forEach(file => {
                const traderName = file.split('/').pop().split('.').shift();
                if (updatePrapor) {
                    if (smilingPrapor) {
                        if (traderName === "59b91ca086f77469a81232e4") {
                            imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}${"Smile"}.${extension}`);
                        }
                        else {
                            if (traderName === "59b91ca086f77469a81232e4") {
                                imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                            }
                        }
                    }
                }
                if (updateTherapist) {
                    if (traderName === "59b91cab86f77469aa5343ca") {
                        imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                    }
                }
                if (updateFence) {
                    if (traderName === "579dc571d53a0658a154fbec") {
                        imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                    }
                }
                if (updateSkier) {
                    if (traderName === "59b91cb486f77469a81232e5") {
                        imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                    }
                }
                if (updatePeacekeeper) {
                    if (traderName === "59b91cbd86f77469aa5343cb") {
                        imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                    }
                }
                if (updateMechanic) {
                    if (traderName === "5a7c2ebb86f7746e324a06ab") {
                        imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                    }
                }
                if (updateRagman) {
                    if (traderName === "5ac3b86a86f77461491d1ad8") {
                        imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                    }
                }
                if (updateJaeger) {
                    if (traderName === "5c06531a86f7746319710e1b") {
                        imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                    }
                }
                if (updateLightKeeper) {
                    if (traderName === "638f541a29ffd1183d187f57") {
                        imageRouter.addRoute(`/files/trader/avatar/${traderName}`, `${filepath}${traderName}.${extension}`);
                    }
                }
            });
        });
    }
}