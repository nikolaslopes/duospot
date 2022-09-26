import { ImageBackground, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { IGameCard } from "./types";

import { THEME } from "../../assets/theme";
import { styles } from "./styles";
import { Loading } from "../Loading";

export const GameCard = ({ data, isGameCardLoading, ...rest }: IGameCard) => {
  return (
    <>
      {isGameCardLoading ? (
        <Loading />
      ) : (
        <TouchableOpacity style={styles.container} {...rest}>
          <ImageBackground
            style={styles.cover}
            source={{ uri: data.bannerUrl }}
          >
            <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
              <Text style={styles.name}>{data.title}</Text>

              <Text style={styles.ads}>
                {data._count.ads === 0 ? 0 : data._count.ads} anúncios
              </Text>
            </LinearGradient>
          </ImageBackground>
        </TouchableOpacity>
      )}
    </>
  );
};
