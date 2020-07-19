import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import R from "../../../routes";
import Timer from "../../../screens/Timer";

const Stack = createStackNavigator();

const TimerNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={R.TIMER} component={Timer} />
  </Stack.Navigator>
);

export default TimerNavigator;
