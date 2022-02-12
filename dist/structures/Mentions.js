"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mentions = void 0;
const _1 = require(".");
const errors_1 = require("../errors");
const util_1 = require("../util");
class Mentions extends _1.Base {
    constructor(message) {
        super(message.client);
        this.message = message;
        this._users = [];
    }
    _patch(userIds) {
        this._users.length = 0;
        this._users.push(...userIds);
        return this;
    }
    _update(userIds) {
        const clone = this._clone();
        this._patch(userIds);
        return clone;
    }
    has(user) {
        const userId = this.client.users.resolveId(user);
        if (!userId)
            throw new errors_1.TypeError('INVALID_TYPE', 'user', 'UserResolvable');
        return this._users.includes(userId);
    }
    get members() {
        const server = this.message.server;
        if (!server)
            return null;
        const members = new util_1.Collection();
        for (const userId of this._users) {
            const member = server.members.cache.get(userId);
            if (member)
                members.set(member.id, member);
        }
        return members;
    }
    get users() {
        const users = new util_1.Collection();
        for (const userId of this._users) {
            const user = this.client.users.cache.get(userId);
            if (user)
                users.set(user.id, user);
        }
        return users;
    }
}
exports.Mentions = Mentions;
//# sourceMappingURL=Mentions.js.map