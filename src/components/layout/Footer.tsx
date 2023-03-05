import Link from 'next/link';

import { Github, Telegram } from '@/components';

export const Footer = () => {
  return (
    <footer className={'mt-12 flex flex-col items-center pb-6'}>
      <div className={'mt-6 flex gap-3 [&_span]:text-stone-50 [&_span]:text-[12px]'}>
        <span>CHARACTERS: 826</span>
        <span>LOCATIONS: 126</span>
        <span>EPISODES: 51</span>
      </div>
      <ul className={'mt-4 flex gap-3'}>
        <li>
          <Link
              prefetch={false}
              target='_blank'
              href='https://github.com/LivisDenis'
          >
            <Github />
          </Link>
        </li>
        <li>
          <Link
              prefetch={false}
              target='_blank'
              href='https://t.me/champion_planeti'
          >
            <Telegram />
          </Link>
        </li>
      </ul>
      <span className={'text-stone-50 mt-6 text-[12px]'}>❮❯ by Denis Chumachenko 2023</span>
    </footer>
  );
};
