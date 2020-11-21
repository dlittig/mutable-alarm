import React, { FC } from "react";
import { Button } from "react-native-paper";
import { View } from "react-native";
import { connect } from "react-redux";

import BaseView from "../../components/BaseView";
import Counter from "../../components/Counter";
import Estimation from "../../components/Estimation";
import {
  pauseCounter,
  resetCounter,
  startCounter,
} from "../../store/actions/counterActions";
import { useTranslation } from "react-i18next";

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
}) => {
  const { t } = useTranslation();

  return (
    <BaseView
      spaceBetween={true}
      center={false}
      color="main"
      margin="medium"
      bottomSpacer={true}
    >
      <Counter.Down />

      {isActive && <Estimation value={initialValue} start={activated} />}

      <View>
        <Button
          mode="contained"
          onPress={
            isActive && !isPaused
              ? () => reduxPauseCounter("down")
              : () => reduxStartCounter("down")
          }
        >
          {isActive && !isPaused ? t("actions.stop") : t("actions.start")}
        </Button>
        {isPaused && (
          <Button
            mode="outlined"
            onPress={() => {
              reduxResetCounter("down");
            }}
          >
            {t("actions.reset")}
          </Button>
        )}
      </View>
    </BaseView>
  );
};

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
