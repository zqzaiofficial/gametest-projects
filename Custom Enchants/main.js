///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// This is property of Zqzai, you may reuse this code as long as you give credit. Do NOT claim this as your own. //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { system, world } from "@minecraft/server";

// When an entity is hurt, this event is called.
world.afterEvents.entityHurt.subscribe((data) => {
    const victim = data.hurtEntity;
    const attacker = data.damageSource.damagingEntity;
    var attckerItem = getSelectedItem(attacker);
    var lore = attckerItem.getLore()[0];
    // Extracting all data we need from the event.

    var randomInt = Math.floor(Math.random() * 50) + 1;
    // Random number between 1 and 50
    // This is used to determine if the enchantment will activate or not.
    
    if (lore == undefined) { return; }
     
    if (lore.match(/Enchants:/g)) {
        for (var i = 0; i < attckerItem.getLore().length; i++) {
            if (lore.match(/Lightning/g)) {
                switch (lore.match(/Lightning ([0-9]+)/g).groups()[0]) {
                  case 'I':
                    if (randomInt == 1) {
                      attacker.runCommandAsync(`title @s actionbar §b§l** LIGHTNING ACTIVATED **`);
                      attacker.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§b§l** LIGHTNING ACTIVATED **"}]}`);
                      victim.runCommandAsync(`summon lightning_bolt ~ ~ ~`);
                      victim.runCommandAsync(`title @s actionbar §b§l** STRUCK BY LIGHTNING **`);
                      victim.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§b§l** STRUCK BY LIGHTNING **"}]}`);
                      system.runTimeout(() => {
                        victim.extinguishFire(true);
                      }, 5);
                    }

                    // If the enchantment is Lightning I, and the random number is 1, then activate the enchantment.
                    break;
                  case 'II':
                    if (randomInt == 1 || randomInt == 2) {
                      attacker.runCommandAsync(`title @s actionbar §b§l** LIGHTNING ACTIVATED **`);
                      attacker.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§b§l** LIGHTNING ACTIVATED **"}]}`);
                      victim.runCommandAsync(`summon lightning_bolt ~ ~ ~`);
                      victim.runCommandAsync(`title @s actionbar §b§l** STRUCK BY LIGHTNING **`);
                      victim.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§b§l** STRUCK BY LIGHTNING **"}]}`);
                      system.runTimeout(() => {
                        victim.extinguishFire(true);
                      }, 5);
                    }

                    // If the enchantment is Lightning II, and the random number is 1 or 2, then activate the enchantment.
                    break;
                  case 'III':
                    if (randomInt == 1 || randomInt == 2 || randomInt == 3) {
                      attacker.runCommandAsync(`title @s actionbar §b§l** LIGHTNING ACTIVATED **`);
                      attacker.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§b§l** LIGHTNING ACTIVATED **"}]}`);
                      victim.runCommandAsync(`summon lightning_bolt ~ ~ ~`);
                      victim.runCommandAsync(`title @s actionbar §b§l** STRUCK BY LIGHTNING **`);
                      victim.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§b§l** STRUCK BY LIGHTNING **"}]}`);
                      system.runTimeout(() => {
                        victim.extinguishFire(true);
                      }, 5);
                    }

                    // If the enchantment is Lightning III, and the random number is 1, 2, or 3, then activate the enchantment.
                    break;
                  case 'IV':
                    if (randomInt == 1 || randomInt == 2 || randomInt == 3 || randomInt == 4) {
                      attacker.runCommandAsync(`title @s actionbar §b§l** LIGHTNING ACTIVATED **`);
                      attacker.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§b§l** LIGHTNING ACTIVATED **"}]}`);
                      victim.runCommandAsync(`summon lightning_bolt ~ ~ ~`);
                      victim.runCommandAsync(`title @s actionbar §b§l** STRUCK BY LIGHTNING **`);
                      victim.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§b§l** STRUCK BY LIGHTNING **"}]}`);
                      system.runTimeout(() => {
                        victim.extinguishFire(true);
                      }, 5);
                    }

                    // If the enchantment is Lightning IV, and the random number is 1, 2, 3, or 4, then activate the enchantment.
                    break;
                  case 'V':
                    if (randomInt == 1 || randomInt == 2 || randomInt == 3 || randomInt == 4 || randomInt == 5) {
                      attacker.runCommandAsync(`title @s actionbar §b§l** LIGHTNING ACTIVATED **`);
                      attacker.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§b§l** LIGHTNING ACTIVATED **"}]}`);
                        victim.runCommandAsync(`summon lightning_bolt ~ ~ ~`);
                        victim.runCommandAsync(`title @s actionbar §b§l** STRUCK BY LIGHTNING **`);
                        victim.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§b§l** STRUCK BY LIGHTNING **"}]}`);
                        system.runTimeout(() => {
                            victim.extinguishFire(true);
                        }, 5);
                    }
                    // If the enchantment is Lightning V, and the random number is 1, 2, 3, 4, or 5, then activate the enchantment.
                    break;
                }
            }
        }
    }
});

