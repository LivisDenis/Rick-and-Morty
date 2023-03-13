import type { AxiosRequestConfig } from 'axios';

import { api } from '@/utils/api/api';

interface CharacterMultipleParams {
  params?: CharacterFilter;
  multiple?: number[] | string;
}

export const getCharacterMultiple = async ({ multiple = '', params }: CharacterMultipleParams) => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const { data } = await api.get<Character | Character[]>(`/character/${multiple}`, {
    params
  });

  return data;
};

interface CharactersParams {
  params?: CharacterFilter;
  config?: AxiosRequestConfig;
}

export const getCharacters = async ({ params, config }: CharactersParams = {}) => {
  const { data } = await api.get<Result<Character>>(`/character`, { ...config, params });

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
