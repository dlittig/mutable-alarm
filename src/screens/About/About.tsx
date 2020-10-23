import React from "react";
import { Image } from "react-native";
import { Text } from "react-native-paper";
import { AboutStyle } from "./About.style";
import packageJson from "../../../package.json";
import BaseView from "../../components/BaseView";

const About = () => (
  <BaseView center={true} color="main" margin="medium">
    <Image source={require("../../assets/icons/ic_launcher_round.png")} />
    <Text style={AboutStyle.text}>Developed with ❤️ by David</Text>
    <Text>&copy; {packageJson.version}</Text>
  </BaseView>
);

export default About;
