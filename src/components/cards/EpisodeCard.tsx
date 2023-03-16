interface EpisodeCardProps {
  episode: Episode;
}

export const EpisodeCard = ({ episode }: EpisodeCardProps) => (
  <article className='w-full flex flex-col max-w-[500px] rounded-[10px] bg-gray-600 p-6'>
    <div className='text-[18px] font-bold text-white'>
      {episode.episode}: {episode.name}
    </div>
    <span className='mt-3'>{episode.air_date}</span>
  </article>
);

export default EpisodeCard;
