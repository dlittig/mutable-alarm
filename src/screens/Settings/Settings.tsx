import React from "react";
import { List } from "react-native-paper";
import BaseView from "../../components/BaseView";

const Settings = () => {
  return (
    <BaseView center={false} color="main" margin="none">
      <List.Section>
        <List.Accordion
          title="Uncontrolled Accordion"
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>
    </BaseView>
  );
};

export default Settings;
