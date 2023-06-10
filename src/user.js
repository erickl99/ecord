const NUM_SERVERS = 4;
const IMG_SOURCE = "./circle.png";
const HEIGHT = 60;
const WIDTH = 60;
const ALT_TEXT = "server";

export function getServers() {
    const servers = new Array(NUM_SERVERS);
    for (let i = 0; i < servers.length; i++) {
        servers[i] = { serverId: i, src: IMG_SOURCE, height: HEIGHT, width: WIDTH, alt: ALT_TEXT };
    }
    return servers;
}

export function getChannelsAndCategories(serverId) {
    const channels = new Array((serverId % 3) * 2 + 1);
    const categories = ["Main", "Other"];
    channels[0] = { serverId: serverId, channelId: 0, category: "Main", name: "Landing", isMain: true };
    for (let i = 1; i < channels.length; i++) {
        channels[i] = { 
            serverId: serverId,
            channelId: i,
            category: categories[i % categories.length],
            name: `${i}chan`,
            isMain: false
        };
    }

    return [channels, categories];
}
