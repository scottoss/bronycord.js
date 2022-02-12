/// <reference types="node" />
import { Messages } from './Messages';
export declare const Error: {
    new <K extends "INVALID_TYPE" | "BITFIELD_INVALID" = "INVALID_TYPE" | "BITFIELD_INVALID">(key: K, ...args: Parameters<{
        INVALID_TYPE: (name: string, expected: string, an?: boolean) => string;
        BITFIELD_INVALID: (bit: unknown) => string;
    }[K]>): {
        name: string;
        message: string;
        stack?: string | undefined;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function | undefined): void;
    prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
    stackTraceLimit: number;
};
export declare const TypeError: {
    new <K extends "INVALID_TYPE" | "BITFIELD_INVALID" = "INVALID_TYPE" | "BITFIELD_INVALID">(key: K, ...args: Parameters<{
        INVALID_TYPE: (name: string, expected: string, an?: boolean) => string;
        BITFIELD_INVALID: (bit: unknown) => string;
    }[K]>): {
        name: string;
        message: string;
        stack?: string | undefined;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function | undefined): void;
    prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
    stackTraceLimit: number;
};
export declare const RangeError: {
    new <K extends "INVALID_TYPE" | "BITFIELD_INVALID" = "INVALID_TYPE" | "BITFIELD_INVALID">(key: K, ...args: Parameters<{
        INVALID_TYPE: (name: string, expected: string, an?: boolean) => string;
        BITFIELD_INVALID: (bit: unknown) => string;
    }[K]>): {
        name: string;
        message: string;
        stack?: string | undefined;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function | undefined): void;
    prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
    stackTraceLimit: number;
};
//# sourceMappingURL=index.d.ts.map