import { createEmbed } from "@magicyan/discord";
import { User } from "discord.js";

export function welcomeEmbed(user: User) {
  return createEmbed({
    title: "Seja Bem-Vindo(a)! 🍅",
    author: {
      name:
        user.displayName.charAt(0).toUpperCase() + user.displayName.slice(1),
      iconURL: user.displayAvatarURL(),
    },
    color: "NotQuiteBlack",
    description: `Olá, **${user.displayName}**! Seja **bem-vindo(a)** ao servidor!`,
    thumbnail: { url: user.displayAvatarURL() },
  });
}
