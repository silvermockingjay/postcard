export const themes = [
  { id: 1, value: 'standard' },
  { id: 2, value: 'birthday' },
  { id: 3, value: 'romantic' },
];

interface CardStyleOptions {
  fontHeader: string;
  fontText: string;
  color: string;
  colorPrimary: string;
  colorSecondary: string;
  bg: string;
  btnColor: string;
  btnBackground: string;
  marker: string;
}
interface CardStylesProps {
  [key: string]: CardStyleOptions;
}

export const cardStyles: CardStylesProps = {
  standard: {
    fontHeader: 'font-fraunces',
    fontText: 'font-sans',
    color: 'text-black',
    colorPrimary: 'text-emerald-400',
    colorSecondary: 'text-zinc-400',
    bg: 'bg-white',
    btnColor: 'text-white',
    btnBackground: 'bg-emerald-400 hover:bg-green-400 transition-colors',
    marker: 'marker:text-emerald-400',
  },
  birthday: {
    fontHeader: 'font-gabriela',
    fontText: 'font-sans',
    color: 'text-black',
    colorPrimary: 'text-amber-500',
    colorSecondary: 'text-zinc-400',
    bg: 'bg-white',
    btnColor: 'text-white',
    btnBackground: 'bg-amber-500 hover:bg-yellow-400 transition-colors',
    marker: 'marker:text-amber-500',
  },
  romantic: {
    fontHeader: 'font-greatvibes',
    fontText: 'font-sans',
    color: 'text-black',
    colorPrimary: 'text-rose-900',
    colorSecondary: 'text-zinc-400',
    bg: 'bg-white',
    btnColor: 'text-white',
    btnBackground: 'bg-rose-900 hover:bg-pink-600 transition-colors',
    marker: 'marker:text-rose-900',
  },
};
