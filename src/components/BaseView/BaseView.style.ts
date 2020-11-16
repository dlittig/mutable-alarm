import { PrivateValueStore } from "@react-navigation/core";
import { StyleSheet } from "react-native";
import { dark, light } from "../../theme/colors/values";

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
  darkBackgroundMain: {
    backgroundColor: dark.card,
  },
  lightBackgroundMain: {
    backgroundColor: light.card,
  },
  background: {},
  bottomSpacer: {
    paddingBottom: 50,
  },
});

export { BaseViewStyle };
