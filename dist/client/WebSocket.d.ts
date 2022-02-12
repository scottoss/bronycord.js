/// <reference types="node" />
import { default as Socket } from 'ws';
import { Client } from './Client';
export interface WSOptions {
    heartbeat: number;
}
export declare class WebSocket {
    client: Client;
    heartbeatInterval?: NodeJS.Timer;
    lastPingTimestamp?: number;
    lastPongAcked: boolean;
    socket: Socket | null;
    connected: boolean;
    ready: boolean;
    constructor(client: Client);
    private debug;
    get ping(): number;
    setHeartbeatTimer(time: number): void;
    sendHeartbeat(skip?: boolean): void;
    send(data: unknown): Promise<void>;
    private onError;
    private onMessage;
    private onOpen;
    private onClose;
    private onPacket;
    connect(): Promise<this>;
    destroy(): Promise<this>;
}
//# sourceMappingURL=WebSocket.d.ts.map