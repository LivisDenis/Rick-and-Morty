import { z } from 'zod';

export const EPISODES_INPUTS = {
  getEpisode: z.object({ params: z.object({ id: z.number() }) }),
  getEpisodes: z.object({}).optional(),
  getEpisodesInfo: z
    .object({
      count: z.number().optional(),
      pages: z.number().optional()
    })
    .optional()
};
