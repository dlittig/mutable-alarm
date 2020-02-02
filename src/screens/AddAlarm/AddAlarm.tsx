import React from "react";
import { View } from "react-native";
import { Text, TextInput, FAB, ToggleButton } from "react-native-paper";
import { connect } from "react-redux";
import { compose } from "redux";
import { withNavigation } from "react-navigation";
import { addAlarm as addAlarmAction } from "./../../store/actions";

import { AddAlarmStyle } from "./AddAlarm.style";
import DaySelectorRow from "../../components/DaySelectorRow";

interface Props {
  navigation: {
    goBack: any
  };
  reduxAddAlarm: any;
}

interface State {
  text: string;
  weekdays: object;
}

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
    }
  };

  onSave = () => {
    const { reduxAddAlarm, navigation } = this.props;
    const model = {
      name: this.state.text
    };

    reduxAddAlarm(model);
    navigation.goBack();
  };

  render() {
    const initialValues = {
      "monday": false,
      "tuesday": false,
      "wednesday": false,
      "thursday": false,
      "friday": false,
      "saturday": false,
      "sunday": false,
    }

    return (
      <View style={AddAlarmStyle.container}>
        <Text>I want to add an alarm!</Text>
        <TextInput
          mode="outlined"
          label="Name"
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
        />

        <DaySelectorRow initialValues={initialValues} />

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
