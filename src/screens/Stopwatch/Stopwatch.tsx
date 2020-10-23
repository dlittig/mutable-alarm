import React from "react";

import BaseView from "../../components/BaseView";
import Counter from "../../components/Counter/Counter";

const Stopwatch = () => {
  return (
    <BaseView center={false} color="main" margin="medium" bottomSpacer={true}>
      <Counter showLap={true} direction="up" timePreset={0} />
    </BaseView>
  );
};

export default Stopwatch;
