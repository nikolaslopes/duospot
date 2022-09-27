import { InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { GameProps } from "../../../types/games";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

export interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
  initialValue: string;
  optionsValue: Array<GameProps> | undefined;
}
