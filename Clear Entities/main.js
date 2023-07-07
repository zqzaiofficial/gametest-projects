///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// This is property of Zqzai, you may reuse this code as long as you give credit. Do NOT claim this as your own. //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { system, world } from "@minecraft/server";

// Every 3 minutes this function will run
system.runInterval(() => {
    for (const player of world.getPlayers()) {
        // We get all players that are in the world and then we execute the following code for each player
        player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§4[§cALERT§4]:§r§c Entities will be cleared in 10s."}]}`);
        system.runTimeout(() => {
            player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§4[§cALERT§4]:§r§c Entities will be cleared in 5s."}]}`);
            system.runTimeout(() => {
                player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§4[§cALERT§4]:§r§c Entities will be cleared in 4s."}]}`);
                system.runTimeout(() => {
                    player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§4[§cALERT§4]:§r§c Entities will be cleared in 3s."}]}`);
                    system.runTimeout(() => {
                        player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§4[§cALERT§4]:§r§c Entities will be cleared in 2s."}]}`);
                        system.runTimeout(() => {
                            player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§4[§cALERT§4]:§r§c Entities will be cleared in 1s."}]}`);
                            system.runTimeout(() => {
                                player.runCommandAsync(`kill @e[type=item]`);
                                player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§4[§cALERT§4]:§r§c Entities have been cleared."}]}`);
                                // We clear all items in the world and then we send a message to the player. We do this for each player because they may be in different worlds or distant chunks.
                            }, 20);
                        }, 20);
                    }, 20);
                }, 20);
            }, 20);
        }, 100);
    }
}, 3600);
