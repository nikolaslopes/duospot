import { useQuery } from "@tanstack/react-query";
import { GameBannerResponse } from "../@types/global";

export const fetchGames = async () => {
  const response = await fetch("http://localhost:3333/games");
  const data: GameBannerResponse[] = await response.json();

  return data;
};

export const useGamesData = () => {
  const gamesQuery = useQuery(["games"], () => fetchGames());

  return gamesQuery;
};
