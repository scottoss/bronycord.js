import { VoiceChannel as RawVoiceChannel } from 'revolt-api/types/Channels';
import { ServerChannel } from '.';
import { Client } from '..';
import { ChannelTypes } from '../util';
export declare class VoiceChannel extends ServerChannel {
    readonly type = ChannelTypes.VOICE;
    constructor(client: Client, raw: RawVoiceChannel);
    ack(): Promise<void>;
}
//# sourceMappingURL=VoiceChannel.d.ts.map