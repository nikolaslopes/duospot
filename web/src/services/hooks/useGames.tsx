import { useQuery } from "@tanstack/react-query";

import { FetchGamesResponseProps } from "../../types/games";
import { api } from "../api";

export const fetchGames = async () => {
  const response = await api.get("/games");
  const data: FetchGamesResponseProps = response.data;

  return data;
};

export const useGamesData = () => {
  const gamesQuery = useQuery(["games"], () => fetchGames());

  return gamesQuery;
};
