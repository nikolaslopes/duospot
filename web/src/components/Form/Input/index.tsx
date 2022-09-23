import { FormGroup } from "../FormGroup";
import { InputProps } from "./types";

export function Input({ ...rest }: InputProps) {
  return (
    <input
      className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
      {...rest}
    />
  );
}
