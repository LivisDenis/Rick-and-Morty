import { CHARACTER_INPUTS } from '@/server/routes/characters/schemas';
import { getCharacterMultiple, getCharacters, getCharacter } from '@/utils/api';

import { trpc, wrapSuccess } from '../../utils';

export const charactersRouter = trpc.router({
  getCharacterMultiple: trpc.procedure
    .input(CHARACTER_INPUTS.getCharacterMultiple)
    .query(async ({input}) => {
      const character = await getCharacterMultiple({ ...input });

      return wrapSuccess(character);
    }),
  getCharactersInfo: trpc.procedure.input(CHARACTER_INPUTS.getCharactersInfo).query(async () => {
    const { info } = await getCharacters();

    return wrapSuccess(info);
  }),
  getCharacters: trpc.procedure.input(CHARACTER_INPUTS.getCharacters).query(async () => {
    const characters = await getCharacters();

    return wrapSuccess(characters);
  }),
  getCharacter: trpc.procedure.input(CHARACTER_INPUTS.getCharacter).query(async ({ input }) => {
    const character = await getCharacter({ params: { id: input.params.id } });

    return wrapSuccess(character);
  })
});
