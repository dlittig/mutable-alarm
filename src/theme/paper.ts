import { DefaultTheme } from "react-native-paper";
import { Appearance } from "react-native-appearance";

console.log(Appearance.getColorScheme);

const values =
  Appearance.getColorScheme() === "dark"
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

export default theme;
