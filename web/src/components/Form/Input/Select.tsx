import { ISelect } from "./types";

export const Select = ({ initialValue, optionsValue, ...rest }: ISelect) => {
  return (
    <select
      className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
      {...rest}
    >
      <option disabled selected value="">
        {initialValue}
      </option>

      {optionsValue?.map((optionValue) => (
        <option key={optionValue.id} value={optionValue.id}>
          {optionValue.title}
        </option>
      ))}
    </select>
  );
};
