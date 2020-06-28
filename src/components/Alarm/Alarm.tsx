import React, { useState } from "react";
import { Text, View } from "react-native";
import { AlarmStyle } from "./Alarm.style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Switch } from "react-native-paper";
import { getCurrentTime } from "../../utils";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";

const nextAlarm = time => time;

const Alarm = ({ id, time, isMuted, isSnoozed, days, name }) => {
  const [muted, setMuted] = useState(isMuted);
  const toggleSwitch = () => setMuted(!muted);

  return (
    <TouchableWithoutFeedback>
      <View style={AlarmStyle.container} key={id}>
        <Text style={AlarmStyle.text}>{getCurrentTime(time)}</Text>
        {muted && <MaterialCommunityIcons name="restore" size={25} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Alarm;
