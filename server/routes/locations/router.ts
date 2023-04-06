import { getLocations, getLocation } from '@/utils/api';

import { trpc, wrapSuccess } from '../../utils';
import { LOCATION_INPUTS } from './schemas';

export const locationsRouter = trpc.router({
  getLocationsInfo: trpc.procedure.input(LOCATION_INPUTS.getLocationsInfo).query(async () => {
    const { info } = await getLocations();

    return wrapSuccess(info);
  }),
  getLocations: trpc.procedure.input(LOCATION_INPUTS.getLocations).query(async ({ input }) => {
    const locations = await getLocations({ params: { ...input?.filters } });

    return wrapSuccess(locations);
  }),
  getLocation: trpc.procedure.input(LOCATION_INPUTS.getLocation).query(async ({ input }) => {
    const location = await getLocation({ params: { id: input.params.id } });

    return wrapSuccess(location);
  })
});
