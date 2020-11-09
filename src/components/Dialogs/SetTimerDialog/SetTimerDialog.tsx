import React, { FC, useState } from "react";
import { View } from "react-native";
import InputSpinner from "react-native-input-spinner";
import { Dialog, Button, Portal, Paragraph, Text } from "react-native-paper";
import { timeDataToCounter } from "../../../utils/counter";

import { SetTimerDialogStyle } from "./SetTimerDialog.style";

interface ISetTimerDialog {
  onAccept: any;
  onCancel: any;
  isVisible: boolean;
  initialValues: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

const SetTimerDialog: FC<ISetTimerDialog> = ({
  onAccept,
  onCancel,
  isVisible,
  initialValues,
}) => {
  const [hours, setHours] = useState(initialValues.hours);
  const [minutes, setMinutes] = useState(initialValues.minutes);
  const [seconds, setSeconds] = useState(initialValues.seconds);

  const Selector = ({ min, max, value, callback }) => (
    <InputSpinner
      max={max}
      min={min}
      step={1}
      buttonLeftText="&nbsp;&nbsp;&nbsp;&#9002;"
      buttonRightText="&#9001;&nbsp;&nbsp;&nbsp;"
      buttonStyle={SetTimerDialogStyle.button}
      style={SetTimerDialogStyle.stacked}
      colorMax={"#f04048"}
      colorMin={"#40c5f4"}
      value={value}
      onChange={(val) => callback(val)}
      onKeyPress={(e) => console.log("CAPTURED", e)}
    />
  );

  return (
    <Portal>
      <Dialog visible={isVisible} onDismiss={onCancel}>
        <Dialog.Title>Set timer</Dialog.Title>
        <Dialog.Content>
          <View style={SetTimerDialogStyle.selector}>
            <Selector max={24} min={0} value={hours} callback={setHours} />
            <Text>:</Text>
            <Selector max={60} min={0} value={minutes} callback={setMinutes} />
            <Text>:</Text>
            <Selector max={60} min={0} value={seconds} callback={setSeconds} />
          </View>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onCancel}>Cancel</Button>
          <Button
            onPress={() =>
              onAccept(timeDataToCounter({ hours, minutes, seconds }))
            }
          >
            Set
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default SetTimerDialog;
