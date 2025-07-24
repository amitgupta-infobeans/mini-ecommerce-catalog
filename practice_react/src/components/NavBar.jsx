import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <div className='flex justify-center items-center gap-2 text-blue-500'>
                <Link className='bg-gray-300 px-2 py-1 hover:bg-gray-500 hover:text-white' to="/">Home</Link>
                <Link  className='bg-gray-300 px-2 py-1 hover:bg-gray-500 hover:text-white' to="/todo-app">Todo App</Link>
                <Link  className='bg-gray-300 px-2 py-1 hover:bg-gray-500 hover:text-white' to="/react-hook-form">React Hook Form</Link>
                <Link  className='bg-gray-300 px-2 py-1 hover:bg-gray-500 hover:text-white' to="/use-form-status-hook">useFormStatus hook</Link>
                <Link  className='bg-gray-300 px-2 py-1 hover:bg-gray-500 hover:text-white' to="/use-memo">useMemo</Link>
                <Link  className='bg-gray-300 px-2 py-1 hover:bg-gray-500 hover:text-white' to="/usecallback">useCallback</Link>
                <Link  className='bg-gray-300 px-2 py-1 hover:bg-gray-500 hover:text-white' to="/blog-site">BlogSite</Link>
                <Link  className='bg-gray-300 px-2 py-1 hover:bg-gray-500 hover:text-white' to="/react-query-demo">ReactQuery</Link>
            </div>
            <Outlet />
        </>
    )
}

export default NavBar