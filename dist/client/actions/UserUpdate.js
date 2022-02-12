"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateAction = void 0;
const Action_1 = require("./Action");
const Constants_1 = require("../../util/Constants");
class UserUpdateAction extends Action_1.Action {
    handle(data) {
        const oldUser = this.client.users.cache.get(data.id);
        if (oldUser) {
            const newUser = oldUser._update(data.data);
            this.client.users.cache.set(newUser.id, newUser);
            this.client.emit(Constants_1.Events.USER_UPDATE, oldUser, newUser);
            return { newUser, oldUser };
        }
        return { oldUser };
    }
}
exports.UserUpdateAction = UserUpdateAction;
//# sourceMappingURL=UserUpdate.js.map