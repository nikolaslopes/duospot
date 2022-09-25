import { useRoute } from "@react-navigation/native";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { IGame } from "../../types/game";
import { Background } from "../../components/Background";

export const Game = () => {
  const route = useRoute();
  const game = route.params as IGame;

  console.log(game);

  return (
    <Background>
      <SafeAreaView>
        <Text>hi</Text>
      </SafeAreaView>
    </Background>
  );
};
