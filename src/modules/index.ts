import { NativeModules } from "react-native";
import { IAlarm } from "../models/Alarm";

type AlarmsModuleType = {
  setAlarm: (alarm: IAlarm) => Promise<boolean>
}

type RingtoneModuleType = {
  selectRingtone: (alarm: IAlarm) => Promise<boolean>
}

export default {
  Alarm: NativeModules.AlarmsModule as AlarmsModuleType,
  Ringtone: NativeModules.RingtoneModule as RingtoneModuleType,
};
