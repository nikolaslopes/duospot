export interface GameBannerProps {
  title: string;
  bannerUrl: string;
  adsCount: number;
}

export type GameBannerResponseData = Array<{
  id: string;
  _count: {
    ads: number;
  } & Pick<GameBannerProps, "title" | "bannerUrl">;
}>;
