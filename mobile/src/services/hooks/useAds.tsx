import { useQuery } from "@tanstack/react-query";

import { FetchAdsResponseProps } from "../../types/ads";
import { api } from "../api";

const fetchAds = async (gameID: string) => {
  const response = await api.get(`gameS/${gameID}/ads`);
  const data: FetchAdsResponseProps = response.data;

  return data;
};

export const useAds = (gameID: string) => {
  const adsQuery = useQuery(["ads"], () => fetchAds(gameID));

  return adsQuery;
};
