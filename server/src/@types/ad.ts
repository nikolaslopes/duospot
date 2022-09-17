export type Ad = {
  id: string;
  gameId: string;
  name: string;
  yearsPlaying: number;
  discord: string;
  weekDays: number[];
  hourStart: number;
  hourdEnd: number;
  useVoiceChannel: boolean;
  createdAt: Date;
};

export type AdPOST = Pick<
  Ad,
  | "gameId"
  | "name"
  | "yearsPlaying"
  | "discord"
  | "weekDays"
  | "hourStart"
  | "hourdEnd"
  | "useVoiceChannel"
>;
