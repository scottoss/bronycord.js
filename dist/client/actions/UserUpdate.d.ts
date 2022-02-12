import { User as RawUser } from 'revolt-api/types/Users';
import { Action } from './Action';
export declare class UserUpdateAction extends Action {
    handle(data: {
        id: string;
        data: RawUser;
    }): unknown;
}
//# sourceMappingURL=UserUpdate.d.ts.map