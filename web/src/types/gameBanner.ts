export interface GameBannerProps {
  title: string;
  bannerUrl: string;
  adsCount: number;
  isBannerLoading: boolean;
}

export type GameBannerResponseData = Array<
  {
    id: string;
    _count: {
      ads: number;
    };
  } & Pick<GameBannerProps, "title" | "bannerUrl">
>;
