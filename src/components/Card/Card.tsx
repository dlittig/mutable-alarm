import React, { FC, ReactNode } from "react";
import { View } from "react-native";
import { CardStyle } from "./Card.Style";

interface ICard {
  children: ReactNode | Array<ReactNode> | null;
  alignment?: "centerAlignment" | "spacedAlignment" | "noneAlignment";
  fixedHight?: number;
  light?: boolean;
}

const Card: FC<ICard> = ({
  children,
  alignment = "none",
  fixedHight = 0,
  light = false,
}) => (
  <View
    style={[
      CardStyle.container,
      CardStyle[alignment],
      fixedHight > 0 && {
        height: fixedHight,
      },
      light ? CardStyle.light : CardStyle.dark,
    ]}
  >
    {children}
  </View>
);

export default Card;
