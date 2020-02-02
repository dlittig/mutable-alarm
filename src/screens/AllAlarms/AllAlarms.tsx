import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import { connect } from "react-redux";
import { compose } from "redux";

import { MoreButton } from "../../components/Navigation/Actions";
import Alarm from "../../components/Alarm";
import HeaderMenu from "../../components/HeaderMenu";
import ListEmpty from "../../components/ListEmpty";
import { withNavigation } from "react-navigation";

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
  }
});

const AllAlarms = ({ alarms, navigation }) => {
  console.log(alarms)
  return (
    <View style={{ flex: 1 }}>
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
        onPress={() => navigation.navigate("AddAlarm")}
      />
    </View>
  );
};

AllAlarms.navigationOptions = {
  title: "All alarms",
  headerTitle: "Alarms",
  headerRight: () => <HeaderMenu />
};

const mapStateToProps = ({ alarmsReducer: { alarms } }) => ({ alarms });

const enhance = compose(connect(mapStateToProps), withNavigation);

export default enhance(AllAlarms);
