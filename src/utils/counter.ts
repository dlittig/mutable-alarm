const MS_RANGE = 20; // 50ms interval * 20 = 1000ms = 1s

const fill = (value) => {
  if (value < 10) {
    return `0${value}`;
  } else return value;
};

export const getMinutes = (value) => {
  const totalMinutes = Math.floor(value / (MS_RANGE * 60));
  return fill(totalMinutes % 60);
};

export const getMilliSeconds = (value) => {
  return fill((value % MS_RANGE) * 5); // Stretch from 20 to 100
};

export const getSeconds = (value) => {
  const totalSeconds = Math.floor(value / MS_RANGE);
  return fill(totalSeconds % 60);
};

export const getHours = (value) => {
  const totalHours = Math.floor(value / (MS_RANGE * 60 * 60));
  return fill(totalHours);
};

export const getTime = (value) =>
  `${getHours(value)}:${getMinutes(value)}:${getSeconds(
    value
  )}.${getMilliSeconds(value)}`;

export const timeDataToCounter = ({ hours, minutes, seconds }) => {
  return (
    hours * (MS_RANGE * 60 * 60) +
    minutes * (MS_RANGE * 60) +
    seconds * MS_RANGE
  );
};

export const getTimeData = (value) => ({
  hours: getHours(value),
  minutes: getMinutes(value),
  seconds: getSeconds(value),
  milliseconds: getMilliSeconds(value),
});
