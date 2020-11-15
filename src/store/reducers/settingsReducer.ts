import * as SettingsConstants from "../constants/settingsConstants";
import produce from "immer";

interface ISettingsState {
  theme: "light" | "dark" | "black" | "auto";
}

const initialState: ISettingsState = {
  theme: "auto",
};

export const settingsReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case SettingsConstants.SETTINGS_APPLY_THEME: {
      state.theme = action.payload;
      break;
    }
  }
}, initialState);
