import Link from 'next/link';

import { ROUTES } from '@/src/utils';

export const metadata = {
  title: '🔫 Games',
  description: 'Omg morty ?'
};

const gamesList = [
  {
    titleGame: 'Dead or Alive or Unknown',
    tagline: 'Who or What is died or alive or unknown',
    link: ROUTES.DEAD_ALIVE_UNKNOWN
  }
];

const Games = () => (
  <div className='grid grid-cols-2 max-[740px]:grid-cols-1 gap-x-6 gap-y-4'>
    {gamesList.map((game) => (
      <Link key={game.link} href={`${ROUTES.GAMES}/${game.link}`}>
        <div className='w-full transition ease-out duration-150 flex flex-col max-w-[500px] hover:scale-105 rounded-[10px] bg-gray-600 p-8'>
          <div className='text-[24px] font-bold text-slate-200'>{game.titleGame}</div>
          <span className='mt-3 text-slate-400 text-[18px]'>{game.tagline}</span>
        </div>
      </Link>
    ))}
  </div>
);

export default Games;
