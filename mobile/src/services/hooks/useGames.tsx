import { useQuery } from "@tanstack/react-query";

import { FetchGameCardsResponseProps } from "../../types/gameCard";
import { api } from "../api";

export const fetchGameCards = async () => {
  const response = await api.get("/games");
  const data: FetchGameCardsResponseProps = response.data;

  return data;
};

export const useGames = () => {
  const gamesQuery = useQuery(["games"], () => fetchGameCards());

  return gamesQuery;
};
