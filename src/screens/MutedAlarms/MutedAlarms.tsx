import React from "react";
import { FlatList } from "react-native";
import Alarm from "../../components/Alarm";
import { MoreButton } from "../../components/Navigation/Actions";

const data = [
  {
    id: 1,
    time: "09:00",
    isEnabled: true
  },
  {
    id: 2,
    time: "11:00",
    isEnabled: true
  },
  {
    id: 3,
    time: "13:00",
    isEnabled: true
  },
  {
    id: 4,
    time: "15:00",
    isEnabled: true
  },
  {
    id: 5,
    time: "17:00",
    isEnabled: true
  },
  {
    id: 6,
    time: "19:00",
    isEnabled: true
  },
  {
    id: 7,
    time: "20:00",
    isEnabled: true
  },
  {
    id: 8,
    time: "22:00",
    isEnabled: true
  }
];

const MutedAlarms = () => (
  <FlatList
    data={data.reverse()}
    bounces={true}
    renderItem={({ item }) => (
      <Alarm
        key={item.id}
        time={item.time}
        isEnabled={item.isEnabled}
        isMuted={true}
      />
    )}
    keyExtractor={item => item.id}
  />
);

MutedAlarms.navigationOptions = {
    title: "All alarms",
    headerTitle: "Alarms",
    headerRight: () => <MoreButton tintColor="#333" />
};

export default MutedAlarms;
