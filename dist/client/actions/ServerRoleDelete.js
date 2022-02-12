"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerRoleDeleteAction = void 0;
const Action_1 = require("./Action");
const Constants_1 = require("../../util/Constants");
class ServerRoleDeleteAction extends Action_1.Action {
    handle(data) {
        const server = this.client.servers.cache.get(data.id);
        if (server) {
            const role = server.roles.cache.get(data.role_id);
            if (role) {
                server.roles._remove(role.id);
                this.client.emit(Constants_1.Events.ROLE_DELETE, role);
            }
            return { role };
        }
        return {};
    }
}
exports.ServerRoleDeleteAction = ServerRoleDeleteAction;
//# sourceMappingURL=ServerRoleDelete.js.map