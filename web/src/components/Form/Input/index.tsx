import { FormGroup } from "../FormGroup";
import { InputProps } from "./types";

export function Input({ id, labelText, ...rest }: InputProps) {
  return (
    <FormGroup>
      {labelText && (
        <label htmlFor={id} className="semibold">
          {labelText}
        </label>
      )}

      <input
        id={id}
        className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
        {...rest}
      />
    </FormGroup>
  );
}
