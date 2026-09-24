import { Link, NavLink } from 'react-router';
import { links } from '@/utils/links';
import { clsx } from 'clsx';

export default function Header() {
  return (
    <header className="flex flex-row justify-center items-center w-full font-fraunces text-lg text-black p-4 z-10">
      <nav className="flex flex-row items-center justify-end gap-4 w-5/6">
        <Link to="/" className="mr-auto">
          Invity
        </Link>
        {links.map((link) => (
          <NavLink
            to={link.to}
            key={link.text}
            className={({ isActive, isPending }) =>
              clsx(
                'relative pb-1 after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-gradient-to-r after:from-pink-400 after:to-amber-200 after:transition-[width] after:duration-300 after:ease-out hover:after:w-full',
                isActive ? 'after:w-full' : 'after:w-0',
                isPending ? 'text-zinc-500' : 'text-black'
              )
            }
          >
            {link.text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
