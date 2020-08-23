import React, { useState, FC } from "react";
import { Text, View } from "react-native";
import { AlarmStyle } from "./Alarm.style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Switch } from "react-native-paper";
import { getCurrentTime } from "../../utils";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { IAlarm } from "../../typings/AlarmType";

const nextAlarm = (time) => time;

const Alarm: FC<IAlarm> = ({
  id,
  time,
  isMuted,
  isSnoozed,
  name,
  weekdays,
  scheduleValue,
  scheduleMode,
}) => {
  const [muted, setMuted] = useState(isMuted);
  const toggleSwitch = () => setMuted(!muted);

  return (
    <TouchableWithoutFeedback>
      <View style={AlarmStyle.container} key={id}>
        <Text style={AlarmStyle.text}>{getCurrentTime(time)}</Text>
        <View>
          <Text>{name}</Text>
          {muted && <MaterialCommunityIcons name="restore" size={25} />}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Alarm;
