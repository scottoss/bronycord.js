import { Category as RawCategory } from 'revolt-api/types/Servers';
import { Base, Server, ServerChannel } from '.';
import { Collection } from '../util';
export declare class Category extends Base {
    server: Server;
    id: string;
    name: string;
    _channels: string[];
    constructor(server: Server, data: RawCategory);
    _patch(data: RawCategory): this;
    _update(data: RawCategory): this;
    get channels(): Collection<string, ServerChannel>;
    toString(): string;
}
//# sourceMappingURL=Category.d.ts.map