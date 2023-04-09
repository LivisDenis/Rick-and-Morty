import { z } from 'zod';

export const GAMES_INPUT = {
  checkCharacterStatus: z.object({
    params: z.object({
      id: z.number(),
      status: z.union([z.literal('alive'), z.literal('dead'), z.literal('unknown')]).optional()
    })
  }),
  createDAUGame: z.object({
    name: z.string(),
    score: z.number(),
    timeOfGame: z.number()
  }),
  getCharacterDAUGame: z.object({ params: z.object({ id: z.number() }) }),
  bestOfPlayersDAUGame: z.object({}).optional()
};
