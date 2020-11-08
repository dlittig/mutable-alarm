import { StyleSheet } from "react-native";

const SetTimerDialogStyle = StyleSheet.create({
  selector: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
    marginRight: 5,
  },
  stacked: {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    minHeight: 150,
  },
  button: {
    transform: [{ rotate: "90deg" }],
    display: "flex",
    justifyContent: "center",
  },
});

export { SetTimerDialogStyle };
