import React from "react";

import FabFlatList from "../../components/FabFlatList";
import Routes from "../../routes";
import { useNavigation } from "@react-navigation/native";
import { deleteAlarm } from "../../store/actions";
import { connect } from "react-redux";
import { compose } from "redux";
import { View } from "react-native";

const AllAlarms = ({ alarms }) => {
  const navigation = useNavigation();
  const items = Object.values(alarms).filter((alarm) => !alarm.isMuted);

  return (
    <View style={{ flex: 1 }}>
      <FabFlatList
        navigation={navigation}
        items={items}
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
};

const mapStateToProps = ({ alarmsReducer: { alarms } }) => ({ alarms });

const mapDispatchToProps = {
  reduxDeleteAlarm: deleteAlarm,
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhance(AllAlarms);
