import { TextChannel as RawTextChannel } from 'revolt-api/types/Channels';
import { Message, ServerChannel } from '.';
import { TextBasedChannel } from './interfaces/TextBasedChannel';
import { Client } from '..';
import { MessageManager, MessageOptions } from '../managers';
import { ChannelTypes } from '../util';
export declare class TextChannel extends ServerChannel implements TextBasedChannel {
    lastMessageId: string | null;
    messages: MessageManager;
    readonly type = ChannelTypes.TEXT;
    constructor(client: Client, raw: RawTextChannel);
    send(options: MessageOptions | string): Promise<Message>;
    get lastMessage(): Message | null;
}
//# sourceMappingURL=TextChannel.d.ts.map