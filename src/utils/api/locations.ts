import type { AxiosRequestConfig } from 'axios';

import { api } from '@/utils/api/api';

interface LocationsParams {
  params?: {
    page?: number;
    name?: string;
    type?: string;
  };
  config?: AxiosRequestConfig;
}

export const getLocations = async ({ params, config }: LocationsParams = {}) => {
  const { data } = await api.get<Result<Episode>>('/location', { ...config, params });

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
