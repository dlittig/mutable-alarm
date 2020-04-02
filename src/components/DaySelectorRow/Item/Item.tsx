import React, { useState } from "react";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { Text } from "react-native-paper";

import { ItemStyle } from "./Item.style";

const Item = ({ children, onChange, value }) => {
  const [pressed, setPressed] = useState(value);
  const onPress = () => {
    const newPressed = !pressed;
    setPressed(newPressed);
    onChange(newPressed);
  };

  return (
    <TouchableNativeFeedback style={[ItemStyle.container, pressed && ItemStyle.selected]} onPress={onPress}>
      <Text style={ItemStyle.text}>{children}</Text>
    </TouchableNativeFeedback>
  );
};

export default Item;
