'use client';

import Link from 'next/link';

import {trpc} from "@/src/utils";
import SkeletonCard from "@/components/skeletons/SkeletonCard";

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
      {isLoading && Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
      {!isLoading &&
        data?.response.map((episode) => (
          <li key={episode.id}>
            <article className='w-full flex flex-col max-w-[500px] rounded-[10px] bg-gray-600 p-6'>
              <Link href={`/episodes/${episode.id}`} className='text-[18px] font-bold text-white'>
                {episode.episode}: {episode.name}
              </Link>
              <span className='mt-3'>{episode.air_date}</span>
            </article>
          </li>
        ))}
    </ul>
  );
};
