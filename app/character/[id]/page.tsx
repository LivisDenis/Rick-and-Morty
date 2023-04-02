import { type Metadata } from 'next';
import Image from 'next/image';

import { caller } from '@/server/routes';

import { CharacterInfo } from './Components/CharacterInfo';
import { EpisodesList } from './Components/EpisodesList';

export async function generateMetadata({ params }: CharacterProps): Promise<Metadata> {
  const { response: character } = await caller.getCharacter({ params: { id: +params.id } });

  return {
    title: character.name
  };
}

export async function generateStaticParams() {
  const charactersCount = (await caller.getCharactersInfo()).response.count;

  return Array.from({ length: charactersCount }, (_, i) => i + 1).map((id) => ({
    id: id.toString()
  }));
}

interface CharacterProps {
  params: {
    id: string;
  };
}
// export const revalidate = 0;
export const dynamic = 'force-dynamic';

const Character = async ({ params }: CharacterProps) => {
  const response = await caller.getCharacter({ params: { id: +params.id } });

  const character = response.response;

  return (
    <section>
      <h1 className='text-slate-200 text-[46px]'>{character.name}</h1>
      <div className='mt-4 flex'>
        <Image
          src={character.image}
          alt={character.name}
          width={250}
          height={250}
          className='rounded-[15px]'
        />
        <CharacterInfo {...character} />
      </div>
      <div>
        <h2 className='text-[38px] text-slate-200 font-bold mt-12 mb-7'>Episodes</h2>
        <EpisodesList episodesLink={character.episode} />
      </div>
    </section>
  );
};

export default Character;
