export interface EndPointsOptions {
    cdn: string;
    invite: string;
    api: string;
}
export declare class Endpoints {
    private options;
    constructor(options: EndPointsOptions);
    get CDN(): string;
    get INVITE(): string;
    get API(): string;
    avatar(hash: string, filename: string, size?: number): string;
    icon(hash: string, size?: number): string;
    invite(code: string): string;
    banner(hash: string, size?: number): string;
}
//# sourceMappingURL=Endpoints.d.ts.map