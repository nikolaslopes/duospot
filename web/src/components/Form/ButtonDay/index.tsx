import { ButtonDayProps } from "./types";

export const ButtonDay = ({ title }: ButtonDayProps) => {
  return (
    <button title={title} type="button" className="w-8 h-8 bg-zinc-900">
      {title}
    </button>
  );
};
