"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextBasedChannel = void 0;
const __1 = require("../..");
const Channel_1 = require("../Channel");
class TextBasedChannel extends Channel_1.Channel {
    constructor() {
        super(...arguments);
        this.lastMessageId = null;
        this.messages = new __1.MessageManager(this);
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
exports.TextBasedChannel = TextBasedChannel;
//# sourceMappingURL=TextBasedChannel.js.map