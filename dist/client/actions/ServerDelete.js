"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerDeleteAction = void 0;
const Action_1 = require("./Action");
const Constants_1 = require("../../util/Constants");
class ServerDeleteAction extends Action_1.Action {
    handle(data) {
        const server = this.client.servers.cache.get(data._id);
        if (server) {
            server.deleted = true;
            this.client.servers._remove(server.id);
            this.client.emit(Constants_1.Events.SERVER_DELETE, server);
        }
        return { server };
    }
}
exports.ServerDeleteAction = ServerDeleteAction;
//# sourceMappingURL=ServerDelete.js.map