import React, { useReducer, useState } from 'react'

const UseReducerHookComponent = () => {

    const reducer = (data, action) => {
        console.log(action)
        return { ...data, [action.name]: action.value }
    }

    const [state, dispatch] = useReducer(reducer, {})
    const getData = (e) => {
        e.preventDefault();
        console.log(state)
    }
    return (
        <><h1>useReducer hook Example</h1>
            <form onSubmit={getData} >
                <p>
                    <span>Name</span>:<input name='username' onChange={(e) => dispatch({ name: "username", value: e.target.value })} className='m-2 p-2 border ' type='text' />
                </p>
                <p>
                    <span>Email</span>:<input name='email' className='m-2  p-2 border ' onChange={(e) => dispatch({ name: "email", value: e.target.value })} type='email' />
                </p>
                <p>
                    <span>City</span>:<input name='city' className='m-2  p-2 border ' onChange={(e) => dispatch({ name: "city", value: e.target.value })} type='text' />
                </p>
                <p><button className='bg-black text-white p-2' onSubmit={getData}>submit</button></p>
            </form>

        </>
    )
}

export default UseReducerHookComponent