import { Role as RawRole, Server as RawServer } from 'revolt-api/types/Servers';
import { Base, ServerMember, User, Category } from '.';
import { Client } from '..';
import { RoleManager, ServerChannelManager, ServerMemberManager } from '../managers';
import { Collection, ServerPermissions } from '../util';
export declare class Server extends Base {
    name: string;
    id: string;
    description: string | null;
    ownerId: string;
    members: ServerMemberManager;
    channels: ServerChannelManager;
    roles: RoleManager;
    deleted: boolean;
    icon: string | null;
    banner: string | null;
    permissions: ServerPermissions;
    categories: Collection<string, Category>;
    _channels: string[];
    _roles: Record<string, RawRole>;
    constructor(client: Client, data: RawServer);
    _patch(data: RawServer): this;
    _update(data: RawServer): this;
    ack(): Promise<void>;
    delete(): Promise<void>;
    iconURL(options?: {
        size: number;
    }): string | null;
    bannerURL(options?: {
        size: number;
    }): string | null;
    get me(): ServerMember | null;
    get createdAt(): Date;
    get createdTimestamp(): number;
    get owner(): User | null;
    toString(): string;
}
//# sourceMappingURL=Server.d.ts.map