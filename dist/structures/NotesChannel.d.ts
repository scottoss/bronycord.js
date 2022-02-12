import { SavedMessagesChannel as RawNotesChannel } from 'revolt-api/types/Channels';
import { User } from '.';
import { TextBasedChannel } from './interfaces/TextBasedChannel';
import { Client } from '../client/Client';
import { ChannelTypes } from '../util';
export declare class NotesChannel extends TextBasedChannel {
    userId: string;
    readonly type = ChannelTypes.NOTES;
    constructor(client: Client, data: RawNotesChannel);
    _patch(data: RawNotesChannel): this;
    _update(data: RawNotesChannel): this;
    get user(): User;
}
//# sourceMappingURL=NotesChannel.d.ts.map