"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerMemberManager = void 0;
const _1 = require(".");
const errors_1 = require("../errors");
const structures_1 = require("../structures");
const util_1 = require("../util");
class ServerMemberManager extends _1.BaseManager {
    constructor(server) {
        super();
        this.server = server;
        this.holds = structures_1.ServerMember;
        this.client = this.server.client;
    }
    async edit(member, options) {
        const memberId = this.resolveId(member);
        if (!memberId)
            throw new errors_1.TypeError('INVALID_TYPE', 'member', 'ServerMemberResolvable');
        await this.client.api.patch(`/servers/${this.server.id}/members/${memberId}`, {
            body: { ...options }
        });
    }
    async ban(member, reason) {
        const memberId = this.resolveId(member);
        if (!memberId)
            throw new errors_1.TypeError('INVALID_TYPE', 'member', 'ServerMemberResolvable');
        await this.client.api.put(`/servers/${this.server.id}/bans/${memberId}`, {
            body: { reason }
        });
    }
    async kick(member) {
        const memberId = this.resolveId(member);
        if (!memberId)
            throw new errors_1.TypeError('INVALID_TYPE', 'member', 'ServerMemberResolvable');
        await this.client.api.delete(`/servers/${this.server.id}/members/${memberId}`);
    }
    async unban(member) {
        const memberId = this.resolveId(member);
        if (!memberId)
            throw new errors_1.TypeError('INVALID_TYPE', 'member', 'ServerMemberResolvable');
        await this.client.api.delete(`/servers/${this.server.id}/bans/${memberId}`);
    }
    async fetch(member) {
        if (typeof member !== 'undefined') {
            const memberId = this.resolveId(member);
            if (!memberId)
                throw new errors_1.TypeError('INVALID_TYPE', 'member', 'ServerMemberResolvable');
            const data = await this.client.api.get(`/servers/${this.server.id}/members/${memberId}`);
            return this._add(data);
        }
        const { members } = await this.client.api.get(`/servers/${this.server.id}/members`);
        return members.reduce((coll, cur) => {
            const member = this._add(cur);
            coll.set(member.id, member);
            return coll;
        }, new util_1.Collection());
    }
    resolveId(member) {
        if (member == null)
            return null;
        if (member instanceof structures_1.ServerMember || member instanceof structures_1.User)
            return member.id;
        if (typeof member === 'string')
            return member;
        if ('_id' in member)
            return member._id.user;
        return null;
    }
}
exports.ServerMemberManager = ServerMemberManager;
//# sourceMappingURL=ServerMamberManager.js.map