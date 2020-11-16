import { StyleSheet } from "react-native";

const CardStyle = StyleSheet.create({
  container: {
    margin: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    // backgroundColor: "#fff",
    // shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
  },
  touchableFeedback: {
    borderRadius: 10
  },
  text: {
    fontSize: 30,
  },
  centerAlignment: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  spacedAlignment: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  noneAlignment: {},
  light: {
    shadowRadius: 1,
    elevation: 2,
  },
  dark: {
    shadowRadius: 1.41,
    elevation: 4,
  },
  fixedHeight: {
    height: 80,
  },
});

export { CardStyle };
