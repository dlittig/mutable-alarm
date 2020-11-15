import React, { FC } from "react";
import BaseView from "../../components/BaseView";
import { applyTheme } from "../../store/actions/settingsAction";
import { THEMES } from "../../store/constants/settingsConstants";

import { List } from "react-native-paper";
import { connect } from "react-redux";

interface ISettings {
  theme: string;
  reduxApplyTheme: (string) => void;
}

const Settings: FC<ISettings> = ({ theme, reduxApplyTheme }) => {
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
          title="Display theme"
          description="Adjust how the appearance of the app should look like"
          left={(props) => <List.Icon {...props} icon="theme-light-dark" />}
        >
          <List.Item
            title="Light"
            {...leftProps.light}
            onPress={() => reduxApplyTheme(THEMES.LIGHT)}
          />

          <List.Item
            title="Dark"
            {...leftProps.dark}
            onPress={() => reduxApplyTheme(THEMES.DARK)}
          />
          <List.Item
            title="Black"
            {...leftProps.black}
            onPress={() => reduxApplyTheme(THEMES.BLACK)}
          />
          <List.Item
            onPress={() => reduxApplyTheme(THEMES.AUTO)}
            {...leftProps.auto}
            title="Automatic"
            description="The app will change its appearance based on your phone's settings"
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
