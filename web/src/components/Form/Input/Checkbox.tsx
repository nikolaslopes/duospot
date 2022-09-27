import * as CheckboxRadix from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

export const Checkbox = () => {
  return (
    <CheckboxRadix.Root className="w-6 h-6 p-1 rounded bg-zinc-900">
      <CheckboxRadix.Indicator>
        <Check className="w-4 h-4 text-emerald-400" />
      </CheckboxRadix.Indicator>
    </CheckboxRadix.Root>
  );
};
