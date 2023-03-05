import { CHARACTER_INPUTS } from '@/server/routes/characters/schemas';
import { getCharacterMultiple } from '@/utils/api';

import { trpc, wrapSuccess } from '../../utils';

export const charactersRouter = trpc.router({
  getCharacterMultiple: trpc.procedure
    .input(CHARACTER_INPUTS.getCharacterMultiple)
    .query(async () => {
      const character = await getCharacterMultiple();

      return wrapSuccess(character);
    }),
  getCharactersInfo: trpc.procedure.input(CHARACTER_INPUTS.getCharactersInfo).query(async () => {
    const character = await getCharacterMultiple();

    return wrapSuccess(character);
  })
});
