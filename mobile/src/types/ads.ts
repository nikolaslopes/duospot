export type AdsProps = {
  id: string;
  name: string;
  hourEnd: string;
  hourStart: string;
  useVoiceChannel: boolean;
  weekDays: Array<string>;
  yearsPlaying: number;
};

export type FetchAdsResponseProps = Array<AdsProps>;
