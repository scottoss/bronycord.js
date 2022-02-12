import { Message as RawMessage } from 'revolt-api/types/Channels';
import { Embed } from 'revolt-api/types/January';
import { Base, DMChannel, GroupChannel, Mentions, Server, ServerMember, TextChannel, User } from '.';
import { Client } from '..';
import { MessageTypes } from '../util';
export declare class Message extends Base {
    content: string;
    id: string;
    channelId: string;
    authorId: string;
    embeds: Embed[];
    deleted: boolean;
    mentions: Mentions;
    type: MessageTypes | 'UNKNOWN';
    editedAt: Date | null;
    constructor(client: Client, data: RawMessage);
    _update(data: RawMessage): this;
    _patch(data: RawMessage): this;
    get createdAt(): Date;
    get createdTimestamp(): number;
    get editedTimestamp(): number | null;
    ack(): Promise<void>;
    delete(): Promise<void>;
    reply(content: string, mention?: boolean): Promise<unknown>;
    edit(content: string): Promise<void>;
    fetch(): Promise<Message>;
    get system(): boolean;
    inServer(): this is this & {
        serverId: string;
        server: Server;
        channel: TextChannel;
    };
    get author(): User | null;
    get channel(): TextChannel | DMChannel | GroupChannel;
    get serverId(): string | null;
    get server(): Server | null;
    get member(): ServerMember | null;
    get url(): string;
}
//# sourceMappingURL=Message.d.ts.map