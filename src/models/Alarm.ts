export interface IAlarm {
  id: string;
  time: number;
  isMuted: boolean;
  isSnoozed: boolean;
  weekdays: Array<DAYS>;
  name: string;
  scheduleValue: string | null;
  scheduleMode: string | null;
}

export enum DAYS {
  MONDAY = "mo",
  TUESDAY = "tue",
  WEDNESDAY = "wed",
  THURSDAY = "thu",
  FRIDAY = "fri",
  SATURDAY = "sat",
  SUNDAY = "sun",
}

export const WEEKDAYS: Array<DAYS> = [
  DAYS.MONDAY,
  DAYS.TUESDAY,
  DAYS.WEDNESDAY,
  DAYS.THURSDAY,
  DAYS.FRIDAY,
  DAYS.SATURDAY,
  DAYS.SUNDAY,
];

// export default class Alarm implements IAlarm {
//   id = "";
//   time = new Date().getTime();
//   isMuted = false;
//   isSnoozed = false;
//   name = "";
//   weekdays = [];
//   scheduleValue = null;
//   scheduleMode = null;
// }
