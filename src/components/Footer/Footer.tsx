import GHLogo from '@/assets/gh_logo.png';

export default function Footer() {
  return (
    <footer className="font-sans text-base text-zinc-400 w-full p-4 z-10">
      <ul className="list-none flex flex-row justify-center items-center w-full gap-4">
        <li className="flex flex-row justify-center items-center gap-4">
          My GitHub
          <a href="https://github.com/silvermockingjay">
            <img
              className="w-[24px] h-[24px] object-contain"
              src={GHLogo}
              alt="GitHub logo"
            />
          </a>
        </li>
        <li>2026</li>
      </ul>
    </footer>
  );
}
