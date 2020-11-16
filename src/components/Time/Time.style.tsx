import { StyleSheet } from "react-native";
import { dark, light } from "../../theme/colors/values";

const TimeStyle = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    borderRadius: 10,
  },
  lightContainer: {
    backgroundColor: light.card,
  },
  darkContainer: {
    backgroundColor: dark.card,
  },
  blackContainer: {},
  text: {
    fontSize: 70,
  },
  lightText: {
    color: "#595959",
  },
  darkText: {
    color: dark.text,
  },
  blackText: {},
});

export { TimeStyle };
