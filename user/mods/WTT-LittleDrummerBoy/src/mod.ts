/* eslint-disable @typescript-eslint/naming-convention */

import { DependencyContainer } from "tsyringe";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { IPreAkiLoadMod } from "@spt-aki/models/external/IPreAkiLoadMod";
import { LogTextColor } from "@spt-aki/models/spt/logging/LogTextColor";
import type { GameController } from "@spt-aki/controllers/GameController";
import type { IEmptyRequestData } from "@spt-aki/models/eft/common/IEmptyRequestData";

// WTT imports
import { WTTInstanceManager } from "./WTTInstanceManager";

import { LittleDrummerBoyItemService } from "./LittleDrummerBoyItemService";


class LittleDrummerBoy
implements IPreAkiLoadMod, IPostDBLoadMod
{
    private Instance: WTTInstanceManager = new WTTInstanceManager();
    private version: string;
    private modName = "WTT-Little Drummer Boy";

    //#region CustomBosses
    private LittleDrummerBoyItemService: LittleDrummerBoyItemService = new LittleDrummerBoyItemService();

    debug = false;

    newIdMap = {
        ump_magazine_casket: "064a8c271a037b0c6a1b86f5",
        scar_magazine_casket: "5fa85819d2d2bfc0079e6b09",
        glock_magazine_cmag: "0672adb8be2d7d5a552ab4f2",
        g36_magazine_mg36cmag: "ccab703b048be433c03a671c",
        mp7_magazine_drum: "e64f03a25b5e13510bc55091",
        svd_magazine_drum: "e8aa1ef743f71f3e03b858f2",
        ar10_magazine_junglefighter: "fa6502a2104d4c80eeb404fe",
        p90_magazine_ergo: "d4fa8040a5b69d46bf8819e3",
        mp5_magazine_casket: "ca525c0ecc13667bd1ef357c",
        krissvector45_magazine_drum: "9a5e3fa7c8205cf253799070",
        kedr_magazine_drum: "a483029913455f81127fd070",
        pm_magazine_extended: "a10805748f12422327de49a8",
        m4a1_magazine_cmag: "c29c6c3762a2414440fb69c9"
    };

    public preAkiLoad(container: DependencyContainer): void 
    {
        this.Instance.preAkiLoad(container, this.modName);
        this.Instance.debug = this.debug;
        this.fixStupidMongoIds();

        // Custom Bosses
        this.LittleDrummerBoyItemService.preAkiLoad(this.Instance);

    }

    postDBLoad(container: DependencyContainer): void 
    {
        this.Instance.postDBLoad(container);
        this.LittleDrummerBoyItemService.postDBLoad();
        this.Instance.logger.log(
            `[${this.modName}] Database: Loading complete.`,
            LogTextColor.GREEN
        );
    }

    public fixStupidMongoIds(): void {
        // On game start, see if we need to fix issues from previous versions
        // Note: We do this as a method replacement so we can run _before_ SPT's gameStart
        this.Instance.container.afterResolution("GameController", (_, result: GameController) => {
            const originalGameStart = result.gameStart;

            result.gameStart = (url: string, info: IEmptyRequestData, sessionID: string, startTimeStampMS: number) => {
                // If there's a profile ID passed in, call our fixer method
                if (sessionID) {
                    this.fixProfile(sessionID);
                }

                // Call the original
                originalGameStart.apply(result, [url, info, sessionID, startTimeStampMS]);
            }
        });
    }

        // Handle updating the user profile between versions:
    // - Update the container IDs to the new MongoID format
    // - Look for any key cases in the user's inventory, and properly update the child key locations if we've moved them
    public fixProfile(sessionId: string) {
        const pmcProfile = this.Instance.profileHelper.getFullProfile(sessionId)?.characters?.pmc;
    
        // Do nothing if the profile isn't initialized
        if (!pmcProfile?.Inventory?.items) return;
    
        // Update the container IDs to the new MongoID format for inventory items
        pmcProfile.Inventory.items.forEach(item => {
            if (this.newIdMap[item._tpl]) {
                item._tpl = this.newIdMap[item._tpl];
                //console.log("Updated profile item to " + item._tpl);
            }
        });


    
        // Helper function to update rewards for quests
        const updateQuestRewards = (quests: any[]) => {
            if (!quests) return;
            
            quests.forEach(quest => {
                if (quest.rewards?.Success) {
                    quest.rewards.Success.forEach(reward => {
                        if (this.newIdMap[reward._tpl]) {
                            reward._tpl = this.newIdMap[reward._tpl];
                        }
                        if (Array.isArray(reward.items)) {
                            reward.items.forEach(item => {
                                if (this.newIdMap[item._tpl]) {
                                    item._tpl = this.newIdMap[item._tpl];
                                    //console.log("Updated reward item to " + item._tpl);
                                }
                            });
                        }
                    });
                }
            });
        };

        
        // Update rewards for Repeatable Quests
        pmcProfile.RepeatableQuests.forEach(questType => {
            updateQuestRewards(questType.activeQuests);
            updateQuestRewards(questType.inactiveQuests);
        });

    }

}

module.exports = { mod: new LittleDrummerBoy() };
