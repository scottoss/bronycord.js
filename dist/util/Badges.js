"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badges = void 0;
const BitField_1 = require("./BitField");
const Constants_1 = require("./Constants");
class Badges extends BitField_1.BitField {
    constructor(bits) {
        super(bits);
    }
    static resolve(bit) {
        return super.resolve(bit);
    }
}
exports.Badges = Badges;
Badges.FLAGS = Constants_1.BadgesFlags;
//# sourceMappingURL=Badges.js.map