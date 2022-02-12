import { Server as RawServer } from 'revolt-api/types/Servers';
import { Action } from './Action';
export declare class ServerUpdateAction extends Action {
    handle(data: {
        id: string;
        data: RawServer;
    }): unknown;
}
//# sourceMappingURL=ServerUpdate.d.ts.map