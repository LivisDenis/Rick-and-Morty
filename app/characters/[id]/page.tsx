import Image from 'next/image';

import { caller } from '@/server/routes';

export async function generateMetadata({ params }: CharacterProps) {
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
      <h1 className={'text-slate-200 text-[46px]'}>{character.name}</h1>
      <div className={'mt-4 flex'}>
        <Image src={character.image} alt={character.name} width={250} height={250} />
        <ul className={'ml-7 flex flex-col [&_li]:text-slate-200 [&_li]:text-[20px] [&_li]:mb-2'}>
          <li>
            Species: <span className={'text-[hsl(280,100%,70%)]'}>{character.species}</span>
          </li>
          <li>
            Gender: <span className={'text-[hsl(280,100%,70%)]'}>{character.gender}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Character;
