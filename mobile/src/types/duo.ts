export interface FetchDuoResponseProps {
  id: string;
  name: string;
  hourEnd: string;
  hourStart: string;
  useVoiceChannel: boolean;
  weekDays: Array<string>;
  yearsPlaying: number;
}

export interface DuoProps {
  data: FetchDuoResponseProps;
  isLoading?: boolean;
}
