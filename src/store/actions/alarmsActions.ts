import { IAlarm } from "../../models/Alarm";
import * as AlarmsConstants from "../constants/alarmsConstants";

export const addAlarm = (alarm: IAlarm) => ({
  type: AlarmsConstants.ADD_ALARM,
  payload: alarm,
});

export const updateAlarm = (alarm: IAlarm) => ({
  type: AlarmsConstants.UPDATE_ALARM,
  payload: alarm,
});

export const toggleMuteAlarm = (
  alarmId: number,
  muteIndefinitely: boolean,
  muteDays: string
) => ({
  type: AlarmsConstants.TOGGLE_MUTE_ALARM,
  payload: {
    id: alarmId,
    muteIndefinitely,
    muteDays,
  },
});

export const deleteAlarm = (alarmId: number) => ({
  type: AlarmsConstants.DELETE_ALARM,
  payload: alarmId,
});
