"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseManager = void 0;
const util_1 = require("../util");
class BaseManager {
    constructor() {
        this.cache = new util_1.Collection();
    }
    _add(raw) {
        if (!this.holds) {
            throw new Error('No "holds" exists.');
        }
        const obj = new this.holds(this.client, raw);
        this.cache.set(obj.id, obj);
        return obj;
    }
    _remove(id) {
        this.cache.delete(id);
    }
    resolve(resolvable) {
        var _a, _b;
        if (resolvable == null)
            return null;
        if (typeof resolvable === 'string')
            return (_a = this.cache.get(resolvable)) !== null && _a !== void 0 ? _a : null;
        if (this.holds && resolvable instanceof this.holds)
            return resolvable;
        const raw = resolvable;
        if ('_id' in raw)
            return (_b = this.cache.get(raw._id)) !== null && _b !== void 0 ? _b : null;
        return null;
    }
    resolveId(resolvable) {
        var _a;
        if (resolvable == null)
            return null;
        if (typeof resolvable === 'string')
            return resolvable;
        if (this.holds && resolvable instanceof this.holds)
            return resolvable.id;
        const raw = resolvable;
        if ('_id' in raw)
            (_a = raw._id) !== null && _a !== void 0 ? _a : null;
        return null;
    }
    valueOf() {
        return this.cache;
    }
}
exports.BaseManager = BaseManager;
//# sourceMappingURL=BaseManager.js.map