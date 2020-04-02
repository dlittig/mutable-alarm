import React from "react";
import Navigation from "./src/components/Navigation";
import { Provider } from "react-redux";

import { store, persistor} from './src/store'

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App
