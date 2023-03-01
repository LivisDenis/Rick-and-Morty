import { caller } from '@/server/routes';
import { Card } from '@/components';
const RootPage = async () => {
  const { response } = await caller.getCharacters();

  return (
    <main className='flex h-full flex-col items-center justify-center'>
      <h1 className='mt-4 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]'>
        Rick <span className='text-[hsl(280,100%,70%)]'>and</span> Morty
      </h1>
      <div className={'mt-6 grid grid-cols-2 gap-x-6 gap-y-4'}>
        {response.map((char) => (
          <Card key={char.id} {...char} />
        ))}
      </div>
    </main>
  );
};

export default RootPage;
