import { IInput } from "./types";

export const TextField = ({ id, name, ...rest }: IInput) => {
  return (
    <input
      id={id}
      name={name}
      className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
      {...rest}
    />
  );
};
