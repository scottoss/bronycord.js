"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerMemberLeaveAction = void 0;
const Action_1 = require("./Action");
const Constants_1 = require("../../util/Constants");
class ServerMemberLeaveAction extends Action_1.Action {
    handle(data) {
        const server = this.client.servers.cache.get(data.id);
        if (server) {
            const member = server.members.cache.get(data.user);
            if (member) {
                server.members._remove(member.id);
                this.client.emit(Constants_1.Events.SERVER_MEMBER_LEAVE, member);
            }
            return { server, member };
        }
        return { server };
    }
}
exports.ServerMemberLeaveAction = ServerMemberLeaveAction;
//# sourceMappingURL=ServerMemberLeave.js.map