import React, { useState, FC } from "react";
import { View } from "react-native";
import { AlarmStyle } from "./Alarm.style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "react-native-paper";
import { getCurrentTime } from "../../utils";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { IAlarm, WEEKDAYS } from "../../models/Alarm";
import Card from "../Card";
import ThemeProvider from "../../provider/ThemeProvider/ThemeProvider";
import { useTranslation } from "react-i18next";

const nextAlarm = (time) => time;

const Alarm: FC<IAlarm> = ({
  id,
  time,
  isMuted,
  isSnoozed,
  name,
  weekdays,
  mutedUntil,
  scheduleValue,
  scheduleMode,
}) => {
  const { t } = useTranslation();
  const isDayActive = (day) => weekdays.includes(day);

  return (
    <TouchableWithoutFeedback>
      <ThemeProvider.Consumer>
        {(theme) => (
          <Card alignment="spacedAlignment" fixedHight={80} key={id}>
            <Text style={[AlarmStyle.text, AlarmStyle[theme]]}>
              {getCurrentTime(time)}
            </Text>
            <View>
              <Text style={AlarmStyle[theme]}>{name}</Text>
              {weekdays && (
                <View style={AlarmStyle.weekdays}>
                  {WEEKDAYS.map((day, index) => (
                    <Text
                      key={index}
                      style={[
                        AlarmStyle.weekday,
                        isDayActive(day)
                          ? AlarmStyle.weekdayActive
                          : AlarmStyle[`${theme}WeekdayInactive`],
                      ]}
                    >
                      {t(`days.short.${day}`)}
                    </Text>
                  ))}
                </View>
              )}
              {mutedUntil !== null && (
                <Text style={AlarmStyle[`${theme}WeekdayInactive`]}>
                  Active by: {new Date(mutedUntil).toLocaleDateString()}
                </Text>
              )}
            </View>
          </Card>
        )}
      </ThemeProvider.Consumer>
    </TouchableWithoutFeedback>
  );
};

export default Alarm;
