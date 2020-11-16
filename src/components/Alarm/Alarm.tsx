import React, { useState, FC } from "react";
import { Text, View } from "react-native";
import { AlarmStyle } from "./Alarm.style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Switch } from "react-native-paper";
import { getCurrentTime } from "../../utils";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { IAlarm } from "../../typings/AlarmType";
import Card from "../Card";
import ThemeProvider from "../../provider/ThemeProvider/ThemeProvider";

const nextAlarm = (time) => time;

const Alarm: FC<IAlarm> = ({
  id,
  time,
  isMuted,
  isSnoozed,
  name,
  weekdays,
  scheduleValue,
  scheduleMode,
}) => {
  const [muted, setMuted] = useState(isMuted);
  const toggleSwitch = () => setMuted(!muted);
  const isDayActive = (day) => weekdays.includes(day);

  return (
    <TouchableWithoutFeedback>
      <ThemeProvider.Consumer>
        {(theme) => (
          <Card alignment="spacedAlignment" fixedHight={80} key={id}>
            <Text style={[AlarmStyle.text, AlarmStyle[theme]]}>{getCurrentTime(time)}</Text>
            <View>
              <Text style={AlarmStyle[theme]}>{name}</Text>
              {weekdays && (
                <View style={AlarmStyle.weekdays}>
                  <Text
                    style={[
                      AlarmStyle.weekday,
                      isDayActive("mo") ? AlarmStyle.weekdayActive : null,
                    ]}
                  >
                    M
                  </Text>
                  <Text
                    style={[
                      AlarmStyle.weekday,
                      isDayActive("tue") ? AlarmStyle.weekdayActive : null,
                    ]}
                  >
                    T
                  </Text>
                  <Text
                    style={[
                      AlarmStyle.weekday,
                      isDayActive("wed") ? AlarmStyle.weekdayActive : null,
                    ]}
                  >
                    W
                  </Text>
                  <Text
                    style={[
                      AlarmStyle.weekday,
                      isDayActive("thu") ? AlarmStyle.weekdayActive : null,
                    ]}
                  >
                    T
                  </Text>
                  <Text
                    style={[
                      AlarmStyle.weekday,
                      isDayActive("fri") ? AlarmStyle.weekdayActive : null,
                    ]}
                  >
                    F
                  </Text>
                  <Text
                    style={[
                      AlarmStyle.weekday,
                      isDayActive("sat") ? AlarmStyle.weekdayActive : null,
                    ]}
                  >
                    S
                  </Text>
                  <Text
                    style={[
                      AlarmStyle.weekday,
                      isDayActive("sun") ? AlarmStyle.weekdayActive : null,
                    ]}
                  >
                    S
                  </Text>
                </View>
              )}
              {muted && <MaterialCommunityIcons name="restore" size={25} />}
            </View>
          </Card>
        )}
      </ThemeProvider.Consumer>
    </TouchableWithoutFeedback>
  );
};

export default Alarm;
