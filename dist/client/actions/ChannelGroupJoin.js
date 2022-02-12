"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelGroupJoinAction = void 0;
const Action_1 = require("./Action");
const Constants_1 = require("../../util/Constants");
class ChannelGroupJoinAction extends Action_1.Action {
    async handle(data) {
        const group = this.client.channels.cache.get(data.id);
        group === null || group === void 0 ? void 0 : group._users.push(data.user);
        if (group) {
            const user = await this.client.users.fetch(data.user, { force: false });
            this.client.emit(Constants_1.Events.GROUP_JOIN, group, user);
            return { group, user };
        }
        return { group };
    }
}
exports.ChannelGroupJoinAction = ChannelGroupJoinAction;
//# sourceMappingURL=ChannelGroupJoin.js.map