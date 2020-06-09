import React, { useState } from "react";
import { Text, View } from "react-native";
import { AlarmStyle } from "./Alarm.style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Switch } from "react-native-paper";
import { getCurrentTime } from "../../utils";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";

const nextAlarm = time => time;

const Alarm = ({ id, time, isEnabled, isMuted, isSnoozed, days, name }) => {
  const [enabled, setEnabled] = useState(isEnabled);
  const toggleSwitch = () => setEnabled(!enabled);

  return (
    <TouchableWithoutFeedback>
      <View style={AlarmStyle.container} key={id}>
        <Text style={AlarmStyle.text}>{getCurrentTime(time)}</Text>
        {isMuted && <MaterialCommunityIcons name="restore" size={25} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Alarm;
