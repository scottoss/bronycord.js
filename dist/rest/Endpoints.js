"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoints = void 0;
class Endpoints {
    constructor(options) {
        this.options = options;
    }
    get CDN() {
        return this.options.cdn;
    }
    get INVITE() {
        return this.options.invite;
    }
    get API() {
        return this.options.api;
    }
    avatar(hash, filename, size = 1024) {
        return `${this.CDN}/avatars/${hash}/${filename}?max_side=${size}`;
    }
    icon(hash, size = 1024) {
        return `${this.CDN}/icons/${hash}?max_side=${size}`;
    }
    invite(code) {
        return `${this.INVITE}/${code}`;
    }
    banner(hash, size = 1024) {
        return `${this.CDN}/banners/${hash}?max_side=${size}`;
    }
}
exports.Endpoints = Endpoints;
//# sourceMappingURL=Endpoints.js.map