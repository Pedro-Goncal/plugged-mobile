import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedDispensery: null,
};

export const dispenseriesSlice = createSlice({
  name: "dispenseries",
  initialState,
  reducers: {
    selectDispensery: (state, action) => {
      state.selectedDispensery = action.payload;
    },
  },
});

export const { selectDispensery } = dispenseriesSlice.actions;
export default dispenseriesSlice.reducer;
