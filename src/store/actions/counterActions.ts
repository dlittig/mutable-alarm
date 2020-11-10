import * as CounterConstants from "../constants/counterConstants";

export const startCounter = (direction) => ({
  type: CounterConstants.START_COUNTER,
  payload: direction,
});

export const pauseCounter = (direction) => ({
  type: CounterConstants.PAUSE_COUNTER,
  payload: direction,
});

export const resetCounter = (direction) => ({
  type: CounterConstants.RESET_COUNTER,
  payload: direction,
});

export const changeCounter = (count, direction) => ({
  type: CounterConstants.CHANGE_COUNTER,
  payload: { count, direction },
});
