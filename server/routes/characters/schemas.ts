import { z } from 'zod';

const CHARACTER_FILTER = z
  .object({
    page: z.number().optional(),
    name: z.string().optional(),
    status: z
      .union([
        z.literal('alive').optional(),
        z.literal('dead').optional(),
        z.literal('unknown').optional()
      ])
      .optional(),
    type: z.string().optional(),
    species: z.string().optional(),
    gender: z
      .union([
        z.literal('female').optional(),
        z.literal('male').optional(),
        z.literal('genderless').optional(),
        z.literal('unknown').optional()
      ])
      .optional()
  })
  .optional();

export const CHARACTER_INPUTS = {
  getCharacter: z.object({ params: z.object({ id: z.number() }) }),
  getCharacterMultiple: z.object({
    multiple: z.union([z.number().array(), z.string()]).optional()
  }),
  getCharacters: z
    .object({
      params: z
        .object({
          page: z.number().optional()
        })
        .optional(),
      filter: CHARACTER_FILTER
    })
    .optional(),
  getCharactersInfo: z
    .object({
      count: z.number().optional(),
      pages: z.number().optional(),
      filter: CHARACTER_FILTER
    })
    .optional()
};
