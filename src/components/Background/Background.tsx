import { clsx } from 'clsx';

interface Figures {
  fig: number;
  class: string;
}

interface BackgroundProps {
  background: Figures[];
}

const generalClass = 'absolute rounded-full blur-[100px]';

export default function Background({ background }: BackgroundProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-none pointer-events-none">
      {background.map((elem) => (
        <div key={elem.fig} className={clsx(generalClass, elem.class)} />
      ))}
    </div>
  );
}
