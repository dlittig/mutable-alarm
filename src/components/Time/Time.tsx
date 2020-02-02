import React, { useState } from "react";
import { Text } from "react-native";
import { Surface } from "react-native-paper";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getCurrentTime } from "../../utils"

import { TimeStyle } from "./Time.style";

const Time = ({ time, onChange }) => {
  const [showPicker, setShowPicker] = useState(false);

  const onSelect = (event, time) => {
    setShowPicker(false);
    if(time)
      onChange(time.toString());

  };

  return (
    <Surface style={TimeStyle.container}>
      <TouchableOpacity onPress={() => setShowPicker(true)}>
        <Text style={TimeStyle.text}>{getCurrentTime(time)}</Text>
        {showPicker && (
          <RNDateTimePicker
            value={new Date(time)}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={onSelect}
          />
        )}
      </TouchableOpacity>
    </Surface>
  );
};

export default Time;
