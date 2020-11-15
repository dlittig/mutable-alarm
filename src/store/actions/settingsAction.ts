import * as SettingsConstants from "../constants/settingsConstants";

export const applyTheme = (theme) => ({
  type: SettingsConstants.SETTINGS_APPLY_THEME,
  payload: theme
});
