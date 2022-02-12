"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManager = void 0;
const _1 = require(".");
const errors_1 = require("../errors");
const structures_1 = require("../structures");
class UserManager extends _1.BaseManager {
    constructor(client) {
        super();
        this.client = client;
        this.holds = structures_1.User;
    }
    async fetch(user, { force = true } = {}) {
        const userId = this.resolveId(user);
        if (!userId)
            throw new errors_1.TypeError('INVALID_TYPE', 'user', 'UserResolvable');
        if (!force) {
            const user = this.cache.get(userId);
            if (user)
                return user;
        }
        const data = await this.client.api.get(`/users/${userId}`);
        return this._add(data);
    }
    resolve(resolvable) {
        if (resolvable instanceof structures_1.Message)
            return resolvable.author;
        return super.resolve(resolvable);
    }
    resolveId(resolvable) {
        if (resolvable instanceof structures_1.Message)
            return resolvable.authorId;
        return super.resolveId(resolvable);
    }
}
exports.UserManager = UserManager;
//# sourceMappingURL=UserManager.js.map