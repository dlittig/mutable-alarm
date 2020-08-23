import { StyleSheet } from "react-native";

const ItemStyle = StyleSheet.create({
  container: {
    borderColor: "#666",
    padding: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    minWidth: 40,
    flexGrow: 1,
  },
  text: {
    textAlign: "center",
  },
  selected: {
    backgroundColor: "#cccccc",
  },
});

export { ItemStyle };
