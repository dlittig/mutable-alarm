import React, { ReactNode } from "react";

import { FAB } from "react-native-paper";
import { View, Text, TouchableOpacity } from "react-native";

import { SwipeListView } from "react-native-swipe-list-view";
import { compose } from "redux";
import { withSort } from "../../enhancers/WithSort";
import { withBottomElement } from "../../enhancers/WithBottomElement";
import { connect } from "react-redux";
import { deleteAlarm, toggleMuteAlarm } from "../../store/actions";
import { IAlarm } from "../../models/Alarm";
import { FabFlatListStyle } from "./FabFlatList.style";
import Alarm from "../Alarm";
import ListEmpty from "../ListEmpty";
import ConfirmDialog from "../Dialogs/ConfirmDialog";
import R from "../../routes";

interface IFabFlatListProps {
  items: Array<IAlarm>;
  onFabPress: () => any;
  reduxDeleteAlarm: (number) => any;
  reduxToggleMuteAlarm: (number) => any;
  navigation: {
    navigate: (string, object) => void;
  };
  fabLabel: string;
  fabIcon: ReactNode;
  disableFab: boolean;
}

interface IFabFlatListState {
  showFab: boolean;
  showConfirmation: boolean;
  listView: any;
}

class FabFlatList extends React.Component<
  IFabFlatListProps,
  IFabFlatListState
> {
  state = {
    showConfirmation: false,
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
        onPress={() => this.props.reduxToggleMuteAlarm(item.id)}
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
        onPress={() =>
          this.props.navigation.navigate(R.ADD_ALARM, {
            ...item,
          })
        }
      >
        <Text style={FabFlatListStyle.backText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          FabFlatListStyle.backRightBtn,
          FabFlatListStyle.backRightBtnRight,
          FabFlatListStyle.backBtn,
        ]}
        onPress={() => {
          this.setState({ showConfirmation: true });
        }}
      >
        <Text style={FabFlatListStyle.backText}>Delete</Text>
      </TouchableOpacity>
      <ConfirmDialog
        title="Confirmation"
        text="Are you sure to delete this alarm?"
        isVisible={this.state.showConfirmation}
        onAccept={() => {
          this.setState({ showConfirmation: false });
          this.props.reduxDeleteAlarm(item.id);
        }}
        onCancel={() => this.setState({ showConfirmation: false })}
      />
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
    const { items, onFabPress, fabLabel, fabIcon, disableFab } = this.props;

    return (
      <View style={FabFlatListStyle.container}>
        {items.length > 0 && (
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
        )}
        {items.length === 0 && <ListEmpty />}
        {!disableFab && this.state.showFab && (
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
  reduxToggleMuteAlarm: toggleMuteAlarm,
};

const enhance = compose(
  connect(null, mapDispatchToProps),
  withSort,
  withBottomElement
);

export default enhance(FabFlatList);
