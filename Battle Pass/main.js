///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// This is property of Zqzai, you may reuse this code as long as you give credit. Do NOT claim this as your own. //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { system, world } from "@minecraft/server";
const maxBattlePassLevel = 100;

system.runInterval(() => {
  for (const player of world.getPlayers()) {
    // Get the player's battle pass xp, total xp needed to level up, and current level
    let battlePassXp;
    let battlePassXpTotal;
    let battlePassLevel;
    try {
        battlePassXp = getPlayerScore(player, "battlePassXp");
        battlePassXpTotal = getPlayerScore(player, "battlePassLevel") * 5;
        battlePassLevel = getPlayerScore(player, "battlePassLevel");
    } catch {
        player.runCommand(`scoreboard objectives add battlePassXp dummy`);
        player.runCommand(`scoreboard objectives add battlePassLevel dummy`);
        player.runCommand(`scoreboard players set @a battlePassXp 0`);
        player.runCommand(`scoreboard players set @a battlePassLevel 1`);
        battlePassXp = 0;
        battlePassXpTotal = 5;
        battlePassLevel = 1;
    }

    if (battlePassXp >= battlePassXpTotal && battlePassLevel < maxBattlePassLevel) {
      // If the player has enough xp to level up, level them up and reset their xp
      setPlayerScore(player, "battlePassXp", 0);
      addPlayerScore(player, "battlePassLevel", 1);
      player.sendMessage(`§l§g[§eLEVEL UP§g]§r§g:§6 You leveled up to §eBattle Pass Level ${getPlayerScore(player, "battlePassLevel")}!`);

      switch (battlePassLevel + 1) {
        case 1:
          // Give a reward for level 1
          break;
        case 2:
          // Give a reward for level 2
          break;
        // ...
      }
    }
  }
}, 0);

world.afterEvents.entityDie.subscribe((data) => {
    // When an entity dies, check if the killer has the ExampleRank tag
    var deadEntity = data.deadEntity;
    var killer = data.damageSource.damagingEntity;
    try {
        if (killer.hasTag("ExampleRank")) {
            // If they do, give them 2x the xp
            addPlayerScore(killer, "battlePassXp", 15);

            // Send a message to the killer
            killer.sendMessage(`§l§g[§eKILL§g]§r§g:\n§c+1 Kill\n§6+15 Battle Pass XP §b(x1.5 Multiplier)`);
        } else { 
            // If they don't, give them normal xp
            addPlayerScore(killer, "battlePassXp", 10);
            // Send a message to the killer
            killer.sendMessage(`§l§g[§eKILL§g]§r§g:\n§c+1 Kill\n§6+10 Battle Pass XP`);
        }
    } catch (err) { }
});

function addPlayerScore(player, objective, score) {
    player.runCommandAsync(`scoreboard players add @s ${objective} ${score}`);
}

function removePlayerScore(player, objective, score) {
    player.runCommandAsync(`scoreboard players remove @s ${objective} ${score}`);
}

function setPlayerScore(player, objective, score) {
    player.runCommandAsync(`scoreboard players set @s ${objective} ${score}`);
}

function getPlayerScore(player, objective) {
    return world.scoreboard.getObjective(objective).getScore(player.scoreboardIdentity);
}