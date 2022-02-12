"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageManager = void 0;
const _1 = require(".");
const errors_1 = require("../errors");
const structures_1 = require("../structures");
const util_1 = require("../util");
class MessageManager extends _1.BaseManager {
    constructor(channel) {
        super();
        this.channel = channel;
        this.holds = structures_1.Message;
        this.client = this.channel.client;
    }
    async _fetchId(messageId) {
        const data = await this.client.api.get(`/channels/${this.channel.id}/messages/${messageId}`);
        return this._add(data);
    }
    async _fetchMany(withUsers = true) {
        const { messages } = await this.client.api.get(`/channels/${this.channel.id}/messages?include_users=${withUsers}`);
        return messages.reduce((coll, cur) => {
            const msg = this._add(cur);
            coll.set(msg.id, msg);
            return coll;
        }, new util_1.Collection());
    }
    async send(_options) {
        const { content, replies, attachments } = typeof _options === 'object'
            ? { ..._options }
            : {
                content: _options
            };
        const data = await this.client.api.post(`/channels/${this.channel.id}/messages`, {
            body: {
                content,
                nonce: util_1.UUID.generate(),
                replies,
                attachments
            }
        });
        return this._add(data);
    }
    async ack(message) {
        const messageId = this.resolveId(message);
        if (!messageId)
            throw new errors_1.TypeError('INVALID_TYPE', 'message', 'MessageResolvable');
        await this.client.api.put(`/channels/${this.channel.id}/ack/${messageId}`);
    }
    async delete(message) {
        const messageId = this.resolveId(message);
        if (!messageId)
            throw new errors_1.TypeError('INVALID_TYPE', 'message', 'MessageResolvable');
        await this.client.api.delete(`/channels/${this.channel.id}/messages/${messageId}`);
    }
    async edit(message, options) {
        const messageId = this.resolveId(message);
        if (!messageId)
            throw new errors_1.TypeError('INVALID_TYPE', 'message', 'MessageResolvable');
        await this.client.api.patch(`/channels/${this.channel.id}/messages/${messageId}`, {
            body: options
        });
    }
    async search(query) {
        const response = await this.client.api.post(`/channels/${this.channel.id}/search`, {
            body: query
        });
        if (query.include_users) {
            const users = response.users.reduce((coll, cur) => {
                const user = this.client.users._add(cur);
                coll.set(user.id, user);
                return coll;
            }, new util_1.Collection());
            const messages = response.messages.reduce((coll, cur) => {
                const msg = this._add(cur);
                coll.set(msg.id, msg);
                return coll;
            }, new util_1.Collection());
            return {
                messages,
                users
            };
        }
        else {
            return response.reduce((coll, cur) => {
                const msg = this._add(cur);
                coll.set(msg.id, msg);
                return coll;
            }, new util_1.Collection());
        }
    }
    fetch(options) {
        return typeof options === 'string' ? this._fetchId(options) : this._fetchMany(options === null || options === void 0 ? void 0 : options['includeUsers']);
    }
}
exports.MessageManager = MessageManager;
//# sourceMappingURL=MessageManager.js.map