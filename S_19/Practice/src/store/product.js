import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      description: "Fresh fishes",
      id: 1,
      price: 13.11,
      title: "Fish",
    },
    {
      description: "Fresh oranges",
      id: 2,
      price: 14.51,
      title: "Orange",
    },
    {
      description: "Fresh avocado",
      id: 3,
      price: 1.89,
      title: "Avocado",
    },
  ],
};

const slice = createSlice({
  initialState,
  name: "product",
  reducers: {},
});

export const productActions = slice.actions;
export default slice.reducer;
