import React, { useState } from "react";

import BaseView from "../../components/BaseView";
import Counter from "../../components/Counter";
import Estimation from "../../components/Estimation";

const Timer = () => {
  const INIT_VALUE = 86400;

  return (
    <BaseView center={false} color="main" margin="medium" bottomSpacer={true}>
      <Counter
        showLap={false}
        direction="down"
        timePreset={INIT_VALUE}
      />
    </BaseView>
  );
};

export default Timer;
