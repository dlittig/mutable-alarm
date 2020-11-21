import React, { FC } from "react";
import BaseView from "../../components/BaseView";
import { applyTheme } from "../../store/actions/settingsAction";
import { THEMES } from "../../store/constants/settingsConstants";

import { List } from "react-native-paper";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

interface ISettings {
  theme: string;
  reduxApplyTheme: (string) => void;
}

const Settings: FC<ISettings> = ({ theme, reduxApplyTheme }) => {
  const { t } = useTranslation();
  const leftProps = {
    light: undefined,
    black: undefined,
    auto: undefined,
    dark: undefined,
  };

  leftProps[theme] = {
    left: (props) => (
      <List.Icon {...props} icon="check" style={{ height: 15 }} />
    ),
  };

  return (
    <BaseView center={false} color="main" margin="none">
      <List.Section>
        <List.Accordion
          title={t("settings.display_theme")}
          description={t("descriptions.settings.display_theme")}
          left={(props) => <List.Icon {...props} icon="theme-light-dark" />}
        >
          <List.Item
            title={t("settings.light")}
            {...leftProps.light}
            onPress={() => reduxApplyTheme(THEMES.LIGHT)}
          />

          <List.Item
            title={t("settings.dark")}
            {...leftProps.dark}
            onPress={() => reduxApplyTheme(THEMES.DARK)}
          />
          <List.Item
            title={t("settings.black")}
            {...leftProps.black}
            onPress={() => reduxApplyTheme(THEMES.BLACK)}
          />
          <List.Item
            onPress={() => reduxApplyTheme(THEMES.AUTO)}
            {...leftProps.auto}
            title={t("settings.automatic")}
            description={t("descriptions.settings.automatic")}
          />
        </List.Accordion>
      </List.Section>
    </BaseView>
  );
};

const mapStateToProps = ({ settingsReducer: { theme } }) => ({ theme });

const mapDispatchToProps = {
  reduxApplyTheme: applyTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
