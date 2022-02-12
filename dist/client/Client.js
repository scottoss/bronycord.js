"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const BaseClient_1 = require("./BaseClient");
const WebSocket_1 = require("./WebSocket");
const ActionManager_1 = require("./actions/ActionManager");
const managers_1 = require("../managers");
const Constants_1 = require("../util/Constants");
class Client extends BaseClient_1.BaseClient {
    constructor() {
        super(...arguments);
        this.ws = new WebSocket_1.WebSocket(this);
        this.actions = new ActionManager_1.ActionManager(this);
        this.channels = new managers_1.ChannelManager(this);
        this.readyAt = null;
        this.servers = new managers_1.ServerManager(this);
        this.user = null;
        this.users = new managers_1.UserManager(this);
    }
    get readyTimestamp() {
        var _a, _b;
        return (_b = (_a = this.readyAt) === null || _a === void 0 ? void 0 : _a.getTime()) !== null && _b !== void 0 ? _b : null;
    }
    get uptime() {
        return this.readyAt ? Date.now() - this.readyAt.getTime() : null;
    }
    async login(details) {
        this.configuration = await this.api.get('/');
        if (typeof details === 'object') {
            const { type = 'bot', token } = details;
            this.token = token;
            this.bot = type.toLowerCase() === 'bot';
        }
        else {
            this.token = details;
            this.bot = true;
        }
        this.debug('Preparing to connect to the gateway...');
        try {
            await this.ws.connect();
        }
        catch (err) {
            await this.destroy();
            throw err;
        }
        this.readyAt = new Date();
    }
    async destroy() {
        this.token = null;
        this.user = null;
        this.readyAt = null;
        await this.ws.destroy();
    }
    debug(message) {
        this.emit(Constants_1.Events.DEBUG, message);
    }
    isReady() {
        return this.readyAt != null;
    }
}
exports.Client = Client;
//# sourceMappingURL=Client.js.map