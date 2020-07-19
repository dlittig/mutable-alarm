import React from "react";
import MutedAlarms from "../../../screens/MutedAlarms";
import AllAlarms from "../../../screens/AllAlarms";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const tabBarOptions = {
  style: {
    backgroundColor: "white",
    borderColor: "transparent",
  },
  activeTintColor: "#222",
  inactiveTintColor: "#999",
  indicatorStyle: {
    backgroundColor: "#077aff",
  },
};

const AlarmsTopTabNavigator = () => (
  <Tab.Navigator tabBarOptions={tabBarOptions} swipeEnabled={false}>
    <Tab.Screen name="All Alarms" component={AllAlarms} />
    <Tab.Screen name="Muted Alarms" component={MutedAlarms} />
  </Tab.Navigator>
);

export default AlarmsTopTabNavigator;
