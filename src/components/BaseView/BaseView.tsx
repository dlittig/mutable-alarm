import React, { FC, ReactNode } from "react";
import { View } from "react-native";

import { BaseViewStyle } from "./BaseView.style";

interface IBaseView {
  children: ReactNode | Array<ReactNode> | null;
  center: boolean;
  margin: "medium" | "none";
  color: "main" | "background";
  bottomSpacer?: boolean;
}

const BaseView: FC<IBaseView> = ({
  children,
  center,
  margin,
  color,
  bottomSpacer = false,
}) => (
  <View
    style={[
      BaseViewStyle.container,
      center ? BaseViewStyle.center : null,
      margin === "medium" ? BaseViewStyle.mediumMargin : null,
      color === "main"
        ? BaseViewStyle.backgroundMain
        : BaseViewStyle.background,
      bottomSpacer ? BaseViewStyle.bottomSpacer : null,
    ]}
  >
    {children}
  </View>
);

export default BaseView;
