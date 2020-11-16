import { StyleSheet } from "react-native";
import { dark, light } from "../../theme/colors/values";

const AlarmStyle = StyleSheet.create({
  weekdays: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  weekday: {
    marginRight: 5,
    marginLeft: 5,
  },
  weekdayActive: {
    fontWeight: "bold",
  },
  text: {
    fontSize: 30,
  },
  dark: {
    color: dark.text
  },
  light: {
    color: light.text
  },
  black: {

  }
});

export { AlarmStyle };
