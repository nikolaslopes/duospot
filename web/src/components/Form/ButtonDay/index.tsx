import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { IButtonDay } from "./types";

export const ButtonDay = ({ title, value, text }: IButtonDay) => {
  return (
    <ToggleGroup.Root type="multiple">
      <ToggleGroup.Item
        value={value}
        title={title}
        className="w-8 h-8 bg-zinc-900 rounded"
      >
        {text}
      </ToggleGroup.Item>

      <div
        id="tooltip-default"
        role="tooltip"
        className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity tooltip"
      >
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </ToggleGroup.Root>
  );
};
