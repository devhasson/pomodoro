import { bootstrapApp } from "#base";

await bootstrapApp({
  workdir: import.meta.dirname,
  whenReady() {
    console.log("🍅 Pomodoro está funcionando!");
  },
});
