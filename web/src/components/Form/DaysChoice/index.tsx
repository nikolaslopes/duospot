import * as ToggleGroup from "@radix-ui/react-toggle-group";

import { IDaysChoice } from "./types";

import { weekDaysItems } from "../../../utils/mocks/weekDaysItems";

export const DaysChoice = ({ weekDays, onWeekDaysChange }: IDaysChoice) => {
  return (
    <ToggleGroup.Root
      type="multiple"
      className="grid grid-cols-4 gap-2"
      value={weekDays}
      onValueChange={(value) => onWeekDaysChange(value)}
    >
      {weekDaysItems.map((weekDayItem) => (
        <ToggleGroup.Item
          key={weekDayItem.value}
          value={weekDayItem.value}
          title={weekDayItem.title}
          className={`w-8 h-8 rounded ${
            weekDays.includes(weekDayItem.value)
              ? "bg-violet-500"
              : "bg-zinc-900"
          }`}
        >
          {weekDayItem.text}
        </ToggleGroup.Item>
      ))}

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
