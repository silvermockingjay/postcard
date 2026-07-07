import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  inputClass?: string;
  error?: string;
}

export default function Input({
  labelText,
  inputClass,
  error,
  ...inputProps
}: InputProps) {
  return (
    <div className="flex flex-col w-full font-sans text-base text-black gap-[8px]">
      <label className="font-semibold" htmlFor={inputProps.id}>
        {labelText}
      </label>
      <div className="flex flex-col items-start">
        <input
          className={`w-full p-[12px] border border-solid border-zinc-200 rounded-md cursor-text outline-none ${inputClass}`}
          {...inputProps}
        />
        <div className="w-full h-[18px] text-sm text-pink-400">{error}</div>
      </div>
    </div>
  );
}
