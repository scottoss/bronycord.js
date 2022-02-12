"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageDeleteAction = void 0;
const Action_1 = require("./Action");
const Constants_1 = require("../../util/Constants");
class MessageDeleteAction extends Action_1.Action {
    handle(data) {
        const channel = this.client.channels.cache.get(data.channel);
        if (channel) {
            const message = channel.messages.cache.get(data.id);
            if (message) {
                message.deleted = true;
                channel.messages._remove(message.id);
                this.client.emit(Constants_1.Events.MESSAGE_DELETE, message);
            }
            return { message };
        }
        return {};
    }
}
exports.MessageDeleteAction = MessageDeleteAction;
//# sourceMappingURL=MessageDelete.js.map