import { StyleSheet } from "react-native";

const CardStyle = StyleSheet.create({
  container: {
    margin: 5,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
  text: {
    fontSize: 30,
  },
});

export { CardStyle };
