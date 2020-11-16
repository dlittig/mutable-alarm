import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import R from "../../routes";
import AddAlarmNavigator from "./Stacks/AddAlarmNavigator";
import BottomTabNavigator from "./Stacks/BottomTabNavigator";
import Menu from "../Menu";
import Settings from "../../screens/Settings";
import About from "../../screens/About";
import Donate from "../../screens/Donate";

const Stack = createStackNavigator();

const headerStyle = {
  elevation: 0, // remove shadow on Android
  shadowOpacity: 0, // remove shadow on iOS
  borderBottomWidth: 0,
};

const options = {
  headerRight: (props) => <Menu {...props} />,
};

const RootNavigator = () => (
  <Stack.Navigator
    initialRouteName={R.APP_NAME}
    screenOptions={{ headerStyle }}
  >
    <Stack.Screen
      name={R.APP_NAME}
      options={options}
      component={BottomTabNavigator}
    />
    <Stack.Screen
      name={R.ADD_ALARM}
      options={options}
      component={AddAlarmNavigator}
    />
    <Stack.Screen name={R.SETTINGS} component={Settings} />
    <Stack.Screen name={R.ABOUT} component={About} />
    <Stack.Screen name={R.DONATE} component={Donate} />
  </Stack.Navigator>
);

export default RootNavigator;
