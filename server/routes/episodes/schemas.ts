import { z } from 'zod';

export const EPISODES_INPUTS = {
  getEpisode: z.object({ params: z.object({ id: z.number() }) }),
  getEpisodes: z
    .object({
      params: z
        .object({
          page: z.number().optional()
        })
        .optional()
    })
    .optional(),
  getEpisodeMultiple: z
    .object({
      params: z
        .object({
          multiple: z.union([z.string(), z.string().array()])
        })
        .optional()
    })
    .optional(),
  getEpisodesInfo: z
    .object({
      count: z.number().optional(),
      pages: z.number().optional()
    })
    .optional()
};
