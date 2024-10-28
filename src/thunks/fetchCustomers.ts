import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient, GraphQLResult } from "aws-amplify/data";
import { ListZellerCustomers } from "../queries/listCustomers";
import { setCustomers } from "../reducers/customers";
import { Alert } from "react-native";
import getFilters from "../selectors/getFilters";

export const fetchCustomers = createAsyncThunk(
  "fetchCustomers",
  async (_data: undefined, { dispatch, getState, rejectWithValue }) => {
    try {
      const filter = getFilters(getState() as AppState);
      const client = generateClient();
      const { data: response } = (await client.graphql({
        query: ListZellerCustomers,
        variables: {
          ...filter,
        },
      })) as GraphQLResult<{
        listZellerCustomers: CustomerConnection;
      }>;
      const { listZellerCustomers } = response;
      dispatch(setCustomers(listZellerCustomers.items));
    } catch (e: any) {
      Alert.alert("Fetch customers action failed", e.message || "");
      return rejectWithValue(e);
    }
  }
);
