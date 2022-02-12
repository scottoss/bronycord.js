"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Messages = void 0;
exports.Messages = {
    INVALID_TYPE: (name, expected, an = false) => `Supplied ${name} is not a${an ? 'n' : ''} ${expected}.`,
    BITFIELD_INVALID: (bit) => `Invalid bitfield flag or number: ${bit}.`
};
//# sourceMappingURL=Messages.js.map