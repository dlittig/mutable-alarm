import React, { FC, ReactNode, useState } from "react";

import { FAB, Text } from "react-native-paper";
import { View, TouchableOpacity } from "react-native";

import { SwipeListView } from "react-native-swipe-list-view";
import { compose } from "redux";
import { withSort } from "../../enhancers/WithSort";
import { connect } from "react-redux";
import { deleteAlarm, toggleMuteAlarm } from "../../store/actions";
import { IAlarm } from "../../models/Alarm";
import { FabFlatListStyle } from "./FabFlatList.style";
import Alarm from "../Alarm";
import ListEmpty from "../ListEmpty";
import ConfirmDialog from "../Dialogs/ConfirmDialog";
import R from "../../routes";
import { withTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/core";
import { IconSource } from "react-native-paper/lib/typescript/src/components/Icon";
import MuteDialog from "../Dialogs/MuteDialog";
import ThemeProvider from "../../provider/ThemeProvider/ThemeProvider";

interface IFabFlatListProps {
  items: Array<IAlarm>;
  onFabPress: () => any;
  reduxDeleteAlarm: (number) => any;
  reduxToggleMuteAlarm: (number, boolean, string) => any;
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
  const [deleteTarget, setDeleteTarget] = useState<null | IAlarm>(null);
  const [muteTarget, setMuteTarget] = useState<null | IAlarm>(null);

  const renderItem = ({ item }) =>
    !item.isMuted ? (
      <View>
        <Alarm.Active
          id={item.id}
          isMuted={item.isMuted}
          time={item.time}
          name={item.name}
          weekdays={item.weekdays}
          isSnoozed={item.isSnoozed}
          mutedUntil={item.mutedUntil}
          scheduleMode={item.scheduleMode}
          scheduleValue={item.scheduleValue}
        />
      </View>
    ) : (
      <View>
        <Alarm.Muted
          id={item.id}
          isMuted={item.isMuted}
          time={item.time}
          name={item.name}
          weekdays={item.weekdays}
          isSnoozed={item.isSnoozed}
          mutedUntil={item.mutedUntil}
          scheduleMode={item.scheduleMode}
          scheduleValue={item.scheduleValue}
        />
      </View>
    );

  const renderHiddenItem = ({ item }) => (
    <ThemeProvider.Consumer>
      {(theme) => (
        <View style={FabFlatListStyle.rowBack}>
          <TouchableOpacity
            style={[
              FabFlatListStyle.backBtn,
              FabFlatListStyle.backRightBtn,
              FabFlatListStyle[`${theme}Border`],
            ]}
            onPress={() => {
              if (item.isMuted === true)
                reduxToggleMuteAlarm(item.id, null, null);
              else setMuteTarget(item);
            }}
          >
            {item.isMuted && (
              <Text style={FabFlatListStyle[`${theme}Text`]}>
                {t("actions.unmute")}
              </Text>
            )}
            {!item.isMuted && (
              <Text style={FabFlatListStyle[`${theme}Text`]}>
                {t("actions.mute")}
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              FabFlatListStyle.backRightBtn,
              FabFlatListStyle.backRightBtnLeft,
              FabFlatListStyle.backBtn,
              FabFlatListStyle[`${theme}Border`],
            ]}
            onPress={() =>
              navigation.navigate(R.ADD_ALARM, {
                ...item,
              })
            }
          >
            <Text style={FabFlatListStyle[`${theme}Text`]}>
              {t("actions.edit")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              FabFlatListStyle.backRightBtn,
              FabFlatListStyle.backRightBtnRight,
              FabFlatListStyle.backBtn,
              FabFlatListStyle[`${theme}Border`],
            ]}
            onPress={() => setDeleteTarget(item)}
          >
            <Text style={FabFlatListStyle[`${theme}Text`]}>
              {t("actions.delete")}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </ThemeProvider.Consumer>
  );

  return (
    <View style={FabFlatListStyle.container}>
      <ConfirmDialog
        title="Confirmation"
        text="Are you sure to delete this alarm?"
        isVisible={deleteTarget !== null}
        onAccept={() => {
          reduxDeleteAlarm(deleteTarget.id);
          setDeleteTarget(null);
        }}
        onCancel={() => setDeleteTarget(null)}
      />

      <MuteDialog
        isVisible={muteTarget !== null}
        onAccept={(muteIndefinitely, daysToMute) => {
          reduxToggleMuteAlarm(muteTarget.id, muteIndefinitely, daysToMute);
          setMuteTarget(null);
        }}
        onCancel={() => setMuteTarget(null)}
      />

      {items.length > 0 && (
        <SwipeListView
          data={items}
          useFlatList={true}
          ListFooterComponent={() => (
            <View style={FabFlatListStyle.biggerHeight}></View>
          )}
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
      {!disableFab && (
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
  withTranslation()
);

export default enhance(FabFlatList);
