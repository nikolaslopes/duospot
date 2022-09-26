import { useQuery } from "@tanstack/react-query";

import { FetchGamesResponseProps } from "../../types/games";
import { api } from "../api";

const fetchGameCards = async () => {
  const response = await api.get("/games");
  const data: FetchGamesResponseProps = response.data;

  return data;
};

export const useGames = () => {
  const gamesQuery = useQuery(["games"], () => fetchGameCards());

  return gamesQuery;
};
