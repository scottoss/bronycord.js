"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelStopTypingAction = void 0;
const Action_1 = require("./Action");
const util_1 = require("../../util");
class ChannelStopTypingAction extends Action_1.Action {
    handle(data) {
        const channel = this.client.channels.cache.get(data.id);
        const user = this.client.users.cache.get(data.user);
        if (channel && user) {
            this.client.emit(util_1.Events.TYPING_STOP, channel, user);
        }
        return { channel, user };
    }
}
exports.ChannelStopTypingAction = ChannelStopTypingAction;
//# sourceMappingURL=ChannelStopTyping.js.map