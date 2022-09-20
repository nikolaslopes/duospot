import { ImageBackground } from "react-native";

import { BackgroundProps } from "./types";

import { styles } from "./styles";
import backgroundImg from "../../assets/images/background-galaxy.png";

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
