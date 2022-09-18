import "../../styles/main.css";

import logoImg from "../../assets/logo.svg";

import { CreateNewAdBanner } from "../CreateNewAdBanner";
import { GameBanner } from "../GameBanner";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./client";
import { useGames } from "../../services/useGames";

export const App = () => {
  const { data } = useGames();

  console.log(data);

  return (
    <QueryClientProvider client={queryClient}>
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
          {data.games.map((game) => (
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
    </QueryClientProvider>
  );
};
