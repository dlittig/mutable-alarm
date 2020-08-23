import { IAlarm } from "../typings/AlarmType";

export default class Alarm implements IAlarm {
  id = "";
  time = new Date().getTime();
  isMuted = false;
  isSnoozed = false;
  name = "";
  weekdays = [];
  scheduleValue = null;
  scheduleMode = null;
}
