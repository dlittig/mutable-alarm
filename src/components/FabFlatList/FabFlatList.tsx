import React from "react";

import { FabFlatListStyle } from "./FabFlatList.style";
import { FAB } from "react-native-paper";
import { View, Text, TouchableOpacity } from "react-native";

import Alarm from "../Alarm";
import { SwipeListView } from "react-native-swipe-list-view";

export default class FabFlatList extends React.Component {
  state = {
    showFab: true,
  };

  onRowDidOpen = (rowKey) => {
    console.log("This row opened", rowKey);
  };

  renderItem = ({ item }) => (
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

  toggleMute = () => {

  }

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
        onPress={() => console.log("EN")}
      >
        {item.isEnabled && (<Text style={FabFlatListStyle.backText}>Disable</Text>)}
        {!item.isEnabled && (<Text style={FabFlatListStyle.backText}>Enable</Text>)}
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          FabFlatListStyle.backRightBtn,
          FabFlatListStyle.backRightBtnRight,
          FabFlatListStyle.backBtn,
        ]}
        onPress={() => console.log("DIS")}
      >
        <Text style={FabFlatListStyle.backText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    const { items, onFabPress, fabLabel, fabIcon } = this.props;

    return (
      <View style={FabFlatListStyle.container}>
        <SwipeListView
          data={items}
          renderItem={this.renderItem}
          renderHiddenItem={this.renderHiddenItem}
          leftOpenValue={90}
          rightOpenValue={-170}
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
