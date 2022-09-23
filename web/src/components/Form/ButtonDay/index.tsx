import { ButtonDayProps } from "./types";

export const ButtonDay = ({ title, text }: ButtonDayProps) => {
  return (
    <button title={title} type="button" className="w-8 h-8 bg-zinc-900 rounded">
      {text}
    </button>
  );
};
