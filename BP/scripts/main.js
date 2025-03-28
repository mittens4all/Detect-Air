import { world } from "@minecraft/server";

world.scoreboard.getObjective("detect_air") ?? world.scoreboard.addObjective("detect_air");