"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceChannel = void 0;
const _1 = require(".");
const util_1 = require("../util");
class VoiceChannel extends _1.ServerChannel {
    constructor(client, raw) {
        super(client, raw);
        this.type = util_1.ChannelTypes.VOICE;
    }
    async ack() {
        throw new TypeError('Cannot ack voice channel');
    }
}
exports.VoiceChannel = VoiceChannel;
//# sourceMappingURL=VoiceChannel.js.map