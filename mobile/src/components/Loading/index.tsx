import { View, ActivityIndicator } from "react-native";

import { THEME } from "../../assets/theme";
import { styles } from "./styles";

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={THEME.COLORS.PRIMARY} />
    </View>
  );
};
