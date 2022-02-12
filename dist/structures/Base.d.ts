import type { Client } from '..';
export declare abstract class Base {
    client: Client;
    constructor(client: Client);
    abstract _update(data: unknown): this;
    abstract _patch(data: unknown): this;
    _clone(): this;
}
//# sourceMappingURL=Base.d.ts.map