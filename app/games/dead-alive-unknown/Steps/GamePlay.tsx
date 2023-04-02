'use client';

import { useState } from 'react';

import Image from 'next/image';

import { getRandomCharacterId, trpc } from '@/src/utils';

import SkeletonDAUGame from '../ui/SkeletonDAUGame';

interface GamePlayProps {
  game: GameState;
  resultGame: ({ timeOfGame, score, name }: ResultGame) => void;
  next: () => void;
}

export const GamePlay = ({ game, resultGame, next }: GamePlayProps) => {
  const [score, setScore] = useState(0);
  const [portals, setPortals] = useState(3);
  const [randomId, setRandomId] = useState(getRandomCharacterId());

  const { data, isLoading, isSuccess } = trpc.getCharacterDAUGame.useQuery({
    params: { id: randomId }
  });

  const checkedStatusMutation = trpc.checkCharacterStatus.useMutation();
  const createGameMutation = trpc.createDAUGame.useMutation();

  const onOptionButton = async (answer: Character['status']) => {
    const checkedStatus = await checkedStatusMutation.mutateAsync({
      params: { id: randomId, status: answer }
    });

    const scoreUpdate = score + (checkedStatus.response ? 1 : 0);
    const portalsUpdate = portals + (checkedStatus.response ? 0 : -1);

    setScore(scoreUpdate);
    setPortals(portalsUpdate);

    setRandomId(getRandomCharacterId());

    if (portals === 0) {
      const finalResults = {
        name: game.name,
        score,
        timeOfGame: new Date().valueOf() - game.startTime
      };

      createGameMutation.mutate(finalResults);

      resultGame(finalResults);
      return next();
    }
  };

  return (
    <>
      <div className='flex flex-col w-full bg-gray-600 p-6 rounded-[10px]'>
        <span className='text-slate-200 text-[20px]'>Your name: {game.name}</span>
        <span className='text-slate-200 mt-2 text-[20px]'>Score: {score}</span>
        <span className='text-slate-200 mt-2 text-[20px]'>Portals: {portals}</span>
      </div>
      <div className='mt-4 w-full max-h-[700px] bg-gray-600 p-7 rounded-[10px]'>
        <h1 className='text-slate-200 text-center mb-9 font-bold text-[26px]'>
          Died or Alive or Unknown
        </h1>
        <div>
          {isLoading && <SkeletonDAUGame />}
          {isSuccess && (
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
        </div>
        <div className='flex flex-col gap-y-4 mt-12'>
          <button
            type='button'
            onClick={() => onOptionButton('alive')}
            className='text-black w-full px-4 py-3 bg-cyan-50 hover:bg-fuchsia-300 rounded-[5px]'
          >
            alive
          </button>
          <button
            type='button'
            onClick={() => onOptionButton('dead')}
            className='text-black w-full px-4 py-3 bg-cyan-50 hover:bg-fuchsia-300 rounded-[5px]'
          >
            dead
          </button>
          <button
            type='button'
            onClick={() => onOptionButton('unknown')}
            className='text-black px-4 w-full py-3 bg-cyan-50 hover:bg-fuchsia-300 rounded-[5px]'
          >
            unknown
          </button>
        </div>
      </div>
    </>
  );
};
