import { world, system } from "@minecraft/server";

const objAir = world.scoreboard.getObjective("detect:air") ?? world.scoreboard.addObjective("detect:air");

function detectAir() {
    for (const player of world.getPlayers()) {
      const inventory = player.getComponent('inventory').container;
      const mainhand = inventory.getItem(player.selectedSlotIndex);
  
      if (!mainhand?.typeId) {
        objAir.setScore(player, 1);
      } else {
        objAir.setScore(player, 0)
      };
    };
  };
  system.runInterval(detectAir, 1);