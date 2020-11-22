import React from "react";
import { connect } from "react-redux";
import { IAlarm } from "../../models/Alarm";
import { getDisplayName } from "../../utils";

export const withBottomElement = (Component) => {
  class WithBottomElementComponent extends React.Component<
    { items: Array<IAlarm> },
    {}
  > {
    addBottomElement = (alarms: Array<IAlarm>) => {
      const list = [...alarms];
      const alarm: IAlarm = {
        id: null,
        time: 0,
        isMuted: false,
        isSnoozed: false,
        name: "",
        scheduleMode: "",
        scheduleValue: "",
        weekdays: [],
      };
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
