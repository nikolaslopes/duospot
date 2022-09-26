import { MouseEvent, useEffect, useRef } from "react";
import { gsap } from "gsap";

import { ImageSkeleton } from "../Loaders/ImageSkeleton";
import { TextSkeleton } from "../Loaders/TextSkeleton";

import { IGameCard } from "./types";

export const GameCard = ({ data, isGameCardLoading }: IGameCard) => {
  const boxRef = useRef(null);

  useEffect(() => {
    const box = [boxRef.current];

    gsap.fromTo(
      box,
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 2.5,
        ease: "power2.out",
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
      {isGameCardLoading ? (
        <ImageSkeleton />
      ) : (
        <img src={data.bannerUrl} alt="" />
      )}

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
        {isGameCardLoading ? (
          <TextSkeleton />
        ) : (
          <>
            <strong className="font-bold text-white block">{data.title}</strong>
            <span className="text-zinc-300 text-sm block">
              {data._count.ads === 0 ? 0 : data._count.ads} anúncios
            </span>
          </>
        )}
      </div>
    </a>
  );
};
