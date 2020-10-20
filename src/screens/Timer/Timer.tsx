import React from "react";
import { View } from "react-native";

import Counter from "../../components/Counter";

import { TimerStyle } from "./Timer.style";

const Timer = () => (
  <View style={TimerStyle.container}>
    <Counter showLap={false} direction="down" timePreset={86400} />
  </View>
);

export default Timer;
