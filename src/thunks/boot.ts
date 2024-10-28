import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCustomers } from "./fetchCustomers";
import { Alert } from "react-native";

export const boot = createAsyncThunk(
  "boot",
  async (_data: undefined, { dispatch, rejectWithValue }) => {
    try {
      dispatch(fetchCustomers());
    } catch (e: any) {
      Alert.alert("Boot action failed", e.message || "");
      return rejectWithValue(e);
    }
  }
);
