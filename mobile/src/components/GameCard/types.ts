import { TouchableOpacityProps } from "react-native";
import { CardGameProps } from "../../@types/global";

export interface IGameCard extends TouchableOpacityProps {
  data: CardGameProps;
}
