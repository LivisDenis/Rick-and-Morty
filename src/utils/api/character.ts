import { api } from '@/utils/api/api';

export const getCharacter = async () => {
  const { data } = await api.get<Character[]>('character/1,2,3,4,5,6');

  return data;
};
