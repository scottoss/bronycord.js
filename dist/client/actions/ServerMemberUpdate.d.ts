import { Member as RawMember } from 'revolt-api/types/Servers';
import { Action } from './Action';
export declare class ServerMemberUpdateAction extends Action {
    handle(data: {
        id: string;
        data: RawMember;
    }): unknown;
}
//# sourceMappingURL=ServerMemberUpdate.d.ts.map