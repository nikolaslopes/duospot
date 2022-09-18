import { GameBannerProps } from "../../@types/global";

export const GameBanner = ({ bannerUrl, title, adsCount }: GameBannerProps) => {
  console.log(adsCount);
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={bannerUrl} alt="" />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm block">
          {adsCount === 0 ? 0 : adsCount} anúncios
        </span>
      </div>
    </a>
  );
};
