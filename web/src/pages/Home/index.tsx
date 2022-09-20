import { GameBanner } from "../../components/GameBanner";
import { CreateNewAdBanner } from "../../components/CreateNewAdBanner";
import { useGamesData } from "../../hooks/useGames";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import logoImg from "../../assets/logo.svg";

export const Home = () => {
  const games = useGamesData();
  const data = games.data;

  const [animationParent] = useAutoAnimate({
    duration: 1000,
  });

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="logo" className="animate-bounce" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-purple-yellow-gradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui
      </h1>

      <section className="grid grid-cols-6 gap-6 mt-16">
        {data?.map((game) => (
          <GameBanner
            key={game.id}
            title={game.title}
            bannerUrl={game.bannerUrl}
            adsCount={game._count.ads}
          />
        ))}
      </section>

      <CreateNewAdBanner />
    </div>
  );
};
