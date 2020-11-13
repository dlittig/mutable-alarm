import * as CounterConstants from "../constants/counterConstants";
import produce from "immer";

const initialState = {
  up: {
    isActive: false,
    isPaused: false,
    counter: 0,
    activated: null,
    initialValue: null,
  },
  down: {
    isActive: false,
    isPaused: false,
    counter: 86400,
    activated: null,
    initialValue: null,
  },
};

export const counterReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case CounterConstants.START_COUNTER: {
      let type = action.payload;
      state[type].initialValue = state[type].counter
      state[type].isActive = true;
      state[type].isPaused = false;
      state[type].activated = new Date();
      break;
    }
    case CounterConstants.PAUSE_COUNTER: {
      let type = action.payload;
      state[type].isActive = false;
      state[type].isPaused = true;
      state[type].activated = null;
      state[type].initialValue = null;
      break;
    }
    case CounterConstants.RESET_COUNTER: {
      let type = action.payload;
      state[type].isActive = false;
      state[type].isPaused = false;
      state[type].counter = initialState[type].counter;
      state[type].activated = null;
      state[type].initialValue = null;
      break;
    }
    case CounterConstants.CHANGE_COUNTER: {
      let { count, direction } = action.payload;
      state[direction].counter = count;
      break;
    }
  }
}, initialState);
