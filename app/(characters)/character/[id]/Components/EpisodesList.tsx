'use client';

import EpisodeCard from '@/components/cards/EpisodeCard';
import SkeletonEpisodeCard from '@/components/skeletons/SkeletonEpisodeCard';
import { trpc } from '@/src/utils';

export const EpisodesList = ({ episodesLink }: { episodesLink: string[] }) => {
  const { data, isLoading } = trpc.getEpisodeMultiple.useQuery({
    params: {
      multiple: episodesLink.map((episode) =>
        episode.replace('https://rickandmortyapi.com/api/episode/', '')
      )
    }
  });

  return (
    <ul className='grid grid-cols-2 max-[740px]:grid-cols-1 gap-x-6 gap-y-4'>
      {isLoading && Array.from({ length: 6 }).map((_, i) => <SkeletonEpisodeCard key={i} />)}
      {!isLoading &&
        data?.response.map((episode) => (
          <li key={episode.id}>
            <EpisodeCard episode={episode} />
          </li>
        ))}
    </ul>
  );
};
