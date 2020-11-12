import { StyleSheet } from "react-native";

const NumberSelectorStyle = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: 150,
  },
  touchable: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 15,
  },
  text: {
    fontSize: 18,
  },
});

export { NumberSelectorStyle };
