export interface IColors {
  primary: string;
  accent: string;
  card: string;
  cardHighlight: string;
  cardShadow: string;
  text: string;
  textInactive: string;
  background: string;
}

interface IThemeColors {
  DarkColors: IColors;
  LightColors: IColors;
  BlackColors: IColors;
}

const DarkColors: IColors = {
  primary: "#077aff",
  accent: "#077aff",
  card: "#333333",
  cardHighlight: "#444444",
  cardShadow: "#3f3f3f",
  text: "#ffffff",
  textInactive: "#bbbbbb",
  background: "#222",
};

const BlackColors: IColors = {
  primary: "#077aff",
  accent: "#077aff",
  card: "#000000",
  cardHighlight: "#444444",
  cardShadow: "#000000",
  text: "#ffffff",
  textInactive: "#bbbbbb",
  background: "#000000",
};

const LightColors: IColors = {
  primary: "#077aff",
  accent: "#077aff",
  card: "#ffffff",
  cardHighlight: "#eeeeee",
  cardShadow: "#000",
  text: "rgb(28, 28, 30)",
  textInactive: "#666",
  background: "rgb(242, 242, 242)",
};

export const ThemeColors: IThemeColors = {
  DarkColors,
  LightColors,
  BlackColors,
};
