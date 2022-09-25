import { ImageBackground, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { IGameCard } from "./types";

import { THEME } from "../../assets/theme";
import { styles } from "./styles";

export const GameCard = ({
  title,
  bannerUrl,
  adsCount,
  isBannerLoading,
  ...rest
}: IGameCard) => {
  console.log();
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={{ uri: bannerUrl }}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{title}</Text>

          <Text style={styles.ads}>
            {adsCount === 0 ? 0 : adsCount} anúncios
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};
