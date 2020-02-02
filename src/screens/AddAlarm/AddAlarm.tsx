import React from "react";
import { View } from "react-native";
import { Text, TextInput, FAB } from "react-native-paper";
import { connect } from "react-redux";
import { compose } from "redux";
import { withNavigation } from "react-navigation";
import { addAlarm as addAlarmAction } from "../../store/actions";

import { AddAlarmStyle } from "./AddAlarm.style";
import DaySelectorRow from "../../components/DaySelectorRow";
import Time from "../../components/Time";

interface Props {
  navigation: {
    navigate: any;
  };
  reduxAddAlarm: any;
}

interface State {
  text: string;
  weekdays: object;
  time: string;
}

const INITIAL_VALUES = {
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false,
  saturday: false,
  sunday: false
};

class AddAlarm extends React.Component<Props, State> {
  state = {
    text: "",
    weekdays: {
      Mo: false,
      Tu: false,
      We: false,
      Th: false,
      Fr: false,
      Sa: false,
      Su: false
    },
    time: new Date().toString()
  };

  onSave = () => {
    const { reduxAddAlarm, navigation } = this.props;
    const model = {
      id: new Date().getTime(),
      time: this.state.time,
      isEnabled: true, isMuted : false,
      isSnoozed: false,
      days: 0,
      name: this.state.text
    };

    reduxAddAlarm(model);
    navigation.navigate("Main");
  };

  render() {
    return (
      <View style={AddAlarmStyle.container}>
        <Time time={this.state.time} onChange={time => this.setState({time})} />

        <DaySelectorRow initialValues={INITIAL_VALUES} />

        <TextInput
          mode="outlined"
          label="Name"
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
        />

        <FAB
          style={AddAlarmStyle.fab}
          icon="plus"
          label="Add"
          onPress={this.onSave}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ navigation }) => ({ navigation });

const mapDispatchToProps = {
  reduxAddAlarm: addAlarmAction
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withNavigation
);

export default enhance(AddAlarm);
