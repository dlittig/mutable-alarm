export const getMinutes = (value) => {
  const totalMinutes = Math.floor(value / (10 * 60));
  return totalMinutes % 60;
};

export const getMilliSeconds = (value) => {
  return `${value % 10}0`;
};

export const getSeconds = (value) => {
  const totalSeconds = Math.floor(value / 10);
  return totalSeconds % 60;
};

export const getHours = (value) => {
  const totalHours = Math.floor(value / (10 * 60 * 60));
  return totalHours;
};

export const getTime = (value) =>
  `H${getHours(value)}:M${getMinutes(value)}:S${getSeconds(
    value
  )}:MS${getMilliSeconds(value)}`;
