import React from 'react'
import { Button } from "@mui/material"

const ToDoItems = ({ oneItem, onEdit, onDelete }) => {
    const { todo: title, id, completed, } = oneItem;
    return (
        <div className='md:w-600px sm:w-full p-2 m-2 border bg-gray-200 flex justify-between items-center gap-2'>
            <div className=''>
                <h3>{title}</h3>
                [<span style={{ color: completed ? "green" : "red" }}>{completed ? "Done" : "In Progress"}</span>]
            </div>
            <div className='flex flex-col gap-2'>
                <Button onClick={() => onEdit(oneItem)} sx={{ background: "gray", padding: "2px", color: "white", }} fullWidth={false}>Edit</Button>
                <Button onClick={() => onDelete(id)} sx={{ background: "orange", color: "white", padding: "2px", marginLeft: "5px" }} fullWidth={false}>Delete</Button>
            </div>

        </div>
    )
}

export default React.memo(ToDoItems)  // if you are using usecallback then you don't need to check prev and next props like below conditions...

// export default React.memo(ToDoItems, (prev, next) => (prev.oneItem.id === next.oneItem.id && prev.oneItem.completed === next.oneItem.completed && prev.oneItem.todo === next.oneItem.todo))

