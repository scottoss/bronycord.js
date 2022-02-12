/// <reference types="node" />
import { EventEmitter } from 'events';
import { HeadersInit } from 'node-fetch';
import { WSOptions } from './WebSocket';
import { Client, Message, Server } from '..';
import { Endpoints } from '../rest/Endpoints';
import { REST, RESTOptions } from '../rest/REST';
import { Channel, GroupChannel, Role, ServerMember, User } from '../structures';
import { TextBasedChannel } from '../structures/interfaces/TextBasedChannel';
export declare type Awaited<T> = T | Promise<T>;
export interface ClientEvents {
    message: [Message];
    messageDelete: [Message];
    messageUpdate: [Message, Message];
    ready: [Client];
    serverCreate: [Server];
    serverDelete: [Server];
    serverUpdate: [Server, Server];
    debug: [string];
    error: [unknown];
    raw: [unknown];
    userUpdate: [User, User];
    serverMemberJoin: [ServerMember];
    channelUpdate: [Channel, Channel];
    serverMemberLeave: [ServerMember];
    serverMemberUpdate: [ServerMember, ServerMember];
    roleDelete: [Role];
    typingStart: [TextBasedChannel, User];
    typingStop: [TextBasedChannel, User];
    groupJoin: [GroupChannel, User];
    groupLeave: [GroupChannel, User];
}
export declare interface BaseClient {
    on<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => Awaited<void>): this;
    on<S extends string | symbol>(event: Exclude<S, keyof ClientEvents>, listener: (...args: any[]) => Awaited<void>): this;
    once<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => Awaited<void>): this;
    once<S extends string | symbol>(event: Exclude<S, keyof ClientEvents>, listener: (...args: any[]) => Awaited<void>): this;
    emit<K extends keyof ClientEvents>(event: K, ...args: ClientEvents[K]): boolean;
    emit<S extends string | symbol>(event: Exclude<S, keyof ClientEvents>, ...args: unknown[]): boolean;
    off<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => Awaited<void>): this;
    off<S extends string | symbol>(event: Exclude<S, keyof ClientEvents>, listener: (...args: any[]) => Awaited<void>): this;
    removeAllListeners<K extends keyof ClientEvents>(event?: K): this;
    removeAllListeners<S extends string | symbol>(event?: Exclude<S, keyof ClientEvents>): this;
}
declare type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
export interface ClientOptions {
    http: RESTOptions;
    ws: WSOptions;
}
export declare class BaseClient extends EventEmitter {
    readonly api: REST;
    token: string | null;
    bot: boolean;
    options: ClientOptions;
    constructor(options?: DeepPartial<ClientOptions>);
    get endpoints(): Endpoints;
    get headers(): HeadersInit;
}
export {};
//# sourceMappingURL=BaseClient.d.ts.map