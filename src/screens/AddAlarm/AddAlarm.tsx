import React, { FC, useState } from "react";
import { compose } from "redux";
import uuid from "react-native-uuid";
import { connect } from "react-redux";
import { View, ToastAndroid } from "react-native";
import { TextInput, FAB, Caption } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";

import Routes from "../../routes";
import Alarm from "../../models/Alarm";
import Time from "../../components/Time";
import { AddAlarmStyle } from "./AddAlarm.style";
import ScheduleDialog from "../../components/ScheduleDialog";
import { addAlarm as addAlarmAction } from "../../store/actions";

interface Props {
  reduxAddAlarm: (object) => void;
}

interface IRouteProps {
  params: {
    text: string;
    weekdays: Array<string>;
    time: number;
    scheduleValue: number;
    scheduleMode: string;
  };
}

const AddAlarm: FC<Props> = ({ reduxAddAlarm }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params;

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
        "Please give your alarm a name!",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        0,
        200
      );

      return false;
    }

    const model = new Alarm();
    model.id = uuid.v1();
    model.time = time;
    model.isMuted = false;
    model.isSnoozed = false;
    model.weekdays = weekdays;
    model.name = text;
    model.scheduleMode = scheduleMode;
    model.scheduleValue = scheduleValue;

    reduxAddAlarm(model);
    navigation.navigate(Routes.APP_NAME);
  };

  const onDoneDialog = (value, mode, daysSelected) => {
    setScheduleValue(value);
    setScheduleMode(mode);
    setWeekdays(daysSelected);
  };

  return (
    <View style={AddAlarmStyle.container}>
      <Time time={new Date(time)} onChange={(time) => setTime(time)} />

      <TextInput
        mode="outlined"
        label="Name"
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
        label="Save"
        onPress={onSave}
      />
    </View>
  );
};

const mapDispatchToProps = {
  reduxAddAlarm: addAlarmAction,
};

const enhance = compose(connect(null, mapDispatchToProps));

export default enhance(AddAlarm);
