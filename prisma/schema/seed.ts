import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.rank.createMany({
    data: [
      {
        level: 1,
        roleId: "1324188374168502342",
        name: "Tomate Cereja",
        xpRequired: 1,
        xpMax: 100,
      },
      {
        level: 2,
        roleId: "1326555596023005234",
        name: "Tomate Marmande",
        xpRequired: 101,
        xpMax: 200,
      },
      {
        level: 3,
        roleId: "1326555711638863915",
        name: "Tomate Coração de Boi",
        xpRequired: 201,
        xpMax: 500,
      },
      {
        level: 4,
        roleId: "1326555927544987733",
        name: "Tomate Beefmaster",
        xpRequired: 501,
        xpMax: 1000,
      },
      {
        level: 5,
        roleId: "1326556056985272450",
        name: "Tomate Black Krim",
        xpRequired: 1001,
        xpMax: 2000,
      },
    ],
  });
}

await seed();
