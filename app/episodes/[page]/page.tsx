import Link from 'next/link';

import EpisodeCard from '@/components/cards/EpisodeCard';
import { caller } from '@/server/routes';

export const metadata = {
  title: '🔫 Episodes',
  description: 'Omg morty ?'
};

export async function generateStaticParams() {
  const pagesCount = (await caller.getEpisodesInfo()).response.pages;

  return Array.from({ length: pagesCount }, (_, i) => i + 1).map((page) => ({
    page: page.toString()
  }));
}

interface EpisodesProps {
  params: {
    page: string;
  };
}

const EpisodesPage = async ({ params }: EpisodesProps) => {
  const pages = await caller.getEpisodesInfo();

  const episodes = await caller.getEpisodes({ params: { page: +params.page } });

  const totalPages = pages.response.pages;

  const disabledNext =
    +params.page >= totalPages ? 'pointer-events-none [&_div]:bg-gray-400' : 'pointer-events-auto';
  const disabledPrev =
    +params.page <= 0 ? 'pointer-events-none [&_div]:bg-gray-400' : 'pointer-events-auto';

  return (
    <section>
      <div className='text-[26px] text-slate-200 font-bold'>
        Total episodes:
        <span className='text-[22px] font-medium text-fuchsia-600'> {pages.response.count}</span>
      </div>
      <div className='mt-4 flex justify-center'>
        <Link className={disabledPrev} href={`episodes/${+params.page - 1}`}>
          <div className='text-black px-4 py-3 bg-cyan-500 rounded-[5px] hover:bg-red-600 hover:text-slate-200'>
            PREV
          </div>
        </Link>
        <Link className={disabledNext} href={`episodes/${+params.page + 1}`}>
          <div className='ml-4 text-black px-4 py-3 bg-cyan-500 rounded-[5px] hover:bg-red-600 hover:text-slate-200'>
            NEXT
          </div>
        </Link>
      </div>
      <ul className='mt-6 grid grid-cols-2 max-[740px]:grid-cols-1 gap-x-6 gap-y-4'>
        {episodes.response.results.map((episode) => (
          <li key={episode.id}>
            <EpisodeCard episode={episode} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EpisodesPage;
