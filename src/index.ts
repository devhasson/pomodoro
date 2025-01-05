import { bootstrapApp } from "#base";
import chalk from "chalk";
import log from "consola";

await bootstrapApp({
  workdir: import.meta.dirname,
  whenReady() {
    log.success(chalk.bgBlueBright("🍅 Pomodoro está funcionando!"));
  },
});
