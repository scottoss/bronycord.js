"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelUpdateAction = void 0;
const Action_1 = require("./Action");
const Constants_1 = require("../../util/Constants");
class ChannelUpdateAction extends Action_1.Action {
    handle(data) {
        const oldChannel = this.client.channels.cache.get(data.id);
        if (oldChannel) {
            const newChannel = oldChannel._update(data.data);
            this.client.channels.cache.set(newChannel.id, newChannel);
            this.client.emit(Constants_1.Events.CHANNEL_UPDATE, oldChannel, newChannel);
            return { newChannel, oldChannel };
        }
        return { oldChannel };
    }
}
exports.ChannelUpdateAction = ChannelUpdateAction;
//# sourceMappingURL=ChannelUpdate.js.map