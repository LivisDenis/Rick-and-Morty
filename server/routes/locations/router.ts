import { LOCATIONS_INPUTS } from '@/server/routes/locations/schemas';
import { getLocations, getLocation } from '@/utils/api';

import { trpc, wrapSuccess } from '../../utils';

export const locationsRouter = trpc.router({
  getLocationsInfo: trpc.procedure.input(LOCATIONS_INPUTS.getLocationsInfo).query(async () => {
    const { info } = await getLocations();

    return wrapSuccess(info);
  }),
  getLocations: trpc.procedure.input(LOCATIONS_INPUTS.getLocations).query(async () => {
    const locations = await getLocations();

    return wrapSuccess(locations);
  }),
  getLocation: trpc.procedure.input(LOCATIONS_INPUTS.getLocation).query(async ({ input }) => {
    const location = await getLocation({ params: { id: input.params.id } });

    return wrapSuccess(location);
  })
});
