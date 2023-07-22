import { world, ItemStack, Enchantment, EnchantmentType } from '@minecraft/server';

function checkIllegalItems(player) {
    var inventory = player.getComponent('minecraft:inventory').container;
    var air = new ItemStack('minecraft:air', 1)
    for (var i = 0; i < 36; i++) {
        var item = inventory.getSlot(i);
        var cacheItem = item;
        var illegalItems = [
            'minecraft:beehive',
            'minecraft:tadpole_bucket',
            'minecraft:cod_bucket',
            'minecraft:salmon_bucket',
            'minecraft:pufferfish_bucket',
            'minecraft:tropical_fish_bucket',
            'minecraft:axolotl_bucket',
            'minecraft:powder_snow_bucket'
        ]

        if (illegalItems.includes(item.typeId)) {
            var air = new ItemStack('minecraft:air', 1)
            inventory.setItem(i, air);
            world.sendMessage(`§4[§cHydra§4]: §c${player.name} §4tried to use a §cNBT §4to execute external §cmalicious commands §4on the §drealm§4, they have been banned.\n§a#HydraOnTop #GetRekt #HackerDown`);
            player.addTag('hydra_banned');
        }

        var unobtainableItems = [
            'minecraft:barrier',
            'minecraft:structure_void',
            'minecraft:infested_deepslate',
            'minecraft:deepslate',
            'minecraft:cave_air',
            'minecraft:light',
            'minecraft:air',
            'minecraft:bedrock',
            'minecraft:water',
            'minecraft:lava',
            'minecraft:flowing_water',
            'minecraft:flowing_lava',
            'minecraft:structure_block',
            'minecraft:structure_void',
            'minecraft:command_block',
            'minecraft:command_block_minecart',
            'minecraft:repeating_command_block',
            'minecraft:chain_command_block',
            'minecraft:moving_block'
        ]

        if (unobtainableItems.includes(item.typeId)) {
            var air = new ItemStack('minecraft:air', 1)
            inventory.setItem(i, air);
            world.sendMessage(`§4[§cHydra§4]: §c${player.name} §4tried to spawn an §cunobtainable item §4to show off on the §drealm§4, they have been banned.\n§a#HydraOnTop #GetRekt #HackerDown`);
            player.addTag('hydra_banned');
        }

        try {
            item = item.getItem();
            var enchants = item.getComponent("minecraft:enchantments")
            var list = enchants.enchantments
            var unbreakingLevel = list.hasEnchantment("unbreaking") 
            var mendingLevel = list.hasEnchantment("mending")
            var infinityLevel = list.hasEnchantment("infinity")
            var flameLevel = list.hasEnchantment("flame")
            var punchLevel = list.hasEnchantment("punch")
            var powerLevel = list.hasEnchantment("power")
            var sharpnessLevel = list.hasEnchantment("sharpness")
            var efficiencyLevel = list.hasEnchantment("efficiency")
            var fortuneLevel = list.hasEnchantment("fortune")
            var lootingLevel = list.hasEnchantment("looting")
            var protectionLevel = list.hasEnchantment("protection")
            
            if (unbreakingLevel > 3) {

                inventory.setItem(i, air);
                world.sendMessage(`§4[§cHydra§4]: §c${player.name} §4tried to use an §cillegal enchantment §4on the §drealm§4, they have been banned.\n§a#HydraOnTop #GetRekt #HackerDown`);
                player.addTag('hydra_banned');
            }

            if (mendingLevel > 1) {

                inventory.setItem(i, air);
                world.sendMessage(`§4[§cHydra§4]: §c${player.name} §4tried to use an §cillegal enchantment §4on the §drealm§4, they have been banned.\n§a#HydraOnTop #GetRekt #HackerDown`);
                player.addTag('hydra_banned');
            }

            if (infinityLevel > 1) {

                inventory.setItem(i, air);
                world.sendMessage(`§4[§cHydra§4]: §c${player.name} §4tried to use an §cillegal enchantment §4on the §drealm§4, they have been banned.\n§a#HydraOnTop #GetRekt #HackerDown`);
                player.addTag('hydra_banned');
            }

            if (flameLevel > 1) {

                inventory.setItem(i, air);
                world.sendMessage(`§4[§cHydra§4]: §c${player.name} §4tried to use an §cillegal enchantment §4on the §drealm§4, they have been banned.\n§a#HydraOnTop #GetRekt #HackerDown`);
                player.addTag('hydra_banned');
            }

            if (punchLevel > 2) {

                inventory.setItem(i, air);
                world.sendMessage(`§4[§cHydra§4]: §c${player.name} §4tried to use an §cillegal enchantment §4on the §drealm§4, they have been banned.\n§a#HydraOnTop #GetRekt #HackerDown`);
                player.addTag('hydra_banned');
            }

            if (powerLevel > 5) {

                inventory.setItem(i, air);
                world.sendMessage(`§4[§cHydra§4]: §c${player.name} §4tried to use an §cillegal enchantment §4on the §drealm§4, they have been banned.\n§a#HydraOnTop #GetRekt #HackerDown`);
                player.addTag('hydra_banned');
            }

            if (sharpnessLevel > 5) {

                inventory.setItem(i, air);
                world.sendMessage(`§4[§cHydra§4]: §c${player.name} §4tried to use an §cillegal enchantment §4on the §drealm§4, they have been banned.\n§a#HydraOnTop #GetRekt #HackerDown`);
                player.addTag('hydra_banned');
            }

            if (efficiencyLevel > 5) {

                inventory.setItem(i, air);
                world.sendMessage(`§4[§cHydra§4]: §c${player.name} §4tried to use an §cillegal enchantment §4on the §drealm§4, they have been banned.\n§a#HydraOnTop #GetRekt #HackerDown`);
                player.addTag('hydra_banned');
            }

            if (fortuneLevel > 3) {

                inventory.setItem(i, air);
                world.sendMessage(`§4[§cHydra§4]: §c${player.name} §4tried to use an §cillegal enchantment §4on the §drealm§4, they have been banned.\n§a#HydraOnTop #GetRekt #HackerDown`); 
                player.addTag('hydra_banned');
            }

            if (lootingLevel > 3) {

                inventory.setItem(i, air);
                world.sendMessage(`§4[§cHydra§4]: §c${player.name} §4tried to use an §cillegal enchantment §4on the §drealm§4, they have been banned.\n§a#HydraOnTop #GetRekt #HackerDown`); 
                player.addTag('hydra_banned');
            }

            if (protectionLevel > 4) {

                inventory.setItem(i, air);
                world.sendMessage(`§4[§cHydra§4]: §c${player.name} §4tried to use an §cillegal enchantment §4on the §drealm§4, they have been banned.\n§a#HydraOnTop #GetRekt #HackerDown`); 
                player.addTag('hydra_banned');
            }
                
            if (mendingLevel > 0 && infinityLevel > 0) {

                inventory.setItem(i, air);
                world.sendMessage(`§4[§cHydra§4]: §c${player.name} §cis using §cillegal enchantments §4on the §drealm§4, they have been banned.\n§a#HydraOnTop #GetRekt #HackerDown`);
                player.addTag('hydra_banned');
            }
        } catch {}
    }
}

function checkMovement(player) {
    var velocity = player.getVelocity()
    var speed = Math.sqrt(Math.pow(velocity.x, 2) + Math.pow(velocity.z, 2))
    var maxSpeed = 0.65;
    var speedEffect = player.getEffect("speed").amplifier;
    // speed = base increased by 20% (per level)
    if (speed > maxSpeed * (speedEffect + 1)) {
        world.sendMessage(`§4[§cHydra§4]: §c${player.name} §4flagged for §cSpeed §4type §c[A] §4with a speed of §c${speed}bps.\n§a#HydraOnTop #GetRekt #HackerDown`);
        // change to if (true) if you want to ban the player
        if (false) { player.addTag(`hydra_banned`) }
    }
}

export { checkIllegalItems, checkMovement };