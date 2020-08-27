import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { Provider } from "react-redux";
import { store } from "./src/store";
import getPaperTheme from "./src/theme/paper";
import getNavigationTheme from "./src/theme/navigation";

import RootNavigator from "./src/components/Navigation";
import Menu from "./src/components/Menu/Menu";

const App = () => {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer theme={getNavigationTheme(colorScheme)}>
      <AppearanceProvider>
        <PaperProvider theme={getPaperTheme(colorScheme)}>
          <Provider store={store}>
            <RootNavigator />
            <Menu.Panel />
          </Provider>
        </PaperProvider>
      </AppearanceProvider>
    </NavigationContainer>
  );
};
export default App;
