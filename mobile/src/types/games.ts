export type GameProps = {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
};

export type FetchGamesResponseProps = Array<GameProps>;
