import type { APIRequest } from './APIRequest';
import type { RequestMethod } from './REST';
export declare class HTTPError extends Error {
    code: number;
    method: RequestMethod;
    path: string;
    info: Record<string, unknown>;
    constructor(message: string, name: string, code: number, request: APIRequest);
}
//# sourceMappingURL=HTTPError.d.ts.map