import React, { FC, useState } from "react";
import { View } from "react-native";
import InputSpinner from "react-native-input-spinner";
import { Dialog, Button, Portal, Paragraph } from "react-native-paper";
import { timeDataToCounter } from "../../../utils/counter";

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

  return (
    <Portal>
      <Dialog visible={isVisible} onDismiss={onCancel}>
        <Dialog.Title>Set timer</Dialog.Title>
        <Dialog.Content>
          <View>
            <Paragraph>Hours</Paragraph>
            <InputSpinner
              max={24}
              min={0}
              step={1}
              colorMax={"#f04048"}
              colorMin={"#40c5f4"}
              value={hours}
              onChange={(val) => setHours(val)}
            />

            <Paragraph>Minutes</Paragraph>
            <InputSpinner
              max={60}
              min={0}
              step={1}
              colorMax={"#f04048"}
              colorMin={"#40c5f4"}
              value={minutes}
              onChange={(val) => setMinutes(val)}
            />

            <Paragraph>Seconds</Paragraph>
            <InputSpinner
              max={60}
              min={0}
              step={1}
              colorMax={"#f04048"}
              colorMin={"#40c5f4"}
              value={seconds}
              onChange={(val) => setSeconds(val)}
            />
          </View>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onCancel}>Cancel</Button>
          <Button
            onPress={() =>
              onAccept(timeDataToCounter({ hours, minutes, seconds }))
            }
          >
            Okay
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default SetTimerDialog;
