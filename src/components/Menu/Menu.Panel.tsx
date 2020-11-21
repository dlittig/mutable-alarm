import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { List } from "react-native-paper";
import { connect } from "react-redux";
import { SwipeablePanel } from "rn-swipeable-panel";
import ThemeProvider from "../../provider/ThemeProvider/ThemeProvider";

import R from "../../routes";
import Navigator from "../../services/NavigatorService";
import { closePanel } from "../../store/actions/panelActions";
import { MenuPanelStyle } from "./Menu.Panel.style";

const Panel = ({ panelIsOpen, reduxClosePanel, navigation }) => {
  const { t } = useTranslation();
  const panelProps = {
    fullWidth: true,
    showCloseButton: true,
    onClose: () => reduxClosePanel(),
    onPressCloseButton: () => reduxClosePanel(),
  };

  const navigate = (routeName) => {
    reduxClosePanel();
    setTimeout(() => Navigator.navigate(routeName), 200);
  };

  return (
    <ThemeProvider.Consumer>
      {(theme) => (
        <SwipeablePanel
          {...panelProps}
          isActive={panelIsOpen}
          style={MenuPanelStyle[`${theme}Background`]}
          closeIconStyle={MenuPanelStyle[`${theme}Background`]}
        >
          <View>
            <List.Item
              title={t("screens.donate")}
              description={t("descriptions.options.donate")}
              left={(props) => <List.Icon {...props} icon="gift" />}
              onPress={() => navigate(R.DONATE)}
            />
            <List.Item
              title={t("screens.settings")}
              description={t("descriptions.options.settings")}
              left={(props) => <List.Icon {...props} icon="cogs" />}
              onPress={() => navigate(R.SETTINGS)}
            />
            <List.Item
              title={t("screens.about")}
              description={t("descriptions.options.about")}
              left={(props) => <List.Icon {...props} icon="information" />}
              onPress={() => navigate(R.ABOUT)}
            />
          </View>
        </SwipeablePanel>
      )}
    </ThemeProvider.Consumer>
  );
};

const mapStateToProps = ({ panelReducer: { panelIsOpen } }) => ({
  panelIsOpen,
});

const mapDispatchToProps = {
  reduxClosePanel: closePanel,
};

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
