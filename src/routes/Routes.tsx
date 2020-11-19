import i18n from "../translations/i18n";

const APP_NAME = "Mutable Alarms";
const ALL_ALARMS = i18n.t("screens.all_alarms");
const TIMER = i18n.t("screens.timer");
const STOPWATCH = i18n.t("screens.stopwatch");
const ADD_ALARM = i18n.t("screens.add_alarm");
const SETTINGS = i18n.t("screens.settings");
const ABOUT = i18n.t("screens.about");
const DONATE = i18n.t("screens.donate");

console.log( i18n.t("screens.all_alarms"), i18n)

export default {
  APP_NAME,
  ALL_ALARMS,
  TIMER,
  STOPWATCH,
  ADD_ALARM,
  SETTINGS,
  ABOUT,
  DONATE,
};
