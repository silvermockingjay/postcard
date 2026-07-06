import type { MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'warning';
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export default function Button({
  variant,
  type = 'button',
  isDisabled,
  onClick,
  children,
}: ButtonProps) {
  const variants: Record<ButtonProps['variant'], string> = {
    primary: 'bg-emerald-400 text-black hover:bg-green-400',
    secondary: 'bg-amber-200 text-black hover:bg-yellow-200',
    warning: 'bg-pink-400 text-black hover:bg-rose-400',
  };

  return (
    <button
      type={type}
      className={`flex items-center justify-center min-w-[113px] font-sans text-base ${variants[variant]} rounded-lg py-[8px] px-[32px] disabled:bg-slate-200 disabled:text-slate-700`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
