import { TouchableOpacityProps } from "react-native";

import { CardGameProps } from "../../types/gameCard";

export interface IGameCard extends TouchableOpacityProps {
  data: CardGameProps;
}
