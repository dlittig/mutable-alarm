import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { ListEmptyStyle } from "./ListEmpty.style";

const ListEmpty = () => (
  <View style={ListEmptyStyle.container}>
    <Text style={ListEmptyStyle.text}>
      It's empty here.
    </Text>
    <Text style={ListEmptyStyle.text}>
      You can add an item via the Add button below 😌
    </Text>
  </View>
);

export default ListEmpty;
