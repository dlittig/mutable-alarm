import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { AppearanceProvider } from "react-native-appearance";
import { Provider } from "react-redux";
import { store } from "./src/store";
import paperTheme from "./src/theme/paper";
import navigationTheme from "./src/theme/navigation";

import RootNavigator from "./src/components/Navigation";
import Menu from "./src/components/Menu/Menu";

const App = () => (
  <NavigationContainer theme={navigationTheme}>
    <AppearanceProvider>
      <PaperProvider theme={paperTheme}>
        <Provider store={store}>
          <RootNavigator />
          <Menu.Panel />
        </Provider>
      </PaperProvider>
    </AppearanceProvider>
  </NavigationContainer>
);

export default App;
