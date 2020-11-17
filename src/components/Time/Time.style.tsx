import { StyleSheet } from "react-native";
import { ThemeColors } from "../../theme/colors/values";

const TimeStyle = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    borderRadius: 10,
  },
  lightContainer: {
    backgroundColor: ThemeColors.LightColors.card,
  },
  darkContainer: {
    backgroundColor: ThemeColors.DarkColors.card,
  },
  blackContainer: {
    backgroundColor: ThemeColors.BlackColors.card,
  },
  text: {
    fontSize: 70,
  },
  lightText: {
    color: "#595959",
  },
  darkText: {
    color: ThemeColors.DarkColors.text,
  },
  blackText: {
    color: ThemeColors.BlackColors.text,
  },
});

export { TimeStyle };
