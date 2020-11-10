import * as CounterConstants from "../constants/counterConstants";
import produce from "immer";

const initialState = {
  up: {
    isActive: false,
    isPaused: false,
    counter: 0,
  },
  down: {
    isActive: false,
    isPaused: false,
    counter: 86400,
  },
};

export const counterReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case CounterConstants.START_COUNTER: {
      let type = action.payload;
      state[type].isActive = true;
      state[type].isPaused = false;
      break;
    }
    case CounterConstants.PAUSE_COUNTER: {
      let type = action.payload;
      state[type].isActive = false;
      state[type].isPaused = true;
      break;
    }
    case CounterConstants.RESET_COUNTER: {
      let type = action.payload;
      state[type].isActive = false;
      state[type].isPaused = false;
      state[type].counter = initialState[type].counter
      break;
    }
    case CounterConstants.CHANGE_COUNTER: {
      let {count, direction} = action.payload;
      state[direction].counter = count
      break;
    }
  }
}, initialState);
