import { ServerChannel as RawServerChannel } from 'revolt-api/types/Channels';
import { Category, Channel, Server } from '.';
import { Client } from '../client/Client';
import { ChannelPermissions, Collection } from '../util';
export declare class ServerChannel extends Channel {
    name: string;
    serverId: string;
    description: string | null;
    icon: string | null;
    overwrites: Collection<string, ChannelPermissions>;
    constructor(client: Client, data: RawServerChannel);
    _patch(data: RawServerChannel): this;
    _update(data: RawServerChannel): this;
    createInvite(): Promise<string>;
    iconURL(options?: {
        size: number;
    }): string | null;
    get server(): Server;
    get category(): Category | null;
}
//# sourceMappingURL=ServerChannel.d.ts.map