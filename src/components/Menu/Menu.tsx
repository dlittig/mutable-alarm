import React from "react";
import { connect } from "react-redux";
import { IconButton } from "react-native-paper";
import { openPanel } from "../../store/actions/panelActions";

import Panel from "./Menu.Panel";

const Menu = ({reduxOpenPanel}) => {
  return (
    <IconButton
      icon="dots-vertical"
      size={25}
      onPress={reduxOpenPanel}
    />
  );
};

Menu.Panel = Panel;

const mapDispatchToProps = {
  reduxOpenPanel: openPanel,
};

export default connect(null, mapDispatchToProps)(Menu);

