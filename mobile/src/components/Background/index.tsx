import { ImageBackground } from "react-native";
import { styles } from "./styles";
import { BackgroundProps } from "./types";

import backgroundImg from "../../assets/background-galaxy.png";

export const Background = ({ children }: BackgroundProps) => {
  return (
    <ImageBackground
      style={styles.container}
      source={backgroundImg}
      defaultSource={backgroundImg}
    >
      {children}
    </ImageBackground>
  );
};
