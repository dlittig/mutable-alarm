import React from "react";
import { View } from "react-native";
import { List } from "react-native-paper";
import { connect } from "react-redux";
import { SwipeablePanel } from "rn-swipeable-panel";

import R from "../../routes";
import Navigator from "../../services/NavigatorService";
import { closePanel } from "../../store/actions/panelActions";

const Panel = ({ panelIsOpen, reduxClosePanel, navigation }) => {
  const panelProps = {
    fullWidth: true,
    showCloseButton: true,
    onClose: () => reduxClosePanel(),
    onPressCloseButton: () => reduxClosePanel(),
  };

  const navigate = (routeName) => {
    reduxClosePanel();
    setTimeout(() => Navigator.navigate(routeName), 200);
  };

  return (
    <SwipeablePanel {...panelProps} isActive={panelIsOpen}>
      <View>
        <List.Item
          title="Donate"
          description="Buy me a coffee"
          left={(props) => <List.Icon {...props} icon="gift" />}
          onPress={() => navigate(R.DONATE)}
        />
        <List.Item
          title="Settings"
          description="Configure app behaviour"
          left={(props) => <List.Icon {...props} icon="cogs" />}
          onPress={() => navigate(R.SETTINGS)}
        />
        <List.Item
          title="About"
          description="License and more info"
          left={(props) => <List.Icon {...props} icon="information" />}
          onPress={() => navigate(R.ABOUT)}
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
