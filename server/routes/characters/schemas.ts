import { z } from 'zod';

export const CHARACTER_INPUTS = {
  getCharacter: z.object({ params: z.object({ id: z.number() }) }),
  getCharacterMultiple: z.object({}).optional(),
  getCharacters: z.object({}).optional(),
  getCharactersInfo: z
    .object({
      count: z.number().optional(),
      pages: z.number().optional()
    })
    .optional()
};
