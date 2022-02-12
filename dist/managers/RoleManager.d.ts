import { Role as RawRole } from 'revolt-api/types/Servers';
import { BaseManager } from '.';
import { Role, Server } from '../structures';
export declare type RoleResolvable = Role | string;
export declare class RoleManager extends BaseManager<string, Role, RawRole & {
    id: string;
}> {
    server: Server;
    holds: typeof Role;
    client: import("..").Client;
    constructor(server: Server);
    _add(data: RawRole & {
        id: string;
    }): Role;
    _remove(id: string): void;
    create(name: string): Promise<Role>;
    delete(role: RoleResolvable): Promise<void>;
}
//# sourceMappingURL=RoleManager.d.ts.map