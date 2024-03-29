'use client';

import { useState } from 'react';

import Link from 'next/link';

import Button from '@/components/ui/Button';
import { ROUTES } from '@/src/utils';

interface GameRegisterProps {
  next: (name: string) => void;
}

interface NameFields {
  value: string;
  error: string;
}

export const GameRegister = ({ next }: GameRegisterProps) => {
  const [name, setName] = useState<NameFields>({
    value: '',
    error: ''
  });

  const onRegisterGame = () => {
    if (!name.value) {
      setName({ ...name, error: 'Field required' });
    } else {
      next(name.value);
    }
  };

  const borderError = name.error ? 'border-red-600' : 'border-slate-400';

  return (
    <>
      <div className='flex flex-col text-center bg-gray-600 py-9 px-6 rounded-[10px]'>
        <h2 className='text-slate-200 mb-8 font-bold text-[26px]'>Dead or Alive or Unknown</h2>
        <div className='flex flex-col gap-y-3 max-w-[224px] mx-auto'>
          <span className='text-slate-400 text-[18px]'>Write your name</span>
          <input
            type='text'
            value={name.value}
            onChange={(e) => setName({ ...name, value: e.target.value })}
            className={`px-3 mb-3 py-2 text-[18px] max-w-[250px] mx-auto bg-transparent border-2 ${borderError} rounded-[10px] text-slate-200`}
          />
          <Button full bg='green' onClick={onRegisterGame}>
            START
          </Button>
        </div>
      </div>
      <div className='flex mt-4 flex-col w-full bg-gray-600 p-6 rounded-[10px]'>
        <Link href={`games/${ROUTES.DEAD_ALIVE_UNKNOWN}/results`}>
          <Button full bg='white'>
            Results
          </Button>
        </Link>
      </div>
    </>
  );
};
