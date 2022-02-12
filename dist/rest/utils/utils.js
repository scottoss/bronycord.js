"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseResponse = void 0;
const parseResponse = (res) => {
    var _a;
    if ((_a = res.headers.get('Content-Type')) === null || _a === void 0 ? void 0 : _a.startsWith('application/json')) {
        return res.json();
    }
    return res.buffer();
};
exports.parseResponse = parseResponse;
//# sourceMappingURL=utils.js.map