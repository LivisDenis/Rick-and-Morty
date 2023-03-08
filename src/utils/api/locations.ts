import type { AxiosRequestConfig } from 'axios';

import { api } from '@/utils/api/api';

export const getLocations = async () => {
  const { data } = await api.get<Result<Episode>>('/location');

  return data;
};

interface LocationParams {
  params: {
    id: Location['id'];
  };
  config?: AxiosRequestConfig;
}
export const getLocation = async ({ params, config }: LocationParams) => {
  const { data } = await api.get<Location>(`/location/${params.id}`, { ...config });

  return data;
};
