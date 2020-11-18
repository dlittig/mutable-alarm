import React from "react";

import Routes from "../../routes";
import BaseView from "../../components/BaseView";
import FabFlatList from "../../components/FabFlatList";
import { deleteAlarm } from "../../store/actions";

import { compose } from "redux";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

const AllAlarms = ({ alarms }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const items = Object.values(alarms).filter((alarm) => !alarm.isMuted);

  return (
    <BaseView center={false} color="background" margin="none">
      <FabFlatList
        navigation={navigation}
        items={items}
        fabIcon="plus"
        fabLabel={t("actions.add")}
        onFabPress={() => navigation.navigate(Routes.ADD_ALARM)}
      />
    </BaseView>
  );
};

AllAlarms.navigationOptions = {
  title: "All alarms",
  headerTitle: "Alarms",
};

const mapStateToProps = ({ alarmsReducer: { alarms } }) => ({ alarms });

const mapDispatchToProps = {
  reduxDeleteAlarm: deleteAlarm,
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhance(AllAlarms);
