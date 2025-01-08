import { VoiceState } from "discord.js";
import { startPomodoro } from "#functions";
import { startingBreakEmbed } from "#responders";

export async function startBreak(voiceState: VoiceState) {
  const { member, channel } = voiceState;

  if (!member || !channel) return;

  await member.user.createDM().then((dm) => {
    dm.send({
      embeds: [startingBreakEmbed(member.user.displayName)],
    });
  });

  setTimeout(async () => {
    if (!channel.members.size || !channel.members.has(member.id)) return;

    await startPomodoro(voiceState);
  }, 5 * 60 * 1000);
}
