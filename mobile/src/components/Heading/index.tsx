import { Text, View } from "react-native";

import { HeadingProps } from "./types";

import { styles } from "./styles";

export const Heading = ({ title, subtitle, ...rest }: HeadingProps) => {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};
