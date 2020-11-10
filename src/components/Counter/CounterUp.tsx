import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { FlatList, View } from "react-native";
import { Text, Button } from "react-native-paper";
import { getTime, getTimeData } from "../../utils/counter";
import { useCounter } from "./useCounter";

import { CounterStyle } from "./Counter.style";
import Card from "../Card";
import { TouchableHighlight } from "react-native-gesture-handler";
import SetTimerDialog from "../Dialogs/SetTimerDialog";
import Estimation from "../Estimation";
import { changeCounter } from "../../store/actions/counterActions";

type ICounter = {
  timePreset: number;
  isActive: boolean;
  isPaused: boolean;
  reduxChangeCounter: (number, string) => void;
};

const CounterUp: FC<ICounter> = ({
  timePreset,
  isActive,
  isPaused,
  reduxChangeCounter,
}) => {
  const {
    counter,
    onStart,
    onStop,
    onReset,
    updateCounter,
  } = useCounter(timePreset, "up");

  useEffect(() => {
    if (isActive === true) {
      onStart();
    } else if (isActive === false && isPaused === true) {
      onStop();
    } else {
      onReset();
    }
  }, [isActive, isPaused]);

  useEffect(() => {
    reduxChangeCounter(counter, "up");
  }, [counter]);

  let time = getTimeData(counter);

  return (
    <View style={CounterStyle.container}>
      <Card
        alignment="centerAlignment"
        fixedHight={80}
        touchable={false}
      >
        <Text style={CounterStyle.text}>{time.hours}</Text>
        <Text style={CounterStyle.text}>:</Text>
        <Text style={CounterStyle.text}>{time.minutes}</Text>
        <Text style={CounterStyle.text}>:</Text>
        <Text style={CounterStyle.text}>{time.seconds}</Text>
        <Text style={[CounterStyle.text, CounterStyle.bold]}>.</Text>
        <Text style={[CounterStyle.text, CounterStyle.bold]}>
          {time.milliseconds}
        </Text>
      </Card>
    </View>
  );
};

const mapStateToProps = ({
  counterReducer: {
    up: { isActive, isPaused, counter: timePreset },
  },
}) => ({
  isActive,
  isPaused,
  timePreset,
});

const mapDispatchToProps = {
  reduxChangeCounter: changeCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterUp);
