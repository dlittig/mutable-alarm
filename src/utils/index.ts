export const getCurrentTime = (date) => {
  if (typeof date === "string" || typeof date === "number") date = new Date(date);

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

export const getDisplayName = (WrappedComponent) =>
  WrappedComponent.displayName || WrappedComponent.name || "Component";

export const sortBy = (target, sortProperty, order = "ASC") =>
  target.sort((a, b) => {
    let left = a[sortProperty];
    let right = b[sortProperty];

    if (typeof left === "string") {
      left = left.toLowerCase();
    }

    if (typeof right === "string") {
      right = right.toLowerCase();
    }

    if (left < right) {
      return order === "ASC" ? 1 : -1;
    }

    if (left === right) {
      return 0;
    }

    return order === "ASC" ? -1 : 1;
  }) || [];
