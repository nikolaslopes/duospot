import { FormGroupProps } from "./types";

export const FormGroup = ({ children }: FormGroupProps) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};