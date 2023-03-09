import Link from 'next/link';

interface EpisodeCardProps {
  episode: Episode;
}

export const EpisodeCard = ({ episode }: EpisodeCardProps) => {
  return (
    <article className={'w-full max-w-[500px] rounded-[10px] bg-gray-600'}>
      <Link href={`/episodes/${episode.id}`} className={'text-[18px] font-bold text-white'}>
        {episode.episode}: {episode.name}
      </Link>
      <span>{episode.air_date}</span>
    </article>
  );
};
