"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const _1 = require(".");
const util_1 = require("../util");
class Message extends _1.Base {
    constructor(client, data) {
        super(client);
        this.content = '';
        this.embeds = [];
        this.deleted = false;
        this.mentions = new _1.Mentions(this);
        this.type = util_1.MessageTypes.TEXT;
        this.editedAt = null;
        this._patch(data);
    }
    _update(data) {
        const clone = this._clone();
        clone._patch(data);
        return clone;
    }
    _patch(data) {
        var _a;
        if (!data)
            return this;
        if (data._id) {
            this.id = data._id;
        }
        if (Array.isArray(data.embeds)) {
            this.embeds = data.embeds;
        }
        if (Array.isArray(data.mentions)) {
            this.mentions._patch(data.mentions);
        }
        if (data.author) {
            this.authorId = data.author;
        }
        if (data.channel) {
            this.channelId = data.channel;
        }
        if (typeof data.content === 'object') {
            this.type = (_a = util_1.MessageTypes[data.content.type.toUpperCase()]) !== null && _a !== void 0 ? _a : 'UNKNOWN';
        }
        else if (typeof data.content === 'string') {
            this.content = data.content;
        }
        if (data.edited) {
            this.editedAt = new Date(data.edited.$date);
        }
        return this;
    }
    get createdAt() {
        return util_1.UUID.extrectTime(this.id);
    }
    get createdTimestamp() {
        return this.createdAt.getTime();
    }
    get editedTimestamp() {
        var _a, _b;
        return (_b = (_a = this.editedAt) === null || _a === void 0 ? void 0 : _a.getTime()) !== null && _b !== void 0 ? _b : null;
    }
    async ack() {
        await this.channel.messages.ack(this);
    }
    async delete() {
        await this.channel.messages.delete(this);
    }
    async reply(content, mention = true) {
        return this.channel.messages.send({
            content,
            replies: [{ id: this.id, mention }]
        });
    }
    async edit(content) {
        await this.channel.messages.edit(this, { content });
    }
    fetch() {
        return this.channel.messages.fetch(this.id);
    }
    get system() {
        return this.type !== util_1.MessageTypes.TEXT;
    }
    inServer() {
        return this.channel.inServer();
    }
    get author() {
        var _a;
        return (_a = this.client.users.cache.get(this.authorId)) !== null && _a !== void 0 ? _a : null;
    }
    get channel() {
        return this.client.channels.cache.get(this.channelId);
    }
    get serverId() {
        const channel = this.channel;
        return channel.inServer() ? channel.serverId : null;
    }
    get server() {
        var _a;
        return (_a = this.client.servers.cache.get(this.serverId)) !== null && _a !== void 0 ? _a : null;
    }
    get member() {
        var _a, _b;
        return (_b = (_a = this.server) === null || _a === void 0 ? void 0 : _a.members.cache.get(this.authorId)) !== null && _b !== void 0 ? _b : null;
    }
    get url() {
        return `https://app.revolt.chat/${this.serverId ? `server/${this.serverId}` : ''}/channel/${this.channelId}/${this.id}`;
    }
}
exports.Message = Message;
//# sourceMappingURL=Message.js.map