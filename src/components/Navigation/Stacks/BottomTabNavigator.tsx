import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import TopTabNavigator from "./AlarmsTopTabNavigator";
import R from "../../../routes";
import TimerNavigator from "./TimerNavigator";
import StopwatchNavigator from "./StopwatchNavigator";

const Tab = createBottomTabNavigator();

const options = ({ route }) => ({
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
    const { name } = route;
    let icon = "";
    if (name === R.ALL_ALARMS) {
      icon = `alarm`;
    } else if (name === R.STOPWATCH) {
      icon = `timer`;
    } else if (name === R.TIMER) {
      icon = `hourglass-empty`;
    }

    // You can return any component that you like here!
    return <MaterialIcons name={icon} size={25} color={tintColor} />;
  },
});

function BottomTabNavigator() {
  return (
    <Tab.Navigator initialRouteName={R.ALL_ALARMS} screenOptions={options}>
      <Tab.Screen
        name={R.ALL_ALARMS}
        component={TopTabNavigator}
      />
      <Tab.Screen
        name={R.TIMER}
        component={TimerNavigator}
      />
      <Tab.Screen
        name={R.STOPWATCH}
        component={StopwatchNavigator}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
