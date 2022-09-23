import { ButtonHTMLAttributes } from "react";

export interface ButtonActionProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "gray" | "purple";
}
