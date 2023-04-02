interface GameState {
  name: string;
  status: 'not-started' | 'started' | 'game-over';
  startTime: number;
}

interface ResultGame {
  name: string;
  score: number;
  timeOfGame: number;
}
