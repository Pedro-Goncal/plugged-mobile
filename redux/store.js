import { configureStore } from "@reduxjs/toolkit";

//Reducers
import userSlice from "./slices/userSlice";
import dispenseriesSlice from "./slices/dispenseriesSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    dispenseries: dispenseriesSlice,
  },
});

export default store;
