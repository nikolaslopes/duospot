import { TouchableOpacityProps } from "react-native";

import { GameProps } from "../../types/games";

export interface IGameCard extends TouchableOpacityProps {
  data: GameProps;
  isGameCardLoading: boolean;
}
