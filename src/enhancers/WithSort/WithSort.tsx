import React from "react";
import { getDisplayName, sortBy } from "../../utils";

export const withSort = (Component) => {
  class WithSortComponent extends React.Component {
    sort = (items, sort, order) => {
      if (items !== undefined && items.length > 0) {
        const result = sortBy(items, sort, order);
        console.log("after sort", result);
        return result;
      }
      return [];
    };

    render() {
      const { items, ...remainingProps } = this.props;
      console.log("sort", items);
      const sort = "time";
      const order = "ASC";

      return (
        <React.Fragment>
          <Component
            {...remainingProps}
            items={this.sort(items, sort, order)}
          />
        </React.Fragment>
      );
    }
  }

  WithSortComponent.displayname = `WithSort(${getDisplayName(Component)})`;
  return WithSortComponent;
};
