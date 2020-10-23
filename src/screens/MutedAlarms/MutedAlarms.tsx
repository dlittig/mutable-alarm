import React from "react";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import FabFlatList from "../../components/FabFlatList";
import BaseView from "../../components/BaseView";

const MutedAlarms = ({ alarms }) => {
  const navigation = useNavigation();
  const items = Object.values(alarms).filter((alarm) => alarm.isMuted);

  return (
    <BaseView center={false} color="background" margin="none">
      <FabFlatList navigation={navigation} items={items} disableFab={true} />
    </BaseView>
  );
};

MutedAlarms.navigationOptions = {
  title: "Muted alarms",
  headerTitle: "Alarms",
};

const mapStateToProps = ({ alarmsReducer: { alarms } }) => ({ alarms });

export default connect(mapStateToProps)(MutedAlarms);
