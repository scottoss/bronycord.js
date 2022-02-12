"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerManager = void 0;
const _1 = require(".");
const errors_1 = require("../errors");
const structures_1 = require("../structures");
const util_1 = require("../util");
class ServerManager extends _1.BaseManager {
    constructor(client) {
        super();
        this.client = client;
        this.holds = structures_1.Server;
    }
    _remove(id) {
        var _a;
        const server = this.cache.get(id);
        for (const channelId of (_a = server === null || server === void 0 ? void 0 : server._channels) !== null && _a !== void 0 ? _a : []) {
            this.client.channels._remove(channelId);
        }
        return super._remove(id);
    }
    async create(name) {
        const data = await this.client.api.post('/servers/create', {
            body: {
                name,
                nonce: util_1.UUID.generate()
            }
        });
        return this._add(data);
    }
    async edit(server, options) {
        const serverId = this.resolveId(server);
        if (!serverId)
            throw new errors_1.TypeError('INVALID_TYPE', 'server', 'ServerResolvable');
        await this.client.api.patch(`/servers/${serverId}`, {
            body: options
        });
    }
    async ack(server) {
        const serverId = this.resolveId(server);
        if (!serverId)
            throw new errors_1.TypeError('INVALID_TYPE', 'server', 'ServerResolvable');
        await this.client.api.put(`/servers/${serverId}/ack`);
    }
    async delete(server) {
        const serverId = this.resolveId(server);
        if (!serverId)
            throw new errors_1.TypeError('INVALID_TYPE', 'server', 'ServerResolvable');
        await this.client.api.delete(`/servers/${serverId}`);
    }
    async fetch(server, { force = true } = {}) {
        const serverId = this.resolveId(server);
        if (!serverId)
            throw new errors_1.TypeError('INVALID_TYPE', 'server', 'ServerResolvable');
        if (!force) {
            const server = this.cache.get(serverId);
            if (server)
                return server;
        }
        const data = await this.client.api.get(`/servers/${serverId}`);
        return this._add(data);
    }
}
exports.ServerManager = ServerManager;
//# sourceMappingURL=ServerManager.js.map