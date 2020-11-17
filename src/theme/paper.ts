import { DefaultTheme, DarkTheme } from "react-native-paper";
import { THEMES } from "../store/constants/settingsConstants";
import { ThemeColors, IColors } from "./colors/values";

const get = (scheme) => {
  let values: IColors = null;

  switch (scheme) {
    case THEMES.BLACK:
      values = ThemeColors.BlackColors;
      break;
    case THEMES.LIGHT:
      values = ThemeColors.LightColors;
      break;
    case THEMES.DARK:
      values = ThemeColors.DarkColors;
      break;
  }

  let theme = null;

  if (scheme === THEMES.DARK || scheme === THEMES.BLACK) {
    theme = {
      ...DarkTheme,
      roundness: 2,
      colors: {
        ...DarkTheme.colors,
        primary: values.primary,
        accent: values.accent,
      },
    };
  } else {
    theme = {
      ...DefaultTheme,
      roundness: 2,
      colors: {
        ...DefaultTheme.colors,
        primary: values.primary,
        accent: values.accent,
      },
    };
  }

  return theme;
};

export default get;
