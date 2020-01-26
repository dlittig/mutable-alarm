import * as AlarmsConstants from "../constants/alarmsConstants";

const initialState = {
  alarms: {},
  sortedAlarms: []
};

export const alarmsReducer = (state = initialState, action) => {
  let newState = {}

  switch (action.type) {
    case AlarmsConstants.ADD_ALARM:
      const alarm = action.payload;
      newState = { ...state };
      newState.alarms[alarms.id] = alarm;

      return newState;
    case AlarmsConstants.MUTE_ALARM: {
      const alarmId = action.payload;
      newState = { ...state };
      newState.alarms[alarmId].muted = true;

      return newState;
    }
    case AlarmsConstants.UPDATE_ALARM: {
      const alarm = action.payload;
      newState = { ...state };
      newAlarms[alarm.id] = alarm;

      return newState;
    }
    case AlarmsConstants.DELETE_ALARM:
      const alarmId = action.payload;
      newState = { ...state };
      delete newState.alarms[alarmId];

      // Remove item from array
      newState.sortedAlerts = state.sortedAlarms.filter(item => item.id !== alarmId);

      return newState;
    default:
      return state;
  }
};

