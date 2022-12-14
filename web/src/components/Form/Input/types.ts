import { InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { GameProps } from "../../../types/games";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
}

export interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
  initialValue: string;
  optionsValue: Array<Pick<GameProps, "id" | "title">> | undefined;
}

export interface ICheckbox {
  checked: boolean;
  onCheckboxChange: (value: boolean) => void;
}
