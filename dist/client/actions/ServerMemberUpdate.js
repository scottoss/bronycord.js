"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerMemberUpdateAction = void 0;
const Action_1 = require("./Action");
const Constants_1 = require("../../util/Constants");
class ServerMemberUpdateAction extends Action_1.Action {
    handle(data) {
        var _a, _b;
        const server = this.client.servers.cache.get(data.id);
        const oldMember = server === null || server === void 0 ? void 0 : server.members.cache.get((_b = (_a = data.data) === null || _a === void 0 ? void 0 : _a._id) === null || _b === void 0 ? void 0 : _b.user);
        if (server && oldMember) {
            const newMember = oldMember._update(data.data);
            server.members.cache.set(newMember.id, newMember);
            this.client.emit(Constants_1.Events.SERVER_MEMBER_UPDATE, oldMember, newMember);
            return { newMember, oldMember };
        }
        return { oldMember };
    }
}
exports.ServerMemberUpdateAction = ServerMemberUpdateAction;
//# sourceMappingURL=ServerMemberUpdate.js.map