import type { AxiosRequestConfig, AxiosResponse } from 'axios';

import { api } from '@/utils/api/api';

export const getEpisodes = async () => {
  const response: AxiosResponse<Result<Episode>> = await api.get('/episode');

  return response.data;
};

interface EpisodeParams {
  params: {
    id: Character['id'];
  };
  config?: AxiosRequestConfig;
}
export const getEpisode = async ({ params, config }: EpisodeParams) => {
  const response: AxiosResponse<Episode> = await api.get(`/episode/${params.id}`, { ...config });

  return response.data;
};

interface EpisodeMultipleParams {
  params: {
    multiple?: string | string[];
  };
  filter?: EpisodeFilter;
}

export const getEpisodeMultiple = async ({ filter, params }: EpisodeMultipleParams) => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const response: AxiosResponse<Episode[] | Episode> = await api.get(`/episode/${params?.multiple}`, {
    params: filter
  });

  return response.data;
};
