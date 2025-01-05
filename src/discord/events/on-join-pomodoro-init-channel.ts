import { Event } from "#base";
import { joinVoiceChannel } from "@discordjs/voice";
import { ChannelType } from "discord.js";

new Event({
  name: "onJoinPomodoroInitChannel",
  event: "voiceStateUpdate",
  async run(_oldState, newState) {
    const { channel, guild, member } = newState;

    if (!channel || !guild || !member) return;
    if (channel.id !== process.env.DISCORD_POMODORO_CHANNEL_ID) return;

    const membersOnChannel = channel.members.filter(
      (member) => !member.user.bot
    );

    membersOnChannel.forEach(async (member) => {
      const pomodoroChannel = await guild.channels.create({
        name: `🍅│${member.user.username}`,
        type: ChannelType.GuildVoice,
        parent: process.env.DISCORD_POMODORO_CATEGORY_ID,
        permissionOverwrites: [
          {
            id: guild.roles.everyone.id,
            deny: ["Connect", "ViewChannel"],
          },
          {
            id: member.user.id,
            allow: ["ViewChannel", "Connect", "Speak"],
          },
          {
            id: newState.client.user.id,
            allow: ["ViewChannel", "Connect", "Speak"],
          },
        ],
      });

      joinVoiceChannel({
        channelId: pomodoroChannel.id,
        guildId: pomodoroChannel.guild.id,
        adapterCreator: pomodoroChannel.guild.voiceAdapterCreator,
      });

      await member.voice.setChannel(pomodoroChannel);
    });
  },
});
