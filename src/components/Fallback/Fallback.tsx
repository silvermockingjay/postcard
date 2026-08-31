import type { MouseEventHandler } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components';

interface FallbackProps {
  icon?: LucideIcon;
  title: string;
  message: string;
  btnTxt: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Fallback({
  icon: Icon,
  title,
  message,
  btnTxt,
  onClick,
}: FallbackProps) {
  return (
    <div className="flex flex-col justify-start items-center gap=[20px] p-4 w-3/5 border border-solid border-zinc-200 rounded-md">
      {Icon && <Icon size={24} color="pink-400" strokeWidth={2} />}
      <div className="flex flex-col justify-start gap=[12px] w-full">
        <div className="font-sans text-center">
          <h1 className="font-semibold text-black">{title}</h1>
          <p className="font-base text-zinc-300">{message}</p>
        </div>
        <Button variant="primary" onClick={onClick}>
          {btnTxt}
        </Button>
      </div>
    </div>
  );
}
