import React from 'react'
import { Routes, Route } from "react-router-dom"
import TodoListComponent from '../todo_app/TodoListComponent'
import App from '../../App'
const ReactRouterDomExample = () => {
    return (<>
        <div>Flow of React Router Dom</div>
        <Routes >
            <Route path='/' />
            <Route path='todo-app' element={<TodoListComponent />} />
        </Routes>
    </>
    )
}

export default ReactRouterDomExample