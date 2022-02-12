"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleManager = void 0;
const _1 = require(".");
const errors_1 = require("../errors");
const structures_1 = require("../structures");
class RoleManager extends _1.BaseManager {
    constructor(server) {
        super();
        this.server = server;
        this.holds = structures_1.Role;
        this.client = this.server.client;
        for (const [id, role] of Object.entries(server._roles)) {
            this._add(Object.assign(role, { id }));
        }
    }
    _add(data) {
        const role = new structures_1.Role(this.server, data);
        this.cache.set(role.id, role);
        return role;
    }
    _remove(id) {
        delete this.server._roles[id];
        return super._remove(id);
    }
    async create(name) {
        const data = await this.client.api.post(`/servers/${this.server.id}/roles`, {
            body: { name }
        });
        return this._add(Object.assign(data, { name, id: data.id }));
    }
    async delete(role) {
        const roleId = this.resolveId(role);
        if (!roleId)
            throw new errors_1.TypeError('INVALID_TYPE', 'role', 'RoleResolvable');
        await this.client.api.post(`/servers/${this.server.id}/roles/${roleId}`);
    }
}
exports.RoleManager = RoleManager;
//# sourceMappingURL=RoleManager.js.map