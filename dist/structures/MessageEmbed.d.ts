import { Embed } from 'revolt-api/types/January';
export declare type EmbedImage = {
    url: string;
    width: number;
    height: number;
    size: 'Large' | 'Preview';
};
export declare type EmbedVideo = {
    url: string;
    width: number;
    height: number;
};
export declare type EmbedSpecial = {
    type: 'None';
} | {
    type: 'YouTube';
    id: string;
} | {
    type: 'Twitch';
    content_type: 'Channel' | 'Video' | 'Clip';
    id: string;
} | {
    type: 'Spotify';
    content_type: string;
    id: string;
} | {
    type: 'Soundcloud';
} | {
    type: 'Bandcamp';
    content_type: 'Album' | 'Track';
    id: string;
};
export declare class MessageEmbed {
    type: Embed['type'];
    url?: string;
    special?: EmbedSpecial;
    title?: string;
    description?: string;
    image?: EmbedImage;
    video?: EmbedVideo;
    site_name?: string;
    icon_url?: string;
    color?: string;
    constructor(data?: Partial<Embed>);
    setTitle(title: string): this;
    setIcon(iconURL: string): this;
    setColor(color: string): this;
    setDescription(description: string): this;
    setURL(url: string): this;
    toJSON(): unknown;
}
//# sourceMappingURL=MessageEmbed.d.ts.map