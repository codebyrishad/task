import { configureStore } from "@reduxjs/toolkit";
import firstReducer from "./componenets/firstSlice";

const store = configureStore({
  reducer: {
    first: firstReducer,
  },
});

export default store;
