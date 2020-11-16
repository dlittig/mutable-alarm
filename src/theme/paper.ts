import { DefaultTheme, DarkTheme } from "react-native-paper";

const get = (scheme) => {
  const values =
    scheme === "dark"
      ? require("./colors/values").dark
      : require("./colors/values").light;

  let theme = null;

  if (scheme === "dark") {
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
