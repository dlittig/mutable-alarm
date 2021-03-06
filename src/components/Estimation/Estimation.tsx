import React, { FC } from "react";
import { Text } from "react-native-paper";
import { getTimeData, fill } from "../../utils/counter";

interface IEstimation {
  value: number;
  start: Date;
}

const Estimation: FC<IEstimation> = ({ value, start }) => {
  const timeData = getTimeData(value, true);

  start.setHours(start.getHours() + timeData.hours);
  start.setMinutes(start.getMinutes() + timeData.minutes);
  start.setSeconds(start.getSeconds() + timeData.seconds);

  return (
    <Text>
      Timer will finish at:{" "}
      {`${fill(start.getHours())}:${fill(
        start.getMinutes()
      )}:${fill(start.getSeconds())}`}
    </Text>
  );
};

export default Estimation;
