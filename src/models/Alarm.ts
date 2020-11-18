export interface IAlarm {
  id: string;
  time: number;
  isMuted: boolean;
  isSnoozed: boolean;
  weekdays: Array<string>;
  name: string;
  scheduleValue: string;
  scheduleMode: string;
}

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
