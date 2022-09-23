import { LabelProps } from "./types";

export const Label = ({ title, ...rest }: LabelProps) => {
  return (
    <label {...rest} className="semibold">
      {title}
    </label>
  );
};
