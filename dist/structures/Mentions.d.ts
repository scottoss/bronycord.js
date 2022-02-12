import { Base, Message, ServerMember, User } from '.';
import { UserResolvable } from '../managers';
import { Collection } from '../util';
export declare class Mentions extends Base {
    message: Message;
    private _users;
    constructor(message: Message);
    _patch(userIds: string[]): this;
    _update(userIds: string[]): this;
    has(user: UserResolvable): boolean;
    get members(): Collection<string, ServerMember> | null;
    get users(): Collection<string, User>;
}
//# sourceMappingURL=Mentions.d.ts.map