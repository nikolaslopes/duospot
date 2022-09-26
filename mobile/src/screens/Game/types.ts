import { GameProps } from "../../types/games";

export type IGame = Pick<GameProps, "id" | "title" | "bannerUrl">;
