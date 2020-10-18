import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import Counter from "../../components/Counter/Counter";

const Timer = () => (
  <View>
    <Counter direction="down" timePreset={86400} />
  </View>
);

export default Timer;
