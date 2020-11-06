import React, { FC, ReactNode } from "react";
import { TouchableHighlight, View } from "react-native";
import { CardStyle } from "./Card.Style";

interface ICard {
  children: ReactNode | Array<ReactNode> | null;
  alignment?: "centerAlignment" | "spacedAlignment" | "noneAlignment";
  fixedHight?: number;
  light?: boolean;
  touchable?: boolean;
  onTouch?: () => void;
}

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

const Card: FC<ICard> = ({
  children,
  alignment = "none",
  fixedHight = 0,
  light = false,
  touchable = false,
  onTouch,
}) => (
  <ConditionalWrapper
    condition={touchable}
    wrapper={(children) => (
      <TouchableHighlight
        onPressOut={onTouch}
        delayPressIn={0}
        activeOpacity={1}
        underlayColor="#eee"
        style={CardStyle.touchableFeedback}
      >
        {children}
      </TouchableHighlight>
    )}
  >
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
  </ConditionalWrapper>
);

export default Card;
