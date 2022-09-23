import * as Dialog from "@radix-ui/react-dialog";

import { useGamesData } from "../../hooks/useGames";
import { GameBanner } from "../../components/GameBanner";
import { CreateNewAdBanner } from "../../components/CreateNewAdBanner";
import { BoxAnimated } from "../../components/Animations/BoxAnimated";

import logoImg from "../../assets/logo.svg";
import { GameController } from "phosphor-react";
import { Input } from "../../components/Form/Input";

export const Home = () => {
  const gamesQuery = useGamesData();
  const data = gamesQuery.data;

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="logo" />

      <BoxAnimated>
        <h1 className="text-6xl text-white font-black mt-20">
          Seu{" "}
          <span className="bg-purple-yellow-gradient bg-clip-text text-transparent">
            duo
          </span>{" "}
          está aqui
        </h1>
      </BoxAnimated>

      <section className="grid grid-cols-6 gap-6 mt-16">
        {data?.map((game) => (
          <GameBanner
            key={game.id}
            title={game.title}
            bannerUrl={game.bannerUrl}
            adsCount={game._count.ads}
            isBannerLoading={gamesQuery.isLoading}
          />
        ))}
      </section>

      <Dialog.Root>
        <CreateNewAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl font-black">
              Publique um anúncio
            </Dialog.Title>
            <form className="mt-8 flex flex-col gap-4">
              <Input
                id="game"
                labelText="Qual o game?"
                placeholder="Selecione o game que deseja jogar"
              />

              <Input
                id="game"
                labelText="Seu nome (ou nickname)"
                placeholder="Como te chamam dentro do game?"
              />

              <div className="grid grid-cols-2 gap-6">
                <Input
                  id="yearsPlaying"
                  labelText="Joga há quantos anos?"
                  type="number"
                  placeholder="Tudo bem ser ZERO"
                />

                <Input
                  id="discord"
                  labelText="Qual seu Discord?"
                  type="text"
                  placeholder="Usuario#000"
                />
              </div>

              <div className="flex gap-6">
                <div>
                  <label htmlFor="weekDays">Quando costuma jogar?</label>
                </div>
                <div>
                  <Input
                    id="hourStart"
                    labelText="Qual horário do dia?"
                    type="time"
                    placeholder="De"
                  />
                  <Input id="hourEnd" type="time" placeholder="Até" />
                </div>
              </div>

              <div>
                <Input type="checkbox" />
                Costumo me conectar ao chat de voz
              </div>

              <footer>
                <button>Cancelar</button>
                <button type="submit">
                  {" "}
                  <GameController /> Encontrar duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};
