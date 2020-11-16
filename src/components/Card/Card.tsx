import React, { FC, ReactNode } from "react";
import { TouchableHighlight, View } from "react-native";
import ThemeProvider from "../../provider/ThemeProvider/ThemeProvider";
import { THEMES } from "../../store/constants/settingsConstants";
import { dark, light as lightTheme } from "../../theme/colors/values";
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
  <ThemeProvider.Consumer>
    {(theme) => (
      <ConditionalWrapper
        condition={touchable}
        wrapper={(children) => (
          <TouchableHighlight
            onPressOut={onTouch}
            delayPressIn={0}
            activeOpacity={1}
            underlayColor={theme === THEMES.LIGHT ? lightTheme.cardShadow : dark.cardShadow}
            style={CardStyle.touchableFeedback}
          >
            {children}
          </TouchableHighlight>
        )}
      >
        <View
          style={[
            CardStyle.container,
            {
              backgroundColor: theme === THEMES.LIGHT ? lightTheme.card : dark.card,
              shadowColor: theme === THEMES.LIGHT ? lightTheme.cardShadow : dark.cardShadow,
            },
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
    )}
  </ThemeProvider.Consumer>
);

export default Card;
