import { Event } from "#base";
import { joinVoiceChannel } from "@discordjs/voice";
import { ChannelType } from "discord.js";

new Event({
  name: "onCreatePomodoroChannel",
  event: "channelCreate",
  run(channel) {
    if (channel.type !== ChannelType.GuildVoice) return;
    if (!channel.name.startsWith("🍅│")) return;

    joinVoiceChannel({
      channelId: channel.id,
      guildId: channel.guild.id,
      adapterCreator: channel.guild.voiceAdapterCreator,
    });
  },
});
