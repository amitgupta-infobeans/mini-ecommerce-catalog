import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialBlog = localStorage.getItem("blog")
  ? JSON.parse(localStorage.getItem("blog"))
  : [];

const blogReducer = createSlice({
  name: "blogSite",
  initialState: {
    blog: initialBlog.length > 0 ? initialBlog.reverse() : initialBlog,
    blogData: {
      title: "",
      description: "",
    },
    currentEditBlog: null,
  },
  reducers: {
    addBlog: (state, action) => {
      let cpyData = { ...state.blogData, id: nanoid() };
      state.blog.push(cpyData);
      if (state.blog.length > 0) {
        state.blog.reverse();
      }
      localStorage.setItem("blog", JSON.stringify(state.blog));
    },
    removeBlog: (state, action) => {
      state.blog = state.blog.filter(
        (oneblog) => oneblog.id !== action.payload
      );
      localStorage.setItem("blog", JSON.stringify(state.blog));
    },
    handleInputChange: (state, action) => {
      let cpyData = { ...state.blogData, ...action.payload };
      state.blogData = cpyData;
    },
    clearData: (state, action) => {
      let clearedData = { title: "", description: "" };
      state.blogData = clearedData;
    },
    editBlog: (state, action) => {
      state.currentEditBlog = action.payload;
    },
    updateEditedBlog: (state, action) => {
      let cpyData = [...state.blog];
      let editedBlogIndex = cpyData.findIndex(
        (oneblog) => oneblog.id === state.currentEditBlog
      );
      cpyData[editedBlogIndex] = {
        ...cpyData[editedBlogIndex],
        ...state.blogData,
      };

      state.blog = cpyData;
    },
  },
});

export const {
  addBlog,
  handleInputChange,
  removeBlog,
  clearData,
  editBlog,
  updateEditedBlog,
} = blogReducer.actions;

export default blogReducer.reducer;
