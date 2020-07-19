import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import R from "../../routes";
import AddAlarmNavigator from "./Stacks/AddAlarmNavigator";
import BottomTabNavigator from "./Stacks/BottomTabNavigator";

const Stack = createStackNavigator();

const headerStyle = {
  elevation: 0, // remove shadow on Android
  shadowOpacity: 0, // remove shadow on iOS
  borderBottomWidth: 0,
};

const RootNavigator = () => (
  <Stack.Navigator
    initialRouteName={R.APP_NAME}
    screenOptions={{ headerStyle }}
  >
    <Stack.Screen name={R.APP_NAME} component={BottomTabNavigator} />
    <Stack.Screen name={R.ADD_ALARM} component={AddAlarmNavigator} />
  </Stack.Navigator>
);

export default RootNavigator;
