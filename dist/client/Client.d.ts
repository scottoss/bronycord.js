import { RevoltConfiguration } from 'revolt-api/types/Core';
import { BaseClient } from './BaseClient';
import { ActionManager } from './actions/ActionManager';
import { ChannelManager, ServerManager, UserManager } from '../managers';
import { ClientUser } from '../structures/ClientUser';
export declare type LoginDetails = string | {
    token: string;
    type?: 'bot' | 'user';
};
export declare class Client extends BaseClient {
    private readonly ws;
    readonly actions: ActionManager;
    readonly channels: ChannelManager;
    configuration?: RevoltConfiguration;
    readyAt: Date | null;
    readonly servers: ServerManager;
    user: ClientUser | null;
    readonly users: UserManager;
    get readyTimestamp(): number | null;
    get uptime(): number | null;
    login(details: LoginDetails): Promise<void>;
    destroy(): Promise<void>;
    private debug;
    isReady(): boolean;
}
//# sourceMappingURL=Client.d.ts.map