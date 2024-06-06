# Loot Fuckery
Ever wanted to make granular adjustments to individual loot categories on maps? Keycards to common? Barter items too rare? This is the solution.

THE DEFAULT SETTINGS ARE JUST WHAT I USE. My settings are a slight overall nerf to loot. And has been balanced to be used in co-junction with my ReLooted mod.

This mod allows you to do 3 things.

1. It allows you to adjust the loose loot on maps down to each loot category through an extensive settings file. DOES NOT TOUCH CONTAINERS

2. It allows you to generate a detailed dump of the loot of a map, down to each individual item and count.

3. It allows you to generate a statistical analysis of targeted items over many runs.

# Changelog
## 1.0.0
Initial Release

## 1.0.1
Fixed a few invalid IDs in the loot.json (Sniper rifles, Grenade Launcher Magazines, and Face-wear) Didn't cause any crashes or anything. It just didn't adjust those item's spawn rate.

## 1.1.0

Added ID for revolver magazines. (This is the only functional change to the probability editing function)

Big updates for data generation

- Simplified data dumping. You now just specify how many runs. No detailed/multi-run anymore.
- Added features: total tallies, compact output, convert to name, localized names, multi-map generation.




## 1.2.0
New features for spawn chance editing.
- Global individual item multiplier
- Map Specific Category Multipliers
- Map Specific, Specific Item Multiplier
- Map Specific, total loot multiplier (Multiplicative with other mods adjusting loot multipliers, like SVM)

New feature for loot generation dumping
- It will now list maximum (most found during a single run, over all runs) along with the average

Old loot.json files are NOT compatible, but can be easily copied over if you just have a look.


## 1.2.1
THIS RELEASE ONLY HAS STUFF RELATED TO DATA DUMPING. THERE IS NO CHANGE TO ANY LOOT EDITING FEATURE.¨

- Added the ability to dump the loot from a real run when you load into a map. Enabled by default.

Fixed a wrongful calculation in the "max" statistical stat (100% Senko's fault!)

## 1.3.0
3.8.0 release.

Config files have been updated with a lot more info on what everything does. Old config files ARE NOT supported.

## 1.3.1

Minuscule update, no need to update if you don't have any issues. Only adds missing

``"55818b0e4bdc2dde698b456e": { "multi": 1.0 }, //LightLaser``


to ``loot.jsonc``

Any errors that look like below, while scary looking, are completely harmless. It just means that it didnt find any settings to pull from, and no changes will be made to their rarity.
```log
[LootFuckery] Found item without matching parent: 5cc9c20cd7f00c001336c65d - Parent: LightLaser -ID: 55818b0e4bdc2dde698b456e
```

## 1.3.2

- Fixes global items. Thanks dj346
- Made the mod adhere to package.json specifications

Config files made for 1.3.1 ARE Compatible.
MOD FOLDER HAS BEEN RENAMED. REMOVE THE OLD ONE AFTER COPYING OVER CONFIG FILES!
Remember to REMOVE the old folder or you will get issues.

## 1.3.2HOTFIX

- Fixed output folder being the old path.