import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDisplayed: false,
  items: [],
};

const slice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    add: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (!item) {
        state.items.push(action.payload);
      } else {
        item.quantity++;
      }
    },
    remove: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item.quantity === 1) {
        state.items.splice(state.items.indexOf(item), 1);
      } else {
        item.quantity--;
      }
    },
    toggle: state => {
      state.isDisplayed = !state.isDisplayed;
    },
  },
});

const url =
  "https://powerful-tree-300811-default-rtdb.europe-west1.firebasedatabase.app/cart.json";
export const actions = {
  add: item => {
    return async dispatch => {};
  },
  getCart: () => {
    return async dispatch => {
      const res = await fetch(url);
      if (!res.ok) {
        console.log("Failed to get.");
        return;
      }
      const data = await res.json();
      // dispatch(slice.actions.add());
    };
  },
  remove: id => {
    return dispatch => {};
  },
};

export const cartActions = slice.actions;
export default slice.reducer;
