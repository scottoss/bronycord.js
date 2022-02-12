import { BitField } from './BitField';
import { PermissionsFlags } from './Constants';
export declare type ChannelPermissionsResolvable<T = keyof typeof PermissionsFlags.CHANNEL> = number | T | ChannelPermissions | ChannelPermissionsResolvable[];
export declare type UserPermissionsResolvable<T = keyof typeof PermissionsFlags.USER> = number | T | UserPermissions | UserPermissionsResolvable[];
export declare type ServerPermissionsResolvable<T = keyof typeof PermissionsFlags.SERVER> = number | T | ServerPermissions | ServerPermissionsResolvable[];
export declare interface ServerPermissions {
    serialize(): Record<keyof typeof PermissionsFlags.SERVER, boolean>;
    any(bit: ServerPermissionsResolvable): boolean;
    add(...bits: ServerPermissionsResolvable[]): this;
    remove(...bits: ServerPermissionsResolvable[]): this;
    has(bit: ServerPermissionsResolvable): boolean;
}
export declare interface ChannelPermissions {
    serialize(): Record<keyof typeof PermissionsFlags.CHANNEL, boolean>;
    any(bit: ChannelPermissionsResolvable): boolean;
    add(...bits: ChannelPermissionsResolvable[]): this;
    remove(...bits: ChannelPermissionsResolvable[]): this;
    has(bit: ChannelPermissionsResolvable): boolean;
}
export declare interface UserPermissions {
    serialize(): Record<keyof typeof PermissionsFlags.USER, boolean>;
    any(bit: UserPermissionsResolvable): boolean;
    add(...bits: UserPermissionsResolvable[]): this;
    remove(...bits: UserPermissionsResolvable[]): this;
    has(bit: UserPermissionsResolvable): boolean;
}
export declare class ChannelPermissions extends BitField {
    static readonly FLAGS: {
        readonly VIEW_CHANNEL: number;
        readonly SEND_MESSAGE: number;
        readonly MANAGE_MESSAGE: number;
        readonly MANAGE_CHANNEL: number;
        readonly VOICE_CALL: number;
        readonly INVITE_OTHERS: number;
        readonly EMBED_LINKS: number;
        readonly UPLOAD_FILES: number;
    };
    constructor(bits?: ChannelPermissionsResolvable);
    static resolve(bit: ChannelPermissionsResolvable): number;
}
export declare class UserPermissions extends BitField {
    static readonly FLAGS: {
        readonly ACCESS: number;
        readonly VIEW_PROFILE: number;
        readonly SEND_MESSAGES: number;
        readonly INVITE: number;
    };
    constructor(bits?: UserPermissionsResolvable);
    static resolve(bit: UserPermissionsResolvable): number;
}
export declare class ServerPermissions extends BitField {
    static readonly FLAGS: {
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
    constructor(bits?: ServerPermissionsResolvable);
    static resolve(bit: ServerPermissionsResolvable): number;
}
export declare const DEFAULT_PERMISSION_DM: Readonly<ChannelPermissions>;
//# sourceMappingURL=Permissions.d.ts.map