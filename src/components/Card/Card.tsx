import React from "react";
import { View } from "react-native";
import { CardStyle } from "./Card.Style";

const Card = ({ children }) => (
  <View style={CardStyle.container}>{children}</View>
);

export default Card;
