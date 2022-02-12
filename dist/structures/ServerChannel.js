"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerChannel = void 0;
const _1 = require(".");
const util_1 = require("../util");
class ServerChannel extends _1.Channel {
    constructor(client, data) {
        super(client, Object.create(data));
        this.description = null;
        this.icon = null;
        this.overwrites = new util_1.Collection();
        this._patch(data);
    }
    _patch(data) {
        var _a, _b, _c;
        if (data.name) {
            this.name = data.name;
        }
        if (data.server) {
            this.serverId = data.server;
        }
        if ('description' in data) {
            this.description = (_a = data.description) !== null && _a !== void 0 ? _a : null;
        }
        if ('icon' in data) {
            this.icon = (_c = (_b = data.icon) === null || _b === void 0 ? void 0 : _b._id) !== null && _c !== void 0 ? _c : null;
        }
        return this;
    }
    _update(data) {
        const clone = this._clone();
        clone._patch(data);
        return clone;
    }
    async createInvite() {
        const { code } = await this.client.api.post(`/channels/${this.id}/invites`);
        return this.client.endpoints.invite(code);
    }
    iconURL(options) {
        return this.icon ? this.client.endpoints.icon(this.icon, options === null || options === void 0 ? void 0 : options.size) : null;
    }
    get server() {
        return this.client.servers.cache.get(this.serverId);
    }
    get category() {
        var _a;
        return (_a = this.server.categories.find(cat => cat._channels.includes(this.id))) !== null && _a !== void 0 ? _a : null;
    }
}
exports.ServerChannel = ServerChannel;
//# sourceMappingURL=ServerChannel.js.map