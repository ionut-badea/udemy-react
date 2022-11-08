import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  isAuth: false,
};

const authSlice = createSlice({
  initialState: authInitialState,
  name: "auth",
  reducers: {
    login: state => {
      state.isAuth = true;
    },
    logout: state => {
      state.isAuth = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
