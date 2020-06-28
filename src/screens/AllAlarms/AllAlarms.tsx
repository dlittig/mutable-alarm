import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { compose } from "redux";

import HeaderMenu from "../../components/HeaderMenu";
import { withNavigation } from "react-navigation";
import FabFlatList from "../../components/FabFlatList";
import Routes from "../../routes";
import { deleteAlarm } from "../../store/actions"

const AllAlarms = ({ alarms, navigation, reduxDeleteAlarm }) => {
  console.log("all alarms", alarms);

  // [...Object.values(alarms)].forEach((item) => {
  //   if(item.id === null) {
  //     reduxDeleteAlarm(null)
  //   }
  // })

  return (
    <View style={{ flex: 1 }}>
      <FabFlatList
        items={Object.values(alarms)}
        fabIcon="plus"
        fabLabel="Add"
        onFabPress={() => navigation.navigate(Routes.ADD_ALARM)}
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

const mapDispatchToProps = {
  reduxDeleteAlarm: deleteAlarm
}

const enhance = compose(connect(mapStateToProps, mapDispatchToProps), withNavigation);

export default enhance(AllAlarms);
