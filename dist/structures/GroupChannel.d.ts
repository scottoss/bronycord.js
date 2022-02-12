import { GroupChannel as RawGroupChannel } from 'revolt-api/types/Channels';
import { TextBasedChannel } from './interfaces/TextBasedChannel';
import { Client, User, UserResolvable } from '..';
import { ChannelPermissions, ChannelTypes, Collection } from '../util';
export declare class GroupChannel extends TextBasedChannel {
    name: string;
    description: string | null;
    ownerId: string;
    readonly type = ChannelTypes.GROUP;
    permissions: Readonly<ChannelPermissions>;
    icon: string | null;
    _users: string[];
    constructor(client: Client, data: RawGroupChannel);
    _patch(data: RawGroupChannel): this;
    _update(data: RawGroupChannel): this;
    add(user: UserResolvable): Promise<void>;
    remove(user: UserResolvable): Promise<void>;
    leave(): Promise<void>;
    iconURL(options?: {
        size: number;
    }): string | null;
    get owner(): User | null;
    get users(): Collection<string, User>;
    get members(): Collection<string, User>;
}
//# sourceMappingURL=GroupChannel.d.ts.map