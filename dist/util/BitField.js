"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitField = void 0;
const errors_1 = require("../errors");
const DEFAULT_BIT = 0;
class BitField {
    constructor(bits = DEFAULT_BIT) {
        this.bitfield = 0;
        this.bitfield = this.self.resolve(bits);
    }
    get self() {
        return this.constructor;
    }
    any(bit) {
        bit = this.self.resolve(bit);
        return (this.bitfield & bit) !== DEFAULT_BIT;
    }
    has(bit) {
        bit = this.self.resolve(bit);
        return (this.bitfield & bit) === bit;
    }
    toArray() {
        return Object.keys(this.self.FLAGS).filter(bit => this.has(bit));
    }
    add(...bits) {
        let total = 0;
        for (const bit of bits) {
            total |= this.self.resolve(bit);
        }
        if (Object.isFrozen(this))
            return new this.self(this.bitfield | total);
        this.bitfield |= total;
        return this;
    }
    remove(...bits) {
        let total = 0;
        for (const bit of bits) {
            total |= this.self.resolve(bit);
        }
        if (Object.isFrozen(this))
            return new this.self(this.bitfield & ~total);
        this.bitfield &= ~total;
        return this;
    }
    freeze() {
        return Object.freeze(this);
    }
    valueOf() {
        return this.bitfield;
    }
    serialize() {
        const serialized = {};
        for (const [flag, bit] of Object.entries(this.self.FLAGS))
            serialized[flag] = this.has(bit);
        return serialized;
    }
    *[Symbol.iterator]() {
        yield* this.toArray();
    }
    static resolve(bit) {
        if (bit instanceof BitField)
            return bit.bitfield;
        if (typeof bit === 'number' && bit >= DEFAULT_BIT)
            return bit;
        if (Array.isArray(bit))
            return bit.map(p => this.resolve(p)).reduce((prev, p) => prev | p, DEFAULT_BIT);
        if (typeof this.FLAGS[bit] !== 'undefined')
            return this.FLAGS[bit];
        throw new errors_1.RangeError('BITFIELD_INVALID', bit);
    }
}
exports.BitField = BitField;
BitField.FLAGS = {};
//# sourceMappingURL=BitField.js.map