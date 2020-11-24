import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import {
  Dialog,
  Button,
  Portal,
  Paragraph,
  Checkbox,
  Text,
  TextInput,
} from "react-native-paper";

const MuteDialogStyle = StyleSheet.create({
  view: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: -8,
    marginTop: 16,
  },
  helpText: {
    marginTop: 4,
  },
});

interface IMuteDialog {
  onAccept: (boolean, string) => void;
  onCancel: () => void;
  isVisible: boolean;
}

const MuteDialog: FC<IMuteDialog> = ({ onAccept, onCancel, isVisible }) => {
  const { t } = useTranslation();
  const [muteIndefinitely, setMuteIndefinitely] = useState(false);
  const [daysToMute, setDaysToMute] = useState("0");
  const isNumeric = (value) => !isNaN(parseFloat(value)) && isFinite(value);

  const date = new Date();
  date.setDate(date.getDate() + 1 + parseInt(daysToMute));

  return (
    <Portal>
      <Dialog visible={isVisible} onDismiss={onCancel}>
        <Dialog.Title>Set mute duration</Dialog.Title>
        <Dialog.Content>
          {!muteIndefinitely && (
            <>
              <TextInput
                mode="outlined"
                label={"Number of days to mute"}
                value={daysToMute}
                onChangeText={(text) =>
                  isNumeric(text) ? setDaysToMute(text) : null
                }
              />
              <Text style={MuteDialogStyle.helpText}>
                Alarm will ring again on
                {` ${date.getDate()}.${
                  date.getMonth() + 1
                }.${date.getFullYear()}`}
              </Text>
            </>
          )}
          <View style={MuteDialogStyle.view}>
            <Checkbox
              status={muteIndefinitely ? "checked" : "unchecked"}
              onPress={() => setMuteIndefinitely(!muteIndefinitely)}
            />
            <Text onPress={() => setMuteIndefinitely(!muteIndefinitely)}>
              Mute indefinitely
            </Text>
          </View>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => onCancel()}>{t("actions.cancel")}</Button>
          <Button onPress={() => onAccept(muteIndefinitely, daysToMute)}>
            {t("actions.accept")}
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default MuteDialog;
