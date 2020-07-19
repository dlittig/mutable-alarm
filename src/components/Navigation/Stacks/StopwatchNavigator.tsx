import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import R from "../../../routes";
import Stopwatch from "../../../screens/Stopwatch";

const Stack = createStackNavigator();

const StopwatchNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={R.STOPWATCH} component={Stopwatch} />
  </Stack.Navigator>
);

export default StopwatchNavigator;
