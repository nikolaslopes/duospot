import { GameCardProps } from "./gameCard";

export type IGame = {
  id: string;
} & Pick<GameCardProps, "title" | "bannerUrl">;
