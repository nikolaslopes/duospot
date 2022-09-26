import { ILabel } from "./types";

export const Label = ({ title, ...rest }: ILabel) => {
  return (
    <label {...rest} className="semibold">
      {title}
    </label>
  );
};
