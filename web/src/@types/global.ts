export interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export type GameBannerResponse = Pick<
  GameBannerProps,
  "bannerUrl" | "title"
> & {
  id: string;
  _count: {
    ads: number;
  };
};
