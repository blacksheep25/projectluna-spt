"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Heads_1 = require("../src/Heads");
class WH {
    postDBLoad(container) {
        const db = container.resolve("DatabaseServer");
        const jsonUtil = container.resolve("JsonUtil");
        const head = new Heads_1.Heads(db, jsonUtil);
        head.usec_head_4_combatpaint_1();
        head.soap_combatpaint();
        head.statham_head();
        head.snow_head();
        head.usec_head_eric_paint_1();
        head.usec_head_eric_injured();
    }
}
module.exports = { mod: new WH() };
//# sourceMappingURL=mod.js.map