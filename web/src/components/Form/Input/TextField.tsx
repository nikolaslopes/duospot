import { IInput } from "./types";

export const TextField = ({ ...rest }: IInput) => {
  return (
    <input
      className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
      {...rest}
    />
  );
};
