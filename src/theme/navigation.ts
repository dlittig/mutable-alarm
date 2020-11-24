import { DefaultTheme, DarkTheme, Theme } from "@react-navigation/native";
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

  let theme: Theme = {} as Theme;

  if (scheme === THEMES.DARK) {
    theme = {
      ...DarkTheme,
      dark: scheme !== THEMES.LIGHT,
      colors: {
        ...DarkTheme.colors,
        primary: values.primary,
        background: values.background,
        card: values.card,
        notification: values.card,
        text: values.text,
        border: values.background,
      },
    };
  } else if (scheme === THEMES.BLACK) {
    theme = {
      ...DarkTheme,
      dark: scheme !== THEMES.LIGHT,
      colors: {
        ...DarkTheme.colors,
        primary: values.primary,
        background: values.background,
        card: values.card,
        notification: values.card,
        text: values.text,
        border: values.cardHighlight,
      },
    };
  } else {
    theme = {
      dark: scheme !== THEMES.LIGHT,
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        primary: values.primary,
        background: values.background,
        notification: values.card,
        card: values.card,
        text: values.text,
        border: values.background,
      },
    };
  }

  return theme;
};

export default get;
