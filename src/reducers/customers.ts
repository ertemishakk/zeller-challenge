import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export const customers = createSlice({
  name: 'customers',
  initialState: [] as Customer[],
  reducers: {
    setCustomers(state, action: PayloadAction<Customer[]>) {
      return action.payload;
    },
  },
});

export const {setCustomers} = customers.actions;

export default customers.reducer;
