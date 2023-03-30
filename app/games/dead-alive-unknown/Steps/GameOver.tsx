'use client';

export const GameOver = () => (
  <div className='flex flex-col text-center bg-gray-600 py-9 px-6 rounded-[10px]'>
    <h2 className='text-slate-200 mb-8 font-bold text-[26px]'>Dead or Alive or Unknown</h2>
    <span className='text-slate-400 text-[22px]'>You lose 😢</span>
    <button
      type='button'
      className='mt-6 max-w-[224px] mx-auto text-slate-200 w-full px-4 py-3 bg-green-600 hover:bg-fuchsia-600 rounded-[10px]'
    >
      RESTART
    </button>
  </div>
);
