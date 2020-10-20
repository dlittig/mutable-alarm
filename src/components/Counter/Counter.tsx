import React, { FC, useState } from "react";
import { FlatList, View } from "react-native";
import { Text, Button } from "react-native-paper";
import { getTime, getTimeData } from "../../utils/counter";
import { useCounter } from "./useCounter";

import { CounterStyle } from "./Counter.style";
import Card from "../Card";

type ICounter = {
  timePreset: number;
  direction: "up" | "down";
  showLap: boolean;
};

const Counter: FC<ICounter> = ({ timePreset, direction, showLap }) => {
  const { isActive, isPaused, counter, onStart, onStop, onReset } = useCounter(
    timePreset,
    direction
  );

  const [laps, setLaps] = useState([]);
  const time = getTimeData(counter);

  const renderLapItem = ({ item, index }) => (
    <View style={CounterStyle.lap}>
      <Text style={[CounterStyle.bigger, CounterStyle.lapText]}>
        {laps.length - index}: {getTime(item.value)}
      </Text>
    </View>
  );

  return (
    <View style={CounterStyle.container}>
      <Card>
        <Text style={CounterStyle.text}>{time.hours}</Text>
        <Text style={CounterStyle.text}>:</Text>
        <Text style={CounterStyle.text}>{time.minutes}</Text>
        <Text style={CounterStyle.text}>:</Text>
        <Text style={CounterStyle.text}>{time.seconds}</Text>
        {direction === "up" && (
          <>
            <Text style={[CounterStyle.text, CounterStyle.bold]}>.</Text>
            <Text style={[CounterStyle.text, CounterStyle.bold]}>
              {time.milliseconds}
            </Text>
          </>
        )}
      </Card>
      {showLap && laps.length > 0 && (
        <FlatList
          style={CounterStyle.laps}
          data={laps}
          keyExtractor={(lap) => lap.id}
          renderItem={(item) => renderLapItem(item)}
        ></FlatList>
      )}
      <View style={CounterStyle.actions}>
        <Button
          mode="contained"
          onPress={isActive && !isPaused ? onStop : onStart}
        >
          {isActive && !isPaused ? "Stop" : "Start"}
        </Button>
        {isPaused && (
          <Button
            mode="outlined"
            onPress={() => {
              onReset();
              setLaps([]);
            }}
          >
            Reset
          </Button>
        )}
        {showLap && (
          <Button
            mode="text"
            onPress={() =>
              setLaps([{ id: new Date().getTime(), value: counter }, ...laps])
            }
          >
            Lap
          </Button>
        )}
      </View>
    </View>
  );
};

export default Counter;
