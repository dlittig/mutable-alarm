import React, { useState, useReducer } from "react";
import {
  Text,
  Button,
  Portal,
  Dialog,
  Paragraph,
  TextInput,
  RadioButton,
  Checkbox,
  ToggleButton,
} from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";

const initialState = { daysSelected: [] };

const TOGGLE_WEEKDAY = "[weekday] toggle";

function reducer(state, action) {
  switch (action.type) {
    case TOGGLE_WEEKDAY:
      if (!state.daysSelected.includes(action.day)) {
        // add
        return { daysSelected: [...state.daysSelected, action.day] };
      } else {
        // remove
        return {
          daysSelected: state.daysSelected.filter(
            (item) => item !== action.day
          ),
        };
      }
    default:
      throw new Error();
  }
}

const style = StyleSheet.create({
  view: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

const ScheduleDialog = ({ onDone }) => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("2");
  const [mode, setMode] = useState("week");
  const [state, dispatch] = useReducer(reducer, initialState);
  const weekdays = ["mo", "tue", "wed", "thu", "fri", "sat", "sun"];

  return (
    <View>
      <Button mode="outlined" onPress={() => setVisible(true)}>
        {t("actions.setup_schedule")}
      </Button>
      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Title>{t("dialogs.custom_schedule.title")}</Dialog.Title>
          <Dialog.Content>
            <TextInput
              mode="outlined"
              label={t("dialogs.custom_schedule.every")}
              value={value}
              onChangeText={(text) => setValue(text)}
            />

            <RadioButton.Group
              onValueChange={(value) => setMode(value)}
              value={mode}
            >
              <View style={style.view}>
                <RadioButton value="days" />
                <Text>{t("dialogs.custom_schedule.days")}</Text>
              </View>
              <View style={style.view}>
                <RadioButton value="week" />
                <Text>{t("dialogs.custom_schedule.weeks")}</Text>
              </View>
            </RadioButton.Group>

            {weekdays.map((day, index) => (
              <View key={index} style={style.view}>
                <Checkbox
                  status={
                    state.daysSelected.includes(day) ? "checked" : "unchecked"
                  }
                  onPress={() => {
                    dispatch({ type: TOGGLE_WEEKDAY, day });
                  }}
                />
                <Text>{t(`dialogs.custom_schedule.${day}`)}</Text>
              </View>
            ))}
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>{t("actions.cancel")}</Button>
            <Button
              onPress={() => {
                setVisible(false);
                onDone(value, mode, state.daysSelected);
              }}
            >
              {t("actions.save")}
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default ScheduleDialog;
