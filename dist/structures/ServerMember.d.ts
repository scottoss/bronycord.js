import { Attachment } from 'revolt-api/types/Autumn';
import { Member as RawMember } from 'revolt-api/types/Servers';
import { Base, Server, User } from '.';
import { Client } from '..';
export declare class ServerMember extends Base {
    id: string;
    serverId: string;
    nickname: string | null;
    avatar: Attachment | null;
    constructor(client: Client, data: RawMember);
    _patch(data: RawMember): this;
    _update(data: RawMember): this;
    setNickname(nickname?: string): Promise<this>;
    ban(reason?: string): Promise<void>;
    kick(): Promise<void>;
    leave(): Promise<void>;
    displayAvatarURL(options?: {
        size: number;
    }): string;
    get user(): User;
    get server(): Server;
    toString(): string;
}
//# sourceMappingURL=ServerMember.d.ts.map