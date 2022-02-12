"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextChannel = void 0;
const _1 = require(".");
const managers_1 = require("../managers");
const util_1 = require("../util");
class TextChannel extends _1.ServerChannel {
    constructor(client, raw) {
        var _a;
        super(client, raw);
        this.lastMessageId = null;
        this.messages = new managers_1.MessageManager(this);
        this.type = util_1.ChannelTypes.TEXT;
        this.lastMessageId = (_a = raw.last_message_id) !== null && _a !== void 0 ? _a : null;
    }
    send(options) {
        return this.messages.send(options);
    }
    get lastMessage() {
        var _a;
        if (!this.lastMessageId)
            return null;
        return (_a = this.messages.cache.get(this.lastMessageId)) !== null && _a !== void 0 ? _a : null;
    }
}
exports.TextChannel = TextChannel;
//# sourceMappingURL=TextChannel.js.map