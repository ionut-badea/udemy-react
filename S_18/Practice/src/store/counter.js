import { createSlice } from "@reduxjs/toolkit";

const counterInitialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  initialState: counterInitialState,
  name: "counter",
  reducers: {
    decrement: (state, action) => {
      state.counter -= action.payload;
    },
    increment: (state, action) => {
      state.counter += action.payload;
    },
    toggle: state => {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
