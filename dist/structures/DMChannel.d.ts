import { DirectMessageChannel as RawDMChannel } from 'revolt-api/types/Channels';
import { TextBasedChannel } from './interfaces/TextBasedChannel';
import { Client } from '..';
import { ChannelTypes } from '../util';
export declare class DMChannel extends TextBasedChannel {
    active: boolean;
    readonly type = ChannelTypes.DM;
    permissions: Readonly<import("..").ChannelPermissions>;
    constructor(client: Client, data: RawDMChannel);
    _patch(data: RawDMChannel): this;
    _update(data: RawDMChannel): this;
}
//# sourceMappingURL=DMChannel.d.ts.map