import { Server as RawServer } from 'revolt-api/types/Servers';
import { BaseManager } from '.';
import { Client } from '..';
import { Server } from '../structures';
export declare type ServerResolvable = Server | RawServer | string;
export interface EditServerOptions {
    name?: string;
    description?: string;
}
export declare class ServerManager extends BaseManager<string, Server, RawServer> {
    client: Client;
    readonly holds: typeof Server;
    constructor(client: Client);
    _remove(id: string): void;
    create(name: string): Promise<Server>;
    edit(server: ServerResolvable, options: EditServerOptions): Promise<void>;
    ack(server: ServerResolvable): Promise<void>;
    delete(server: ServerResolvable): Promise<void>;
    fetch(server: ServerResolvable, { force }?: {
        force?: boolean | undefined;
    }): Promise<Server>;
}
//# sourceMappingURL=ServerManager.d.ts.map