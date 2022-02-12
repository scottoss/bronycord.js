import { Message as RawMessage } from 'revolt-api/types/Channels';
import { Action } from './Action';
export declare class MessageUpdateAction extends Action {
    handle(data: {
        id: string;
        channel: string;
        data: RawMessage;
    }): unknown;
}
//# sourceMappingURL=MessageUpdate.d.ts.map