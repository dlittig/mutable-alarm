import React, { FC, ReactNode } from "react";
import { View } from "react-native";
import ThemeProvider from "../../provider/ThemeProvider/ThemeProvider";

import { BaseViewStyle } from "./BaseView.style";

interface IBaseView {
  children: ReactNode | Array<ReactNode> | null;
  center: boolean;
  margin: "medium" | "none";
  color: "main" | "background";
  spaceBetween?: boolean;
  bottomSpacer?: boolean;
}

const BaseView: FC<IBaseView> = ({
  children,
  center,
  margin,
  color,
  spaceBetween = false,
  bottomSpacer = false,
}) => (
  <ThemeProvider.Consumer>
    {(theme) => (
      <View
        style={[
          BaseViewStyle.container,
          center ? BaseViewStyle.center : null,
          spaceBetween ? BaseViewStyle.spaceBetween : null,
          margin === "medium" ? BaseViewStyle.mediumMargin : null,
          color === "main"
            ? BaseViewStyle[`${theme}BackgroundMain`]
            : BaseViewStyle.background,
          bottomSpacer ? BaseViewStyle.bottomSpacer : null,
        ]}
      >
        {children}
      </View>
    )}
  </ThemeProvider.Consumer>
);

export default BaseView;
