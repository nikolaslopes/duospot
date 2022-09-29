import * as CheckboxRadix from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { ICheckbox } from "./types";

export const Checkbox = ({ checked, onCheckboxChange }: ICheckbox) => {
  return (
    <CheckboxRadix.Root
      className="w-6 h-6 p-1 rounded bg-zinc-900"
      checked={checked}
      onCheckedChange={(value) => {
        if (value === true) {
          onCheckboxChange(true);
        } else {
          onCheckboxChange(false);
        }
      }}
    >
      <CheckboxRadix.Indicator>
        <Check className="w-4 h-4 text-emerald-400" />
      </CheckboxRadix.Indicator>
    </CheckboxRadix.Root>
  );
};
