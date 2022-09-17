import express, { request } from "express";
import { prisma } from "./database/client";

const app = express();

app.get("/games", async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });

  return response.json(games);
});

app.post("/ads", async (request, response) => {
  const ads = await prisma.ad.findMany();

  return response.status(201).json(ads);
});

app.get("/games/:id/ads", async (request, response) => {
  const id = request.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourdEnd: true,
    },
    where: {
      gameId: id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return response.json(ads);
});

app.get("/ads/:id/discord", (request, response) => {
  return response.json([]);
});

app.listen(3333);
