import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import FabFlatList from "../../components/FabFlatList";

const MutedAlarms = ({ alarms }) => {
  const navigation = useNavigation();
  const items = Object.values(alarms).filter((alarm) => alarm.isMuted);

  return (
    <View style={{ flex: 1 }}>
      <FabFlatList navigation={navigation} items={items} disableFab={true} />
    </View>
  );
};

MutedAlarms.navigationOptions = {
  title: "Muted alarms",
  headerTitle: "Alarms",
};

const mapStateToProps = ({ alarmsReducer: { alarms } }) => ({ alarms });

export default connect(mapStateToProps)(MutedAlarms);
