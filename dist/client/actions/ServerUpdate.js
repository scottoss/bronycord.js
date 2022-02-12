"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerUpdateAction = void 0;
const Action_1 = require("./Action");
const Constants_1 = require("../../util/Constants");
class ServerUpdateAction extends Action_1.Action {
    handle(data) {
        const oldServer = this.client.servers.cache.get(data.id);
        if (oldServer) {
            const newServer = oldServer._update(data.data);
            this.client.servers.cache.set(newServer.id, newServer);
            this.client.emit(Constants_1.Events.SERVER_UPDATE, oldServer, newServer);
            return { newServer, oldServer };
        }
        return { oldServer };
    }
}
exports.ServerUpdateAction = ServerUpdateAction;
//# sourceMappingURL=ServerUpdate.js.map