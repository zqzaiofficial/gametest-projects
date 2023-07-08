///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// This is property of Zqzai, you may reuse this code as long as you give credit. Do NOT claim this as your own. //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { system, world } from "@minecraft/server";

// When an entity sends a message, this event is called.
world.beforeEvents.chatSend.subscribe((data) => {
    // Cancel the event so the message doesn't send until we make our modifications.
    data.cancel = true;
    // Get the player who sent the message.
    var localPlayer = data.sender;

    // Get the item the player has selected in their hotbar.
    var selectedItem = getSelectedItem(localPlayer);

    // If the item has a name tag we replace [item] with the name tag, otherwise we replace it with the item's name.
    if (selectedItem.nameTag != undefined) {
        data.message = data.message.replace("[item]", selectedItem.nameTag);
    } else {
        try {
            data.message = data.message.replace("[item]", selectedItem.typeId.split(":")[1].replace(/([A-Z])/g, ' $1').trim().toLowerCase().replaceAll("_", " ").replace(/\b\w/g, l => l.toUpperCase()));
        }
        catch (err) { }
    }

    // Send the message to everyone.
    localPlayer.runCommandAsync(`tellraw @a {"rawtext":[{"text":"<${localPlayer.name}> ${data.message}"}]}`);
});

// This code checks what item the player has selected in their hotbar, consider this an equation.
function getSelectedItem(player) {
  // Get the selected slot's number.
  var selectedItem = player.selectedSlot;
  // Get the player's inventory.
  const container = player.getComponent('inventory').container;
  // Now we go to the selected slot's number (which we got earlier) and get the item in that slot.
  const item = container.getSlot(selectedItem);
  // Then we say the answer to our 'equation' is the item in the selected slot.
  return item;
}