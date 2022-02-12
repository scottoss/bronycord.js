"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUser = void 0;
const User_1 = require("./User");
class ClientUser extends User_1.User {
    constructor() {
        super(...arguments);
        this.notes = null;
    }
    async setUsername(username, password) {
        await this.client.api.patch(`/users/${this.id}/username`, {
            body: {
                username,
                password
            }
        });
    }
    async setStatus(status) {
        await this.client.api.patch('/users/id', {
            body: { status }
        });
    }
}
exports.ClientUser = ClientUser;
//# sourceMappingURL=ClientUser.js.map