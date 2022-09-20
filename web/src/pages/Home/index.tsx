import logoImg from "../../assets/logo.svg";
import { CreateNewAdBanner } from "../../components/CreateNewAdBanner";
import { GameBanner } from "../../components/GameBanner";
import { useGamesData } from "../../hooks/useGames";

export const Home = () => {
  const games = useGamesData();

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
        {games.data?.map((game) => (
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
