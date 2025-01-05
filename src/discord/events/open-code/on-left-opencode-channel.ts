import { Event } from "#base";

new Event({
  name: "onLeftOpenCodeChannel",
  event: "voiceStateUpdate",
  async run(oldState, _newState) {
    const { channel, member, guild } = oldState;

    if (!channel || !guild || !member) return;
    if (channel.parent?.id !== process.env.DISCORD_OPENCODE_CATEGORY_ID) return;
    if (channel.id === process.env.DISCORD_OPENCODE_CHANNEL_ID) return;

    if (channel.members.size === 0) {
      await channel.delete();
    }
  },
});
