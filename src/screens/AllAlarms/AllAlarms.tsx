import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import { SwipeRow } from "react-native-swipe-list-view";
import { connect } from "react-redux";
import { compose } from "redux";

import Alarm from "../../components/Alarm";
import HeaderMenu from "../../components/HeaderMenu";
import { withNavigation } from "react-navigation";
import FabFlatList from "../../components/FabFlatList";

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  actions: {
    alignItems: "center",
    backgroundColor: "#8BC645",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
});

const AllAlarms = ({ alarms, navigation }) => {
  console.log(alarms);
  return (
    <View style={{ flex: 1 }}>
      <FabFlatList
        items={Object.values(alarms)}
        fabIcon="plus"
        fabLabel="Add"
        onFabPress={() => navigation.navigate("AddAlarm")}
      />
    </View>
  );
};

AllAlarms.navigationOptions = {
  title: "All alarms",
  headerTitle: "Alarms",
  headerRight: () => <HeaderMenu />,
};

const mapStateToProps = ({ alarmsReducer: { alarms } }) => ({ alarms });

const enhance = compose(connect(mapStateToProps), withNavigation);

export default enhance(AllAlarms);
