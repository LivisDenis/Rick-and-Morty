import { z } from 'zod';

const LOCATION_FILTER = z
  .object({
    page: z.number().optional(),
    name: z.string().optional(),
    type: z.string().optional()
  })
  .optional();

export const LOCATION_INPUTS = {
  getLocation: z.object({ params: z.object({ id: z.number() }) }),
  getLocations: z
    .object({
      filters: LOCATION_FILTER
    })
    .optional(),
  getLocationMultiple: z
    .object({
      params: z
        .object({
          multiple: z.union([z.string(), z.string().array()])
        })
        .optional()
    })
    .optional(),
  getLocationsInfo: z
    .object({
      count: z.number().optional(),
      pages: z.number().optional(),
      filters: LOCATION_FILTER
    })
    .optional()
};
