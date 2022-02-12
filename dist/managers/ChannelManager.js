"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelManager = void 0;
const _1 = require(".");
const errors_1 = require("../errors");
const structures_1 = require("../structures");
const util_1 = require("../util");
class ChannelManager extends _1.BaseManager {
    constructor(client) {
        super();
        this.client = client;
        this.holds = null;
    }
    _add(raw) {
        const channel = structures_1.Channel.create(this.client, raw);
        if (channel.type === util_1.ChannelTypes.NOTES && this.client.user) {
            this.client.user.notes = channel;
        }
        this.cache.set(channel.id, channel);
        return channel;
    }
    _remove(id) {
        var _a;
        const channel = this.cache.get(id);
        if (channel === null || channel === void 0 ? void 0 : channel.inServer()) {
            (_a = channel.server) === null || _a === void 0 ? void 0 : _a.channels.cache.delete(id);
        }
        super._remove(id);
    }
    async delete(channel) {
        const channelId = this.resolveId(channel);
        if (!channelId)
            throw new errors_1.TypeError('INVALID_TYPE', 'channel', 'ChannelResolvable');
        await this.client.api.delete(`/channels/${channelId}`);
    }
    async ack(channel) {
        const channelId = this.resolveId(channel);
        if (!channelId)
            throw new errors_1.TypeError('INVALID_TYPE', 'channel', 'ChannelResolvable');
        await this.client.api.put(`/channels/${channelId}/ack`);
    }
    async fetch(channel, { force = true } = {}) {
        const channelId = this.resolveId(channel);
        if (!channelId)
            throw new errors_1.TypeError('INVALID_TYPE', 'channel', 'ChannelResolvable');
        if (!force) {
            const channel = this.cache.get(channelId);
            if (channel)
                return channel;
        }
        const data = await this.client.api.get(`/channels/${channelId}`);
        return this._add(data);
    }
    resolve(channel) {
        if (channel instanceof structures_1.Channel)
            return channel;
        return super.resolve(channel);
    }
    resolveId(channel) {
        if (channel instanceof structures_1.Channel)
            return channel.id;
        return super.resolveId(channel);
    }
}
exports.ChannelManager = ChannelManager;
//# sourceMappingURL=ChannelManager.js.map