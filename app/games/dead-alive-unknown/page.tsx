'use client';

import { useState } from 'react';

import { GameOver } from './Steps/GameOver';
import { GamePlay } from './Steps/GamePlay';
import { GameRegister } from './Steps/GameRegister';

const INITIAL_GAME_STATE = {
  name: '',
  startTime: 0,
  status: 'not-started'
} as const;

const DeadAliveUnknown = () => {
  const [gameState, setGameState] = useState<GameState>(INITIAL_GAME_STATE);
  const [resultGame, setResultGame] = useState<ResultGame>({
    name: '',
    score: 0,
    timeOfGame: 0
  });

  return (
    <>
      {gameState.status === 'not-started' && (
        <GameRegister
          next={({ name }) =>
            setGameState({
              ...gameState,
              name,
              startTime: new Date().valueOf(),
              status: 'started'
            })
          }
        />
      )}
      {gameState.status === 'started' && (
        <GamePlay
          game={gameState}
          resultGame={(result) =>
            setResultGame({
              name: result.name,
              score: result.score,
              timeOfGame: result.timeOfGame
            })
          }
          next={() =>
            setGameState({
              ...gameState,
              status: 'game-over'
            })
          }
        />
      )}
      {gameState.status === 'game-over' && (
        <GameOver resultGame={resultGame} restart={() => setGameState(INITIAL_GAME_STATE)} />
      )}
    </>
  );
};

export default DeadAliveUnknown;
