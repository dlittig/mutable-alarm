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

const App = () => {
  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <AppearanceProvider>
        <ThemeProvider>
          <ThemeProvider.Consumer>
            {theme => (
              <NavigationContainer
                theme={getNavigationTheme(theme)}
                ref={(navigationRef) => {
                  Navigator.setNavigator(navigationRef);
                }}
              >
                <PaperProvider theme={getPaperTheme(theme)}>
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
