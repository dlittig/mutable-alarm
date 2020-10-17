import { CommonActions } from "@react-navigation/core";

let _navigator; // eslint-disable-line

const setNavigator = (navigator) => {
  _navigator = navigator;
};

const reset = (routeName, params = {}) => {
  _navigator.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: routeName, params }],
    })
  );
};

const goBack = () => {
  _navigator.dispatch({
    ...CommonActions.goBack(),
  });
};

const navigate = (routeName, params = {}) => {
  _navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params: params,
    })
  );
};

const getCurrentRoute = () => {
  if (!_navigator || !_navigator.state.nav) {
    return null;
  }

  return _navigator.state.nav.routes[_navigator.state.nav.index] || null;
};

export default {
  setNavigator,
  navigate,
  reset,
  goBack,
  getCurrentRoute,
};
