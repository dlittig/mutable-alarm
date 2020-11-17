import React from "react";
import { connect } from "react-redux";
import { IconButton } from "react-native-paper";
import { openPanel } from "../../store/actions/panelActions";

import Panel from "./Menu.Panel";
import ThemeProvider from "../../provider/ThemeProvider/ThemeProvider";
import { THEMES } from "../../store/constants/settingsConstants";
import { ThemeColors } from "../../theme/colors/values";

const getColor = (theme) => {
  switch (theme) {
    case THEMES.LIGHT:
      return ThemeColors.LightColors.text;
    case THEMES.DARK:
      return ThemeColors.DarkColors.text;
    case THEMES.BLACK:
      return ThemeColors.BlackColors.text;
  }
};

const Menu = ({ reduxOpenPanel }) => (
  <ThemeProvider.Consumer>
    {(theme) => (
      <IconButton
        color={getColor(theme)}
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
