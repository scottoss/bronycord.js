"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const _1 = require(".");
const util_1 = require("../util");
class Category extends _1.Base {
    constructor(server, data) {
        super(server.client);
        this.server = server;
        this._channels = [];
        this._patch(data);
    }
    _patch(data) {
        if (!data)
            return this;
        if (data.id) {
            this.id = data.id;
        }
        if (data.title) {
            this.name = data.title;
        }
        if (Array.isArray(data.channels)) {
            this._channels = [...data.channels];
        }
        return this;
    }
    _update(data) {
        const clone = this._clone();
        clone._patch(data);
        return clone;
    }
    get channels() {
        const coll = new util_1.Collection();
        for (const channelId of this._channels) {
            const channel = this.server.channels.cache.get(channelId);
            if (channel)
                coll.set(channel.id, channel);
        }
        return coll;
    }
    toString() {
        return this.name;
    }
}
exports.Category = Category;
//# sourceMappingURL=Category.js.map