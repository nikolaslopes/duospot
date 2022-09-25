import { TouchableOpacity, Text } from "react-native";
import { GameController } from "phosphor-react-native";

import { THEME } from "../../assets/theme";
import { styles } from "./styles";

interface IButton {
  title: string;
}

export const Button = ({ title }: IButton) => {
  return (
    <TouchableOpacity style={styles.container}>
      <GameController color={THEME.COLORS.TEXT} />

      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
