import { IButton } from "./types";

export const Button = ({ icon, title, ...rest }: IButton) => {
  return (
    <button
      className="flex items-center gap-3 py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 active:bg-violet-700 transition"
      {...rest}
    >
      {icon}
      {title}
    </button>
  );
};
