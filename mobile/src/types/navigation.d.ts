import { IGame } from "./game";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      game: IGame;
    }
  }
}
