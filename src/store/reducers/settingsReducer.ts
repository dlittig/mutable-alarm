import * as SettingsConstants from "../constants/settingsConstants";
import produce from "immer";

interface ISettingsState {
  theme: "light" | "dark" | "black" | "auto"
}

const initialState: ISettingsState = {
  theme: "auto",
};

export const settingsReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case SettingsConstants.SETTINGS_THEME_AUTO: {
      state.theme = "auto"
      break;
    }
    case SettingsConstants.SETTINGS_THEME_LIGHT: {
      state.theme = "light"
      break;
    }
    case SettingsConstants.SETTINGS_THEME_DARK: {
      state.theme = "dark"
      break;
    }
    case SettingsConstants.SETTINGS_THEME_BLACK: {
      state.theme = "black"
      break;
    }
  }
}, initialState);
