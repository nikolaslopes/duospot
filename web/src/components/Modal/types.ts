import { ReactNode } from "react";

export interface IModal {
  triggerComponent: JSX.Element;
  children: ReactNode;
  title: string;
}
