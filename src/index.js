import { getServers, getChannelsAndCategories } from "./user"
const server_nav = document.getElementById("server-nav");
const middle_cont = document.getElementById("middle-container");
const channel_cont = document.getElementById("channel-container");
const chat_cont = document.getElementById("chat-container");

setTimeout(loadServers, 2000);

function loadServers() {
    const userServers = getServers();
    for (const server of userServers) {
        const img = document.createElement("img");
        img.src = server.src;
        img.width = server.width;
        img.height = server.height;
        img.alt = server.alt;
        img.addEventListener("click", () => visitServer(server.serverId));
        server_nav.append(img);
    }
}

function visitServer(serverId) {
    channel_cont.innerText = "";
    const [channels, categories] = getChannelsAndCategories(serverId);
    for (const category of categories) {
        const category_detail = document.createElement("detail");
        category_detail.innerText = category;
        channel_cont.appendChild(category_detail);
        for (const channel of channels) {
            if (channel.category === category) {
                const channel_div = document.createElement("div");
                channel_div.innerText = channel.name;
                category_detail.appendChild(channel_div);
            }
        }
    }
}
