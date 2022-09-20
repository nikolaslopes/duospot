import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";
import { GameBannerResponseData } from "../types/gameBanner";

export const fetchGames = async () => {
  const response = await api.get("/games");
  const data: GameBannerResponseData = response.data;

  return data;
};

export const useGamesData = () => {
  const gamesQuery = useQuery(["games"], () => fetchGames());

  return gamesQuery;
};
