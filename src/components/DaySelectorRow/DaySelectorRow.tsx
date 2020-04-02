import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Item from "./Item";

import { DaySelectorRowStyle } from "./DaySelectorRow.style";
import { ScrollView } from "react-native";

const DaySelectorRow = ({ initialValues }) => {
  const [monday, setMonday] = useState(initialValues["monday"]);
  const [tuesday, setTuesday] = useState(initialValues["tuesday"]);
  const [wednesday, setWednesday] = useState(initialValues["wednesday"]);
  const [thursday, setThursday] = useState(initialValues["thursday"]);
  const [friday, setFriday] = useState(initialValues["friday"]);
  const [saturday, setSaturday] = useState(initialValues["saturday"]);
  const [sunday, setSunday] = useState(initialValues["sunday"]);

  return (
    <ScrollView horizontal={true} style={DaySelectorRowStyle.container}>
      <Item onChange={setMonday} value={monday}>
        Mo
      </Item>
      <Item onChange={setTuesday} value={tuesday}>
        Tu
      </Item>
      <Item onChange={setWednesday} value={wednesday}>
        We
      </Item>
      <Item onChange={setThursday} value={thursday}>
        Th
      </Item>
      <Item onChange={setFriday} value={friday}>
        Fr
      </Item>
      <Item onChange={setSaturday} value={saturday}>
        Sa
      </Item>
      <Item onChange={setSunday} value={sunday}>
        Su
      </Item>
    </ScrollView>
  );
};

export default DaySelectorRow;
