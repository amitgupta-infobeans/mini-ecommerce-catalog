import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./slice/blogSlice";

const store = configureStore({
  reducer: {
    blogSite: blogReducer,
  },
});

export default store;
