import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <div className='flex justify-center items-center gap-2 underline text-blue-500'>
                <Link to="/">Home</Link>
                <Link to="/todo-app">Todo App</Link>
                <Link to="/react-hook-form">React Hook Form</Link>
                <Link to="/use-form-status-hook">useFormStatus hook</Link>
            </div>
            <Outlet />
        </>
    )
}

export default NavBar