import { getLocations, getLocation, getLocationMultiple } from '@/utils/api';

import { trpc, wrapSuccess } from '../../utils';
import { LOCATION_INPUTS } from './schemas';

export const locationsRouter = trpc.router({
  getLocationsInfo: trpc.procedure
    .input(LOCATION_INPUTS.getLocationsInfo)
    .query(async ({ input }) => {
      const { info } = await getLocations({ params: { ...input?.filters } });

      return wrapSuccess(info);
    }),
  getLocations: trpc.procedure.input(LOCATION_INPUTS.getLocations).query(async ({ input }) => {
    const locations = await getLocations({ params: { ...input?.filters } });

    return wrapSuccess(locations);
  }),
  getLocationMultiple: trpc.procedure
    .input(LOCATION_INPUTS.getLocationMultiple)
    .query(async ({ input }) => {
      const episodes = await getLocationMultiple({ params: { multiple: input?.params?.multiple } });

      if (!Array.isArray(episodes)) {
        return wrapSuccess([episodes]);
      }

      return wrapSuccess(episodes);
    }),
  getLocation: trpc.procedure.input(LOCATION_INPUTS.getLocation).query(async ({ input }) => {
    const location = await getLocation({ params: { id: input.params.id } });

    return wrapSuccess(location);
  })
});
