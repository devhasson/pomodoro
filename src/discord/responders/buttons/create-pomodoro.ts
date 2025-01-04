import { Responder, ResponderType } from "#base";
import { ChannelType } from "discord.js";

new Responder({
  customId: "create-pomodoro",
  type: ResponderType.Button,
  cache: "cached",
  async run(interaction) {
    const { guild, member, user } = interaction;

    if (!guild || !member) return;

    const existingChannel = guild.channels.cache.find(
      (channel) =>
        channel.type === ChannelType.GuildVoice &&
        channel.permissionOverwrites.cache.has(member.user.id)
    );

    if (existingChannel) {
      await interaction.reply({
        content: "🚫 Você já possui uma sala de pomodoro!",
        ephemeral: true,
      });
      return;
    }

    await guild.channels.create({
      name: `🍅│${user.username}`,
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
          id: interaction.client.user.id,
          allow: ["ViewChannel", "Connect", "Speak"],
        },
      ],
    });

    await interaction.reply({
      content: "🍅 Sala de pomodoro criada com sucesso!",
      ephemeral: true,
    });
  },
});
