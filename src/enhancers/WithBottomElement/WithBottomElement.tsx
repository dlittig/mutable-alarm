import React from "react";
import { connect } from "react-redux";
import Alarm from "../../models/Alarm";
import { getDisplayName } from "../../utils";

export const withBottomElement = (Component) => {
  class WithBottomElementComponent extends React.Component {
    addBottomElement = (alarms) => {
      const list = [...alarms];
      const alarm = new Alarm();
      alarm.id = null;
      alarms.push(alarm);

      return list;
    };

    render() {
      const { items, ...remainingProps } = this.props;

      return (
        <React.Fragment>
          <Component {...remainingProps} items={this.addBottomElement(items)} />
        </React.Fragment>
      );
    }
  }

  WithBottomElementComponent.displayname = `WithBottomElementComponent(${getDisplayName(
    Component
  )})`;

  return WithBottomElementComponent;
};
