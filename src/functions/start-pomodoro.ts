import { VoiceState } from "discord.js";
import { startBreak } from "#functions";
import { finishingPomodoroEmbed, startingPomodoroEmbed } from "#responders";

export async function startPomodoro(voiceState: VoiceState) {
  const { channel, guild, member } = voiceState;

  if (!channel || !guild || !member) return;

  await member.user.createDM().then((dm) => {
    dm.send({
      embeds: [
        startingPomodoroEmbed(member.user.globalName || member.user.username),
      ],
    });
  });

  setTimeout(async () => {
    if (!channel.members.size || !channel.members.has(member.id)) {
      return await member.user.createDM().then((dm) => {
        dm.send("💔 Infelizmente você **não concluiu esse ciclo pomodoro**!");
      });
    }

    await member.user.createDM().then((dm) => {
      dm.send({
        embeds: [
          finishingPomodoroEmbed(
            member.user.globalName || member.user.username
          ),
        ],
      });
    });

    await startBreak(voiceState);
  }, 1 * 10 * 1000);
}
