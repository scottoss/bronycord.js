"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DMChannel = void 0;
const TextBasedChannel_1 = require("./interfaces/TextBasedChannel");
const util_1 = require("../util");
class DMChannel extends TextBasedChannel_1.TextBasedChannel {
    constructor(client, data) {
        super(client, data);
        this.type = util_1.ChannelTypes.DM;
        this.permissions = util_1.DEFAULT_PERMISSION_DM;
        this._patch(data);
    }
    _patch(data) {
        if (data._id) {
            this.id = data._id;
        }
        if (typeof data.active === 'boolean') {
            this.active = data.active;
        }
        return this;
    }
    _update(data) {
        const clone = this._clone();
        clone._patch(data);
        return clone;
    }
}
exports.DMChannel = DMChannel;
//# sourceMappingURL=DMChannel.js.map