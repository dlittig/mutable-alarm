import React from "react";
import Navigation from "./src/components/Navigation";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";

import { store, persistor } from "./src/store";

const App = () => (
  <PaperProvider>
    <Provider store={store}>
      <Navigation />
    </Provider>
  </PaperProvider>
);

export default App;
