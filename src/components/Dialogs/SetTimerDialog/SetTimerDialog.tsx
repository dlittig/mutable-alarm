import React, { FC, useState } from "react";
import { View } from "react-native";
import { Dialog, Button, Portal, Text } from "react-native-paper";
import { timeDataToCounter } from "../../../utils/counter";
import NumberSelector from "../../NumberSelector";

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

  return (
    <Portal>
      <Dialog visible={isVisible} onDismiss={onCancel}>
        <Dialog.Title>Set timer</Dialog.Title>
        <Dialog.Content>
          <View style={SetTimerDialogStyle.selector}>
            <NumberSelector
              max={24}
              min={0}
              initialValue={initialValues.hours}
              callback={setHours}
            />
            <Text>:</Text>
            <NumberSelector
              max={60}
              min={0}
              initialValue={initialValues.minutes}
              callback={setMinutes}
            />
            <Text>:</Text>
            <NumberSelector
              max={60}
              min={0}
              initialValue={initialValues.seconds}
              callback={setSeconds}
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
            Set
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default SetTimerDialog;
