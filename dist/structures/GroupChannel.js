"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupChannel = void 0;
const TextBasedChannel_1 = require("./interfaces/TextBasedChannel");
const errors_1 = require("../errors");
const util_1 = require("../util");
class GroupChannel extends TextBasedChannel_1.TextBasedChannel {
    constructor(client, data) {
        super(client, data);
        this.description = null;
        this.type = util_1.ChannelTypes.GROUP;
        this.icon = null;
        this._users = [];
        this._patch(data);
    }
    _patch(data) {
        var _a, _b, _c;
        if (!data)
            return this;
        if ('description' in data) {
            this.description = (_a = data.description) !== null && _a !== void 0 ? _a : null;
        }
        if (Array.isArray(data.recipients)) {
            this._users = data.recipients;
        }
        if (typeof data.permissions === 'number') {
            this.permissions = new util_1.ChannelPermissions(data.permissions).freeze();
        }
        if (data.owner) {
            this.ownerId = data.owner;
        }
        if ('icon' in data) {
            this.icon = (_c = (_b = data.icon) === null || _b === void 0 ? void 0 : _b._id) !== null && _c !== void 0 ? _c : null;
        }
        if (data.name) {
            this.name = data.name;
        }
        return this;
    }
    _update(data) {
        const clone = this._clone();
        this._patch(data);
        return clone;
    }
    async add(user) {
        const userId = this.client.users.resolveId(user);
        if (!userId)
            throw new errors_1.TypeError('INVALID_TYPE', 'user', 'UserResolvable');
        await this.client.api.put(`/channels/${this.id}/recipients/${userId}`);
    }
    async remove(user) {
        const userId = this.client.users.resolveId(user);
        if (!userId)
            throw new errors_1.TypeError('INVALID_TYPE', 'user', 'UserResolvable');
        await this.client.api.delete(`/channels/${this.id}/recipients/${userId}`);
    }
    async leave() {
        await super.delete();
    }
    iconURL(options) {
        if (!this.icon)
            return null;
        return this.client.endpoints.icon(this.icon, options === null || options === void 0 ? void 0 : options.size);
    }
    get owner() {
        var _a;
        return (_a = this.client.users.cache.get(this.ownerId)) !== null && _a !== void 0 ? _a : null;
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
    get members() {
        return this.users;
    }
}
exports.GroupChannel = GroupChannel;
//# sourceMappingURL=GroupChannel.js.map