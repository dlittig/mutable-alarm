import React, { useState } from "react";
import { Text, View } from "react-native";
import { AlarmStyle } from "./Alarm.style";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Switch } from "react-native-paper";


const nextAlarm = time => time

const Alarm = ({time, isEnabled, isMuted, isSnoozed, days, name}) => {
  const [enabled, setEnabled] = useState(isEnabled);
  const toggleSwitch = () => setEnabled(!enabled);

  return (
    <View style={AlarmStyle.container}>
      <Text style={AlarmStyle.text}>{time}</Text>
      { isMuted && (
        <MaterialCommunityIcons name="restore" size={25} />
      ) }

      { !isMuted && (
        <Switch value={enabled} onValueChange={toggleSwitch} color="#077aff"/>
      ) }
    </View>
  );
};

export default Alarm;
