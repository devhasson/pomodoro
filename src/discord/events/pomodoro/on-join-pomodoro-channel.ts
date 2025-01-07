import { Event } from "#base";
import { startPomodoro } from "#functions";

new Event({
  name: "onJoinPomodoroChannel",
  event: "voiceStateUpdate",
  run: async (oldState, newState) => {
    const { channel, guild, member } = newState;

    if (!channel || !guild || !member) return;
    if (channel.id !== process.env.DISCORD_POMODORO_CHANNEL_ID) return;

    const memberJoined = oldState.channelId !== channel.id;
    if (!memberJoined) return;

    const { user } = member;
    if (user.bot) return;

    await startPomodoro(newState);
  },
});
