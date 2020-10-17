import React from "react";
import { View, Image } from "react-native";
import { Text } from "react-native-paper";
import { AboutStyle } from "./About.style";
import packageJson from "../../../package.json";

const About = () => (
  <View style={AboutStyle.container}>
    <Image source={require("../../assets/icons/ic_launcher_round.png")} />
    <Text>Developed with ❤️ by David</Text>
    <Text>&copy; {packageJson.version}</Text>
  </View>
);

export default About;
