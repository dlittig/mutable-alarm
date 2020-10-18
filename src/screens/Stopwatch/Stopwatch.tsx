import React, { useState } from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import Counter from "../../components/Counter/Counter";

import { StopWatchStyle } from "./Stopwatch.style";

const Stopwatch = () => {
  return (
    <View style={StopWatchStyle.container}>
      <Counter
        direction="up"
        timePreset={0}
      />
    </View>
  );
};

export default Stopwatch;
