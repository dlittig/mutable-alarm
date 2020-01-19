import React from "react";
import { createAppContainer } from "react-navigation";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import AllAlarms from "../../screens/AllAlarms";
import MutedAlarms from "../../screens/MutedAlarms";
import Timer from "../../screens/Timer";
import Stopwatch from "../../screens/Stopwatch";

const ALL_ALARMS = "Alarms";
const TIMER = "Timer";
const STOPWATCH = "Stopwatch";

const AllAlarmsStack = createMaterialTopTabNavigator(
  {
    AllAlarms: {
      screen: AllAlarms
    },
    MutedAlarms: {
      screen: MutedAlarms
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "white",
        borderColor: "transparent"
      },
      activeTintColor: "#222",
      inactiveTintColor: "#999",
      indicatorStyle: {
        backgroundColor: "#077aff"
      }
    }
  }
);

const TimerStack = createStackNavigator({
  TimerStack: {
    screen: Timer
  }
});

const StopwatchStack = createStackNavigator({
  StopwatchStack: {
    screen: Stopwatch
  }
});

const TabNavigator = createBottomTabNavigator(
  {
    [ALL_ALARMS]: AllAlarmsStack,
    [TIMER]: TimerStack,
    [STOPWATCH]: StopwatchStack
  },
  {
    initialRouteName: ALL_ALARMS,
    tabBarOptions: {
      showIcon: true
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let icon = "";
        if (routeName === ALL_ALARMS) {
          icon = `alarm`;
        } else if (routeName === STOPWATCH) {
          icon = `timer`;
        } else if (routeName === TIMER) {
          icon = `hourglass-empty`;
        }

        // You can return any component that you like here!
        return <MaterialIcons name={icon} size={25} color={tintColor} />;
      }
    })
  }
);

const MainNavigator = createStackNavigator(
  {
    Main: {
      screen: TabNavigator
    }
  },
  {
    navigationOptions: {
      headerStyle: {
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
        borderBottomWidth: 0
      }
    }
  }
);

export default createAppContainer(MainNavigator);
