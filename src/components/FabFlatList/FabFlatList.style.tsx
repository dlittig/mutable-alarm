import { StyleSheet } from "react-native";

const FabFlatListStyle = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  list: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  rowFront: {
    alignItems: "center",
    backgroundColor: "#CCC",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 50,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    margin: 10,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    right: 80,
  },
  backRightBtnRight: {
    right: 0,
  },
  backBtn: {
    padding: 5,
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 10,
  },
  backText: {
    color: "#333",
  },
});

export { FabFlatListStyle };
