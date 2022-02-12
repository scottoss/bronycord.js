"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
const _1 = require(".");
const util_1 = require("../util");
class Channel extends _1.Base {
    constructor(client, raw) {
        super(client);
        this.type = 'UNKNOWN';
        this.deleted = false;
        this.id = raw._id;
    }
    get createdTimestamp() {
        return this.createdAt.getTime();
    }
    get createdAt() {
        return util_1.UUID.extrectTime(this.id);
    }
    async ack() {
        await this.client.channels.ack(this);
    }
    async delete() {
        await this.client.channels.delete(this);
    }
    isText() {
        return 'messages' in this;
    }
    isVoice() {
        return this.type === util_1.ChannelTypes.VOICE;
    }
    inServer() {
        return 'serverId' in this;
    }
    toString() {
        return `<#${this.id}>`;
    }
    fetch(force = true) {
        return this.client.channels.fetch(this, { force });
    }
    static create(client, raw) {
        let channel;
        switch (raw.channel_type) {
            case 'TextChannel':
                channel = new _1.TextChannel(client, raw);
                break;
            case 'VoiceChannel':
                channel = new _1.VoiceChannel(client, raw);
                break;
            case 'DirectMessage':
                channel = new _1.DMChannel(client, raw);
                break;
            case 'Group':
                channel = new _1.GroupChannel(client, raw);
                break;
            case 'SavedMessages':
                channel = new _1.NotesChannel(client, raw);
                break;
        }
        return channel;
    }
}
exports.Channel = Channel;
//# sourceMappingURL=Channel.js.map