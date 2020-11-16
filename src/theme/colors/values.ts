interface IColors {
  primary: string;
  accent: string;
  card: string;
  cardHighlight: string;
  cardShadow: string;
  text: string;
  background: string;
}

const dark: IColors = {
  primary: "#077aff",
  accent: "#077aff",
  card: "#333333",
  cardHighlight: "#444444",
  cardShadow: "",
  text: "#ffffff",
  background: "#222",
};

const light: IColors = {
  primary: "#077aff",
  accent: "#077aff",
  card: "#ffffff",
  cardHighlight: "#eeeeee",
  cardShadow: "#000",
  text: "rgb(28, 28, 30)",
  background: "rgb(242, 242, 242)",
};

export { dark, light };
