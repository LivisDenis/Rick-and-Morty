import Link from 'next/link';

import { ROUTES } from '@/src/utils';

import { Logo } from '../icons';

const navLinks = [
  { href: ROUTES.GAMES, link: 'Games' },
  { href: ROUTES.CHARACTERS, link: 'Characters' },
  { href: ROUTES.EPISODES, link: 'Episodes' },
  { href: ROUTES.LOCATIONS, link: 'Locations' }
];
export const Header = () => (
  <header className='mx-auto flex w-[100%] items-center justify-between py-3'>
    <Link href={ROUTES.ROOT}>
      <Logo />
    </Link>
    <nav>
      <ul className='flex text-[14px] text-slate-400'>
        {navLinks.map(({ link, href }) => (
          <li key={href} className='ml-4'>
            <Link href={href}>{link}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
