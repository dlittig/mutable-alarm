import React, { FC } from "react";
import BaseView from "../../components/BaseView";
import {
  applyAutoTheme,
  applyBlackTheme,
  applyDarkTheme,
  applyLightTheme,
} from "../../store/actions/settingsAction";

import { List } from "react-native-paper";
import { connect } from "react-redux";

interface ISettings {
  theme: string;
  reduxApplyAutoTheme: () => void;
  reduxApplyDarkTheme: () => void;
  reduxApplyBlackTheme: () => void;
  reduxApplyLightTheme: () => void;
}

const leftIcon = (theme, targetTheme, props) => {
  if (theme === targetTheme) {
    return <List.Icon {...props} icon="check" />;
  } else {
    return <></>;
  }
};

const Settings: FC<ISettings> = ({
  theme,
  reduxApplyAutoTheme,
  reduxApplyDarkTheme,
  reduxApplyBlackTheme,
  reduxApplyLightTheme,
}) => {
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
            onPress={reduxApplyLightTheme}
          />

          <List.Item
            title="Dark"
            {...leftProps.dark}
            onPress={reduxApplyDarkTheme}
          />
          <List.Item
            title="Black"
            {...leftProps.black}
            onPress={reduxApplyBlackTheme}
          />
          <List.Item
            onPress={reduxApplyAutoTheme}
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
  reduxApplyAutoTheme: applyAutoTheme,
  reduxApplyDarkTheme: applyDarkTheme,
  reduxApplyBlackTheme: applyBlackTheme,
  reduxApplyLightTheme: applyLightTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
