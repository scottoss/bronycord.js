"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelCreateAction = void 0;
const Action_1 = require("./Action");
const Constants_1 = require("../../util/Constants");
class ChannelCreateAction extends Action_1.Action {
    async handle(data) {
        var _a;
        const channel = this.client.channels._add(data);
        if (channel) {
            if (channel.inServer()) {
                const server = (_a = channel.server) !== null && _a !== void 0 ? _a : (await this.client.servers.fetch(channel.serverId));
                server.channels.cache.set(channel.id, channel);
            }
            this.client.emit(Constants_1.Events.CHANNEL_CREATE, channel);
        }
        return { channel };
    }
}
exports.ChannelCreateAction = ChannelCreateAction;
//# sourceMappingURL=ChannelCreate.js.map