import React, { useCallback, useEffect, useState } from 'react'
import ToDoItems from './ToDoItems'
import { CircularProgress, Modal, Box, Typography } from "@mui/material"

const TodoListComponent = () => {

    const [todoList, setToDoList] = useState([])
    const [loading, setLoading] = useState(false)
    const [isModelOpen, setIsModelOpen] = useState(false)
    const [selectedTodo, setSelectedTodo] = useState(null)

    const getToDoList = async () => {

        try {
            setLoading(true);
            const apiResponse = await fetch("https://dummyjson.com/todos")
            const data = await apiResponse.json()

            if (data?.todos && data?.todos?.length > 0) {

                setToDoList(data.todos)
            }
            setLoading(false)

        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false);
        }
    }

    const onDelete = useCallback((id) => {
        let bolVal = confirm("Are you Sure, you want to delete?")
        if (!bolVal) return
        setToDoList((prev) => prev.filter((oneItem) => oneItem.id !== id))
    }, [])

    const onEdit = useCallback((todo) => {
        setIsModelOpen((p) => !p)
        setSelectedTodo(todo)
    }, [])

    useEffect(() => {
        getToDoList();
    }, [])

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };


    const updateOneTodo = () => {
        setToDoList((prev) =>
            prev.map((oneItem) =>
                oneItem.id === selectedTodo.id ? { ...oneItem, ...selectedTodo } : oneItem
            )
        );
        setIsModelOpen(false)
        setSelectedTodo(null)
    }

    return (
        <>
            {(loading) && <CircularProgress sx={{ display: "flex", justifyItems: "center", alignItems: "center", margin: "auto" }} disableShrink />}
            <div className='flex flex-col justify-start items-start md:w-[800px] sm:w-[300px] h-[500px] '>
                {(todoList && todoList.length > 0) && todoList.map((oneItem) => {
                    return <ToDoItems oneItem={oneItem} key={oneItem.id} onEdit={onEdit} onDelete={onDelete} />
                })}
            </div>

            {/* Modal */}
            {isModelOpen && <Modal
                open={isModelOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h6" component="h2">
                        <span>Update Todo:</span>
                        <input className='p-2 border w-full' type="text" value={selectedTodo?.todo} onChange={(e) => setSelectedTodo({ ...selectedTodo, todo: e.target.value })} />
                    </Typography>
                    <Typography variant="h6" component="h2">
                        <span>Status</span>
                        <label>
                            <input type="radio" name='status' className=' m-2 ' value="completed" checked={selectedTodo?.completed === true} onChange={(e) => setSelectedTodo({ ...selectedTodo, completed: true })} />Completed
                        </label>
                        <label>
                            <input type="radio" name='status' className=' m-2 ' value="inprogress" checked={selectedTodo?.completed === false} onChange={(e) => setSelectedTodo({ ...selectedTodo, completed: false })} />In Progress
                        </label>

                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        <button className='border bg-black p-2 text-white' onClick={updateOneTodo}>Update</button>
                        <button className='border bg-black p-2 text-white' onClick={() => setIsModelOpen(!isModelOpen)}>Cancel</button>
                    </Typography>
                </Box>
            </Modal>}
        </>
    )
}

export default TodoListComponent