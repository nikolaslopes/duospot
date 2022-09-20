import { useQuery } from "@tanstack/react-query";

import { GameBannerResponseData } from "../types/gameBanner";
import { api } from "../services/api";

export const fetchGames = async () => {
  const response = await api.get("/games");
  const data: GameBannerResponseData = response.data;

  return data;
};

export const useGamesData = () => {
  const gamesQuery = useQuery(["games"], () => fetchGames());

  return gamesQuery;
};
