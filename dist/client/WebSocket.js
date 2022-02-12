"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocket = void 0;
const ws_1 = __importDefault(require("ws"));
const structures_1 = require("../structures");
const util_1 = require("../util");
class WebSocket {
    constructor(client) {
        this.client = client;
        this.lastPongAcked = false;
        this.socket = null;
        this.connected = false;
        this.ready = false;
    }
    debug(message) {
        this.client.emit(util_1.Events.DEBUG, `[WS]: ${message}`);
    }
    get ping() {
        if (!this.lastPingTimestamp)
            return -0;
        return Date.now() - this.lastPingTimestamp;
    }
    setHeartbeatTimer(time) {
        this.debug(`Setting a heartbeat interval for ${time}ms.`);
        if (time === -1) {
            if (this.heartbeatInterval)
                clearInterval(this.heartbeatInterval);
        }
        else {
            this.heartbeatInterval = setInterval(() => this.sendHeartbeat(), time).unref();
        }
    }
    sendHeartbeat(skip = false) {
        if (!skip && !this.lastPongAcked) {
            this.debug("Didn't receive a pong ack last time.");
        }
        const now = Date.now();
        this.debug('Sending a heartbeat.');
        this.send({ type: util_1.WSEvents.PING, data: now });
        this.lastPongAcked = false;
        this.lastPingTimestamp = now;
    }
    async send(data) {
        return new Promise((resolve, reject) => {
            var _a;
            if (((_a = this.socket) === null || _a === void 0 ? void 0 : _a.readyState) === ws_1.default.OPEN) {
                this.socket.send(JSON.stringify(data), err => {
                    if (err)
                        return reject(err);
                    resolve();
                });
            }
            else {
                this.debug(`Tried to send packet '${JSON.stringify(data)}' but no WebSocket is available!`);
                resolve();
            }
        });
    }
    onError(event) {
        var _a;
        const error = (_a = event === null || event === void 0 ? void 0 : event.error) !== null && _a !== void 0 ? _a : event;
        if (error) {
            this.client.emit(util_1.Events.ERROR, error);
        }
    }
    onMessage({ data }) {
        let packet;
        try {
            packet = JSON.parse(data);
        }
        catch (err) {
            this.client.emit(util_1.Events.ERROR, err);
            return;
        }
        this.client.emit(util_1.Events.RAW, packet);
        this.onPacket(packet);
    }
    async onOpen() {
        await this.send({
            type: util_1.WSEvents.AUTHENTICATE,
            token: this.client.token
        });
    }
    onClose(event) {
        this.debug(`[WS] Closed with reason: ${event.reason}, code: ${event.code}`);
        this.destroy();
    }
    onPacket(packet) {
        var _a;
        if (!packet) {
            this.debug(`Received broken packet: '${packet}'.`);
            return;
        }
        switch (packet.type) {
            case util_1.WSEvents.AUTHENTICATED:
                this.connected = true;
                break;
            case util_1.WSEvents.PONG:
                this.lastPongAcked = true;
                break;
            case util_1.WSEvents.ERROR:
                this.client.emit(util_1.Events.ERROR, packet.error);
                break;
            case util_1.WSEvents.READY:
                this.lastPongAcked = true;
                for (const user of packet.users) {
                    this.client.users._add(user);
                    if (user.relationship === 'User' && !this.client.user) {
                        const clientUser = (this.client.user = new structures_1.ClientUser(this.client, user));
                        this.client.users.cache.set(clientUser.id, clientUser);
                    }
                }
                for (const server of packet.servers) {
                    this.client.servers._add(server);
                }
                for (const channel of packet.channels) {
                    this.client.channels._add(channel);
                }
                for (const member of packet.members) {
                    (_a = this.client.servers.cache.get(member._id.server)) === null || _a === void 0 ? void 0 : _a.members._add(member);
                }
                this.setHeartbeatTimer(this.client.options.ws.heartbeat);
                this.ready = true;
                this.client.emit(util_1.Events.READY, this.client);
                break;
            default: {
                const action = this.client.actions.get(packet.type);
                if (action) {
                    action.handle(packet);
                }
                else {
                    this.debug(`Received unknown packet "${packet.type}"`);
                }
                break;
            }
        }
    }
    connect() {
        return new Promise(resolve => {
            var _a, _b;
            if (((_a = this.socket) === null || _a === void 0 ? void 0 : _a.readyState) === ws_1.default.OPEN && this.ready) {
                return resolve(this);
            }
            if (typeof this.client.configuration === 'undefined') {
                throw new Error('Attempted to open WebSocket without syncing configuration from server.');
            }
            if (typeof this.client.token === 'undefined') {
                throw new Error('Attempted to open WebSocket without valid token.');
            }
            const ws = (this.socket = (_b = this.socket) !== null && _b !== void 0 ? _b : new ws_1.default(this.client.configuration.ws));
            ws.onopen = this.onOpen.bind(this);
            ws.onmessage = this.onMessage.bind(this);
            ws.onerror = this.onError.bind(this);
            ws.onclose = this.onClose.bind(this);
            ws.once('open', () => resolve(this));
        });
    }
    destroy() {
        return new Promise(resolve => {
            var _a;
            this.setHeartbeatTimer(-1);
            this.connected = false;
            this.ready = false;
            if (((_a = this.socket) === null || _a === void 0 ? void 0 : _a.readyState) === ws_1.default.OPEN) {
                this.socket.close();
                this.socket.once('close', () => resolve(this));
            }
            else {
                resolve(this);
            }
        });
    }
}
exports.WebSocket = WebSocket;
//# sourceMappingURL=WebSocket.js.map