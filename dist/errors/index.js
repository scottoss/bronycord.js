"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeError = exports.TypeError = exports.Error = void 0;
const Messages_1 = require("./Messages");
const createCustomError = (Base) => {
    return class RevoltError extends Base {
        constructor(key, ...args) {
            const msg = Messages_1.Messages[key];
            super(msg(...args));
            Base.captureStackTrace(this, RevoltError);
        }
    };
};
exports.Error = createCustomError(globalThis.Error);
exports.TypeError = createCustomError(globalThis.TypeError);
exports.RangeError = createCustomError(globalThis.RangeError);
//# sourceMappingURL=index.js.map