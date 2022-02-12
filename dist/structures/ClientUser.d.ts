import type { NotesChannel } from '.';
import { User } from './User';
export declare class ClientUser extends User {
    notes: NotesChannel | null;
    setUsername(username: string, password?: string): Promise<void>;
    setStatus(status: {
        text?: string;
        presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
    }): Promise<void>;
}
//# sourceMappingURL=ClientUser.d.ts.map