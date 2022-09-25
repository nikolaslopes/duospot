import { TouchableOpacity, Text } from "react-native";
import { GameController } from "phosphor-react-native";

import { IButton } from "./types";

import { THEME } from "../../assets/theme";
import { styles } from "./styles";

export const Button = ({ title }: IButton) => {
  return (
    <TouchableOpacity style={styles.container}>
      <GameController color={THEME.COLORS.TEXT} />

      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
