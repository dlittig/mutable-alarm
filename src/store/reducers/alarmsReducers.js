import * as AlarmsConstants from "../constants/alarmsConstants";
import produce from "immer";

const initialState = {
  alarms: {},
  sortedAlarms: []
};

export const alarmsReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case AlarmsConstants.ADD_ALARM:
      let alarm = action.payload;
      state.alarms[alarm.id] = alarm;
      break;
    case AlarmsConstants.MUTE_ALARM: {
      let alarmId = action.payload;
      state.alarms[alarmId].muted = true;
      break;
    }
    case AlarmsConstants.UPDATE_ALARM: {
      let alarm = action.payload;
      alarm[alarm.id] = alarm;
      break;
    }
    case AlarmsConstants.DELETE_ALARM: {
      let alarmId = action.payload;
      delete state.alarms[alarmId];

      // Remove item from array
      state.sortedAlerts = state.sortedAlarms.filter(
        item => item.id !== alarmId
      );
      break;
    }
  }
}, initialState);
