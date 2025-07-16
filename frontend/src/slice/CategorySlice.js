import { createSlice } from "@reduxjs/toolkit";

const CategoryrSlice = createSlice({
  name: "category",
  initialState:[],
  reducers: {
    setCategory: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCategory } = CategoryrSlice.actions;

export default CategoryrSlice.reducer;
