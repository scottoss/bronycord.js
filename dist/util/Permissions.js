"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_PERMISSION_DM = exports.ServerPermissions = exports.UserPermissions = exports.ChannelPermissions = void 0;
const BitField_1 = require("./BitField");
const Constants_1 = require("./Constants");
class ChannelPermissions extends BitField_1.BitField {
    constructor(bits) {
        super(bits);
    }
    static resolve(bit) {
        return super.resolve(bit);
    }
}
exports.ChannelPermissions = ChannelPermissions;
ChannelPermissions.FLAGS = Constants_1.PermissionsFlags.CHANNEL;
class UserPermissions extends BitField_1.BitField {
    constructor(bits) {
        super(bits);
    }
    static resolve(bit) {
        return super.resolve(bit);
    }
}
exports.UserPermissions = UserPermissions;
UserPermissions.FLAGS = Constants_1.PermissionsFlags.USER;
class ServerPermissions extends BitField_1.BitField {
    constructor(bits) {
        super(bits);
    }
    static resolve(bit) {
        return super.resolve(bit);
    }
}
exports.ServerPermissions = ServerPermissions;
ServerPermissions.FLAGS = Constants_1.PermissionsFlags.SERVER;
exports.DEFAULT_PERMISSION_DM = new ChannelPermissions([
    'VIEW_CHANNEL',
    'VIEW_CHANNEL',
    'MANAGE_CHANNEL',
    'VOICE_CALL',
    'EMBED_LINKS',
    'UPLOAD_FILES'
]).freeze();
//# sourceMappingURL=Permissions.js.map