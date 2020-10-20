import { StyleSheet } from "react-native";

const TimerStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    height: "100%",
    alignContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    paddingBottom: 50,
  },
  text: {
    textAlign: "center",
    lineHeight: 30,
    color: "#999",
  },
});

export { TimerStyle };
