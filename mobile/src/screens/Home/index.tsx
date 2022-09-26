import { Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";
import { GameCard } from "../../components/GameCard";

import { IGame } from "../Game/types";
import { useGames } from "../../services/hooks/useGames";

import { styles } from "./styles";
import logoImg from "../../assets/images/logo-nlw-esports.png";

export const Home = () => {
  const navigation = useNavigation();

  const gamesQuery = useGames();
  const games = gamesQuery.data;

  function handleOpenGame({ id, title, bannerUrl }: IGame) {
    navigation.navigate("game", { id, title, bannerUrl });
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />

        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard
              data={item}
              isGameCardLoading={gamesQuery.isLoading}
              onPress={() =>
                handleOpenGame({
                  id: item.id,
                  title: item.title,
                  bannerUrl: item.bannerUrl,
                })
              }
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
};
