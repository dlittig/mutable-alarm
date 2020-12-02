import { NativeModules } from "react-native";

type AlarmsModuleType = {
  setAlarm: () => Promise<boolean>
}

type RingtoneModuleType = {
  selectRingtone: () => Promise<boolean>
}

export default {
  Alarm: NativeModules.AlarmsModule as AlarmsModuleType,
  Ringtone: NativeModules.RingtoneModule as RingtoneModuleType,
};
