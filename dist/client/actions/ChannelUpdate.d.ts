import { Channel as RawChannel } from 'revolt-api/types/Channels';
import { Action } from './Action';
export declare class ChannelUpdateAction extends Action {
    handle(data: {
        id: string;
        data: RawChannel;
    }): unknown;
}
//# sourceMappingURL=ChannelUpdate.d.ts.map