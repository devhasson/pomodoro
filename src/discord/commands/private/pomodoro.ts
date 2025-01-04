import { Command } from "#base";
import { createEmbed, createRow } from "@magicyan/discord";
import { ApplicationCommandType, ButtonBuilder, ButtonStyle } from "discord.js";

new Command({
  name: "pomodoro",
  description: "Cria um canal de voz para um pomodoro 💬",
  type: ApplicationCommandType.ChatInput,
  run(interaction) {
    const { channel } = interaction;

    if (!channel) {
      return interaction.reply({
        content: "🚫 Esse comando só pode ser utilizado em um canal de texto!",
        ephemeral: true,
      });
    }

    if (interaction.user.id !== process.env.DISCORD_OWNER_ID) {
      return interaction.reply({
        content: "🚫 Somente o dono do discord pode utilizar esse comando!",
        ephemeral: true,
      });
    }

    const embed = createEmbed({
      title: "🍅 Bem-vindo ao Estudo com Pomodoro! 🍅",
      description: `Prepare-se para transformar seus estudos com o método Pomodoro! Nosso bot será seu parceiro ideal para manter o foco e fazer do aprendizado uma experiência produtiva e divertida.\n\n🌟 Como funciona?\n\n🔸 25 minutos de foco: Concentre-se em suas tarefas com o apoio do bot.\n🔸 5 minutos de descanso: Relaxe e recarregue as energias!\n🔸 Gamificação: Ganhe XP a cada ciclo concluído e suba de nível!\n🔸 Música personalizada: Escolha a trilha sonora perfeita para acompanhar seus estudos.`,
    });

    const row = createRow(
      new ButtonBuilder({
        customId: "create-pomodoro",
        label: "🍅 Criar Pomodoro",
        style: ButtonStyle.Primary,
      })
    );

    return channel.send({
      components: [row],
      embeds: [embed],
    });
  },
});
