import { Response, HeadersInit } from 'node-fetch';
import { RequestMethod } from './REST';
export interface APIRequestOptions {
    timeout: number;
}
export declare class APIRequest {
    path: string;
    private body?;
    private headers?;
    method: RequestMethod;
    retries: number;
    constructor(path: string);
    get info(): Record<string, unknown>;
    setMethod(method: RequestMethod): this;
    setBody(body?: unknown): this;
    setHeaders(headers: HeadersInit): this;
    execute(options: APIRequestOptions): Promise<Response>;
}
//# sourceMappingURL=APIRequest.d.ts.map