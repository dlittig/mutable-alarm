import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { THEMES } from "../store/constants/settingsConstants";

const get = (scheme) => {
  const values =
    scheme === THEMES.DARK
      ? require("./colors/values").dark
      : require("./colors/values").light;

  let theme = {};

  if (scheme === THEMES.DARK || scheme === THEMES.BLACK) {
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
