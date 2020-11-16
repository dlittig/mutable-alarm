import React from "react";
import { StatusBar } from "react-native";
import ThemeProvider from "../../provider/ThemeProvider/ThemeProvider";
import { THEMES } from "../../store/constants/settingsConstants";

const Statusbar = (
  <ThemeProvider.Consumer>
    {(theme) => (
      <StatusBar
        barStyle={theme === THEMES.LIGHT ? "light-content" : "dark-content"}
        //backgroundColor="#ecf0f1"
      />
    )}
  </ThemeProvider.Consumer>
);

export default Statusbar;
