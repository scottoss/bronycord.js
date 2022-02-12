"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageEmbed = void 0;
class MessageEmbed {
    constructor(data = {}) {
        this.type = 'Website';
        Object.assign(this, data);
    }
    setTitle(title) {
        this.title = title;
        return this;
    }
    setIcon(iconURL) {
        this.icon_url = iconURL;
        return this;
    }
    setColor(color) {
        this.color = color;
        return this;
    }
    setDescription(description) {
        this.description = description;
        return this;
    }
    setURL(url) {
        this.url = url;
        return this;
    }
    toJSON() {
        return {
            title: this.title,
            type: this.type,
            description: this.description,
            url: this.url
        };
    }
}
exports.MessageEmbed = MessageEmbed;
//# sourceMappingURL=MessageEmbed.js.map