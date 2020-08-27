import { DefaultTheme } from "react-native-paper";

const get = (scheme) => {
  const values =
    scheme === "dark"
      ? require("./colors/values").dark
      : require("./colors/values").light;

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: values.primary,
      accent: values.accent,
    },
  };

  return theme;
};

export default get;
