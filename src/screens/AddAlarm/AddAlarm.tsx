import React from "react";
import { View, ToastAndroid } from "react-native";
import uuid from "react-native-uuid";
import { TextInput, FAB, Caption } from "react-native-paper";
import { connect } from "react-redux";
import { compose } from "redux";
import { withNavigation } from "react-navigation";
import { addAlarm as addAlarmAction } from "../../store/actions";

import { AddAlarmStyle } from "./AddAlarm.style";
import Time from "../../components/Time";
import ScheduleDialog from "../../components/ScheduleDialog";
import Alarm from "../../models/Alarm";
import Routes from "../../routes";

interface Props {
  navigation: {
    navigate: any;
  };
  reduxAddAlarm: (object) => void;
}

interface State {
  text: string;
  weekdays: Array<string>;
  time: number;
  scheduleValue: number;
  scheduleMode: string | null;
}

class AddAlarm extends React.Component<Props, State> {
  state = {
    text: "",
    weekdays: [],
    time: new Date().getTime(),
    scheduleValue: 0,
    scheduleMode: null,
  };

  onSave = () => {
    if (this.state.text === "") {
      ToastAndroid.showWithGravityAndOffset(
        "Please give your alarm a name!",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        0,
        200
      );

      return false;
    }

    const { reduxAddAlarm, navigation } = this.props;
    const model = new Alarm();
    model.id = uuid.v1();
    model.time = this.state.time;
    model.isMuted = false;
    model.isSnoozed = false;
    model.weekdays = this.state.weekdays;
    model.name = this.state.text;

    reduxAddAlarm(model);
    navigation.navigate(Routes.APP_NAME);
  };

  onDoneDialog = (value, mode, daysSelected) => {
    this.setState({
      scheduleValue: value,
      scheduleMode: mode,
      weekdays: daysSelected,
    });
  };

  render() {
    return (
      <View style={AddAlarmStyle.container}>
        <Time
          time={new Date(this.state.time)}
          onChange={(time) => this.setState({ time })}
        />

        <TextInput
          mode="outlined"
          label="Name"
          value={this.state.text}
          onChangeText={(text) => this.setState({ text })}
        />

        <ScheduleDialog onDone={this.onDoneDialog} />

        <Caption>
          { this.state.weekdays.map(item => item)}
          { " every "}
          { `${this.state.scheduleValue} ${this.state.scheduleMode}`}
        </Caption>

        <FAB
          style={AddAlarmStyle.fab}
          icon="check"
          label="Save"
          onPress={this.onSave}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ navigation }) => ({ navigation });

const mapDispatchToProps = {
  reduxAddAlarm: addAlarmAction,
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withNavigation
);

export default enhance(AddAlarm);
