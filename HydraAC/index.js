import { world, system } from '@minecraft/server';
import { checkIllegalItems, checkMovement } from "./plugins/hydraanticheat";

system.runInterval(() => {
	for (const player of world.getPlayers()) {
		checkIllegalItems(player);
		checkMovement(player);
	}
}, 0);