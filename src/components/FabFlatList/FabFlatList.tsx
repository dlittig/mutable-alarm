import React, { FC, ReactNode, useState } from "react";

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
import { TranslationProps, withTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/core";
import { IconSource } from "react-native-paper/lib/typescript/src/components/Icon";

interface IFabFlatListProps {
  items: Array<IAlarm>;
  onFabPress: () => any;
  reduxDeleteAlarm: (number) => any;
  reduxToggleMuteAlarm: (number) => any;
  fabLabel: string;
  fabIcon: ReactNode;
  disableFab: boolean;
  t: (string) => string;
}

const FabFlatList: FC<IFabFlatListProps> = ({
  items,
  onFabPress,
  reduxDeleteAlarm,
  reduxToggleMuteAlarm,
  fabLabel,
  fabIcon,
  disableFab,
  t,
}) => {
  const navigation = useNavigation();
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [showFab, setShowFab] = useState<boolean>(true);

  const renderItem = ({ item }) => {
    if (item.id !== null) {
      return (
        <View>
          <Alarm
            id={item.id}
            isMuted={item.isMuted}
            time={item.time}
            name={item.name}
            weekdays={item.weekdays}
            isSnoozed={item.isSnoozed}
            scheduleMode={item.scheduleMode}
            scheduleValue={item.scheduleValue}
          />
        </View>
      );
    } else {
      return <View></View>;
    }
  };

  const renderHiddenItem = ({ item }) => (
    <View style={FabFlatListStyle.rowBack}>
      <TouchableOpacity
        style={[FabFlatListStyle.backBtn, FabFlatListStyle.backRightBtn]}
        onPress={() => reduxToggleMuteAlarm(item.id)}
      >
        {item.isMuted && (
          <Text style={FabFlatListStyle.backText}>{t("actions.unmute")}</Text>
        )}
        {!item.isMuted && (
          <Text style={FabFlatListStyle.backText}>{t("actions.mute")}</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          FabFlatListStyle.backRightBtn,
          FabFlatListStyle.backRightBtnLeft,
          FabFlatListStyle.backBtn,
        ]}
        onPress={() =>
          navigation.navigate(R.ADD_ALARM, {
            ...item,
          })
        }
      >
        <Text style={FabFlatListStyle.backText}>{t("actions.edit")}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          FabFlatListStyle.backRightBtn,
          FabFlatListStyle.backRightBtnRight,
          FabFlatListStyle.backBtn,
        ]}
        onPress={() => {
          setShowConfirmation(true);
        }}
      >
        <Text style={FabFlatListStyle.backText}>{t("actions.delete")}</Text>
      </TouchableOpacity>
      <ConfirmDialog
        title="Confirmation"
        text="Are you sure to delete this alarm?"
        isVisible={showConfirmation}
        onAccept={() => {
          setShowConfirmation(false);
          reduxDeleteAlarm(item.id);
        }}
        onCancel={() => setShowConfirmation(false)}
      />
    </View>
  );

  const lastItemVisible = ({ viewableItems }) => {
    const count = Object.values(items).length;

    // If last viewable item is the last of the list
    if (viewableItems.length < count) {
      if (
        viewableItems[viewableItems.length - 1].item.id === items[count - 1].id
      ) {
        setShowFab(false);
      } else {
        setShowFab(true);
      }
    } else {
      setShowFab(true);
    }
  };

  return (
    <View style={FabFlatListStyle.container}>
      {items.length > 0 && (
        <SwipeListView
          data={items}
          //onViewableItemsChanged={lastItemVisible}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={90}
          stopLeftSwipe={100}
          rightOpenValue={-170}
          stopRightSwipe={-180}
          previewRowKey={"0"}
          previewOpenValue={-40}
          previewOpenDelay={3000}
        />
      )}
      {items.length === 0 && <ListEmpty />}
      {!disableFab && showFab && (
        <FAB
          style={FabFlatListStyle.fab}
          icon={fabIcon as IconSource}
          label={fabLabel}
          onPress={onFabPress}
        />
      )}
    </View>
  );
};

const mapDispatchToProps = {
  reduxDeleteAlarm: deleteAlarm,
  reduxToggleMuteAlarm: toggleMuteAlarm,
};

const enhance = compose(
  connect(null, mapDispatchToProps),
  withSort,
  withBottomElement,
  withTranslation()
);

export default enhance(FabFlatList);
