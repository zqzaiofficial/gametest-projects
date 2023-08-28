import { world } from '@minecraft/server';

world.afterEvents.chatSend.subscribe((data) => {
    const { sender: player, message } = data;

    if (message === ".fix") {
        player.sendMessage("[Script API]: All your items have been repaired.");
        const inventory = player.getComponent('minecraft:inventory').container;
        for (let i = 0; i < inventory.size; i++) {
            const item = inventory.getItem(i);
            if (!item) continue;
            item.getComponent("minecraft:durability").damage = 0;
            inventory.setItem(i, item);
        }
        return;
    }
    world.sendMessage(player.name + " > " + message);
});

world.beforeEvents.chatSend.subscribe((data) => {
    data.sendToTargets = true;
});
