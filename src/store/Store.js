import { createStore, combineReducers } from "redux";
import reducers from "./reducers";

const persistConfig = {
  key: "root",
  storage
};

const reducer = combineReducers({
  ...reducers
});

const persistedReducer = persistReducer(persistConfig, reducer);

const initialState = {};

const store = createStore(persistedReducer, initialState);
const persistor = persistStore(store)

export { store, persistor };
