'use client';

import { useState } from 'react';

import { GameOver } from './Steps/GameOver';
import { GamePlay } from './Steps/GamePlay';
import { GameRegister } from './Steps/GameRegister';

interface GameState {
  name: string;
  startTime: number;
  status: 'not-started' | 'started' | 'game-over';
}

const INITIAL_GAME_STATE = {
  name: '',
  startTime: 0,
  status: 'not-started'
} as const;

const DeadAliveUnknown = () => {
  const [gameState, setGameState] = useState<GameState>(INITIAL_GAME_STATE);

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
      {gameState.status === 'started' && <GamePlay name={gameState.name} />}
      {gameState.status === 'game-over' && <GameOver />}
    </>
  );
};

export default DeadAliveUnknown;
