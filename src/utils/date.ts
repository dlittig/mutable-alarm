export const calculateMuteEnd = (date, daysToMute) => {
  const newDate = new Date(date.getTime());
  newDate.setDate(newDate.getDate() + 1 + daysToMute);
  newDate.setHours(0, 0, 0, 0)

  return newDate;
};
