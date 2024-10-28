import { View, FlatList, StyleSheet, RefreshControl } from "react-native";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import getUsers from "../selectors/getCustomers";
import SectionTitle from "./SectionTitle";
import Customer from "./Customer";
import { useState } from "react";
import { fetchCustomers } from "../thunks/fetchCustomers";
import lodash from "lodash";

const CustomerList = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(getUsers);
  const role = useAppSelector((state) => state.role);
  const [refreshing, setRefreshing] = useState(false);

  const refresh = async () => {
    setRefreshing(true);
    dispatch(fetchCustomers());
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <SectionTitle title={`${lodash.upperFirst(role.toLowerCase())} Users`} />
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Customer customer={item} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }
      />
    </View>
  );
};

export default CustomerList;

const styles = StyleSheet.create({
  container: { margin: 10, padding: 10, flex: 1 },
});
