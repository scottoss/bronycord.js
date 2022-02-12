export declare type BitFieldResolvable = BitField | number | string | BitFieldResolvable[];
export declare class BitField {
    static FLAGS: Record<string, number>;
    bitfield: number;
    constructor(bits?: BitFieldResolvable);
    get self(): {
        FLAGS: Record<string, number>;
        resolve(bit: BitFieldResolvable): number;
        new (bits?: BitFieldResolvable): BitField;
    };
    any(bit: BitFieldResolvable): boolean;
    has(bit: BitFieldResolvable): boolean;
    toArray(): string[];
    add(...bits: BitFieldResolvable[]): this;
    remove(...bits: BitFieldResolvable[]): this;
    freeze(): Readonly<this>;
    valueOf(): number;
    serialize(): Record<string, boolean>;
    [Symbol.iterator](): Iterable<string>;
    static resolve(bit: BitFieldResolvable): number;
}
//# sourceMappingURL=BitField.d.ts.map