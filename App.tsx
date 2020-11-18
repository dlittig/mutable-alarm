import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { AppearanceProvider } from "react-native-appearance";
import { Provider } from "react-redux";
import { store } from "./src/store";
import getPaperTheme from "./src/theme/paper";
import getNavigationTheme from "./src/theme/navigation";

import RootNavigator from "./src/components/Navigation/RootNavigator";
import Menu from "./src/components/Menu/Menu";
import Navigator from "./src/services/NavigatorService";
import ThemeProvider from "./src/provider/ThemeProvider/ThemeProvider";
import { StatusBar } from "react-native";
import { THEMES } from "./src/store/constants/settingsConstants";
import { ThemeColors } from "./src/theme/colors/values";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./src/translations";
import { currentLocale } from "./src/utils";

const App = () => {
  const getBackgroundColor = (theme) => {
    switch (theme) {
      case THEMES.LIGHT:
        return ThemeColors.LightColors.card;
      case THEMES.DARK:
        return ThemeColors.DarkColors.card;
      case THEMES.BLACK:
        return ThemeColors.BlackColors.card;
    }
  };

  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: translations,
      lng: currentLocale,
      fallbackLng: "en-US",
      interpolation: {
        escapeValue: false,
      },
    });

  return (
    <Provider store={store}>
      <AppearanceProvider>
        <ThemeProvider>
          <ThemeProvider.Consumer>
            {(theme) => (
              <NavigationContainer
                theme={getNavigationTheme(theme)}
                ref={(navigationRef) => {
                  Navigator.setNavigator(navigationRef);
                }}
              >
                <PaperProvider theme={getPaperTheme(theme)}>
                  <StatusBar
                    barStyle={
                      theme === THEMES.LIGHT ? "dark-content" : "light-content"
                    }
                    animated={true}
                    backgroundColor={getBackgroundColor(theme)}
                  />
                  <RootNavigator />
                  <Menu.Panel />
                </PaperProvider>
              </NavigationContainer>
            )}
          </ThemeProvider.Consumer>
        </ThemeProvider>
      </AppearanceProvider>
    </Provider>
  );
};
export default App;
