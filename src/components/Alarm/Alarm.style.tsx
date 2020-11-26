import { StyleSheet } from "react-native";
import { ThemeColors } from "../../theme/colors/values";

const AlarmStyle = StyleSheet.create({
  weekdays: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  weekday: {
    marginRight: 10,
  },
  weekdayActive: {
    fontWeight: "bold",
  },
  text: {
    fontSize: 30,
  },
  dark: {
    color: ThemeColors.DarkColors.text,
  },
  light: {
    color: ThemeColors.LightColors.text,
  },
  black: {
    color: ThemeColors.BlackColors.text,
  },
  darkWeekdayInactive: {
    color: ThemeColors.DarkColors.textInactive,
  },
  lightWeekdayInactive: {
    color: ThemeColors.LightColors.textInactive,
  },
  blackWeekdayInactive: {
    color: ThemeColors.BlackColors.textInactive,
  },
});

export { AlarmStyle };
