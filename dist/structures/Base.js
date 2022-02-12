"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
class Base {
    constructor(client) {
        this.client = client;
    }
    _clone() {
        return Object.assign(Object.create(this), this);
    }
}
exports.Base = Base;
//# sourceMappingURL=Base.js.map