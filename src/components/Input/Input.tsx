import type { InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

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
  const myClass =
    'w-full p-4 bg-zinc-100 hover:bg-zinc-200/50 focus:bg-white border border-transparent focus:border-solid focus:border-zinc-900 placeholder-zinc-400 rounded-xl cursor-text outline-none';
  return (
    <div className="flex flex-col w-full font-sans text-base text-black gap-2">
      <label className="font-semibold" htmlFor={inputProps.id}>
        {labelText}
      </label>
      <div className="flex flex-col items-start">
        <input className={twMerge(clsx(myClass, inputClass))} {...inputProps} />
        <div className="w-full h-[18px] text-sm text-pink-400">{error}</div>
      </div>
    </div>
  );
}
