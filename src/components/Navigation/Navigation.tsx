import React from "react";
import { createAppContainer } from "react-navigation";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { MaterialIcons } from "@expo/vector-icons";
import AllAlarms from "../../screens/AllAlarms";
import MutedAlarms from "../../screens/MutedAlarms";
import Timer from "../../screens/Timer";
import Stopwatch from "../../screens/Stopwatch";
import AddAlarm from "../../screens/AddAlarm";
import R from "../../routes";

const AllAlarmsStack = createMaterialTopTabNavigator(
  {
    AllAlarms: {
      screen: AllAlarms,
    },
    MutedAlarms: {
      screen: MutedAlarms,
    },
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "white",
        borderColor: "transparent",
      },
      activeTintColor: "#222",
      inactiveTintColor: "#999",
      indicatorStyle: {
        backgroundColor: "#077aff",
      },
    },
    swipeEnabled: false,
  }
);

const TimerStack = createStackNavigator(
  {
    TimerStack: {
      screen: Timer,
    },
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
    },
  }
);

const StopwatchStack = createStackNavigator(
  {
    StopwatchStack: {
      screen: Stopwatch,
    },
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
    },
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    [R.ALL_ALARMS]: AllAlarmsStack,
    [R.TIMER]: TimerStack,
    [R.STOPWATCH]: StopwatchStack,
  },
  {
    initialRouteName: R.ALL_ALARMS,
    tabBarOptions: {
      showIcon: true,
    },
    navigationOptions: {
      headerStyle: {
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
        borderBottomWidth: 0,
      },
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let icon = "";
        if (routeName === R.ALL_ALARMS) {
          icon = `alarm`;
        } else if (routeName === R.STOPWATCH) {
          icon = `timer`;
        } else if (routeName === R.TIMER) {
          icon = `hourglass-empty`;
        }

        // You can return any component that you like here!
        return <MaterialIcons name={icon} size={25} color={tintColor} />;
      },
    }),
  }
);

const AddAlarmStack = createStackNavigator(
  {
    AddAlarm: {
      screen: AddAlarm,
    },
  },
  {
    mode: "modal",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
      headerStyle: {
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
        borderBottomWidth: 0,
      },
    },
  }
);

const MainNavigator = createStackNavigator(
  {
    [R.APP_NAME]: {
      screen: TabNavigator,
    },
    [R.ADD_ALARM]: {
      screen: AddAlarmStack,
    },
  },
  {
    navigationOptions: {
      headerStyle: {
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
        borderBottomWidth: 0,
      },
    },
    initialRouteName: R.APP_NAME,
  }
);

export default createAppContainer(MainNavigator);
