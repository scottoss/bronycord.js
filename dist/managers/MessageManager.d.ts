import { Message as RawMessage } from 'revolt-api/types/Channels';
import { BaseManager } from '.';
import { Channel, Message, User } from '../structures';
import { Collection } from '../util';
export declare type MessageResolvable = Message | RawMessage | string;
export interface EditMessageOptions {
    content?: string;
}
export interface MessageOptions {
    content: string;
    replies?: unknown[];
    attachments?: string[];
}
export interface SerachMessageQuery {
    query: string;
    limit?: number;
    before?: string;
    after?: string;
    sort?: 'Relevance' | 'Latest' | 'Oldest';
    include_users?: boolean;
}
export declare class MessageManager extends BaseManager<string, Message, RawMessage> {
    channel: Channel;
    holds: typeof Message;
    client: import("..").Client;
    constructor(channel: Channel);
    private _fetchId;
    private _fetchMany;
    send(_options: MessageOptions | string): Promise<Message>;
    ack(message: MessageResolvable): Promise<void>;
    delete(message: MessageResolvable): Promise<void>;
    edit(message: MessageResolvable, options: EditMessageOptions): Promise<void>;
    search(query: SerachMessageQuery & {
        include_users: true;
    }): Promise<{
        users: Collection<string, User>;
        messages: Collection<string, Message>;
    }>;
    search(query: SerachMessageQuery & {
        include_users?: false;
    }): Promise<Collection<string, Message>>;
    fetch(messageId: string): Promise<Message>;
    fetch(options: {
        includeUsers: true;
    }): Promise<{
        users: Collection<string, User>;
        messages: Collection<string, Message>;
    }>;
    fetch(options?: {
        includeUsers?: false;
    }): Promise<Collection<string, Message>>;
}
//# sourceMappingURL=MessageManager.d.ts.map