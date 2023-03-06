export const getRandomCharactersId = (length: number, count: number) =>
  Array.from({ length }, () => Math.ceil(Math.random() * count));
