import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import R from "../../../routes";
import AddAlarm from "../../../screens/AddAlarm";

const Stack = createStackNavigator();

const headerStyle = {
  elevation: 0, // remove shadow on Android
  shadowOpacity: 0, // remove shadow on iOS
  borderBottomWidth: 0,
};

const AddAlarmNavigator = () => (
  <Stack.Navigator
    headerMode="none"
    mode="modal"
    screenOptions={{ headerStyle }}
  >
    <Stack.Screen name={R.ADD_ALARM} component={AddAlarm} />
  </Stack.Navigator>
);

export default AddAlarmNavigator;
