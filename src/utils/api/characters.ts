import type { AxiosRequestConfig } from 'axios';

import { api } from '@/utils/api/api';

interface CharacterMultipleParams {
  params?: CharacterFilter;
  multiple?: number[];
}

export const getCharacterMultiple = async ({ multiple }: CharacterMultipleParams) => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const { data } = await api.get<Character[]>(`/character/${multiple}`);

  return data;
};

export const getCharacters = async () => {
  const { data } = await api.get<Result<Character>>('/character');

  return data;
};

interface CharacterParams {
  params: {
    id: Character['id'];
  };
  config?: AxiosRequestConfig;
}
export const getCharacter = async ({ params, config }: CharacterParams) => {
  const { data } = await api.get<Character>(`/character/${params.id}`, { ...config });

  return data;
};
