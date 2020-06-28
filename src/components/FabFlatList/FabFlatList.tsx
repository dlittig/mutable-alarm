import React from "react";

import { FabFlatListStyle } from "./FabFlatList.style";
import { FAB } from "react-native-paper";
import { View, Text, TouchableOpacity } from "react-native";

import Alarm from "../Alarm";
import { SwipeListView } from "react-native-swipe-list-view";
import { compose } from "redux";
import { withSort } from "../../enhancers/WithSort";
import { withBottomElement } from "../../enhancers/WithBottomElement";
import { connect } from "react-redux";
import { deleteAlarm } from "../../store/actions";
import ListEmpty from "../ListEmpty";

class FabFlatList extends React.Component {
  state = {
    showFab: true,
    listView: null,
  };

  renderItem = ({ item }) => {
    if (item.id !== null) {
      return (
        <View>
          <Alarm
            id={item.id}
            time={item.time}
            isEnabled={item.isEnabled}
            isSnoozed={item.isSnoozed}
            isMuted={false}
          />
        </View>
      );
    } else {
      return <View></View>;
    }
  };

  renderHiddenItem = ({ item }) => (
    <View style={FabFlatListStyle.rowBack}>
      <TouchableOpacity
        style={[FabFlatListStyle.backBtn, FabFlatListStyle.backRightBtn]}
        onPress={() => this.toggleMute()}
      >
        {item.isMuted && <Text style={FabFlatListStyle.backText}>Unmute</Text>}
        {!item.isMuted && <Text style={FabFlatListStyle.backText}>Mute</Text>}
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          FabFlatListStyle.backRightBtn,
          FabFlatListStyle.backRightBtnLeft,
          FabFlatListStyle.backBtn,
        ]}
        onPress={() => console.log("EDIT")}
      >
        <Text style={FabFlatListStyle.backText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          FabFlatListStyle.backRightBtn,
          FabFlatListStyle.backRightBtnRight,
          FabFlatListStyle.backBtn,
        ]}
        onPress={() => this.props.reduxDeleteAlarm(item.id)}
      >
        <Text style={FabFlatListStyle.backText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  lastItemVisible = ({ viewableItems }) => {
    const { items } = this.props;
    const count = Object.values(items).length;

    // If last viewable item is the last of the list
    if (viewableItems.length < count) {
      if (
        viewableItems[viewableItems.length - 1].item.id === items[count - 1].id
      ) {
        this.setState({ showFab: false });
      } else {
        this.setState({ showFab: true });
      }
    } else {
      this.setState({ showFab: true });
    }
  };

  render() {
    const { items, onFabPress, fabLabel, fabIcon } = this.props;
    console.log("list", items);

    return (
      <View style={FabFlatListStyle.container}>
        <SwipeListView
          data={items}
          onViewableItemsChanged={this.lastItemVisible}
          renderItem={this.renderItem}
          renderHiddenItem={this.renderHiddenItem}
          leftOpenValue={90}
          stopLeftSwipe={100}
          rightOpenValue={-170}
          stopRightSwipe={-180}
          previewRowKey={"0"}
          previewOpenValue={-40}
          previewOpenDelay={3000}
          onRowDidOpen={this.onRowDidOpen}
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

const mapDispatchToProps = {
  reduxDeleteAlarm: deleteAlarm,
};

const enhance = compose(
  withSort,
  withBottomElement,
  connect(null, mapDispatchToProps)
);

export default enhance(FabFlatList);
