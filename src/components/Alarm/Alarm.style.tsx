import { StyleSheet } from "react-native";

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
});

export { AlarmStyle };
