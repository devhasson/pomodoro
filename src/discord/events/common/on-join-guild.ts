import { Event } from "#base";
import { getUserById, registerUser } from "#functions";
import { welcomeEmbed } from "#responders";

new Event({
  name: "onJoinGuild",
  event: "guildMemberAdd",
  run: async (member) => {
    const { guild, user } = member;
    if (!guild || user.bot) return;

    let userInDb = await getUserById(user.id);

    if (!userInDb) {
      userInDb = await registerUser(user);
      const role = member.guild.roles.cache.find(
        (role) => role.id === userInDb!.rank.roleId
      );

      if (!role) return;
      await member.roles.add(role);
    }

    await user.createDM().then((dm) => {
      dm.send({
        embeds: [welcomeEmbed(user)],
      });
    });
  },
});
