import * as DialogRadix from "@radix-ui/react-dialog";

import { IModal } from "./types";

export const Modal = ({ triggerComponent, title, children }: IModal) => {
  return (
    <DialogRadix.Root>
      {triggerComponent}
      <DialogRadix.Portal>
        <DialogRadix.Overlay className="bg-black/60 inset-0 fixed" />
        <DialogRadix.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
          <DialogRadix.Title className="text-3xl font-black">
            {title}
          </DialogRadix.Title>
          {children}
        </DialogRadix.Content>
      </DialogRadix.Portal>
    </DialogRadix.Root>
  );
};
