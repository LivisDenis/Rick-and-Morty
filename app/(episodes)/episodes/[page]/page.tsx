import { type Metadata } from 'next';

import { Pagination } from '@/components';
import EpisodeCard from '@/components/cards/EpisodeCard';
import { caller } from '@/server/routes';

export const metadata: Metadata = {
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

  return (
    <section>
      <div className='text-[26px] text-slate-200 font-bold'>
        Total episodes:
        <span className='text-[22px] font-medium text-fuchsia-600'> {pages.response.count}</span>
      </div>
      <Pagination page={+params.page} totalPages={totalPages} changePathname pathname='episodes' />
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
