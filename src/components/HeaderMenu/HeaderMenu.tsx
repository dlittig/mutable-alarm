import React from "react";
import { View, Platform } from "react-native";
import { Button, Menu, Divider, Provider } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default class HeaderMenu extends React.Component {
  state = {
    visible: false
  };

  toggleMenu = () => this.setState({ visible: !this.state.visible });

  getMenuIcon = () =>
    Platform.select({
      ios: () => <Ionicons name="ios-more" size={25} />,
      android: () => <Ionicons name="md-more" size={25} />
    })();

  render() {
    const { visible } = this.state;
    console.log(visible);
    return (
      <Provider>
        <View
          style={{
            zIndex: 300,
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Menu
            visible={visible}
            onDismiss={this.toggleMenu}
            anchor={
              <Button onPress={this.toggleMenu}>{this.getMenuIcon()}</Button>
            }
          >
            <Menu.Item onPress={() => {}} title="Settings" />
            <Menu.Item onPress={() => {}} title="Donate" />
            <Divider />
            <Menu.Item onPress={() => {}} title="About" />
          </Menu>
        </View>
      </Provider>
    );
  }
}
