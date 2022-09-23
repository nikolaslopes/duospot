import * as Dialog from "@radix-ui/react-dialog";
import { MagnifyingGlassPlus } from "phosphor-react";

import { BoxAnimated } from "../Animations/BoxAnimated";
import { Button } from "../Button";

export const CreateNewAdBanner = () => {
  return (
    <BoxAnimated className="mt-8 pt-1 bg-purple-yellow-gradient self-stretch rounded-lg overflow-hidden">
      <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black block">
            Não encontrou seu duo?
          </strong>
          <span className="text-zinc-400 block">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <Dialog.Trigger>
          <Button
            icon={<MagnifyingGlassPlus size={24} />}
            title="Publicar anúncio"
          />
        </Dialog.Trigger>
      </div>
    </BoxAnimated>
  );
};
