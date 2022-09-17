import express from "express";

const app = express();

app.get("/games/:id/ads", (request, response) => {
  const gameId = request.params.id;

  return response.send(gameId);

  return response.json([
    {
      id: 1,
      name: "Nikolas",
    },
    {
      id: 2,
      name: "Kiki",
    },
    {
      id: 3,
      name: "Zuzu",
    },
  ]);
});

app.listen(3333);
