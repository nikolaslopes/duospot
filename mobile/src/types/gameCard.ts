export interface CardGameProps {
  title: string;
  bannerUrl: string;
  adsCount: number;
  isBannerLoading: boolean;
}

export type CardGamesResponseData = Array<
  {
    id: string;
    _count: {
      ads: number;
    };
  } & Pick<CardGameProps, "title" | "bannerUrl">
>;
