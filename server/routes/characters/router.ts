import { CHARACTER_INPUTS } from '@/server/routes/characters/schemas';
import { getCharacterMultiple, getCharacters, getCharacter } from '@/utils/api';

import { trpc, wrapSuccess } from '../../utils';

export const charactersRouter = trpc.router({
  getCharacterMultiple: trpc.procedure
    .input(CHARACTER_INPUTS.getCharacterMultiple)
    .query(async ({ input }) => {
      const characters = await getCharacterMultiple({ ...input });

      if (!Array.isArray(characters)) {
        return wrapSuccess([characters]);
      }

      return wrapSuccess(characters);
    }),
  getCharactersInfo: trpc.procedure.input(CHARACTER_INPUTS.getCharactersInfo).query(async () => {
    const { info } = await getCharacters();

    return wrapSuccess(info);
  }),
  getCharacters: trpc.procedure.input(CHARACTER_INPUTS.getCharacters).query(async ({ input }) => {
    const characters = await getCharacters({ params: { ...input?.filter, ...input?.params } });

    return wrapSuccess(characters);
  }),
  getCharacter: trpc.procedure.input(CHARACTER_INPUTS.getCharacter).query(async ({ input }) => {
    const character = await getCharacter({ params: { id: input.params.id } });

    return wrapSuccess(character);
  })
});
