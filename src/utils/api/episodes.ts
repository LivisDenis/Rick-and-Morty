import type { AxiosRequestConfig } from 'axios';

import { api } from '@/utils/api/api';

interface EpisodesParams {
  params?: {
    page?: number;
  };
  config?: AxiosRequestConfig;
}

export const getEpisodes = async ({ params, config }: EpisodesParams = {}) => {
  const { data } = await api.get<Result<Episode>>('/episode', { ...config, params });

  return data;
};

interface EpisodeParams {
  params: {
    id: Character['id'];
  };
  config?: AxiosRequestConfig;
}
export const getEpisode = async ({ params, config }: EpisodeParams) => {
  const { data } = await api.get<Episode>(`/episode/${params.id}`, { ...config });

  return data;
};

interface EpisodeMultipleParams {
  params: {
    multiple?: string | string[];
  };
  filter?: EpisodeFilter;
}

export const getEpisodeMultiple = async ({ filter, params }: EpisodeMultipleParams) => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const { data } = await api.get<Episode[] | Episode>(`/episode/${params?.multiple}`, {
    params: filter
  });

  return data;
};
