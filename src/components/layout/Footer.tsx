import Link from 'next/link';

import { Github, Telegram } from '@/components';
import { caller } from '@/server/routes';

export const Footer = async () => {
  const [charactersCount, locationsCount, episodesCount] = await Promise.all([
    (await caller.getCharactersInfo()).response.count,
    (await caller.getLocationsInfo()).response.count,
    (await caller.getEpisodesInfo()).response.count
  ]);

  return (
    <footer className={'mt-12 flex flex-col items-center pb-6'}>
      <div className={'mt-6 flex gap-3 [&_span]:text-stone-50 [&_span]:text-[12px]'}>
        <span>CHARACTERS: {charactersCount}</span>
        <span>LOCATIONS: {locationsCount}</span>
        <span>EPISODES: {episodesCount}</span>
      </div>
      <Link
        prefetch={false}
        target='_blank'
        href={'https://github.com/LivisDenis/Rick-and-Morty'}
        className={'text-stone-50 mt-4'}
      >
        Github Repository
      </Link>
      <ul className={'mt-4 flex gap-3'}>
        <li>
          <Link prefetch={false} target='_blank' href='https://github.com/LivisDenis'>
            <Github />
          </Link>
        </li>
        <li>
          <Link prefetch={false} target='_blank' href='https://t.me/champion_planeti'>
            <Telegram />
          </Link>
        </li>
      </ul>
      <span className={'text-stone-50 mt-6 text-[12px]'}>❮❯ by Denis Chumachenko 2023</span>
    </footer>
  );
};

export default Footer;
