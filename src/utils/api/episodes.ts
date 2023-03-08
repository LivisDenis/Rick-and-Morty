import type { AxiosRequestConfig } from 'axios';

import { api } from '@/utils/api/api';

export const getEpisodes = async () => {
  const { data } = await api.get<Result<Episode>>('/episode');

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
