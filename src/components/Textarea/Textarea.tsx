import type { TextareaHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  labelText?: string;
  textareaClass?: string;
  error?: string;
}

export default function Textarea({
  id,
  labelText,
  textareaClass,
  error,
  ...textareaProps
}: TextareaProps) {
  const myClass =
    'w-full p-4 bg-zinc-100 hover:bg-zinc-200/50 focus:bg-white border border-transparent focus:border-solid focus:border-zinc-900 placeholder-zinc-400 rounded-xl cursor-text outline-none';
  return (
    <div className="flex flex-col w-full font-sans text-base text-black gap-2">
      <label className="font-semibold" htmlFor={id}>
        {labelText}
      </label>
      <textarea
        id={id}
        className={twMerge(clsx(myClass, textareaClass))}
        {...textareaProps}
      ></textarea>
      <div className="w-full h-[18px] text-sm text-pink-400">{error}</div>
    </div>
  );
}
