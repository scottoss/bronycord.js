export declare class UUID extends null {
    static readonly ENCODING = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
    static readonly ENCODING_LENGTH: number;
    static readonly RANDOM_LENGTH = 16;
    static readonly TIME_LENGTH = 10;
    static readonly TIME_MAX: number;
    static get PROG(): number;
    private static time;
    private static hash;
    static generate(timestamp?: number): string;
    static extrectTime(id: string): Date;
}
//# sourceMappingURL=UUID.d.ts.map