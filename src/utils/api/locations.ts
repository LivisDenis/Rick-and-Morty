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
  const { data } = await api.get<Result<LocationApi>>('/location', { ...config, params });

  return data;
};

interface LocationParams {
  params: {
    id: LocationApi['id'];
  };
  config?: AxiosRequestConfig;
}
export const getLocation = async ({ params, config }: LocationParams) => {
  const { data } = await api.get<LocationApi>(`/location/${params.id}`, { ...config });

  return data;
};

interface LocationMultipleParams {
  params?: {
    multiple?: string | string[];
  };
  filter?: {
    name?: string;
    type?: string;
  };
}

export const getLocationMultiple = async ({ filter, params }: LocationMultipleParams = {}) => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const { data } = await api.get<LocationApi[] | LocationApi>(`/location/${params?.multiple}`, {
    params: filter
  });

  return data;
};
