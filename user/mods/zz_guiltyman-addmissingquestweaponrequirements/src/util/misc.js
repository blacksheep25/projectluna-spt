"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pushIfNotExists = void 0;
// Could've used Set, but it'd do be like that sometimes
function pushIfNotExists(arr, item) {
    if (arr.indexOf(item) === -1) {
        arr.push(item);
        return true;
    }
    return false;
}
exports.pushIfNotExists = pushIfNotExists;
//# sourceMappingURL=misc.js.map