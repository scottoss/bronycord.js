"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelGroupLeaveAction = void 0;
const Action_1 = require("./Action");
const util_1 = require("../../util");
class ChannelGroupLeaveAction extends Action_1.Action {
    handle(data) {
        const group = this.client.channels.cache.get(data.id);
        const user = this.client.users.cache.get(data.user);
        if (group) {
            group._users = group._users.filter(id => id !== data.user);
        }
        if (group && user) {
            this.client.emit(util_1.Events.GROUP_LEAVE, group, user);
        }
        return { group, user };
    }
}
exports.ChannelGroupLeaveAction = ChannelGroupLeaveAction;
//# sourceMappingURL=ChannelGroupLeave.js.map