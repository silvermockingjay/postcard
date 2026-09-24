import type { SelectHTMLAttributes } from 'react';

interface Option {
  id: number;
  value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  labelText?: string;
  placeholderText?: string;
  error?: string;
}

export default function Select({
  options,
  labelText,
  placeholderText,
  error,
  ...selectProps
}: SelectProps) {
  return (
    <div className="flex flex-col w-full font-sans text-base text-black gap-2">
      <label className="font-semibold" htmlFor={selectProps.id}>
        {labelText}
      </label>
      <select
        name={selectProps.name}
        id={selectProps.id}
        className="py-2 border border-solid border-zinc-200 rounded-md cursor-pointer"
        {...selectProps}
      >
        {placeholderText && <option value="">{placeholderText}</option>}
        {options.map((elem) => (
          <option key={elem.id} value={elem.value}>
            {elem.value}
          </option>
        ))}
      </select>
      <div className="w-full h-[18px] text-sm text-pink-400">{error}</div>
    </div>
  );
}
