import React, { useEffect, useReducer, useRef, useState } from "react";
import { View, TouchableHighlight } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Text } from "react-native-paper";

import { NumberSelectorStyle } from "./NumberSelector.style";
import ThemeProvider from "../../provider/ThemeProvider/ThemeProvider";
import { THEMES } from "../../store/constants/settingsConstants";
import { ThemeColors } from "../../theme/colors/values";

const NumberSelector = ({ initialValue, max, min, callback }) => {
  const initialState = {
    value: initialValue,
  };
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "DECREASE":
        return {
          value: state.value - 1,
        };
      case "INCREASE":
        return {
          value: state.value + 1,
        };
      default:
        return initialState;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const interval = useRef(null);

  useEffect(() => {
    callback(state.value);
  }, [state.value]);

  useEffect(
    () => () => {
      clearInterval(interval.current);
    },
    []
  );

  const increase = () => {
    if (state.value < max) {
      dispatch({ type: "INCREASE" });
    }

    if (interval.current === null)
      interval.current = setInterval(increase, 200);
  };

  const decrease = () => {
    if (state.value > min) {
      dispatch({ type: "DECREASE" });
    }

    if (interval.current === null)
      interval.current = setInterval(decrease, 200);
  };

  const pad = (value) => (value < 10 ? `0${value}` : value);

  const stop = () => {
    clearInterval(interval.current);
    interval.current = null;
  };

  const getColor = (theme) => {
    switch (theme) {
      case THEMES.LIGHT:
        return ThemeColors.LightColors.text;
      case THEMES.DARK:
        return ThemeColors.DarkColors.text;
      case THEMES.BLACK:
        return ThemeColors.BlackColors.text;
    }
  };

  return (
    <View style={NumberSelectorStyle.container}>
      <TouchableHighlight
        delayPressIn={0}
        activeOpacity={1}
        delayPressOut={0}
        underlayColor="#eee"
        style={NumberSelectorStyle.touchable}
        onPressIn={increase}
        onPressOut={stop}
      >
        <View>
          <ThemeProvider.Consumer>
            {(theme) => (
              <AntDesign name="up" size={30} color={getColor(theme)} />
            )}
          </ThemeProvider.Consumer>
        </View>
      </TouchableHighlight>
      <Text style={NumberSelectorStyle.text}>{pad(state.value)}</Text>
      <TouchableHighlight
        delayPressIn={0}
        delayPressOut={0}
        activeOpacity={1}
        underlayColor="#eee"
        style={NumberSelectorStyle.touchable}
        onPressIn={decrease}
        onPressOut={stop}
      >
        <View>
          <ThemeProvider.Consumer>
            {(theme) => (
              <AntDesign
                name="down"
                size={30}
                color={getColor(theme)}
              />
            )}
          </ThemeProvider.Consumer>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default NumberSelector;
