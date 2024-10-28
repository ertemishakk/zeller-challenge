import { createListenerMiddleware } from "@reduxjs/toolkit";
import { setSearch } from "../reducers/search";
import { fetchCustomers } from "../thunks/fetchCustomers";
import { setRole } from "../reducers/role";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: setSearch,
  effect: async (action, { dispatch }) => {
    dispatch(fetchCustomers());
  },
});

listenerMiddleware.startListening({
  actionCreator: setRole,
  effect: async (action, { dispatch }) => {
    dispatch(fetchCustomers());
  },
});
