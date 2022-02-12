import { ClientOptions } from '../client/BaseClient';
export declare enum Events {
    DEBUG = "debug",
    ERROR = "error",
    RAW = "raw",
    MESSAGE = "message",
    READY = "ready",
    CHANNEL_CREATE = "channelCreate",
    CHANNEL_DELETE = "channelDelete",
    SERVER_DELETE = "serverDelete",
    SERVER_UPDATE = "serverUpdate",
    SERVER_CREATE = "serverCreate",
    MESSAGE_DELETE = "messageDelete",
    MESSAGE_UPDATE = "messageUpdate",
    USER_UPDATE = "userUpdate",
    SERVER_MEMBER_JOIN = "serverMemberJoin",
    CHANNEL_UPDATE = "channelUpdate",
    SERVER_MEMBER_LEAVE = "serverMemberLeave",
    SERVER_MEMBER_UPDATE = "serverMemberUpdate",
    ROLE_CREATE = "roleCreate",
    ROLE_DELETE = "roleDelete",
    TYPING_START = "typingStart",
    TYPING_STOP = "typingStop",
    GROUP_JOIN = "groupJoin",
    GROUP_LEAVE = "groupLeave"
}
export declare enum WSEvents {
    AUTHENTICATE = "Authenticate",
    AUTHENTICATED = "Authenticated",
    BEGIN_TYPING = "BeginTyping",
    CHANNEL_ACK = "ChannelAck",
    CHANNEL_CREATE = "ChannelCreate",
    CHANNEL_DELETE = "ChannelDelete",
    CHANNEL_GROUP_JOIN = "ChannelGroupJoin",
    CHANNEL_GROUP_LEAVE = "ChannelGroupLeave",
    CHANNEL_START_TYPING = "ChannelStartTyping",
    CHANNEL_STOP_TYPING = "ChannelStopTyping",
    CHANNEL_UPDATE = "ChannelUpdate",
    END_TYPING = "EndTyping",
    ERROR = "Error",
    MESSAGE = "Message",
    MESSAGE_DELETE = "MessageDelete",
    MESSAGE_UPDATE = "MessageUpdate",
    PING = "Ping",
    PONG = "Pong",
    READY = "Ready",
    SERVER_DELETE = "ServerDelete",
    SERVER_MEMBER_JOIN = "ServerMemberJoin",
    SERVER_MEMBER_LEAVE = "ServerMemberLeave",
    SERVER_MEMBER_UPDATE = "ServerMemberUpdate",
    SERVER_ROLE_DELETE = "ServerRoleDelete",
    SERVER_ROLE_UPDATE = "ServerRoleUpdate",
    SERVER_UPDATE = "ServerUpdate",
    USER_RELATIONSHIP = "UserRelationship",
    USER_UPDATE = "UserUpdate"
}
export declare enum Presence {
    ONLINE = "ONLINE",
    IDLE = "IDLE",
    BUSY = "DND",
    INVISIBLE = "OFFLINE"
}
export declare enum ChannelTypes {
    DM = "DM",
    GROUP = "GROUP",
    TEXT = "TEXT",
    VOICE = "VOICE",
    NOTES = "NOTES"
}
export declare enum MessageTypes {
    TEXT = "TEXT",
    USER_ADDED = "USER_ADDED",
    USER_REMOVE = "USER_REMOVE",
    USER_LEFT = "USER_LEFT",
    USER_JOINED = "USER_JOINED",
    USER_KICKED = "USER_KICKED",
    USER_BANNED = "USER_BANNED",
    CHANNEL_DESCRIPTION_CHANGED = "CHANNEL_DESCRIPTION_CHANGED",
    CHANNEL_ICON_CHANGED = "CHANNEL_ICON_CHANGED",
    CHANNEL_RENAMED = "CHANNEL_RENAMED"
}
export declare const DEFUALT_OPTIONS: ClientOptions;
export declare const SYSTEM_USER_ID: string;
export declare const PermissionsFlags: {
    readonly CHANNEL: {
        readonly VIEW_CHANNEL: number;
        readonly SEND_MESSAGE: number;
        readonly MANAGE_MESSAGE: number;
        readonly MANAGE_CHANNEL: number;
        readonly VOICE_CALL: number;
        readonly INVITE_OTHERS: number;
        readonly EMBED_LINKS: number;
        readonly UPLOAD_FILES: number;
    };
    readonly USER: {
        readonly ACCESS: number;
        readonly VIEW_PROFILE: number;
        readonly SEND_MESSAGES: number;
        readonly INVITE: number;
    };
    readonly SERVER: {
        readonly VIEW_SERVER: number;
        readonly MANAGE_ROLES: number;
        readonly MANAGE_CHANNELS: number;
        readonly MANAGE_SERVER: number;
        readonly KICK_MEMBERS: number;
        readonly BAN_MEMBERS: number;
        readonly CHANGE_NICKNAME: number;
        readonly MANAGE_NICKNAMES: number;
        readonly CHANGE_AVATAR: number;
        readonly REMOVE_AVATARS: number;
    };
};
export declare const BadgesFlags: {
    readonly DEVELOPER: number;
    readonly TRANSLATOR: number;
    readonly SUPPORTER: number;
    readonly RESPONSIBLE_DISCLOSURE: number;
    readonly REVOLT_TEAM: number;
    readonly EARLY_ADOPTER: number;
};
//# sourceMappingURL=Constants.d.ts.map