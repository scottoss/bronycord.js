import { Member as RawMember } from 'revolt-api/types/Servers';
import { BaseManager } from '.';
import { Server, ServerMember, User } from '../structures';
import { Collection } from '../util';
export declare type ServerMemberResolvable = ServerMember | User | RawMember | string;
export interface EditServerMemberOptions {
    nickname?: string;
    avatar?: string;
    roles?: string[];
}
export declare class ServerMemberManager extends BaseManager<string, ServerMember, RawMember> {
    server: Server;
    holds: typeof ServerMember;
    client: import("..").Client;
    constructor(server: Server);
    edit(member: ServerMemberResolvable, options: EditServerMemberOptions): Promise<void>;
    ban(member: ServerMemberResolvable, reason?: string): Promise<void>;
    kick(member: ServerMemberResolvable): Promise<void>;
    unban(member: ServerMemberResolvable): Promise<void>;
    fetch(member: ServerMemberResolvable): Promise<ServerMember>;
    fetch(): Promise<Collection<string, ServerMember>>;
    resolveId(member: ServerMemberResolvable): string | null;
}
//# sourceMappingURL=ServerMamberManager.d.ts.map