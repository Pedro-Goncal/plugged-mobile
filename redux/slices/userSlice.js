import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  username: null,
  userEmail: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
