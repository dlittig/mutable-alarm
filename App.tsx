import React from "react";
//import Navigation from "./src/components/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";

import { store, persistor } from "./src/store";
import RootNavigator from "./src/components/Navigation/RootNavigator";

const App = () => (
  <NavigationContainer>
    <PaperProvider>
      <Provider store={store}>
        {/*<Navigation />*/}
        <RootNavigator />
      </Provider>
    </PaperProvider>
  </NavigationContainer>
);

export default App;
