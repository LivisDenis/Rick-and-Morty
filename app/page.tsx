import { Card } from '@/components';
import { caller } from '@/server/routes';

export const metadata = {
  title: '🔫 Rick and Morty app',
  description: 'Omg morty ?'
};

const RootPage = async () => {
  const { response } = await caller.getCharacterMultiple();

  return (
    <section className='flex h-full flex-col items-center justify-center'>
      <h1 className='mt-4 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]'>
        Rick <span className='text-[hsl(280,100%,70%)]'>and</span> Morty
      </h1>
      <div className={'mt-16 grid grid-cols-2 gap-x-6 gap-y-4'}>
        {response.map((char) => (
          <Card key={char.id} {...char} />
        ))}
      </div>
    </section>
  );
};

export default RootPage;
