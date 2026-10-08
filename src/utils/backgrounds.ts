interface Figure {
  fig: number;
  class: string;
}

interface invitationBackgroundsProps {
  [key: string]: Figure[];
}

export const mainBackground: Figure[] = [
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

export const invitationBackgrounds: invitationBackgroundsProps = {
  standard: [
    {
      fig: 1,
      class: '-top-24 -left-20 w-[480px] h-[480px] bg-pink-400 opacity-30',
    },
    {
      fig: 2,
      class: 'bottom-10 -right-5 w-[480px] h-[480px] bg-amber-200 opacity-55',
    },
  ],
  birthday: [
    {
      fig: 1,
      class: '-top-24 -left-20 w-[480px] h-[480px] bg-blue-500 opacity-30',
    },
    {
      fig: 2,
      class: 'bottom-5 -right-5 w-[480px] h-[480px] bg-amber-200 opacity-55',
    },
    {
      fig: 3,
      class: 'top-10 -right-5 w-[400px] h-[400px] bg-violet-200 opacity-55',
    },
  ],
  romantic: [
    {
      fig: 1,
      class: '-top-24 -left-20 w-[480px] h-[480px] bg-rose-400 opacity-30',
    },
    {
      fig: 2,
      class: 'bottom-5 -right-5 w-[480px] h-[480px] bg-amber-200 opacity-55',
    },
    {
      fig: 3,
      class: 'top-30 -left-5 w-[400px] h-[400px] bg-violet-200 opacity-55',
    },
  ],
};
