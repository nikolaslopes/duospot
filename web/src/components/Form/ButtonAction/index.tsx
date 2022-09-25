import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";
import { ButtonActionProps } from "./types";

export const ButtonAction = ({
  variant,
  title,
  ...rest
}: ButtonActionProps) => {
  return (
    <>
      {variant === "gray" && (
        <Dialog.Close
          type="button"
          className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600 active:bg-zinc-700 transition-all"
          {...rest}
        >
          {title}
        </Dialog.Close>
      )}

      {variant === "purple" && (
        <button
          type="submit"
          className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600 transition-all active:bg-violet-700"
          {...rest}
        >
          <GameController className="w-6 h-6" /> {title}
        </button>
      )}
    </>
  );
};
