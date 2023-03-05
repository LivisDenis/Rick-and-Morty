import { api } from '@/utils/api/api';

interface CharacterParams {
  params: any;
}

export const getCharacterMultiple = async () => {
  const { data } = await api.get<Character[]>('character/1,2,3,4,5,6');

  return data;
};

export const getCharacters = async () => {
  const { data } = await api.get<Result<Character>>('character');

  return data;
};
export const getCharactersInfo = async () => {
  const { data } = await api.get<Result<Character>>('character');

  return data;
};
