import React from "react";
import MutedAlarms from "../../../screens/MutedAlarms";
import AllAlarms from "../../../screens/AllAlarms";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useTranslation } from "react-i18next";

const Tab = createMaterialTopTabNavigator();

const AlarmsTopTabNavigator = () => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator swipeEnabled={false}>
      <Tab.Screen name={t("screens.all_alarms")} component={AllAlarms} />
      <Tab.Screen name={t("screens.muted_alarms")} component={MutedAlarms} />
    </Tab.Navigator>
  );
};

export default AlarmsTopTabNavigator;
