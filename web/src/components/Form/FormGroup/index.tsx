import { IFormGroup } from "./types";

export const FormGroup = ({ children }: IFormGroup) => {
  return <div className="flex flex-col gap-2 flex-1">{children}</div>;
};
