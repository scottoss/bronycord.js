"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const _1 = require(".");
const util_1 = require("../util");
class User extends _1.Base {
    constructor(client, data) {
        super(client);
        this.avatar = null;
        this.status = {
            text: null,
            presence: util_1.Presence.INVISIBLE
        };
        this._patch(data);
    }
    _patch(data) {
        var _a, _b, _c, _d;
        if (!data)
            return this;
        if (data._id) {
            this.id = data._id;
        }
        if (data.username) {
            this.username = data.username;
        }
        if (typeof data.badges === 'number') {
            this.badges = new util_1.Badges(data.badges).freeze();
        }
        if ('avatar' in data) {
            this.avatar = (_a = data.avatar) !== null && _a !== void 0 ? _a : null;
        }
        if ('status' in data) {
            const presence = ((_b = data.status) === null || _b === void 0 ? void 0 : _b.presence) ? util_1.Presence[data.status.presence.toUpperCase()] : util_1.Presence.INVISIBLE;
            this.status.presence = presence;
            this.status.text = (_d = (_c = data.status) === null || _c === void 0 ? void 0 : _c.text) !== null && _d !== void 0 ? _d : null;
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
    async block() {
        await this.client.api.put(`/users/${this.id}/block`);
    }
    async unblock() {
        await this.client.api.delete(`/users/${this.id}/block`);
    }
    async createDM() {
        const data = await this.client.api.get(`/users/${this.id}/dm`);
        return this.client.channels._add(data);
    }
    avatarURL(options) {
        return this.avatar ? this.client.endpoints.avatar(this.avatar._id, this.avatar.filename, options === null || options === void 0 ? void 0 : options.size) : null;
    }
    displayAvatarURL(options) {
        var _a;
        return (_a = this.avatarURL(options)) !== null && _a !== void 0 ? _a : `${this.client.options.http.api}/users/${this.id}/default_avatar`;
    }
    fetch(force = true) {
        return this.client.users.fetch(this, { force });
    }
    toString() {
        return `<@${this.id}>`;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map