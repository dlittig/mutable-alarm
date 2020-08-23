import * as PanelConstants from "../constants/panelConstants";
import produce from "immer";

const initialState = {
  panelIsOpen: false,
};

export const panelReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case PanelConstants.PANEL_OPEN: {
      state.panelIsOpen = true;
      break;
    }
    case PanelConstants.PANEL_CLOSE: {
      state.panelIsOpen = false;
      break;
    }
  }
}, initialState);
