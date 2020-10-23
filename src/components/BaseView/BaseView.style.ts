import { StyleSheet } from "react-native";

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
  backgroundMain: {
    backgroundColor: "white",
  },
  background: {},
  bottomSpacer: {
    paddingBottom: 50,
  },
});

export { BaseViewStyle };
