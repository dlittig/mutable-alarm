import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
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
import { dark, light } from "./src/theme/colors/values";

const App = () => {
  const colorScheme = useColorScheme();

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
                    backgroundColor={theme === THEMES.LIGHT ? light.card : dark.card}
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
