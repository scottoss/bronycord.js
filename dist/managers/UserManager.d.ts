import { User as RawUser } from 'revolt-api/types/Users';
import { BaseManager } from '.';
import { Client } from '../client/Client';
import { Message, User } from '../structures';
export declare type UserResolvable = User | RawUser | Message | string;
export declare class UserManager extends BaseManager<string, User, RawUser> {
    client: Client;
    holds: typeof User;
    constructor(client: Client);
    fetch(user: UserResolvable, { force }?: {
        force?: boolean | undefined;
    }): Promise<User>;
    resolve(resolvable: Message | User): User;
    resolve(resolvable: string | RawUser): User | null;
    resolveId(resolvable: UserResolvable): string | null;
}
//# sourceMappingURL=UserManager.d.ts.map