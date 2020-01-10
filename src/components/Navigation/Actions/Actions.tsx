import React from "react";
import styled from 'styled-components';
import { MaterialIcons } from "@expo/vector-icons";

const TouchableComponent = styled.TouchableOpacity`
    flex: 2;
	justify-content: center;
    align-items: center;
    width: 40;
`;

const MoreButton = ({ tintColor }) => (
  <TouchableComponent>
    <MaterialIcons name="more-vert" size={25} color={tintColor} />
  </TouchableComponent>
);

export { MoreButton };
