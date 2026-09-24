import { clsx } from 'clsx';

const figures = [
  {
    fig: 1,
    class: '-top-24 -left-20 w-[480px] h-[480px] bg-pink-400 opacity-30',
  },
  {
    fig: 2,
    class: '-bottom-16 -right-5 w-[440px] h-[440px] bg-pink-400 opacity-20',
  },
  {
    fig: 3,
    class: 'top-10 -right-5 w-[300px] h-[300px] bg-amber-200 opacity-55',
  },
];

const generalClass = 'absolute rounded-full blur-[100px]';

export default function MainBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-none pointer-events-none">
      {figures.map((elem) => (
        <div key={elem.fig} className={clsx(generalClass, elem.class)} />
      ))}
    </div>
  );
}
