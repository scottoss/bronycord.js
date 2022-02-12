"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIRequest = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const REST_1 = require("./REST");
class APIRequest {
    constructor(path) {
        this.path = path;
        this.method = REST_1.RequestMethod.Get;
        this.retries = 0;
    }
    get info() {
        var _a;
        return {
            retries: this.retries,
            body: JSON.parse((_a = this.body) !== null && _a !== void 0 ? _a : '{}')
        };
    }
    setMethod(method) {
        this.method = method;
        return this;
    }
    setBody(body) {
        this.body = body ? JSON.stringify(body) : undefined;
        return this;
    }
    setHeaders(headers) {
        this.headers = headers;
        return this;
    }
    execute(options) {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), options.timeout).unref();
        return (0, node_fetch_1.default)(this.path, {
            method: this.method,
            body: this.body,
            headers: this.headers,
            signal: controller.signal
        }).finally(() => clearTimeout(timeout));
    }
}
exports.APIRequest = APIRequest;
//# sourceMappingURL=APIRequest.js.map