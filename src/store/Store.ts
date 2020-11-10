import { createStore, combineReducers } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import createSecureStore from "redux-persist-expo-securestore";
import reducers from "./reducers";

const persistConfig = {
  key: "root",
  storage: createSecureStore(),
  blacklist: ["panelReducer", "counterReducer"],
};

const reducer = persistCombineReducers(persistConfig, reducers);

const initialState = {};

const store = createStore(reducer, initialState);
const persistor = persistStore(store);

export { store, persistor };
