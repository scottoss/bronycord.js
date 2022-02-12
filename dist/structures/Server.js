"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const _1 = require(".");
const managers_1 = require("../managers");
const util_1 = require("../util");
class Server extends _1.Base {
    constructor(client, data) {
        super(client);
        this.description = null;
        this.deleted = false;
        this.icon = null;
        this.banner = null;
        this.categories = new util_1.Collection();
        this._channels = [];
        this._roles = {};
        this._patch(data);
        this.channels = new managers_1.ServerChannelManager(this);
        this.roles = new managers_1.RoleManager(this);
        this.members = new managers_1.ServerMemberManager(this);
    }
    _patch(data) {
        var _a, _b, _c, _d, _e, _f;
        if (!data)
            return this;
        if (data._id) {
            this.id = data._id;
        }
        if (Array.isArray(data.categories)) {
            this.categories.clear();
            for (const cat of data.categories) {
                const category = new _1.Category(this, cat);
                this.categories.set(category.id, category);
            }
        }
        if ('icon' in data) {
            this.icon = (_b = (_a = data.icon) === null || _a === void 0 ? void 0 : _a._id) !== null && _b !== void 0 ? _b : null;
        }
        if ('banner' in data) {
            this.banner = (_d = (_c = data.banner) === null || _c === void 0 ? void 0 : _c._id) !== null && _d !== void 0 ? _d : null;
        }
        if (data.owner) {
            this.ownerId = data.owner;
        }
        if (data.name) {
            this.name = data.name;
        }
        if ('description' in data) {
            this.description = (_e = data.description) !== null && _e !== void 0 ? _e : null;
        }
        if (Array.isArray(data.channels)) {
            this._channels = [...data.channels];
        }
        if (typeof data.roles === 'object') {
            this._roles = { ...data.roles };
        }
        if (typeof ((_f = data.default_permissions) === null || _f === void 0 ? void 0 : _f[0]) === 'number') {
            this.permissions = new util_1.ServerPermissions(data.default_permissions[0]).freeze();
        }
        return this;
    }
    _update(data) {
        const clone = this._clone();
        clone._patch(data);
        return clone;
    }
    async ack() {
        await this.client.servers.ack(this);
    }
    async delete() {
        await this.client.servers.delete(this);
    }
    iconURL(options) {
        return this.icon ? this.client.endpoints.icon(this.icon, options === null || options === void 0 ? void 0 : options.size) : null;
    }
    bannerURL(options) {
        return this.banner ? this.client.endpoints.banner(this.banner, options === null || options === void 0 ? void 0 : options.size) : null;
    }
    get me() {
        var _a, _b;
        return (_b = this.members.cache.get((_a = this.client.user) === null || _a === void 0 ? void 0 : _a.id)) !== null && _b !== void 0 ? _b : null;
    }
    get createdAt() {
        return util_1.UUID.extrectTime(this.id);
    }
    get createdTimestamp() {
        return this.createdAt.getTime();
    }
    get owner() {
        var _a;
        return (_a = this.client.users.cache.get(this.ownerId)) !== null && _a !== void 0 ? _a : null;
    }
    toString() {
        return this.name;
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map