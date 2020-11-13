import React, { FC, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { Button, Text } from "react-native-paper";
import { connect } from "react-redux";

import BaseView from "../../components/BaseView";
import Card from "../../components/Card";
import Counter from "../../components/Counter";
import Estimation from "../../components/Estimation";
import {
  pauseCounter,
  resetCounter,
  startCounter,
} from "../../store/actions/counterActions";
import { getTime } from "../../utils/counter";

interface ITimer {
  isPaused: boolean;
  isActive: boolean;
  activated: Date;
  initialValue: number;
  reduxStartCounter: (string) => void;
  reduxPauseCounter: (string) => void;
  reduxResetCounter: (string) => void;
}

const Timer: FC<ITimer> = ({
  isPaused,
  isActive,
  activated,
  initialValue,
  reduxResetCounter,
  reduxStartCounter,
  reduxPauseCounter,
}) => (
  <BaseView center={false} color="main" margin="medium" bottomSpacer={true}>
    <Counter.Down />

    {isActive && <Estimation value={initialValue} start={activated} />}

    <Button
      mode="contained"
      onPress={
        isActive && !isPaused
          ? () => reduxPauseCounter("down")
          : () => reduxStartCounter("down")
      }
    >
      {isActive && !isPaused ? "Stop" : "Start"}
    </Button>
    {isPaused && (
      <Button
        mode="outlined"
        onPress={() => {
          reduxResetCounter("down");
        }}
      >
        Reset
      </Button>
    )}
  </BaseView>
);

const mapStateToProps = ({
  counterReducer: {
    down: { isActive, isPaused, activated, initialValue },
  },
}) => ({
  isActive,
  isPaused,
  activated,
  initialValue,
});

const mapDispatchToProps = {
  reduxStartCounter: startCounter,
  reduxPauseCounter: pauseCounter,
  reduxResetCounter: resetCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
