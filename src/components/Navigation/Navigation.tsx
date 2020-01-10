import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { MaterialIcons } from '@expo/vector-icons';
import AllAlarms from "../../screens/AllAlarms";
import MutedAlarms from "../../screens/MutedAlarms";

const ALL_ALARMS = 'All alarms'
const MUTED_ALARMS = 'Muted alarms'

const AllAlarmsStack = createStackNavigator({
  AllAlarms: {
    screen: AllAlarms
  }
});

const MutedAlarmsStack = createStackNavigator({
  MutedAlarms: {
    screen: MutedAlarms
  }
});

const TabNavigator = createBottomTabNavigator(
  {
    [ALL_ALARMS]: AllAlarmsStack,
    [MUTED_ALARMS]: MutedAlarmsStack
  }, {
    initialRouteName: ALL_ALARMS,
    tabBarOptions: {
      showIcon: true
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let icon = '';
        if (routeName === ALL_ALARMS) {
          icon = `alarm`;
        } else if (routeName === MUTED_ALARMS) {
          icon = `alarm-off`;
        }

        // You can return any component that you like here!
        return <MaterialIcons name={icon} size={25} color={tintColor} />;
      }
    })
  }
);

export default createAppContainer(TabNavigator);
