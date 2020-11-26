import React, { FC, useState } from "react";

import uuid from "react-native-uuid";
import { connect } from "react-redux";
import { ToastAndroid } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput, FAB, Caption } from "react-native-paper";

import Routes from "../../routes";
import Time from "../../components/Time";
import { DAYS, IAlarm } from "../../models/Alarm";
import { useTranslation } from "react-i18next";
import BaseView from "../../components/BaseView";
import { AddAlarmStyle } from "./AddAlarm.style";
import { addAlarm as addAlarmAction, updateAlarm } from "../../store/actions";
import ScheduleDialog from "../../components/Dialogs/ScheduleDialog";

interface Props {
  reduxAddAlarm: (IAlarm) => void;
  reduxUpdateAlarm: (IAlarm) => void;
}

const AddAlarm: FC<Props> = ({ reduxAddAlarm, reduxUpdateAlarm }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const state = navigation.dangerouslyGetParent().dangerouslyGetState();

  const routeParams = state.routes[state.index].params as IAlarm;

  const take = (key, fallback) =>
    typeof routeParams !== "undefined" && typeof routeParams[key] !== undefined
      ? routeParams[key]
      : fallback;

  const [text, setText] = useState(take("name", ""));
  const [weekdays, setWeekdays] = useState<Array<DAYS>>(take("weekdays", []));
  const [time, setTime] = useState<number>(take("time", new Date().getTime()));
  const [scheduleValue, setScheduleValue] = useState<string>(
    take("scheduleValue", "0")
  );
  const [scheduleMode, setScheduleMode] = useState<string | null>(
    take("scheduleMode", null)
  );

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

    // Setting to start of linux epoch to save data in storage
    const finalDate = new Date(time);
    finalDate.setFullYear(1970);
    finalDate.setMonth(0);
    finalDate.setDate(1);

    const model: IAlarm = {
      id: uuid.v1(),
      name: text,
      time: finalDate.getTime(),
      isMuted: false,
      mutedUntil: null,
      isSnoozed: false,
      weekdays: weekdays,
      scheduleMode: scheduleMode,
      scheduleValue: scheduleValue,
    };

    if (typeof routeParams !== "undefined") {
      if (typeof routeParams["id"] !== "undefined" && routeParams.id !== null) {
        model.id = routeParams.id;
        reduxUpdateAlarm(model);
      }
    } else {
      reduxAddAlarm(model);
    }

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
  reduxUpdateAlarm: updateAlarm,
};

export default connect(null, mapDispatchToProps)(AddAlarm);
