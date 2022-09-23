import * as Dialog from "@radix-ui/react-dialog";
import { ModalProps } from "./types";

export const Modal = ({ triggerComponent, children }: ModalProps) => {
  return (
    <Dialog.Root>
      {triggerComponent}
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        {children}
      </Dialog.Portal>
    </Dialog.Root>
  );
};
