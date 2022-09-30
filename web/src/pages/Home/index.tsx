import { useGamesData } from "../../services/hooks/useGames";

import { GameCard } from "../../components/GameCard";
import { CreateNewAdBanner } from "../../components/CreateNewAdBanner";
import { BoxAnimated } from "../../components/Animations/BoxAnimated";
import { TextField } from "../../components/Form/Input/TextField";
import { Checkbox } from "../../components/Form/Input/Checkbox";
import { FormGroup } from "../../components/Form/FormGroup";
import { Label } from "../../components/Form/Label";
import { DaysChoice } from "../../components/Form/DaysChoice";
import { ButtonAction } from "../../components/Form/ButtonAction";
import { Modal } from "../../components/Modal";

import logoImg from "../../assets/logo.svg";
import { Select } from "../../components/Form/Input/Select";
import { FormEvent, useState } from "react";

import { api } from "../../services/api";

export const Home = () => {
  const gamesQuery = useGamesData();
  const games = gamesQuery.data;

  const [weekDays, setWeekDays] = useState<Array<string>>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    if (
      !data.name &&
      !data.hourStart &&
      !data.hourEnd &&
      weekDays.length === 0
    ) {
      return;
    }

    const payload = {
      name: data.name,
      yearsPlaying: Number(data.yearsPlaying),
      discord: data.discord,
      weekDays: weekDays.map(Number),
      hourStart: data.hourStart,
      hourEnd: data.hourEnd,
      useVoiceChannel: useVoiceChannel,
    };

    try {
      await api.post(`/games/${data.game}/ads`, payload);
    } catch (err) {
      console.log(err);
    }
  }

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
        <form className="mt-8 flex flex-col gap-4" onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="game" title="Qual o game?" />
            <Select
              id="game"
              name="game"
              initialValue="Selecione o game que deseja jogar"
              optionsValue={games}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="name" title="Seu nome (ou nickname)" />
            <TextField
              id="name"
              name="name"
              type="text"
              placeholder="Como te chamam dentro do game?"
            />
          </FormGroup>

          <div className="grid grid-cols-2 gap-6">
            <FormGroup>
              <Label htmlFor="yearsPlaying" title="Joga há quantos anos?" />
              <TextField
                id="yearsPlaying"
                name="yearsPlaying"
                type="number"
                placeholder="Tudo bem ser ZERO"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="discord" title="Qual seu Discord?" />
              <TextField
                id="discord"
                name="discord"
                type="text"
                placeholder="Usuario#000"
              />
            </FormGroup>
          </div>

          <div className="flex gap-6">
            <FormGroup>
              <Label htmlFor="weekDays" title="Quando costuma jogar?" />

              <DaysChoice
                weekDays={weekDays}
                onWeekDaysChange={(value) => setWeekDays(value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="hourStart" title="Qual horário do dia?" />
              <div className="grid grid-cols-2 gap-2">
                <TextField
                  id="hourStart"
                  name="hourStart"
                  type="time"
                  placeholder="De"
                />
                <TextField
                  id="hourEnd"
                  name="hourEnd"
                  type="time"
                  placeholder="Até"
                />
              </div>
            </FormGroup>
          </div>

          <label className="mt-2 flex items-center gap-2 text-sm">
            <Checkbox
              checked={useVoiceChannel}
              onCheckboxChange={(value) => setUseVoiceChannel(value)}
            />
            Costumo me conectar ao chat de voz
          </label>

          <footer className="mt-4 flex justify-end gap-4">
            <ButtonAction type="button" variant="gray" title="Cancelar" />
            <ButtonAction
              type="submit"
              variant="purple"
              title="Encontrar duo"
            />
          </footer>
        </form>
      </Modal>
    </div>
  );
};
