import { Channel as RawChannel } from 'revolt-api/types/Channels';
import { Base, ServerChannel, VoiceChannel } from '.';
import { TextBasedChannel } from './interfaces/TextBasedChannel';
import { Client } from '..';
import { ChannelTypes } from '../util';
export declare abstract class Channel extends Base {
    id: string;
    type: ChannelTypes | 'UNKNOWN';
    deleted: boolean;
    constructor(client: Client, raw: RawChannel);
    get createdTimestamp(): number;
    get createdAt(): Date;
    ack(): Promise<void>;
    delete(): Promise<void>;
    isText(): this is TextBasedChannel;
    isVoice(): this is VoiceChannel;
    inServer(): this is ServerChannel;
    toString(): string;
    fetch(force?: boolean): Promise<Channel>;
    static create(client: Client, raw: RawChannel): Channel;
}
//# sourceMappingURL=Channel.d.ts.map