'use client';

import { useState } from 'react';

import Image from 'next/image';

import { getRandomCharacterId, trpc } from '@/src/utils';

interface GamePlayProps {
  name: string;
}

export const GamePlay = ({ name }: GamePlayProps) => {
  const [gamePoints] = useState({
    score: 0,
    portals: 3
  });
  const [randomId, setRandomId] = useState(getRandomCharacterId());

  const { data } = trpc.getCharacter.useQuery({ params: { id: randomId } });

  return (
    <>
      <div className='flex flex-col w-full bg-gray-600 p-6 rounded-[10px]'>
        <span className='text-slate-200 text-[20px]'>Your name: {name}</span>
        <span className='text-slate-200 mt-2 text-[20px]'>Score: {gamePoints.score}</span>
        <span className='text-slate-200 mt-2 text-[20px]'>Portals: {gamePoints.portals}</span>
      </div>
      <div className='mt-4 w-full max-h-[700px] bg-gray-600 p-7 rounded-[10px]'>
        <h1 className='text-slate-200 text-center mb-9 font-bold text-[26px]'>
          Died or Alive or Unknown
        </h1>
        {data && (
          <>
            <h2 className='text-slate-200 text-center text-[22px]'>{data.response.name}</h2>
            <Image
              src={data.response.image}
              alt={data.response.name}
              width={250}
              height={250}
              className='rounded-[5px] mx-auto mt-3'
            />
          </>
        )}
        <div className='flex flex-col gap-y-4 mt-12'>
          <button
            type='button'
            onClick={() => setRandomId(getRandomCharacterId())}
            className='text-black w-full px-4 py-3 bg-cyan-50 hover:bg-fuchsia-300 rounded-[5px]'
          >
            alive
          </button>
          <button
            type='button'
            className='text-black w-full px-4 py-3 bg-cyan-50 hover:bg-fuchsia-300 rounded-[5px]'
          >
            dead
          </button>
          <button
            type='button'
            className='text-black px-4 w-full py-3 bg-cyan-50 hover:bg-fuchsia-300 rounded-[5px]'
          >
            unknown
          </button>
        </div>
      </div>
    </>
  );
};
