"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelDeleteAction = void 0;
const Action_1 = require("./Action");
const Constants_1 = require("../../util/Constants");
class ChannelDeleteAction extends Action_1.Action {
    handle(data) {
        var _a;
        const channel = this.client.channels.cache.get(data.id);
        if (channel) {
            channel.deleted = true;
            if (channel.inServer()) {
                (_a = channel.server) === null || _a === void 0 ? void 0 : _a.channels.cache.delete(channel.id);
            }
            this.client.emit(Constants_1.Events.CHANNEL_DELETE, channel);
        }
        return { channel };
    }
}
exports.ChannelDeleteAction = ChannelDeleteAction;
//# sourceMappingURL=ChannelDelete.js.map