import { getCharacter } from '@/utils/api';

import { prisma, trpc, wrapSuccess } from '../../utils';
import { GAMES_INPUT } from './schemas';

export const gameRouter = trpc.router({
  createDAUGame: trpc.procedure.input(GAMES_INPUT.createDAUGame).mutation(async ({ input }) => {
    await prisma.deadAliveUnknownGame.create({
      data: {
        name: input.name,
        timeOfGame: input.timeOfGame.toString(),
        score: input.score
      }
    });

    return wrapSuccess('Game created');
  }),

  getCharacterDAUGame: trpc.procedure
    .input(GAMES_INPUT.getCharacterDAUGame)
    .query(async ({ input }) => {
      const characterResponse = await getCharacter({ params: { id: input.params.id } });

      const character = {
        name: characterResponse.name,
        status: characterResponse.status,
        image: characterResponse.image
      };

      return wrapSuccess(character);
    }),

  checkCharacterStatus: trpc.procedure
    .input(GAMES_INPUT.checkCharacterStatus)
    .mutation(async ({ input }) => {
      const characterResponse = await getCharacter({ params: { id: input.params.id } });

      if (characterResponse.status.toLowerCase() === input.params.status) {
        return wrapSuccess(true);
      }
      return wrapSuccess(false);
    }),

  bestOfPlayersDAUGame: trpc.procedure.input(GAMES_INPUT.bestOfPlayersDAUGame).query(async () => {
    const bestOfPlayers = await prisma.deadAliveUnknownGame.findMany({
      orderBy: {
        score: 'desc'
      },
      take: 7
    });

    return wrapSuccess(bestOfPlayers);
  })
});
