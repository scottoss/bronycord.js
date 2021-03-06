"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgesFlags = exports.PermissionsFlags = exports.SYSTEM_USER_ID = exports.DEFUALT_OPTIONS = exports.MessageTypes = exports.ChannelTypes = exports.Presence = exports.WSEvents = exports.Events = void 0;
const UUID_1 = require("./UUID");
var Events;
(function (Events) {
    Events["DEBUG"] = "debug";
    Events["ERROR"] = "error";
    Events["RAW"] = "raw";
    Events["MESSAGE"] = "message";
    Events["READY"] = "ready";
    Events["CHANNEL_CREATE"] = "channelCreate";
    Events["CHANNEL_DELETE"] = "channelDelete";
    Events["SERVER_DELETE"] = "serverDelete";
    Events["SERVER_UPDATE"] = "serverUpdate";
    Events["SERVER_CREATE"] = "serverCreate";
    Events["MESSAGE_DELETE"] = "messageDelete";
    Events["MESSAGE_UPDATE"] = "messageUpdate";
    Events["USER_UPDATE"] = "userUpdate";
    Events["SERVER_MEMBER_JOIN"] = "serverMemberJoin";
    Events["CHANNEL_UPDATE"] = "channelUpdate";
    Events["SERVER_MEMBER_LEAVE"] = "serverMemberLeave";
    Events["SERVER_MEMBER_UPDATE"] = "serverMemberUpdate";
    Events["ROLE_CREATE"] = "roleCreate";
    Events["ROLE_DELETE"] = "roleDelete";
    Events["TYPING_START"] = "typingStart";
    Events["TYPING_STOP"] = "typingStop";
    Events["GROUP_JOIN"] = "groupJoin";
    Events["GROUP_LEAVE"] = "groupLeave";
})(Events = exports.Events || (exports.Events = {}));
var WSEvents;
(function (WSEvents) {
    WSEvents["AUTHENTICATE"] = "Authenticate";
    WSEvents["AUTHENTICATED"] = "Authenticated";
    WSEvents["BEGIN_TYPING"] = "BeginTyping";
    WSEvents["CHANNEL_ACK"] = "ChannelAck";
    WSEvents["CHANNEL_CREATE"] = "ChannelCreate";
    WSEvents["CHANNEL_DELETE"] = "ChannelDelete";
    WSEvents["CHANNEL_GROUP_JOIN"] = "ChannelGroupJoin";
    WSEvents["CHANNEL_GROUP_LEAVE"] = "ChannelGroupLeave";
    WSEvents["CHANNEL_START_TYPING"] = "ChannelStartTyping";
    WSEvents["CHANNEL_STOP_TYPING"] = "ChannelStopTyping";
    WSEvents["CHANNEL_UPDATE"] = "ChannelUpdate";
    WSEvents["END_TYPING"] = "EndTyping";
    WSEvents["ERROR"] = "Error";
    WSEvents["MESSAGE"] = "Message";
    WSEvents["MESSAGE_DELETE"] = "MessageDelete";
    WSEvents["MESSAGE_UPDATE"] = "MessageUpdate";
    WSEvents["PING"] = "Ping";
    WSEvents["PONG"] = "Pong";
    WSEvents["READY"] = "Ready";
    WSEvents["SERVER_DELETE"] = "ServerDelete";
    WSEvents["SERVER_MEMBER_JOIN"] = "ServerMemberJoin";
    WSEvents["SERVER_MEMBER_LEAVE"] = "ServerMemberLeave";
    WSEvents["SERVER_MEMBER_UPDATE"] = "ServerMemberUpdate";
    WSEvents["SERVER_ROLE_DELETE"] = "ServerRoleDelete";
    WSEvents["SERVER_ROLE_UPDATE"] = "ServerRoleUpdate";
    WSEvents["SERVER_UPDATE"] = "ServerUpdate";
    WSEvents["USER_RELATIONSHIP"] = "UserRelationship";
    WSEvents["USER_UPDATE"] = "UserUpdate";
})(WSEvents = exports.WSEvents || (exports.WSEvents = {}));
var Presence;
(function (Presence) {
    Presence["ONLINE"] = "ONLINE";
    Presence["IDLE"] = "IDLE";
    Presence["BUSY"] = "DND";
    Presence["INVISIBLE"] = "OFFLINE";
})(Presence = exports.Presence || (exports.Presence = {}));
var ChannelTypes;
(function (ChannelTypes) {
    ChannelTypes["DM"] = "DM";
    ChannelTypes["GROUP"] = "GROUP";
    ChannelTypes["TEXT"] = "TEXT";
    ChannelTypes["VOICE"] = "VOICE";
    ChannelTypes["NOTES"] = "NOTES";
})(ChannelTypes = exports.ChannelTypes || (exports.ChannelTypes = {}));
var MessageTypes;
(function (MessageTypes) {
    MessageTypes["TEXT"] = "TEXT";
    MessageTypes["USER_ADDED"] = "USER_ADDED";
    MessageTypes["USER_REMOVE"] = "USER_REMOVE";
    MessageTypes["USER_LEFT"] = "USER_LEFT";
    MessageTypes["USER_JOINED"] = "USER_JOINED";
    MessageTypes["USER_KICKED"] = "USER_KICKED";
    MessageTypes["USER_BANNED"] = "USER_BANNED";
    MessageTypes["CHANNEL_DESCRIPTION_CHANGED"] = "CHANNEL_DESCRIPTION_CHANGED";
    MessageTypes["CHANNEL_ICON_CHANGED"] = "CHANNEL_ICON_CHANGED";
    MessageTypes["CHANNEL_RENAMED"] = "CHANNEL_RENAMED";
})(MessageTypes = exports.MessageTypes || (exports.MessageTypes = {}));
exports.DEFUALT_OPTIONS = {
    http: {
        api: 'https://api.bronycord.cf:2096',
        cdn: 'https://cdn.bronycord.cf:2096',
        invite: 'https://bronycord.bronytube.nl',
        timeout: 15000,
        retries: 3,
        offset: 50
    },
    ws: {
        heartbeat: 3000
    }
};
exports.SYSTEM_USER_ID = '0'.repeat(UUID_1.UUID.TIME_LENGTH + UUID_1.UUID.RANDOM_LENGTH);
exports.PermissionsFlags = {
    CHANNEL: {
        VIEW_CHANNEL: 1 << 0,
        SEND_MESSAGE: 1 << 1,
        MANAGE_MESSAGE: 1 << 2,
        MANAGE_CHANNEL: 1 << 3,
        VOICE_CALL: 1 << 4,
        INVITE_OTHERS: 1 << 5,
        EMBED_LINKS: 1 << 6,
        UPLOAD_FILES: 1 << 7
    },
    USER: {
        ACCESS: 1 << 0,
        VIEW_PROFILE: 1 << 1,
        SEND_MESSAGES: 1 << 2,
        INVITE: 1 << 3
    },
    SERVER: {
        VIEW_SERVER: 1 << 0,
        MANAGE_ROLES: 1 << 1,
        MANAGE_CHANNELS: 1 << 2,
        MANAGE_SERVER: 1 << 3,
        KICK_MEMBERS: 1 << 4,
        BAN_MEMBERS: 1 << 5,
        CHANGE_NICKNAME: 1 << 12,
        MANAGE_NICKNAMES: 1 << 13,
        CHANGE_AVATAR: 1 << 14,
        REMOVE_AVATARS: 1 << 15
    }
};
exports.BadgesFlags = {
    DEVELOPER: 1 << 0,
    TRANSLATOR: 1 << 1,
    SUPPORTER: 1 << 2,
    RESPONSIBLE_DISCLOSURE: 1 << 3,
    REVOLT_TEAM: 1 << 4,
    EARLY_ADOPTER: 1 << 8
};
//# sourceMappingURL=Constants.js.map