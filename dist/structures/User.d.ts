import { Attachment } from 'revolt-api/types/Autumn';
import { User as RawUser } from 'revolt-api/types/Users';
import { Base, DMChannel } from '.';
import { Client } from '..';
import { Badges, Presence } from '../util';
export declare class User extends Base {
    username: string;
    id: string;
    avatar: Attachment | null;
    status: {
        text: string | null;
        presence: Presence;
    };
    badges: Badges;
    constructor(client: Client, data: RawUser);
    _patch(data: RawUser): this;
    _update(data: RawUser): this;
    get createdAt(): Date;
    get createdTimestamp(): number;
    block(): Promise<void>;
    unblock(): Promise<void>;
    createDM(): Promise<DMChannel>;
    avatarURL(options?: {
        size: number;
    }): string | null;
    displayAvatarURL(options?: {
        size: number;
    }): string;
    fetch(force?: boolean): Promise<User>;
    toString(): string;
}
//# sourceMappingURL=User.d.ts.map