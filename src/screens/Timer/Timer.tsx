import React from "react";

import BaseView from "../../components/BaseView";
import Counter from "../../components/Counter";

const Timer = () => (
  <BaseView center={false} color="main" margin="medium" bottomSpacer={true}>
    <Counter showLap={false} direction="down" timePreset={86400} />
  </BaseView>
);

export default Timer;
