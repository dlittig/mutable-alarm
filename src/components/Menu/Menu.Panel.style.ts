import { StyleSheet } from "react-native";
import { ThemeColors } from "../../theme/colors/values";

const MenuPanelStyle = StyleSheet.create({
  darkBackground: {
    backgroundColor: ThemeColors.DarkColors.card,
  },
  lightBackground: {
    backgroundColor: ThemeColors.LightColors.card,
  },
  blackBackground: {
    backgroundColor: ThemeColors.BlackColors.card,
  },
});

export { MenuPanelStyle };
