"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUpdateAction = void 0;
const Action_1 = require("./Action");
const Constants_1 = require("../../util/Constants");
class MessageUpdateAction extends Action_1.Action {
    handle(data) {
        const channel = this.client.channels.cache.get(data.channel);
        const oldMessage = channel === null || channel === void 0 ? void 0 : channel.messages.cache.get(data.id);
        if (oldMessage) {
            const newMessage = oldMessage._update(data.data);
            channel.messages.cache.set(newMessage.id, newMessage);
            this.client.emit(Constants_1.Events.MESSAGE_UPDATE, oldMessage, newMessage);
            return { newMessage, oldMessage };
        }
        return { oldMessage };
    }
}
exports.MessageUpdateAction = MessageUpdateAction;
//# sourceMappingURL=MessageUpdate.js.map