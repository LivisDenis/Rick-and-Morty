export const getTime = (time: number) => {
  const date = new Date(time);

  const min = date.getMinutes();
  const sec = date.getSeconds();
  const ms = String(date.getMilliseconds()).slice(0, 2);

  const fullTime = min > 0 ? `${min}m ${sec}s` : `${sec}s ${ms}ms`;

  return {
    min,
    sec,
    ms,
    fullTime
  };
};
