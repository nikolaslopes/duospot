export type Ad = {
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

export type AdCreateData = Pick<
  Ad,
  | "gameId"
  | "name"
  | "yearsPlaying"
  | "discord"
  | "weekDays"
  | "hourStart"
  | "hourEnd"
  | "useVoiceChannel"
>;

export type Ads = Array<
  {
    hourStart: number;
    hourEnd: number;
    weekDays: string;
  } & Pick<Ad, "id" | "name" | "useVoiceChannel" | "yearsPlaying">
>;
