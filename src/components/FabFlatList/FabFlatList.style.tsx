import { StyleSheet } from "react-native";

const FabFlatListStyle = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
  },
  list: {
    flexGrow: 1
  },
  container: {
    flex: 1
  }
});

export { FabFlatListStyle };
