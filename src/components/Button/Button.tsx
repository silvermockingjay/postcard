import type { ReactNode } from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'warning';
  isDisabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

export default function Button({
  variant,
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
      className={`flex items-center justify-center min-w-[113px] font-sans text-base ${variants[variant]} rounded-lg py-[8px] px-[32px] disabled:bg-slate-200 disabled:text-slate-700`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
