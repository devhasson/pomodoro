import { createEmbed } from "@magicyan/discord";
import { Rank } from "@prisma/client";
import { User } from "discord.js";
import { selectImageFromList } from "utils/select-image-from-list.js";

export function upgradeLevelEmbed(user: User, rank: Rank) {
  return createEmbed({
    title: "Seu Rank Subiu ⭐️",
    timestamp: new Date(),
    description: `Parabéns, ${user.displayName}! 🚀\n\n\

    Você subiu para o nível **${rank.level}** - __***${rank.name}***__!\n\
    Para subir de nível, será necessário alcançar **${rank.xpMax}** pontos de experiência.`,
    image: {
      url: selectImageFromList([
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXNzbTN6NTNxOTlyNmNmMXRzNzA2bjhjZ2RkbnRjaDRleTEzcmpnbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IwAZ6dvvvaTtdI8SD5/giphy.gif",
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTY2bDg0NWNtZ2EzZ3dxdXk3ZnR2YWRneXpvb3liNHE5cDduM3dnNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U4DswrBiaz0p67ZweH/giphy.gif",
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2kwanNoaWpvaTY1NW9xMjBjY2JyM2x3Z2dzYW85cWl6a3h4ZHpmeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/G9dpMnCg4zRIEePql2/giphy.gif",
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjk2MHF4NzJuZW1oM3YyaHNhM3gxanIyMDdnMHlyeGY2c2NjZjEybSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KYElw07kzDspaBOwf9/giphy.gif",
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmhqaWtsM2x1OHo5bGhobHA5NXVmYTFjMnozb3Q4OXlwdGJvNnBxdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fIjZX1wAwYYRr7Fq8k/giphy.gif",
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHVibGc1a3U4ZWtwZGo3d3cwbmZkeDRwajV0aTZtMDc3ZXk2djRjeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYt5jPR6QX5pnqM/giphy.gif",
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2lwamhmaXVpc25oYzl2MWowbjl4bnhxemVmcHE4czJvOWZscmhuayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7abldj0b3rxrZUxW/giphy.gif",
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ltd2E0MmpxcGt1ZHN2N3FpNWFyanBxNzRtdmVrNWE4dHU5czh4bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pa37AAGzKXoek/giphy.gif",
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWhrMW96Z3dyYzl4Y3NpNzBsaDVqMGR2cXoweHJ2NDMzdW9ucnlheSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bTzFnjHPuVvva/giphy.gif",
      ]),
    },
    color: "Gold",
  });
}
