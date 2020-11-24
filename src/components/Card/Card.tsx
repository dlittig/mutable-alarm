import React, { FC, ReactNode } from "react";
import { TouchableHighlight, View } from "react-native";
import ThemeProvider from "../../provider/ThemeProvider/ThemeProvider";
import { THEMES } from "../../store/constants/settingsConstants";
import { ThemeColors } from "../../theme/colors/values";
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
}) => {
  const getUnderlayColor = (theme) => {
    switch (theme) {
      case THEMES.LIGHT:
        return ThemeColors.LightColors.cardShadow;
      case THEMES.DARK:
        return ThemeColors.DarkColors.cardShadow;
      case THEMES.BLACK:
        return ThemeColors.BlackColors.cardShadow;
    }
  };

  return (
    <ThemeProvider.Consumer>
      {(theme) => (
        <ConditionalWrapper
          condition={touchable}
          wrapper={(children) => (
            <TouchableHighlight
              onPressOut={onTouch}
              delayPressIn={0}
              activeOpacity={1}
              underlayColor={getUnderlayColor(theme)}
              style={CardStyle.touchableFeedback}
            >
              {children}
            </TouchableHighlight>
          )}
        >
          <View
            style={[
              CardStyle.container,
              CardStyle[`${theme}Colors`],
              CardStyle[`${theme}Borders`],
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
};

export default Card;
