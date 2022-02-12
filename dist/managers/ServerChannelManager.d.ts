import { Channel as RawChannel, ServerChannel as RawServerChannel } from 'revolt-api/types/Channels';
import { BaseManager } from '.';
import { Client } from '..';
import { Server, ServerChannel } from '../structures';
export declare type ServerChannelResolvable = ServerChannel | RawServerChannel | string;
export interface CreateChannelOptions {
    name: string;
    type?: 'Text' | 'Voice';
    description?: string;
}
export declare class ServerChannelManager extends BaseManager<string, ServerChannel> {
    server: Server;
    client: Client;
    holds: typeof ServerChannel;
    constructor(server: Server);
    _add(raw: RawChannel): ServerChannel;
    create({ name, type, description }: CreateChannelOptions): Promise<ServerChannel>;
    fetch(channel: ServerChannelResolvable, { force }?: {
        force?: boolean | undefined;
    }): Promise<ServerChannel>;
}
//# sourceMappingURL=ServerChannelManager.d.ts.map