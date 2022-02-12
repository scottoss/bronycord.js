"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REST = exports.RequestMethod = void 0;
const events_1 = require("events");
const node_fetch_1 = require("node-fetch");
const APIRequest_1 = require("./APIRequest");
const HTTPError_1 = require("./HTTPError");
const utils_1 = require("./utils/utils");
const util_1 = require("../util");
var RequestMethod;
(function (RequestMethod) {
    RequestMethod["Delete"] = "DELETE";
    RequestMethod["Get"] = "GET";
    RequestMethod["Patch"] = "PATCH";
    RequestMethod["Post"] = "POST";
    RequestMethod["Put"] = "PUT";
})(RequestMethod = exports.RequestMethod || (exports.RequestMethod = {}));
class REST extends events_1.EventEmitter {
    constructor(client, options) {
        super();
        this.client = client;
        this.options = options;
    }
    async request(options) {
        var _a;
        const request = options instanceof APIRequest_1.APIRequest ? options : new APIRequest_1.APIRequest(this.options.api + options.route);
        if (!(options instanceof APIRequest_1.APIRequest)) {
            request
                .setMethod(options.method)
                .setBody(options.body)
                .setHeaders((_a = options.headers) !== null && _a !== void 0 ? _a : this.client.headers);
        }
        let res;
        try {
            res = await request.execute({ timeout: this.options.timeout });
        }
        catch (error) {
            if (request.retries === this.options.retries) {
                if (error instanceof node_fetch_1.Response) {
                    throw new HTTPError_1.HTTPError(error.statusText, error.constructor.name, error.status, request);
                }
            }
            request.retries++;
            return this.request(request);
        }
        if (res.ok) {
            return (0, utils_1.parseResponse)(res);
        }
        if (res.status === 429) {
            this.client.emit(util_1.Events.DEBUG, `Hit a 429 while executing a request.
          Method: ${request.method}
          Path: ${request.path}
          Limit: ${this.options.retries}
          Timeout: ${this.options.timeout}ms`);
        }
        if (res.status >= 500 && res.status < 600) {
            if (request.retries === this.options.retries) {
                throw new HTTPError_1.HTTPError(res.statusText, res.constructor.name, res.status, request);
            }
            request.retries++;
            return this.request(request);
        }
        throw new HTTPError_1.HTTPError(res.statusText, res.constructor.name, res.status, request);
    }
    get(route, options = {}) {
        return this.request({ ...options, route, method: RequestMethod.Get });
    }
    delete(route, options = {}) {
        return this.request({ ...options, route, method: RequestMethod.Delete });
    }
    post(route, options = {}) {
        return this.request({ ...options, route, method: RequestMethod.Post });
    }
    put(route, options = {}) {
        return this.request({ ...options, route, method: RequestMethod.Put });
    }
    patch(route, options = {}) {
        return this.request({ ...options, route, method: RequestMethod.Patch });
    }
}
exports.REST = REST;
//# sourceMappingURL=REST.js.map