import { CharacterCard } from '@/components';
import { caller } from '@/server/routes';
import { getRandomCharactersId } from '@/src/utils';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

const RootPage = async () => {
  const multiple = getRandomCharactersId(6, 826);

  const { response } = await caller.getCharacterMultiple({ params: { multiple } });

  return (
    <section className='flex h-full flex-col items-center justify-center'>
      <h1 className='mt-4 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]'>
        Rick <span className='text-[hsl(280,100%,70%)]'>and</span> Morty
      </h1>
      <div className='mt-16 grid grid-cols-2 max-[740px]:grid-cols-1 gap-x-6 gap-y-4'>
        {response.map((char) => (
          <div className='transition ease-out duration-150 hover:scale-105'>
            <CharacterCard key={char.id} {...char} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RootPage;
