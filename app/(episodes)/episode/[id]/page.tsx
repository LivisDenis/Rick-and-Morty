import { type Metadata } from 'next';

import { CharacterCard } from '@/components';
import { caller } from '@/server/routes';

interface EpisodeProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: EpisodeProps): Promise<Metadata> {
  const { response: episode } = await caller.getEpisode({ params: { id: +params.id } });

  return {
    title: episode.name
  };
}

export async function generateStaticParams() {
  const pagesCount = (await caller.getEpisodesInfo()).response.pages;

  return Array.from({ length: pagesCount }, (_, i) => i + 1).map((page) => ({
    page: page.toString()
  }));
}

const EpisodesPage = async ({ params }: EpisodeProps) => {
  const { response: episode } = await caller.getEpisode({ params: { id: +params.id } });
  const { response: episodeCharacters } = await caller.getCharacterMultiple({
    params: {
      multiple: episode.characters.map((character) =>
        character.replace('https://rickandmortyapi.com/api/character/', '')
      )
    }
  });

  return (
    <section>
      <h1 className='text-[30px] text-slate-200 font-bold'>
        {episode.episode} – {episode.name}
      </h1>
      <div className='mt-10'>
        <div className='text-[26px] text-slate-200 font-bold'>
          Total characters:
          <span className='text-[22px] font-medium text-fuchsia-600'>
            {' '}
            {episodeCharacters.length}
          </span>
        </div>
        <ul className='mt-6 grid grid-cols-2 max-[740px]:grid-cols-1 gap-x-6 gap-y-4'>
          {episodeCharacters.map((character) => (
            <li key={character.id}>
              <CharacterCard {...character} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EpisodesPage;
