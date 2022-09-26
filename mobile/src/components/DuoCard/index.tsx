import { View } from "react-native";

import { IDuoCard } from "./types";

import { Button } from "../Button";
import { DuoInfo } from "../DuoInfo";

import { THEME } from "../../assets/theme";
import { styles } from "./styles";

export const DuoCard = ({ data }: IDuoCard) => {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={data.name} />

      <DuoInfo label="Tempo de jogo" value={`${data.yearsPlaying} anos`} />

      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />

      <DuoInfo
        label="Chamada de áudio?"
        value={`${data.useVoiceChannel ? "Sim" : "Não"}`}
        colorValue={
          data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />

      <Button title="Conectar" onConnect={() => {}} />
    </View>
  );
};
