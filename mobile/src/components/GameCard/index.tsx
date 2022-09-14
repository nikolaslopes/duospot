import { ImageBackground, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { IGameCard } from "./types";

export const GameCard = ({ data, ...rest }: IGameCard) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={data.cover} />
    </TouchableOpacity>
  );
};
