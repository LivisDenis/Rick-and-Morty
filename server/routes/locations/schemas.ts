import { z } from 'zod';

export const LOCATIONS_INPUTS = {
  getLocation: z.object({ params: z.object({ id: z.number() }) }),
  getLocations: z.object({}).optional(),
  getLocationsInfo: z
    .object({
      count: z.number().optional(),
      pages: z.number().optional()
    })
    .optional()
};
