import React, { useState } from "react";
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
  },
});

const MuteDialog = ({ onAccept, onCancel, isVisible }) => {
  const { t } = useTranslation();
  const [muteIndefinitely, setMuteIndefinitely] = useState(false);
  const [daysToMute, setDaysToMute] = useState("0");
  const isNumeric = (value) => !isNaN(parseFloat(value)) && isFinite(value);

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
              <Text>Alarm will ring again at: ?</Text>
            </>
          )}
          <View style={MuteDialogStyle.view}>
            <Checkbox
              status={muteIndefinitely ? "checked" : "unchecked"}
              onPress={() => setMuteIndefinitely(!muteIndefinitely)}
            />
            <Text>Mute indefinitely</Text>
          </View>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onCancel}>{t("actions.cancel")}</Button>
          <Button onPress={onAccept}>{t("actions.accept")}</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default MuteDialog;
