'use client';

interface GameOverProps {
  resultGame: ResultGame;
  restart: () => void;
}

export const GameOver = ({ resultGame, restart }: GameOverProps) => {
  const date = new Date(resultGame.timeOfGame);
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const ms = date.getMilliseconds();

  const timeOfGame = min > 0 ? `${min}m ${sec}s` : `${sec}s ${ms}ms`;

  return (
    <>
      <div className='flex flex-col w-full bg-gray-600 p-6 rounded-[10px]'>
        <span className='text-slate-200 text-[20px]'>Name: {resultGame.name}</span>
        <span className='text-slate-200 mt-2 text-[20px]'>Score: {resultGame.score}</span>
        <span className='text-slate-200 mt-2 text-[20px]'>Time of game: {timeOfGame}</span>
      </div>
      <div className='flex flex-col mt-4 text-center bg-gray-600 py-9 px-6 rounded-[10px]'>
        <h2 className='text-slate-200 mb-8 font-bold text-[26px]'>Dead or Alive or Unknown</h2>
        <span className='text-slate-400 text-[22px]'>You lose 😢</span>
        <button
          type='button'
          onClick={() => restart()}
          className='mt-6 max-w-[224px] mx-auto text-slate-200 w-full px-4 py-3 bg-green-600 hover:bg-fuchsia-600 rounded-[10px]'
        >
          RESTART
        </button>
      </div>
    </>
  );
};
