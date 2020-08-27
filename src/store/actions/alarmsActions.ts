import * as AlarmsConstants from "../constants/alarmsConstants";

export const addAlarm = (alarm) => ({
  type: AlarmsConstants.ADD_ALARM,
  payload: alarm,
});

export const updateAlarm = (alarm) => ({
  type: AlarmsConstants.UPDATE_ALARM,
  payload: alarm,
});

export const toggleMuteAlarm = (alarmId) => ({
  type: AlarmsConstants.TOGGLE_MUTE_ALARM,
  payload: alarmId,
});

export const deleteAlarm = (alarmId) => ({
  type: AlarmsConstants.DELETE_ALARM,
  payload: alarmId,
});
