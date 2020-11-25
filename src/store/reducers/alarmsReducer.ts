import * as AlarmsConstants from "../constants/alarmsConstants";
import produce from "immer";
import { calculateMuteEnd } from "../../utils/date";
import { IAlarm } from "../../models/Alarm";

interface IAlarmsState {
  alarms: {
    [x: string]: IAlarm;
  };
}

const initialState: IAlarmsState = {
  alarms: {},
  //sortedAlarms: [],
};

export const alarmsReducer = produce(
  (state: IAlarmsState = initialState, action) => {
    switch (action.type) {
      case AlarmsConstants.ADD_ALARM: {
        let alarm = action.payload;
        state.alarms[alarm.id] = alarm;
        break;
      }
      case AlarmsConstants.TOGGLE_MUTE_ALARM: {
        let { id, muteDays, muteIndefinitely } = action.payload;

        if (state.alarms[id].isMuted) {
          state.alarms[id].isMuted = false;
          state.alarms[id].mutedUntil = null;
        } else {
          state.alarms[id].isMuted = true;
          state.alarms[id].mutedUntil = muteIndefinitely
            ? null
            : calculateMuteEnd(new Date(), parseInt(muteDays)).getTime();
        }

        console.log(
          calculateMuteEnd(new Date(), parseInt(muteDays)),
          parseInt(muteDays),
          muteDays
        );
        console.log("STATE", state);

        break;
      }
      case AlarmsConstants.UPDATE_ALARM: {
        let alarm = action.payload;
        state.alarms[alarm.id] = alarm;
        break;
      }
      case AlarmsConstants.DELETE_ALARM: {
        let alarmId = action.payload;
        delete state.alarms[alarmId];

        // Remove item from array
        // state.sortedAlerts = state.sortedAlarms.filter(
        //   (item) => item.id !== alarmId
        // );
        break;
      }
    }
  },
  initialState
);
