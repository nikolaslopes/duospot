import * as Dialog from "@radix-ui/react-dialog";

import { useGamesData } from "../../hooks/useGames";
import { GameBanner } from "../../components/GameBanner";
import { CreateNewAdBanner } from "../../components/CreateNewAdBanner";
import { BoxAnimated } from "../../components/Animations/BoxAnimated";

import logoImg from "../../assets/logo.svg";
import { GameController } from "phosphor-react";
import { Input } from "../../components/Form/Input";
import { FormGroup } from "../../components/Form/FormGroup";
import { Label } from "../../components/Form/Label";
import { weekDays } from "../../utils/mocks/weekDays";
import { ButtonDay } from "../../components/Form/ButtonDay";
import { ButtonAction } from "../../components/Form/ButtonAction";
import { Modal } from "../../components/Modal";

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

      <Modal triggerComponent={<CreateNewAdBanner />}>
        <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
          <Dialog.Title className="text-3xl font-black">
            Publique um anúncio
          </Dialog.Title>
          <form className="mt-8 flex flex-col gap-4">
            <FormGroup>
              <Label htmlFor="game" title="Qual o game?" />
              <Input
                id="game"
                placeholder="Selecione o game que deseja jogar"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="nickname" title="Qual o game?" />
              <Input
                id="nickname"
                placeholder="Como te chamam dentro do game?"
              />
            </FormGroup>

            <div className="grid grid-cols-2 gap-6">
              <FormGroup>
                <Label htmlFor="yearsPlaying" title="Joga há quantos anos?" />
                <Input
                  id="yearsPlaying"
                  type="number"
                  placeholder="Tudo bem ser ZERO"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="discord" title="Qual seu Discord?" />
                <Input id="discord" type="text" placeholder="Usuario#000" />
              </FormGroup>
            </div>

            <div className="flex gap-6">
              <FormGroup>
                <Label htmlFor="weekDays" title="Quando costuma jogar?" />

                <div className="grid grid-cols-4 gap-2">
                  {weekDays.map((weekDay) => (
                    <ButtonDay
                      key={weekDay.title}
                      title={weekDay.title}
                      text={weekDay.text}
                    />
                  ))}
                </div>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="hourStart" title="Qual horário do dia?" />
                <div className="grid grid-cols-2 gap-2">
                  <Input id="hourStart" type="time" placeholder="De" />
                  <Input id="hourEnd" type="time" placeholder="Até" />
                </div>
              </FormGroup>
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm">
              <Input id="checkbox" type="checkbox" />
              Costumo me conectar ao chat de voz
            </div>

            <footer className="mt-4 flex justify-end gap-4">
              <ButtonAction variant="gray" title="Cancelar" />

              <ButtonAction variant="purple" title="Encontrar duo" />
            </footer>
          </form>
        </Dialog.Content>
      </Modal>
    </div>
  );
};
