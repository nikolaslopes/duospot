import { LabelProps } from "./types";

export const Label = ({ title, ...rest }: LabelProps) => {
  return (
    <label {...rest} htmlFor="" className="semibold">
      {title}
    </label>
  );
};
