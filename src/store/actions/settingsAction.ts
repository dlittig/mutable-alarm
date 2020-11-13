import * as SettingsConstants from "../constants/settingsConstants";

export const applyLightTheme = () => ({
  type: SettingsConstants.SETTINGS_THEME_LIGHT,
});

export const applyDarkTheme = () => ({
  type: SettingsConstants.SETTINGS_THEME_DARK,
});

export const applyBlackTheme = () => ({
  type: SettingsConstants.SETTINGS_THEME_BLACK,
});

export const applyAutoTheme = () => ({
  type: SettingsConstants.SETTINGS_THEME_AUTO,
});
