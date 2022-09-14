import { ImageBackground, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { IGameCard } from "./types";
import { THEME } from "../../theme";

export const GameCard = ({ data, ...rest }: IGameCard) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={data.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.name}</Text>

          <Text style={styles.ads}>{data.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};
