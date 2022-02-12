import { Message, MessageManager, MessageOptions } from '../..';
import { Channel } from '../Channel';
export declare abstract class TextBasedChannel extends Channel {
    lastMessageId: string | null;
    messages: MessageManager;
    send(options: MessageOptions | string): Promise<Message>;
    get lastMessage(): Message | null;
}
//# sourceMappingURL=TextBasedChannel.d.ts.map