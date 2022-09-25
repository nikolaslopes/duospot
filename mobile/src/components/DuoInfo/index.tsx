import { Text, View } from "react-native";
import { THEME } from "../../assets/theme";

import { IDuoInfo } from "./types";

import { styles } from "./styles";

export const DuoInfo = ({
  label,
  value,
  colorValue = THEME.COLORS.TEXT,
}: IDuoInfo) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, { color: colorValue }]}>{value}</Text>
    </View>
  );
};
