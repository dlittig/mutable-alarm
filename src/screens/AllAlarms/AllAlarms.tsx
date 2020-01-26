import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import  { connect } from 'react-redux';

import { MoreButton } from "../../components/Navigation/Actions";
import Alarm from "../../components/Alarm";
import HeaderMenu from "../../components/HeaderMenu";
import ListEmpty from "../../components/ListEmpty";

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

const AllAlarms = ({alarms}) => (
  <View style={{flex: 1}}>
    <FlatList
      contentContainerStyle={{ flexGrow: 1 }}
      bounces={true}
      data={Object.values(alarms)}
      renderItem={({ item }) => (
        <Alarm
          id={item.id}
          time={item.time}
          isEnabled={item.isEnabled}
          isSnoozed={item.isSnoozed}
          isMuted={false}
        />
      )}
      ListEmptyComponent={ListEmpty}
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

const mapStateToProps = ({alarmsReducer: {alarms}}) => ({alarms})

export default connect(mapStateToProps)(AllAlarms);
