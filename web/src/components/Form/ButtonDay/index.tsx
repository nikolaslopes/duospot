import { ButtonDayProps } from "./types";

export const ButtonDay = ({ title, text }: ButtonDayProps) => {
  return (
    <>
      <button
        title={title}
        type="button"
        className="w-8 h-8 bg-zinc-900 rounded"
      >
        {text}
      </button>

      <div
        id="tooltip-default"
        role="tooltip"
        className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity tooltip"
      >
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  );
};
