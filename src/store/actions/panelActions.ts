import * as PanelConstants from "../constants/panelConstants";

export const openPanel = () => ({
  type: PanelConstants.PANEL_OPEN,
});

export const closePanel = () => ({
  type: PanelConstants.PANEL_CLOSE,
});
