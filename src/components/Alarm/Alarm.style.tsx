import { StyleSheet } from "react-native";

const AlarmStyle = StyleSheet.create({
  container: {
    margin: 5,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    height: 80,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 4,
  },
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
