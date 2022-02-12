"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionManager = void 0;
const Actions = __importStar(require("."));
class ActionManager {
    constructor(client) {
        this.client = client;
        this.actions = {};
        for (const Action of Object.values(Actions)) {
            this.register(Action);
        }
    }
    register(Action) {
        this.actions[Action.name.replace(/Action$/, '')] = new Action(this.client);
    }
    get(name) {
        var _a;
        return (_a = this.actions[name]) !== null && _a !== void 0 ? _a : null;
    }
}
exports.ActionManager = ActionManager;
//# sourceMappingURL=ActionManager.js.map