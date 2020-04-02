import React from "react";

import { FabFlatListStyle } from "./FabFlatList.style";
import { FAB } from "react-native-paper";
import { View, FlatList, LayoutAnimation } from "react-native";

export default class FabFlatList extends React.Component {
  state = {
    showFab: true
  };

  scrollListener = event => {
    // Simple fade-in / fade-out animation
    const CustomLayoutLinear = {
      duration: 100,
      create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity
      },
      update: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity
      },
      delete: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity
      }
    };

    console.log(event.nativeEvent);
  };

  render() {
    const {
      renderItem,
      items,
      emptyComponent,
      onFabPress,
      fabLabel,
      fabIcon
    } = this.props;

    return (
      <View style={FabFlatListStyle.container}>
        <FlatList
          contentContainerStyle={FabFlatListStyle.list}
          onScroll={this.scrollListener}
          bounces={true}
          data={items}
          renderItem={renderItem}
          ListEmptyComponent={emptyComponent}
        />
        {this.state.showFab && (
          <FAB
            style={FabFlatListStyle.fab}
            icon={fabIcon}
            label={fabLabel}
            onPress={onFabPress}
          />
        )}
      </View>
    );
  }
}
