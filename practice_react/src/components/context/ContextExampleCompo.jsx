import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'

const ContextExampleCompo = () => {

    const { name } = useContext(GlobalContext)
    return (
        <>
            <h1 className='text-3xl'>Context Example</h1>
            <div>Name: {name}</div>

        </>
    )
}

export default ContextExampleCompo