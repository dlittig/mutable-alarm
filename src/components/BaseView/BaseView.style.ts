import { PrivateValueStore } from "@react-navigation/core";
import { StyleSheet } from "react-native";
import { ThemeColors } from "../../theme/colors/values";

const BaseViewStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    height: "100%",
  },
  mediumMargin: {
    padding: 20,
  },
  center: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  spaceBetween: {
    alignContent: "space-between",
    justifyContent: "space-between",
  },
  blackBackgroundMain: {
    backgroundColor: ThemeColors.BlackColors.card,
  },
  darkBackgroundMain: {
    backgroundColor: ThemeColors.DarkColors.card,
  },
  lightBackgroundMain: {
    backgroundColor: ThemeColors.LightColors.card,
  },
  background: {},
  bottomSpacer: {
    paddingBottom: 50,
  },
});

export { BaseViewStyle };
