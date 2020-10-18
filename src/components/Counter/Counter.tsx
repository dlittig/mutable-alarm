import React, { FC, useEffect } from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { getTime } from "../../utils/Counter";
import { useCounter } from "./useCounter";

type ICounter = {
  timePreset: number;
  direction: "up" | "down";
};

const Counter: FC<ICounter> = ({ timePreset, direction }) => {
  const { isActive, isPaused, counter, onStart, onStop, onReset } = useCounter(
    timePreset,
    direction
  );
  // const [counter]

  // useEffect(() => {

  // }, [counter])

  // useEffect(() => {
  //   console;
  // }, []);

  return (
    <View>
      <Text>{getTime(counter)}</Text>
      <Button onPress={isActive && !isPaused ? onStop : onStart}>
        {isActive && !isPaused ? "Stop" : "Start"}
      </Button>
      {isPaused && <Button onPress={() => onReset()}>Reset</Button>}
    </View>
  );
};

export default Counter;
