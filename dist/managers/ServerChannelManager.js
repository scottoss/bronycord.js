"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerChannelManager = void 0;
const _1 = require(".");
const errors_1 = require("../errors");
const structures_1 = require("../structures");
const util_1 = require("../util");
class ServerChannelManager extends _1.BaseManager {
    constructor(server) {
        super();
        this.server = server;
        this.holds = structures_1.ServerChannel;
        this.client = server.client;
        for (const channelId of server._channels) {
            const channel = this.client.channels.cache.get(channelId);
            if (channel === null || channel === void 0 ? void 0 : channel.inServer())
                this.cache.set(channel.id, channel);
        }
    }
    _add(raw) {
        let channel;
        switch (raw.channel_type) {
            case 'TextChannel':
                channel = new structures_1.TextChannel(this.client, raw);
                break;
            case 'VoiceChannel':
                channel = new structures_1.VoiceChannel(this.client, raw);
                break;
            default:
                throw new Error(`Unknown channel type: ${raw.channel_type}`);
        }
        this.cache.set(channel.id, channel);
        return channel;
    }
    async create({ name, type = 'Text', description }) {
        const data = await this.client.api.post(`/servers/${this.server.id}/channels`, {
            body: {
                name,
                type,
                description,
                nonce: util_1.UUID.generate()
            }
        });
        return this._add(data);
    }
    async fetch(channel, { force = true } = {}) {
        const channelId = this.resolveId(channel);
        if (!channelId)
            throw new errors_1.TypeError('INVALID_TYPE', 'channel', 'ServerChannelResolvable');
        if (!force) {
            const channel = this.cache.get(channelId);
            if (channel)
                return channel;
        }
        const data = await this.client.api.get(`/servers/${this.server.id}/channels/${channelId}`);
        return this._add(data);
    }
}
exports.ServerChannelManager = ServerChannelManager;
//# sourceMappingURL=ServerChannelManager.js.map