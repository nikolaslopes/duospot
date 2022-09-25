import { View } from "react-native";

import { DuoInfo } from "../DuoInfo";

import { styles } from "./styles";

export const DuoCard = () => {
  return (
    <View style={styles.container}>
      <DuoInfo label="caralho" value="pika" />
    </View>
  );
};
