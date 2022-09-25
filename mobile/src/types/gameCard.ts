export interface GameCardProps {
  title: string;
  bannerUrl: string;
  adsCount: number;
  isBannerLoading: boolean;
}

export type FetchGameCardsResponseProps = Array<
  {
    id: string;
    _count: {
      ads: number;
    };
  } & Pick<GameCardProps, "title" | "bannerUrl">
>;
