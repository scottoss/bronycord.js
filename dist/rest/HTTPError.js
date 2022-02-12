"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPError = void 0;
class HTTPError extends Error {
    constructor(message, name, code, request) {
        super(message);
        this.name = name;
        this.code = code !== null && code !== void 0 ? code : 500;
        this.method = request.method;
        this.path = request.path;
        this.info = request.info;
    }
}
exports.HTTPError = HTTPError;
//# sourceMappingURL=HTTPError.js.map