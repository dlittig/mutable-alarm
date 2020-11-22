import React, { FC, useState } from "react";

import uuid from "react-native-uuid";
import { connect } from "react-redux";
import { ToastAndroid } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput, FAB, Caption } from "react-native-paper";

import Routes from "../../routes";
import Time from "../../components/Time";
import { IAlarm } from "../../models/Alarm";
import { useTranslation } from "react-i18next";
import BaseView from "../../components/BaseView";
import { AddAlarmStyle } from "./AddAlarm.style";
import { addAlarm as addAlarmAction } from "../../store/actions";
import ScheduleDialog from "../../components/Dialogs/ScheduleDialog";

interface Props {
  reduxAddAlarm: (IAlarm) => void;
}

const AddAlarm: FC<Props> = ({ reduxAddAlarm }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const state = navigation.dangerouslyGetParent().dangerouslyGetState();

  const routeParams = state.routes[state.index].params;

  const take = (key, fallback) =>
    typeof routeParams !== "undefined" && typeof routeParams[key] !== undefined
      ? routeParams[key]
      : fallback;

  const [text, setText] = useState(take("name", ""));
  const [weekdays, setWeekdays] = useState(take("weekdays", []));
  const [time, setTime] = useState(take("time", new Date().getTime()));
  const [scheduleValue, setScheduleValue] = useState(take("scheduleValue", 0));
  const [scheduleMode, setScheduleMode] = useState(take("scheduleMode", null));

  const onSave = () => {
    if (text === "") {
      ToastAndroid.showWithGravityAndOffset(
        t("toasts.alarm_name_required"),
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        0,
        200
      );

      return false;
    }

    const model: IAlarm = {
      id: uuid.v1(),
      time: time,
      isMuted: false,
      isSnoozed: false,
      weekdays: weekdays,
      name: text,
      scheduleMode: scheduleMode,
      scheduleValue: scheduleValue,
    };

    reduxAddAlarm(model);
    navigation.navigate(Routes.APP_NAME);
  };

  const onDoneDialog = (value, mode, daysSelected) => {
    setScheduleValue(value);
    setScheduleMode(mode);
    setWeekdays(daysSelected);
  };

  return (
    <BaseView center={false} color="main" margin="medium">
      <Time time={new Date(time)} onChange={(time) => setTime(time)} />

      <TextInput
        mode="outlined"
        label={t("fields.name")}
        value={text}
        onChangeText={(text) => setText(text)}
      />

      <ScheduleDialog onDone={onDoneDialog} />

      <Caption>
        {weekdays.map((item) => item)}
        {" every "}
        {`${scheduleValue} ${scheduleMode}`}
      </Caption>

      <FAB
        style={AddAlarmStyle.fab}
        icon="check"
        label={t("actions.save")}
        onPress={onSave}
      />
    </BaseView>
  );
};

const mapDispatchToProps = {
  reduxAddAlarm: addAlarmAction,
};

export default connect(null, mapDispatchToProps)(AddAlarm);
