import React from "react";
import { FlatList } from "react-native";
import { connect } from "react-redux";

import Alarm from "../../components/Alarm";
import ListEmpty from "../../components/ListEmpty";
import { MoreButton } from "../../components/Navigation/Actions";

const MutedAlarms = ({ alarms }) => (
  <FlatList
    data={Object.values(alarms)}
    bounces={true}
    renderItem={({ item }) => (
      <Alarm
        id={item.id}
        time={item.time}
        isEnabled={item.isEnabled}
        isMuted={true}
      />
    )}
    keyExtractor={item => item.id}
    ListEmptyComponent={<ListEmpty />}
  />
);

MutedAlarms.navigationOptions = {
  title: "Muted alarms",
  headerTitle: "Alarms",
  headerRight: () => <MoreButton tintColor="#333" />
};

const mapStateToProps = ({ alarmsReducer: { alarms } }) => ({ alarms });

export default connect(mapStateToProps)(MutedAlarms);
