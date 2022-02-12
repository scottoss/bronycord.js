"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerMember = void 0;
const _1 = require(".");
class ServerMember extends _1.Base {
    constructor(client, data) {
        super(client);
        this.nickname = null;
        this.avatar = null;
        this._patch(data);
    }
    _patch(data) {
        var _a, _b;
        if (!data)
            return this;
        if ('nickname' in data) {
            this.nickname = (_a = data.nickname) !== null && _a !== void 0 ? _a : null;
        }
        if ('avatar' in data) {
            this.avatar = (_b = data.avatar) !== null && _b !== void 0 ? _b : null;
        }
        if (data._id) {
            this.serverId = data._id.server;
            this.id = data._id.user;
        }
        return this;
    }
    _update(data) {
        const clone = this._clone();
        clone._patch(data);
        return clone;
    }
    async setNickname(nickname) {
        await this.server.members.edit(this, { nickname });
        return this;
    }
    ban(reason) {
        return this.server.members.ban(this, reason);
    }
    kick() {
        return this.server.members.kick(this);
    }
    leave() {
        return this.client.servers.delete(this.serverId);
    }
    displayAvatarURL(options) {
        return this.user.displayAvatarURL(options);
    }
    get user() {
        return this.client.users.cache.get(this.id);
    }
    get server() {
        return this.client.servers.cache.get(this.serverId);
    }
    toString() {
        return `<@${this.id}>`;
    }
}
exports.ServerMember = ServerMember;
//# sourceMappingURL=ServerMember.js.map