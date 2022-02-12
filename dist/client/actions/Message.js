"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAction = void 0;
const Action_1 = require("./Action");
const Constants_1 = require("../../util/Constants");
class MessageAction extends Action_1.Action {
    handle(data) {
        const channel = this.client.channels.cache.get(data.channel);
        if (channel) {
            const message = channel.messages._add(data);
            this.client.emit(Constants_1.Events.MESSAGE, message);
            return { message };
        }
        return {};
    }
}
exports.MessageAction = MessageAction;
//# sourceMappingURL=Message.js.map