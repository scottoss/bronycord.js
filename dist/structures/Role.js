"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const _1 = require(".");
const util_1 = require("../util");
class Role extends _1.Base {
    constructor(server, data) {
        super(server.client);
        this.server = server;
        this.color = null;
        this._patch(data);
    }
    _patch(data) {
        var _a;
        if (data.id) {
            this.id = data.id;
        }
        if (data.name) {
            this.name = data.name;
        }
        if ('colour' in data) {
            this.color = (_a = data.colour) !== null && _a !== void 0 ? _a : null;
        }
        return this;
    }
    _update(data) {
        const clone = this._clone();
        clone._patch(data);
        return clone;
    }
    get createdAt() {
        return util_1.UUID.extrectTime(this.id);
    }
    get createdTimestamp() {
        return this.createdAt.getTime();
    }
    async delete() {
        await this.server.roles.delete(this);
    }
    toString() {
        return `<@&${this.id}>`;
    }
}
exports.Role = Role;
//# sourceMappingURL=Role.js.map