export type AdProps = {
  id: string;
  gameId: string;
  name: string;
  yearsPlaying: number;
  discord: string;
  weekDays: number[];
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
  createdAt: Date;
};

export type AdCreateDataProps = Pick<
  AdProps,
  | "gameId"
  | "name"
  | "yearsPlaying"
  | "discord"
  | "weekDays"
  | "hourStart"
  | "hourEnd"
  | "useVoiceChannel"
>;
