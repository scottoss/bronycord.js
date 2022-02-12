import { Role as RawRole } from 'revolt-api/types/Servers';
import { Base, Server } from '.';
export declare class Role extends Base {
    server: Server;
    id: string;
    name: string;
    color: string | null;
    constructor(server: Server, data: RawRole & {
        id: string;
    });
    _patch(data: RawRole & {
        id?: string;
    }): this;
    _update(data: RawRole & {
        id: string;
    }): this;
    get createdAt(): Date;
    get createdTimestamp(): number;
    delete(): Promise<void>;
    toString(): string;
}
//# sourceMappingURL=Role.d.ts.map