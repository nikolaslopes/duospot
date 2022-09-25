import { TouchableOpacityProps } from "react-native";
import { GameCardProps } from "../../types/gameCard";

export type IGameCard = Pick<
  GameCardProps,
  "title" | "bannerUrl" | "adsCount" | "isBannerLoading"
> &
  TouchableOpacityProps;
