import { caller } from '@/server/routes';

export const revalidate = 0;

const ResultsPage = async () => {
  const bestOfPlayersResponce = await caller.bestOfPlayersDAUGame();

  const bestOfPlayers = bestOfPlayersResponce.response;

  return (
    <section className='flex flex-col w-full bg-gray-600 p-6 rounded-[10px]'>
      <h2 className='text-slate-200 text-center mb-8 font-bold text-[26px]'>Top players</h2>
      {!bestOfPlayers[0] && (
        <div className='text-slate-400 text-center font-bold pb-6 text-[20px]'>
          Nobody has played yet 😕
        </div>
      )}
      <ul className='flex flex-col'>
        {bestOfPlayers.map((player, i) => (
          <li
            key={player.id}
            className='flex align-bottom justify-between text-[20px] text-slate-200 px-3 py-4 border-2 border-black rounded-[10px]'
          >
            <div className='flex align-bottom gap-x-2'>
              <span className='text-[20px]'>{i + 1}</span>
              <span>{player.name}</span>
            </div>
            <div className='flex gap-x-4'>
              <span>Score: {player.score}</span>
              <span>Time: {player.timeOfGame}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ResultsPage;
