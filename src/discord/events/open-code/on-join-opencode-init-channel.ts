import { Event } from "#base";
import { ChannelType } from "discord.js";

new Event({
  name: "onJoinOpenCodeInitChannel",
  event: "voiceStateUpdate",
  async run(_oldState, newState) {
    const { channel, guild, member } = newState;

    if (!channel || !guild || !member) return;
    if (channel.id !== process.env.DISCORD_OPENCODE_CHANNEL_ID) return;

    const openCodeChannel = await guild.channels.create({
      name: `🚀│${member.user.username} - Open code`,
      type: ChannelType.GuildVoice,
      parent: process.env.DISCORD_OPENCODE_CATEGORY_ID,
      userLimit: 10,
    });

    await member.voice.setChannel(openCodeChannel);
  },
});
