import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const role = createSlice({
  name: "role",
  initialState: "ADMIN",
  reducers: {
    setRole(state, action: PayloadAction<string>) {
      return action.payload;
    },
  },
});

export const { setRole } = role.actions;

export default role.reducer;
