import { Action as BaseAction } from './Action';
import { Client } from '../Client';
export declare class ActionManager {
    client: Client;
    private actions;
    constructor(client: Client);
    register(Action: new (client: Client) => BaseAction): void;
    get(name: string): BaseAction | null;
}
//# sourceMappingURL=ActionManager.d.ts.map