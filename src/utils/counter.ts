const MS_RANGE = 20; // 50ms interval * 20 = 1000ms = 1s

export const fill = (value) => {
  if (value < 10) {
    return `0${value}`;
  } else return value;
};

export const getMinutes = (value, raw = false) => {
  const totalMinutes = Math.floor(value / (MS_RANGE * 60));
  return raw ? totalMinutes % 60 : fill(totalMinutes % 60);
};

export const getMilliSeconds = (value, raw = false) => {
  const totalMilliseconds = (value % MS_RANGE) * 5
  return raw ? totalMilliseconds : fill(totalMilliseconds); // Stretch from 20 to 100
};

export const getSeconds = (value, raw = false) => {
  const totalSeconds = Math.floor(value / MS_RANGE);
  return raw ? totalSeconds % 60 : fill(totalSeconds % 60);
};

export const getHours = (value, raw = false) => {
  const totalHours = Math.floor(value / (MS_RANGE * 60 * 60));
  return raw ? totalHours : fill(totalHours);
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

export const getTimeData = (value, raw = false) => ({
  hours: getHours(value, raw),
  minutes: getMinutes(value, raw),
  seconds: getSeconds(value, raw),
  milliseconds: getMilliSeconds(value, raw),
});
