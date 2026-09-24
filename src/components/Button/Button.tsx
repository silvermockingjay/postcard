import type { MouseEventHandler, ReactNode } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'warning';
  type?: 'button' | 'submit' | 'reset';
  isIcon?: boolean;
  isDisabled?: boolean;
  customClass?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export default function Button({
  variant,
  type = 'button',
  isIcon,
  isDisabled,
  customClass,
  onClick,
  children,
}: ButtonProps) {
  const variants: Record<ButtonProps['variant'], string> = {
    primary: 'bg-emerald-400 text-white hover:bg-green-400',
    secondary: 'bg-black text-white hover:bg-indigo-950',
    warning: 'bg-pink-400 text-white hover:bg-rose-400',
  };
  const basicClass = clsx(
    'flex flex-none items-center justify-center font-sans text-base rounded-lg disabled:bg-slate-200 disabled:text-slate-700 cursor-pointer disabled:cursor-not-allowed transition-colors',
    variants[variant],
    isIcon ? 'py-[4px] px-[10px]' : 'min-width-[113px] py-2 px-4'
  );
  const className = twMerge(clsx(basicClass, customClass));
  return (
    <button
      type={type}
      className={className}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
