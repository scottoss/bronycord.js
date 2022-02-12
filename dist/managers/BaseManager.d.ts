import { Client } from '..';
import { Collection } from '../util';
export declare abstract class BaseManager<K, Holds extends {
    id: K;
}, R extends unknown = unknown> {
    readonly cache: Collection<K, Holds>;
    _add(raw: R): Holds;
    _remove(id: K): void;
    abstract readonly holds: (new (...args: any[]) => Holds) | null;
    abstract readonly client: Client;
    resolve(resolvable: Holds): Holds | null;
    resolve(resolvable: K | R): Holds | null;
    resolve(resolvable: K | R | Holds): Holds | null;
    resolveId(resolvable: K | Holds | R): K | null;
    valueOf(): this['cache'];
}
//# sourceMappingURL=BaseManager.d.ts.map