// This is the code that will be run when the player uses an item (for instance a CE Book or CE Scroll).
world.afterEvents.itemUse.subscribe(data => {
    const player = data.source;
    var item = data.itemStack;
    var selectedItem = getSelectedItem(player);

    if (item.nameTag == "§r§l§bLightning I") {
        addCustomEnchants(player, 'Lightning', "I");
        selectedItem.nameTag = selectedItem.nameTag + " §r§4(§cUsed§4)§r";
    }

    if (item.nameTag == "§r§l§bLightning II") {
        addCustomEnchants(player, 'Lightning', "II");
        selectedItem.nameTag = selectedItem.nameTag + " §r§4(§cUsed§4)§r";
    }

    if (item.nameTag == "§r§l§bLightning III") {
        addCustomEnchants(player, 'Lightning', "III");
        selectedItem.nameTag = selectedItem.nameTag + " §r§4(§cUsed§4)§r";
    }

    if (item.nameTag == "§r§l§bLightning IV") {
        addCustomEnchants(player, 'Lightning', "IV");
        selectedItem.nameTag = selectedItem.nameTag + " §r§4(§cUsed§4)§r";
    }

    if (item.nameTag == "§r§l§bLightning V") {
        addCustomEnchants(player, 'Lightning', "V");
        selectedItem.nameTag = selectedItem.nameTag + " §r§4(§cUsed§4)§r";
    }

    // We check what the enchant type is and then we add the enchantment to the item.
});

// This code checks what item the player has selected in their hotbar.
function getSelectedItem(player) {
    var selectedItem = player.selectedSlot;
    const container = player.getComponent('inventory').container;
    const item = container.getSlot(selectedItem);
    
    return item;
}

// This code adds the enchantment to the item.
function addCustomEnchants(player, enchantName, enchantLevel) {
    player.runCommand(`tellraw @s {"rawtext":[{"text":"§4[§cALERT§4]:§r§c Enchanting held item with ${enchantName} ${enchantLevel} in 5s."}]}`);

    system.runTimeout(() => {
        player.runCommand(`tellraw @s {"rawtext":[{"text":"§4[§cALERT§4]:§r§c Enchanting held item with ${enchantName} ${enchantLevel} in 4s."}]}`);
    }, 20);

    system.runTimeout(() => {
        player.runCommand(`tellraw @s {"rawtext":[{"text":"§4[§cALERT§4]:§r§c Enchanting held item with ${enchantName} ${enchantLevel} in 3s."}]}`);
    }, 40);

    system.runTimeout(() => {
        player.runCommand(`tellraw @s {"rawtext":[{"text":"§4[§cALERT§4]:§r§c Enchanting held item with ${enchantName} ${enchantLevel} in 2s."}]}`);
    }, 60);

    system.runTimeout(() => {
        player.runCommand(`tellraw @s {"rawtext":[{"text":"§4[§cALERT§4]:§r§c Enchanting held item with ${enchantName} ${enchantLevel} in 1s."}]}`);
    }, 80);

    // We tell the player that we are enchanting their item with a 5 second delay.

    system.runTimeout(() => {
        var selectedItem = player.selectedSlot;
        const container = player.getComponent('inventory').container;
        const item = container.getSlot(selectedItem);
        var lore = item.getLore()[0];

        if (lore == undefined) {
            item.setLore([`\n§r§lEnchants:\n§r§a- §r${enchantName} ${enchantLevel}`]);
            // If the item has no lore, then we add the Enchant category to the items lore and then add the enchantment to the item.
        } else {
            if (lore.match(`${enchantName}`)) {
                player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§4[§cALERT§4]:§r§c You already have ${enchantName} ${enchantLevel} on this item!"}]}`);
                return;
            }
            // We search the lore for the enchantment name, and if it is already on the item, then we tell the player that they already have the enchantment on the item.

            if (lore.match(/Enchants:/g)) {
                for (var i = 0; i < item.getLore().length; i++) {
                    if (item.getLore()[i].match(enchantName)) {
                        item.setLore([item.getLore()[0].replace(item.getLore()[i], '')]);
                    }
                }
                item.setLore([item.getLore()[0] + `\n§r§a- §r${enchantName} ${enchantLevel}`]);
            } else {
                item.setLore([item.getLore()[0] + `\n\n§r§lEnchants:\n§r§a- §r${enchantName} ${enchantLevel}`]);
            }

            // If the item already has lore, then we check if the item has the Enchant category in the lore, and if it does, then we add the enchantment to the lore.
        }

        player.runCommandAsync(`enchant @s unbreaking`);
        // We add unbreaking to the item so that it has the enchantment glint.
        let itemId = item.typeId
        let itemNameRaw = itemId.replace('minecraft:', '')
        let itemName = itemNameRaw.charAt(0).toUpperCase() + itemNameRaw.slice(1)
        
        if (itemName.match(/_/g)) {
            let itemNameSplit = itemName.split('_')
            itemName = itemNameSplit[0].charAt(0).toUpperCase() + itemNameSplit[0].slice(1) + ' ' + itemNameSplit[1].charAt(0).toUpperCase() + itemNameSplit[1].slice(1)
        }
        // We get the item name and then we format it so that it looks nice in the message (e.g. Diamond Sword instead of diamond_sword).

        player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§4[§cALERT§4]:§r§c You have received ${enchantName} ${enchantLevel} on your ${itemName}!"}]}`);
        // We tell the player that they have received the enchantment on their item.
    }, 100);
}
