import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const search = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      return action.payload;
    },
  },
});

export const { setSearch } = search.actions;

export default search.reducer;
