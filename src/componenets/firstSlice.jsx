import { createSlice } from "@reduxjs/toolkit";

const firstSlice = createSlice({
  name: "showdata",
  initialState: {
    value: "",
  },
  reducers: {
    storeValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { storeValue } = firstSlice.actions;
export default firstSlice.reducer;
