import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleInputChange, addBlog, removeBlog, clearData, editBlog, updateEditedBlog } from '../store/slice/blogSlice'
import { Button } from '@mui/material'
import Loader from '../Loader'


const MyBlogSite = () => {

    const { blog, blogData, currentEditBlog } = useSelector((store) => store.blogSite)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let timer = setTimeout(() => {
            setLoading(false)
        }, 800)
        return () => clearTimeout(timer)
    }, [])

    const handleSubmitBlog = (e) => {
        e.preventDefault();
        if (blogData?.title.trim() !== "" && blogData?.description.trim() !== "") {
            if (currentEditBlog !== null) dispatch(updateEditedBlog())
            else dispatch(addBlog())

            if (currentEditBlog !== null) dispatch(editBlog(null))
            dispatch(clearData())
        }
    }

    const onEditBlog = (editedBlog) => {
        dispatch(editBlog(editedBlog?.id));
        dispatch(handleInputChange({ title: editedBlog?.title, description: editedBlog?.description }))
    }

    const clearAllData = () => {
        dispatch(handleInputChange({ title: "", description: "" }))
        dispatch(editBlog(null))
    }

    if (loading) return <Loader />

    return (
        <>
            <h1 className='mt-5 underline text-2xl mb-2 '>My Blog Site</h1>
            <div className='p-5 bg-gray-200 shadow-xl md:w-[800px] sm:w-[500px] max-h-[400px]'>
                <form onSubmit={handleSubmitBlog} className=' flex sm:flex-col md:flex-row items-center justify-center gap-2'>
                    <input type="text" placeholder='Enter title..' className='m-1 border p-3' name="title" value={blogData.title} onChange={(e) => dispatch(handleInputChange({ [e.target.name]: e.target.value }))} />
                    <input type="text" placeholder='Enter description..' className='border p-3 m-1' name="description" value={blogData.description} onChange={(e) => dispatch(handleInputChange({ [e.target.name]: e.target.value }))} />
                    <button className='p-3 bg-black text-white m-1'>{currentEditBlog ? "Edit Blog" : "Add Blog"}</button>
                    {currentEditBlog && <button onClick={clearAllData} className='p-3 bg-black text-white m-1'>Cancel</button>}
                </form>
            </div>


            {blog && blog.length > 0 && <div className='md:w-[800px] sm:w-[500px] max-h-[400px] p-2 mt-4 bg-gray-500 flex flex-col justify-between  overflow-y-auto items-start gap-2'>

                {blog.map((oneBlog) => {
                    return <div key={oneBlog.id} className='flex bg-gray-200 p-2 w-full justify-between items-start mb-2'>
                        <div className='flex flex-col items-start justify-start '>
                            <h3>Title:{oneBlog.title}</h3>
                            <p className='p-1'>Description: {oneBlog.description}</p>

                            <div className='flex gap-2'>
                                <Button onClick={() => onEditBlog(oneBlog)} sx={{ background: "orange", padding: "2px", color: "white", }} fullWidth={false}>Edit</Button>
                                <Button onClick={() => dispatch(removeBlog(oneBlog.id))} sx={{ background: "red", color: "white", padding: "2px", marginLeft: "5px" }} fullWidth={false}>Delete</Button>
                            </div>
                        </div>

                    </div>
                })}

            </div>}
        </>

    )
}

export default MyBlogSite;