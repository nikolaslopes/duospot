import { useMutation } from "@tanstack/react-query";
import { api } from "../api";

export const useCreateAd = () => {
  async function createNewAd(gameID: string) {
    const request = await api.post(`/games/${gameID}/ads`);
  }

  const createNewAdQuery = useMutation(async () => {});
};
