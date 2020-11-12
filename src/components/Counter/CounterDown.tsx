import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { FlatList, View } from "react-native";
import { Text, Button } from "react-native-paper";
import { TouchableHighlight } from "react-native-gesture-handler";

import Card from "../Card";
import Estimation from "../Estimation";
import { useCounter } from "./useCounter";
import SetTimerDialog from "../Dialogs/SetTimerDialog";
import { getTime, getTimeData } from "../../utils/counter";
import { changeCounter } from "../../store/actions/counterActions";

import { CounterStyle } from "./Counter.style";

type ICounter = {
  timePreset: number;
  isActive: boolean;
  isPaused: boolean;
  reduxChangeCounter: (number, string) => void;
};

const CounterDown: FC<ICounter> = ({
  timePreset,
  isActive,
  isPaused,
  reduxChangeCounter,
}) => {
  const { counter, onStart, onStop, onReset, updateCounter } = useCounter(
    timePreset,
    "down"
  );

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
    reduxChangeCounter(counter, "down");
  }, [counter]);

  const [isTimerDialogVisible, setTimerDialogVisible] = useState(false);
  let time = getTimeData(counter);
  let rawTime = getTimeData(counter, true);

  return (
    <View style={CounterStyle.container}>
      <SetTimerDialog
        onAccept={(newCounter) => {
          onStop();
          setTimerDialogVisible(false);
          updateCounter(newCounter);
        }}
        onCancel={() => setTimerDialogVisible(false)}
        isVisible={isTimerDialogVisible}
        initialValues={{
          hours: rawTime.hours,
          minutes: rawTime.minutes,
          seconds: rawTime.seconds,
        }}
      />
      <Card
        alignment="centerAlignment"
        fixedHight={80}
        touchable={true}
        onTouch={() => setTimerDialogVisible(true)}
      >
        <Text style={CounterStyle.text}>{time.hours}</Text>
        <Text style={CounterStyle.text}>:</Text>
        <Text style={CounterStyle.text}>{time.minutes}</Text>
        <Text style={CounterStyle.text}>:</Text>
        <Text style={CounterStyle.text}>{time.seconds}</Text>
      </Card>
    </View>
  );
};

const mapStateToProps = ({
  counterReducer: {
    down: { isActive, isPaused, counter: timePreset },
  },
}) => ({
  isActive,
  isPaused,
  timePreset,
});

const mapDispatchToProps = {
  reduxChangeCounter: changeCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterDown);
