import { joinVoiceChannel } from "@discordjs/voice";
import { bootstrapApp } from "#base";
import chalk from "chalk";
import log from "consola";

await bootstrapApp({
  workdir: import.meta.dirname,
  async whenReady(client) {
    log.success(chalk.green("🚀 Pomodoro está funcionando!"));

    const guild = client.guilds.cache.get(process.env.DISCORD_GUILD_ID);
    if (!guild) return console.error("❌ Guilda não encontrada");

    joinVoiceChannel({
      channelId: process.env.DISCORD_POMODORO_CHANNEL_ID,
      guildId: guild.id,
      adapterCreator: guild.voiceAdapterCreator,
    });
  },
});
