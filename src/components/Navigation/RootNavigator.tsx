import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import R from "../../routes";
import AddAlarmNavigator from "./Stacks/AddAlarmNavigator";
import BottomTabNavigator from "./Stacks/BottomTabNavigator";
import Menu from "../Menu";

const Stack = createStackNavigator();

const headerStyle = {
  elevation: 0, // remove shadow on Android
  shadowOpacity: 0, // remove shadow on iOS
  borderBottomWidth: 0,
};

const options = {
  headerRight: (props) => <Menu />,
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
  </Stack.Navigator>
);

export default RootNavigator;
