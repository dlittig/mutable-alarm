import React from "react";
import { connect } from "react-redux";
import { IconButton } from "react-native-paper";
import { openPanel } from "../../store/actions/panelActions";

import Panel from "./Menu.Panel";
import ThemeProvider from "../../provider/ThemeProvider/ThemeProvider";
import { THEMES } from "../../store/constants/settingsConstants";
import { dark, light } from "../../theme/colors/values";

const Menu = ({ reduxOpenPanel }) => (
  <ThemeProvider.Consumer>
    {(theme) => (
      <IconButton
        color={theme === THEMES.LIGHT ? light.text : dark.text}
        icon="dots-vertical"
        size={25}
        onPress={reduxOpenPanel}
      />
    )}
  </ThemeProvider.Consumer>
);

Menu.Panel = Panel;

const mapDispatchToProps = {
  reduxOpenPanel: openPanel,
};

export default connect(null, mapDispatchToProps)(Menu);
