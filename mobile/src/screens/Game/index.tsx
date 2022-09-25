import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";

import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";

import { IGame } from "../../types/game";

import { THEME } from "../../assets/theme";
import { styles } from "./styles";
import logoImg from "../../assets/images/logo-nlw-esports.png";

export const Game = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const game = route.params as IGame;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image source={logoImg} style={styles.logo} />

          <View style={styles.fragmentRight} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading title={game.title} subtitle="Conecte-se e comece a jogar!" />
      </SafeAreaView>
    </Background>
  );
};
