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
      <div className="flex flex-col items-start">
        <select
          name={selectProps.name}
          id={selectProps.id}
          className="w-full p-4 bg-zinc-100 hover:bg-zinc-200/50 focus:bg-white border border-transparent focus:border-solid focus:border-zinc-900 rounded-xl cursor-text outline-none"
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
    </div>
  );
}
