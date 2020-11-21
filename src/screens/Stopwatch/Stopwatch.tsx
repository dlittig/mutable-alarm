import React, { FC, useState } from "react";
import { connect } from "react-redux";
import { FlatList, View } from "react-native";
import { Button, Text } from "react-native-paper";

import BaseView from "../../components/BaseView";
import Card from "../../components/Card";
import Counter from "../../components/Counter";
import {
  pauseCounter,
  resetCounter,
  startCounter,
} from "../../store/actions/counterActions";
import { getTime } from "../../utils/counter";
import { StopwatchStyle } from "./Stopwatch.style";
import { useTranslation } from "react-i18next";

interface IStopWatch {
  isPaused: boolean;
  isActive: boolean;
  counter: number;
  reduxStartCounter: (string) => void;
  reduxPauseCounter: (string) => void;
  reduxResetCounter: (string) => void;
}

const Stopwatch: FC<IStopWatch> = ({
  isPaused,
  isActive,
  counter,
  reduxResetCounter,
  reduxStartCounter,
  reduxPauseCounter,
}) => {
  const { t } = useTranslation();
  const [laps, setLaps] = useState([]);

  const renderLapItem = ({ item, index }) => (
    <Card light={true} alignment={"noneAlignment"}>
      <Text style={[StopwatchStyle.bigger, StopwatchStyle.lapText]}>
        {laps.length - index}: {getTime(item.value)}
      </Text>
    </Card>
  );

  return (
    <BaseView
      center={false}
      spaceBetween={true}
      color="main"
      margin="medium"
      bottomSpacer={true}
    >
      <Counter.Up />

      {laps.length > 0 && (
        <FlatList
          style={StopwatchStyle.laps}
          data={laps}
          keyExtractor={(lap) => lap.id}
          renderItem={(item) => renderLapItem(item)}
        ></FlatList>
      )}
      <View>
        <Button
          mode="contained"
          onPress={
            isActive && !isPaused
              ? () => reduxPauseCounter("up")
              : () => reduxStartCounter("up")
          }
        >
          {isActive && !isPaused ? t("actions.stop") : t("actions.start")}
        </Button>
        {isPaused && (
          <Button
            mode="outlined"
            onPress={() => {
              reduxResetCounter("up");
              setLaps([]);
            }}
          >
            {t("actions.reset")}
          </Button>
        )}
        {isActive && (
          <Button
            mode="text"
            onPress={() =>
              setLaps([{ id: new Date().getTime(), value: counter }, ...laps])
            }
          >
            {t("actions.lap")}
          </Button>
        )}
      </View>
    </BaseView>
  );
};

const mapStateToProps = ({
  counterReducer: {
    up: { isActive, isPaused, counter },
  },
}) => ({
  isActive,
  isPaused,
  counter,
});

const mapDispatchToProps = {
  reduxStartCounter: startCounter,
  reduxPauseCounter: pauseCounter,
  reduxResetCounter: resetCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Stopwatch);
