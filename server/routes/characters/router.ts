import { procedure, trpc, wrapSuccess } from '../../utils';
import { getCharacter } from '@/utils/api';
import { z } from 'zod';

export const charactersRouter = trpc.router({
  getCharacters: procedure
    .input(
      z
        .object({
          text: z.string().optional()
        })
        .optional()
    )
    .query(async () => {
      const character = await getCharacter();

      return wrapSuccess(character);
    })
});
