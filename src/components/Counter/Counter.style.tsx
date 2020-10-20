import { StyleSheet } from "react-native";

const CounterStyle = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  bold: {
    fontWeight: "bold",
  },
  bigger: {
    fontSize: 16,
  },
  laps: {
    marginTop: 20,
    marginBottom: 10,
  },
  lap: {
    margin: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  lapText: {
    padding: 10,
  },
  container: {
    marginTop: 20,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  actions: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export { CounterStyle };
