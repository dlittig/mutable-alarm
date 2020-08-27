import { StyleSheet } from "react-native";

const ListEmptyStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    height: "100%",
    alignContent: "center",
    alignItems: "center",
    margin: 20,
  },
  text: {
    textAlign: "center",
    lineHeight: 30,
    color: "#999",
  },
});

export { ListEmptyStyle };
