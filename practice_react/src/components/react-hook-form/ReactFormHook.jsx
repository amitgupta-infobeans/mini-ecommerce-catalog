import React, { useState } from 'react'
import { useForm } from "react-hook-form"

const ReactFormHook = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formData, setFormData] = useState(null)
    const getData = (data) => {
        console.log("form data", data)
        setFormData(data);

    }
    return <>
        <div className='flex flex-col m-2 justify-center items-center'>
            <h1 className='font-bold text-2xl mb-2 p-2'>React Hook Form Example</h1>
            <form onSubmit={handleSubmit(getData)}>
                <input className='border p-2' placeholder='Enter name' type="text" name="name" {...register("name", { required: "name is required field" })} />
                <p>{errors.name && <span className='text-red-600'>{errors.name.message}</span>}</p>
                <input type="text" className='border p-2 mt-5' placeholder="Enter email" name="email" {...register("email", { required: "email is required field" })} />
                <p>{errors.email && <span className='text-red-600'>{errors.email.message}</span>}</p>

                <button className='px-2 py-1 bg-black text-white mt-5' type='submit'>Save Data</button>
            </form>

        </div>
        <div className='flex flex-col justify-center items-center m-2 p-2'>

            {formData && <><h3 className='text-xl'>Name: {formData.name}</h3> <h3 className='text-xl'>Email: {formData.email}</h3></>}
        </div>

    </>
}

export default ReactFormHook