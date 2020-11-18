import React from "react";
import { connect } from "react-redux";
import getPaperTheme from "../../theme/paper";
import { Provider as PaperProvider } from "react-native-paper";
import { useColorScheme } from "react-native-appearance";
import { store } from "../../store";
import { THEMES } from "../../store/constants/settingsConstants";

export const ThemeContext = React.createContext(
  store.getState().settingsReducer.theme
);

const ThemeProvider = ({ children, theme }) => {
  let scheme = theme;
  const colorScheme = useColorScheme();

  if (theme === THEMES.AUTO) {
    switch (colorScheme) {
      case "dark":
        scheme = THEMES.DARK;
        break;
      case "light":
        scheme = THEMES.LIGHT;
        break;
    }
  }

  return (
    <ThemeContext.Provider value={scheme}>
      <PaperProvider theme={getPaperTheme(scheme)}>{children}</PaperProvider>
    </ThemeContext.Provider>
  );
};

const mapStateToProps = ({ settingsReducer: { theme } }) => ({ theme });

ThemeProvider.Consumer = ThemeContext.Consumer;

export default connect(mapStateToProps)(ThemeProvider);
