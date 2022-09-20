import { MouseEvent, useEffect, useRef } from "react";
import { gsap } from "gsap";

import { GameBannerProps } from "../../types/gameBanner";
import { ImageSkeleton } from "../Loaders/ImageSkeleton";
import { TextSkeleton } from "../Loaders/TextSkeleton";

export const GameBanner = ({
  bannerUrl,
  title,
  adsCount,
  isBannerLoading,
}: GameBannerProps) => {
  const boxRef = useRef();

  useEffect(() => {
    const boxes = [boxRef.current];

    gsap.fromTo(
      boxes,
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 1.2,
        ease: "bounce",
      }
    );
  }, []);

  const onEnter = ({ currentTarget }: MouseEvent<HTMLAnchorElement>) => {
    gsap.to(currentTarget, { scale: 1.1 });
  };

  const onLeave = ({ currentTarget }: MouseEvent<HTMLAnchorElement>) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  return (
    <a
      href="#"
      className="relative rounded-lg overflow-hidden cursor-pointer"
      ref={boxRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {isBannerLoading ? <ImageSkeleton /> : <img src={bannerUrl} alt="" />}

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
        {isBannerLoading ? (
          <TextSkeleton />
        ) : (
          <>
            <strong className="font-bold text-white block">{title}</strong>
            <span className="text-zinc-300 text-sm block">
              {adsCount === 0 ? 0 : adsCount} anúncios
            </span>
          </>
        )}
      </div>
    </a>
  );
};
