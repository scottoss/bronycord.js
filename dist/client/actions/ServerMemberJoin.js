"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerMemberJoin = void 0;
const Action_1 = require("./Action");
const Constants_1 = require("../../util/Constants");
class ServerMemberJoin extends Action_1.Action {
    async handle(data) {
        let server = this.client.servers.cache.get(data.id);
        if (!server) {
            server = await this.client.servers.fetch(data.id);
            this.client.emit(Constants_1.Events.SERVER_CREATE, server);
        }
        const member = await server.members.fetch(data.user);
        server.members.cache.set(member.id, member);
        this.client.emit(Constants_1.Events.SERVER_MEMBER_JOIN, member);
        return { member };
    }
}
exports.ServerMemberJoin = ServerMemberJoin;
//# sourceMappingURL=ServerMemberJoin.js.map