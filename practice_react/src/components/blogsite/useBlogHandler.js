// src/hooks/useBlogHandler.js
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleInputChange,
  addBlog,
  removeBlog,
  clearData,
  editBlog,
  updateEditedBlog,
} from '../store/slice/blogSlice';

export const useBlogHandler = () => {
  const dispatch = useDispatch();
  const { blog, blogData, currentEditBlog } = useSelector((store) => store.blogSite);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    dispatch(handleInputChange({ [e.target.name]: e.target.value }));
  };

  const handleSubmitBlog = (e) => {
    e.preventDefault();
    if (blogData?.title.trim() !== '' && blogData?.description.trim() !== '') {
      if (currentEditBlog !== null) dispatch(updateEditedBlog());
      else dispatch(addBlog());

      if (currentEditBlog !== null) dispatch(editBlog(null));
      dispatch(clearData());
    }
  };

  const onEditBlog = (editedBlog) => {
    dispatch(editBlog(editedBlog?.id));
    dispatch(
      handleInputChange({
        title: editedBlog?.title,
        description: editedBlog?.description,
      })
    );
  };

  const clearAllData = () => {
    dispatch(handleInputChange({ title: '', description: '' }));
    dispatch(editBlog(null));
  };

  const onDeleteBlog = (id) => {
    dispatch(removeBlog(id));
  };

  return {
    loading,
    blog,
    blogData,
    currentEditBlog,
    handleChange,
    handleSubmitBlog,
    onEditBlog,
    clearAllData,
    onDeleteBlog,
  };
};
