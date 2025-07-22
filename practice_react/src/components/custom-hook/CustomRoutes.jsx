import TodoListComponent from "../todo_app/TodoListComponent"
import ReactFormHook from "../react-hook-form/ReactFormHook"
import { useRoutes } from 'react-router-dom'
import NavBar from "../NavBar"
import {UseFormStatusHook} from "../useFormStatus-hook/UseFormStatus"

const CustomRoutes = () => {
    const elements = useRoutes([
        {
            path: "/",
            element: <NavBar />,
            children: [{
                path: "todo-app",
                element: <TodoListComponent />
            },
            {
                path:"react-hook-form",
                element:<ReactFormHook />
            },
             {
                path:"use-form-status-hook",
                element:<UseFormStatusHook />
            },
        ]
        }
    ])

    return elements
}

export default CustomRoutes;