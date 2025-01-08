import { VoiceState } from "discord.js";
import {
  getUserById,
  incrementPomodoroOnUser,
  rankUp,
  registerUser,
  startBreak,
} from "#functions";
import {
  finishingPomodoroEmbed,
  notFinishedEmbed,
  startingPomodoroEmbed,
  upgradeLevelEmbed,
} from "#responders";

export async function startPomodoro(voiceState: VoiceState) {
  const { channel, guild, member } = voiceState;

  if (!channel || !guild || !member) return;

  await member.user.createDM().then((dm) => {
    dm.send({
      embeds: [startingPomodoroEmbed(member.user.displayName)],
    });
  });

  setTimeout(async () => {
    if (!channel.members.size || !channel.members.has(member.id)) {
      return await member.user.createDM().then((dm) => {
        dm.send({ embeds: [notFinishedEmbed(member.user.displayName)] });
      });
    }

    await member.user.createDM().then((dm) => {
      dm.send({
        embeds: [finishingPomodoroEmbed(member.user.displayName)],
      });
    });

    const userInDb = await getUserById(member.user.id);

    if (!userInDb) {
      await registerUser(member.user);
    }

    let updatedUser = await incrementPomodoroOnUser(member.user.id);

    if (updatedUser.xp > Number(updatedUser.rank.xpMax)) {
      updatedUser = await rankUp({
        userId: member.user.id,
        rank: updatedUser.rank.level + 1,
      });

      const role = guild.roles.cache.find(
        (role) => role.id === updatedUser.rank.roleId
      );

      if (role) {
        await member.roles.add(role);
      }

      await member.user.createDM().then((dm) => {
        dm.send({
          embeds: [upgradeLevelEmbed(member.user, updatedUser.rank)],
        });
      });
    }

    await startBreak(voiceState);
  }, 25 * 60 * 1000);
}
