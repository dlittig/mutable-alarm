import { DefaultTheme } from '@react-navigation/native';
import { Appearance } from "react-native-appearance";

const values =
  Appearance.getColorScheme() === "dark"
    ? require("./colors/values").dark
    : require("./colors/values").light;

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: values.primary,
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: values.navigation,
  },
};

export default theme
