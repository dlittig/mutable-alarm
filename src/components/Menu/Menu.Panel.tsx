import React from "react";
import { connect } from "react-redux";
import { SwipeablePanel } from "rn-swipeable-panel";
import { View } from "react-native";
import { List } from "react-native-paper";
import { closePanel } from "../../store/actions/panelActions";

const Panel = ({ panelIsOpen, reduxClosePanel }) => {
  const panelProps = {
    fullWidth: true,
    showCloseButton: true,
    onClose: () => reduxClosePanel(),
    onPressCloseButton: () => reduxClosePanel(),
  };

  return (
    <SwipeablePanel {...panelProps} isActive={panelIsOpen}>
      <View>
        <List.Item
          title="Donate"
          description="Buy me a coffee"
          left={(props) => <List.Icon {...props} icon="gift" />}
          onPress={() => {}}
        />
        <List.Item
          title="Settings"
          description="Configure app behaviour"
          left={(props) => <List.Icon {...props} icon="cogs" />}
          onPress={() => {}}
        />
        <List.Item
          title="About"
          description="License and more info"
          left={(props) => <List.Icon {...props} icon="information" />}
          onPress={() => {}}
        />
      </View>
    </SwipeablePanel>
  );
};

const mapStateToProps = ({ panelReducer: { panelIsOpen } }) => ({
  panelIsOpen,
});

const mapDispatchToProps = {
  reduxClosePanel: closePanel,
};

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
