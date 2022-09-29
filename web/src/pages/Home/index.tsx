import { useGamesData } from "../../services/hooks/useGames";

import { GameCard } from "../../components/GameCard";
import { CreateNewAdBanner } from "../../components/CreateNewAdBanner";
import { BoxAnimated } from "../../components/Animations/BoxAnimated";
import { TextField } from "../../components/Form/Input/TextField";
import { Checkbox } from "../../components/Form/Input/Checkbox";
import { FormGroup } from "../../components/Form/FormGroup";
import { Label } from "../../components/Form/Label";
import { weekDaysMock } from "../../utils/mocks/weekDaysMock";
import { DaysChoice } from "../../components/Form/DaysChoice";
import { ButtonAction } from "../../components/Form/ButtonAction";
import { Modal } from "../../components/Modal";

import logoImg from "../../assets/logo.svg";
import { Select } from "../../components/Form/Input/Select";
import { useState } from "react";

export const Home = () => {
  const gamesQuery = useGamesData();
  const games = gamesQuery.data;

  const [weekDaysSelectedValue, setWeekDaysSelectedValue] = useState<
    Array<string>
  >([]);

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
        {games?.map((game) => (
          <GameCard
            key={game.id}
            data={game}
            isGameCardLoading={gamesQuery.isLoading}
          />
        ))}
      </section>

      <Modal
        triggerComponent={<CreateNewAdBanner />}
        title="Publique um anúncio"
      >
        <form className="mt-8 flex flex-col gap-4">
          <FormGroup>
            <Label htmlFor="game" title="Qual o game?" />
            <Select
              id="game"
              initialValue="Selecione o game que deseja jogar"
              optionsValue={games}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="nickname" title="Seu nome (ou nickname)" />
            <TextField
              id="nickname"
              type="text"
              placeholder="Como te chamam dentro do game?"
            />
          </FormGroup>

          <div className="grid grid-cols-2 gap-6">
            <FormGroup>
              <Label htmlFor="yearsPlaying" title="Joga há quantos anos?" />
              <TextField
                id="yearsPlaying"
                type="number"
                placeholder="Tudo bem ser ZERO"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="discord" title="Qual seu Discord?" />
              <TextField id="discord" type="text" placeholder="Usuario#000" />
            </FormGroup>
          </div>

          <div className="flex gap-6">
            <FormGroup>
              <Label htmlFor="weekDays" title="Quando costuma jogar?" />

              <DaysChoice
                weekDaysMock={weekDaysMock}
                weekDaysSelectedValue={weekDaysSelectedValue}
                onWeekDaysChange={(value) => setWeekDaysSelectedValue(value)}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="hourStart" title="Qual horário do dia?" />
              <div className="grid grid-cols-2 gap-2">
                <TextField id="hourStart" type="time" placeholder="De" />
                <TextField id="hourEnd" type="time" placeholder="Até" />
              </div>
            </FormGroup>
          </div>

          <div className="mt-2 flex items-center gap-2 text-sm">
            <Checkbox />
            Costumo me conectar ao chat de voz
          </div>

          <footer className="mt-4 flex justify-end gap-4">
            <ButtonAction variant="gray" title="Cancelar" />
            <ButtonAction variant="purple" title="Encontrar duo" />
          </footer>
        </form>
      </Modal>
    </div>
  );
};
