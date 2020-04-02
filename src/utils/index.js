export const getCurrentTime = date => {
  if (typeof date === "string") date = new Date(date)

  let time = ``;

  if (date.getHours() < 10) {
    time = `0${date.getHours()}:`;
  } else {
    time = `${date.getHours()}:`;
  }

  if (date.getMinutes() < 10) {
    time += `0${date.getMinutes()}`;
  } else {
    time += `${date.getMinutes()}`;
  }

  return time;
};
