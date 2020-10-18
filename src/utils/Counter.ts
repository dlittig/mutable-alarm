const MS_RANGE = 20; // 50ms interval * 20 = 1000ms = 1s

export const getMinutes = (value) => {
  const totalMinutes = Math.floor(value / (MS_RANGE * 60));
  return totalMinutes % 60;
};

export const getMilliSeconds = (value) => {
  return (value % MS_RANGE) * 5; // Stretch from 20 to 100
};

export const getSeconds = (value) => {
  const totalSeconds = Math.floor(value / MS_RANGE);
  return totalSeconds % 60;
};

export const getHours = (value) => {
  const totalHours = Math.floor(value / (MS_RANGE * 60 * 60));
  return totalHours;
};

export const getTime = (value) =>
  `H${getHours(value)}:M${getMinutes(value)}:S${getSeconds(
    value
  )}:MS${getMilliSeconds(value)}`;
