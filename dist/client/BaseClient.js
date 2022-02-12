"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseClient = void 0;
const events_1 = require("events");
const __1 = require("..");
const Endpoints_1 = require("../rest/Endpoints");
const REST_1 = require("../rest/REST");
class BaseClient extends events_1.EventEmitter {
    constructor(options = {}) {
        super();
        this.token = null;
        this.bot = true;
        this.options = { ...__1.DEFUALT_OPTIONS };
        Object.assign(this.options, options);
        this.api = new REST_1.REST(this, { ...this.options.http });
    }
    get endpoints() {
        const { api, cdn, invite } = this.options.http;
        return new Endpoints_1.Endpoints({ api, cdn, invite });
    }
    get headers() {
        if (!this.token)
            return {};
        return {
            [`x-${this.bot ? 'bot' : 'session'}-token`]: this.token
        };
    }
}
exports.BaseClient = BaseClient;
//# sourceMappingURL=BaseClient.js.map