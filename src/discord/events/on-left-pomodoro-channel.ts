import { Event } from "#base";

new Event({
  name: "onLeftPomodoroChannel",
  event: "voiceStateUpdate",
  async run(oldState, _newState) {
    const { channel, member, guild, client } = oldState;

    if (!channel || !guild || !member) return;
    if (channel.parent?.id !== process.env.DISCORD_POMODORO_CATEGORY_ID) return;
    if (channel.id === process.env.DISCORD_POMODORO_CHANNEL_ID) return;
    if (member.user.bot) return;

    if (channel.members.has(client.user.id) && channel.members.size === 1) {
      await channel.delete();
    }
  },
});
