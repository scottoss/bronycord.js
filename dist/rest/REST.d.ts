/// <reference types="node" />
import { EventEmitter } from 'events';
import { APIRequest } from './APIRequest';
import { BaseClient } from '../client/BaseClient';
export declare enum RequestMethod {
    Delete = "DELETE",
    Get = "GET",
    Patch = "PATCH",
    Post = "POST",
    Put = "PUT"
}
export declare type RouteLike = `/${string}`;
export interface RequestData {
    body?: unknown;
    headers?: Record<string, string>;
}
export interface InternalRequest extends RequestData {
    method: RequestMethod;
    route: RouteLike;
}
export interface RESTOptions {
    api: string;
    cdn: string;
    invite: string;
    offset: number;
    retries: number;
    timeout: number;
}
export declare class REST extends EventEmitter {
    private client;
    private options;
    constructor(client: BaseClient, options: RESTOptions);
    request(options: InternalRequest | APIRequest): Promise<any>;
    get(route: RouteLike, options?: RequestData): Promise<any>;
    delete(route: RouteLike, options?: RequestData): Promise<any>;
    post(route: RouteLike, options?: RequestData): Promise<any>;
    put(route: RouteLike, options?: RequestData): Promise<any>;
    patch(route: RouteLike, options?: RequestData): Promise<any>;
}
//# sourceMappingURL=REST.d.ts.map