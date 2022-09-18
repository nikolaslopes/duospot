import "../../styles/main.css";

import logoImg from "../../assets/logo.svg";

import { MagnifyingGlassPlus } from "phosphor-react";

import { useEffect, useState } from "react";
import { GameBanner } from "../../styles/GameBanner";
import { GameBannerResponse } from "../../@types/global";

export const App = () => {
  const [games, setGames] = useState<GameBannerResponse[]>([]);

  async function fetchGames() {
    const response = await fetch("http://localhost:3333/games");
    const data: GameBannerResponse[] = await response.json();

    setGames(data);
  }

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="logo" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-purple-yellow-gradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui
      </h1>

      <section className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => (
          <GameBanner
            key={game.id}
            title={game.title}
            bannerUrl={game.bannerUrl}
            adsCount={game._count.ads}
          />
        ))}
      </section>

      <section className="mt-8 pt-1 bg-purple-yellow-gradient self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button className="flex items-center gap-3 py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 active:bg-violet-700 transition">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </section>
    </div>
  );
};
