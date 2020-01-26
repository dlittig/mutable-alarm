import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { MoreButton } from "../../components/Navigation/Actions";
import Alarm from "../../components/Alarm";
import HeaderMenu from "../../components/HeaderMenu";
import { FAB } from "react-native-paper";

const data = [
  {
    id: 1,
    time: "09:00",
    isEnabled: true,
    isSnoozed: false
  },
  {
    id: 2,
    time: "11:00",
    isEnabled: true,
    isSnoozed: false
  },
  {
    id: 3,
    time: "13:00",
    isEnabled: true,
    isSnoozed: false
  },
  {
    id: 4,
    time: "15:00",
    isEnabled: true,
    isSnoozed: false
  },
  {
    id: 5,
    time: "17:00",
    isEnabled: true,
    isSnoozed: false
  },
  {
    id: 6,
    time: "19:00",
    isEnabled: true,
    isSnoozed: false
  },
  {
    id: 7,
    time: "20:00",
    isEnabled: true,
    isSnoozed: false
  },
  {
    id: 8,
    time: "22:00",
    isEnabled: true,
    isSnoozed: false
  }
];

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})


const AllAlarms = () => (
  <View>
    <FlatList
      bounces={true}
      data={data}
      renderItem={({ item }) => (
        <Alarm
          id={item.id}
          time={item.time}
          isEnabled={item.isEnabled}
          isSnoozed={item.isSnoozed}
          isMuted={false}
        />
      )}
    />
    <FAB
      style={styles.fab}
      icon="plus"
      label="Add"
    />
  </View>
);

AllAlarms.navigationOptions = {
  title: "All alarms",
  headerTitle: "Alarms",
  headerRight: () => <HeaderMenu />
};

export default AllAlarms;
