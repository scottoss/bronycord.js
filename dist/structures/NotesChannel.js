"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesChannel = void 0;
const TextBasedChannel_1 = require("./interfaces/TextBasedChannel");
const util_1 = require("../util");
class NotesChannel extends TextBasedChannel_1.TextBasedChannel {
    constructor(client, data) {
        super(client, data);
        this.type = util_1.ChannelTypes.NOTES;
        this._patch(data);
    }
    _patch(data) {
        if (data._id) {
            this.id = data._id;
        }
        if (data.user) {
            this.userId = data.user;
        }
        return this;
    }
    _update(data) {
        const clone = this._clone();
        clone._patch(data);
        return clone;
    }
    get user() {
        return this.client.users.cache.get(this.userId);
    }
}
exports.NotesChannel = NotesChannel;
//# sourceMappingURL=NotesChannel.js.map