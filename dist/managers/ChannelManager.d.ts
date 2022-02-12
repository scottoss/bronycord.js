import { Channel as RawChannel } from 'revolt-api/types/Channels';
import { BaseManager } from '.';
import { Client } from '..';
import { Channel } from '../structures';
export declare type ChannelResolvable = Channel | RawChannel | string;
export declare class ChannelManager extends BaseManager<string, Channel, RawChannel> {
    client: Client;
    holds: null;
    constructor(client: Client);
    _add(raw: RawChannel): Channel;
    _remove(id: string): void;
    delete(channel: ChannelResolvable): Promise<void>;
    ack(channel: ChannelResolvable): Promise<void>;
    fetch(channel: ChannelResolvable, { force }?: {
        force?: boolean | undefined;
    }): Promise<Channel>;
    resolve(channel: ChannelResolvable): Channel | null;
    resolveId(channel: ChannelResolvable): string | null;
}
//# sourceMappingURL=ChannelManager.d.ts.map