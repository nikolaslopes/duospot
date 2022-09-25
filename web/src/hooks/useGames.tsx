import { useQuery } from "@tanstack/react-query";

import { CardGamesResponseData } from "../types/gameBanner";
import { api } from "../services/api";

export const fetchGames = async () => {
  const response = await api.get("/games");
  const data: CardGamesResponseData = response.data;

  return data;
};

export const useGamesData = () => {
  const gamesQuery = useQuery(["games"], () => fetchGames());

  return gamesQuery;
};
