import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { IDaysChoice } from "./types";

export const DaysChoice = ({
  weekDays,
  weekDaysSelected,
  onWeekDaysChange,
}: IDaysChoice) => {
  return (
    <ToggleGroup.Root
      type="multiple"
      className="grid grid-cols-4 gap-2"
      onValueChange={(value) => onWeekDaysChange(value)}
      // value={weekDaysSelected}
    >
      {weekDays.map((weekDay) => (
        <ToggleGroup.Item
          key={weekDay.value}
          value={weekDay.value}
          title={weekDay.title}
          className="w-8 h-8 bg-zinc-900 rounded"
        >
          {weekDay.text}
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
