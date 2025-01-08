import { createEmbed } from "@magicyan/discord";
import { selectImageFromList } from "utils/select-image-from-list.js";

export function notFinishedEmbed(name: string) {
  return createEmbed({
    title: "Ciclo Quebrado 💔",
    timestamp: new Date(),
    description: `O ciclo quebrou, **${name}**! 😭\n\n\
    
    Você não terminou o seu último ciclo pomodoro.\n\n\
    
    Caso deseje, você pode iniciar um novo ciclo pomodoro a qualquer momento. 😊`,
    color: "Red",
    image: {
      url: selectImageFromList([
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzlwNGt2cnFiY25jZnY5MzQ4Yng4MGo5OHU0aHA4cjRsMXVodHlwcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/H6cmWzp6LGFvqjidB7/giphy.gif",
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWllYmxoNjh2OTY5OGRjdnUwMDl1MWNjdjJtaGNtbWRkdTMxMW1qeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/W0c3xcZ3F1d0EYYb0f/giphy.gif",
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNG81anVxeWl2c2s5ams5Y2ptdW90eGlvMHpidmY4bzgycjg3ZHk4NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mEbHU0NQz3jkv3EInn/giphy.gif",
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDZ6YW0xNHlkbDFqZ2xlMDhtcXNnazFjdWRncms2enh3eGMxbTkxYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VJBd91kUU5FJtcDUvL/giphy.gif",
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGt6Z3AxdWNxaWg4aDNtYmRnMjc1YnMwajhnd3NuM3FzYWdrNGFzaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RIAOV7vXdehyGB6tIg/giphy.gif",
      ]),
    },
  });
}
