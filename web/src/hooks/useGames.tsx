import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";
import { GameBannerResponse } from "../types/global";

export const fetchGames = async () => {
  const response = await api.get("/games");
  const data: GameBannerResponse[] = response.data;

  return data;
};

export const useGamesData = () => {
  const gamesQuery = useQuery(["games"], () => fetchGames());

  return gamesQuery;
};
