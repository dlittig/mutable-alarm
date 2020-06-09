import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { ActionsStyle } from './Actions.style'
import { TouchableOpacity } from "react-native";

const MoreButton = ({ tintColor }) => (
  <TouchableOpacity style={ActionsStyle.touchable}>
    <MaterialIcons name="more-vert" size={25} color={tintColor} />
  </TouchableOpacity>
);

export { MoreButton };
