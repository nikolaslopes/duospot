import { useRoute } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";

import { IGame } from "../../types/game";

import { Background } from "../../components/Background";

import { THEME } from "../../assets/theme";
import { styles } from "./styles";
import logoImg from "../../assets/images/logo-nlw-esports.png";

export const Game = () => {
  const route = useRoute();
  const game = route.params as IGame;

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image source={logoImg} style={styles.logo} />

          <View style={styles.fragmentRight} />
        </View>
      </SafeAreaView>
    </Background>
  );
};
