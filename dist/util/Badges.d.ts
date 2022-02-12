import { BitField } from './BitField';
import { BadgesFlags } from './Constants';
export declare type BadgesResolvable = number | keyof typeof BadgesFlags | BadgesResolvable[];
export declare interface Badges {
    serialize(): Record<keyof typeof BadgesFlags, boolean>;
    any(bit: BadgesResolvable): boolean;
    add(...bits: BadgesResolvable[]): this;
    remove(...bits: BadgesResolvable[]): this;
    has(bit: BadgesResolvable): boolean;
}
export declare class Badges extends BitField {
    static readonly FLAGS: {
        readonly DEVELOPER: number;
        readonly TRANSLATOR: number;
        readonly SUPPORTER: number;
        readonly RESPONSIBLE_DISCLOSURE: number;
        readonly REVOLT_TEAM: number;
        readonly EARLY_ADOPTER: number;
    };
    constructor(bits?: BadgesResolvable);
    static resolve(bit: BadgesResolvable): number;
}
//# sourceMappingURL=Badges.d.ts.map