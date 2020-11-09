import React, { FC } from "react";
import { Text } from "react-native-paper";
import { getTimeData, fill } from "../../utils/counter";

interface IEstimation {
  value: number;
  start: Date;
}

const Estimation: FC<IEstimation> = ({ value, start }) => {
  const timeData = getTimeData(value, true);

  console.log("G", start.toTimeString())

  start.setHours(start.getHours() + timeData.hours + 1);
  start.setMinutes(start.getMinutes() + timeData.minutes);
  start.setSeconds(start.getSeconds() + timeData.seconds);

  return (
    <Text>
      Will fire at:{" "}
      {`${fill(start.getHours())}:${fill(
        start.getMinutes()
      )}:${fill(start.getSeconds())}`}
    </Text>
  );
};

export default Estimation;
