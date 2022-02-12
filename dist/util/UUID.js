"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUID = void 0;
const crypto_1 = require("crypto");
class UUID extends null {
    static get PROG() {
        return (0, crypto_1.randomBytes)(1).readUInt8() / 0xff;
    }
    static time(now = Date.now()) {
        let mod, result = '';
        for (let i = this.TIME_LENGTH; i > 0; i--) {
            mod = now % this.ENCODING_LENGTH;
            result = this.ENCODING.charAt(mod) + result;
            now = (now - mod) / this.ENCODING_LENGTH;
        }
        return result;
    }
    static hash() {
        let result = '';
        for (let i = this.RANDOM_LENGTH; i > 0; i--) {
            let random = Math.floor(this.PROG * this.ENCODING_LENGTH);
            if (random === this.ENCODING_LENGTH) {
                random = this.ENCODING_LENGTH - 1;
            }
            result = this.ENCODING.charAt(random) + result;
        }
        return result;
    }
    static generate(timestamp = Date.now()) {
        return this.time(timestamp) + this.hash();
    }
    static extrectTime(id) {
        const timestamp = id
            .substr(0, this.TIME_LENGTH)
            .split('')
            .reverse()
            .reduce((carry, char, index) => {
            const encodingIndex = this.ENCODING.indexOf(char);
            if (encodingIndex === -1) {
                throw new Error('invalid character found: ' + char);
            }
            return (carry += encodingIndex * Math.pow(this.ENCODING_LENGTH, index));
        }, 0);
        return new Date(timestamp);
    }
}
exports.UUID = UUID;
UUID.ENCODING = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
UUID.ENCODING_LENGTH = UUID.ENCODING.length;
UUID.RANDOM_LENGTH = 16;
UUID.TIME_LENGTH = 10;
UUID.TIME_MAX = Math.pow(2, 48) - 1;
//# sourceMappingURL=UUID.js.map