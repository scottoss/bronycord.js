import type { Client } from '../Client';
export declare abstract class Action {
    client: Client;
    constructor(client: Client);
    abstract handle(data: unknown): unknown;
}
//# sourceMappingURL=Action.d.ts.map