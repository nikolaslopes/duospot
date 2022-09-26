import { LabelHTMLAttributes } from "react";

export interface ILabel extends LabelHTMLAttributes<HTMLLabelElement> {
  title: string;
}
